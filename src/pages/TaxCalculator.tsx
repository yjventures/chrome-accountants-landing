import { useState } from 'react';
import { DollarSign, Info } from 'lucide-react';
import Button from '@/components/ui/Button';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';


const META = {
  title: "Australian Tax Calculator | Chrome Accountants",
  description: "Use Chrome Accountants' free Australian tax calculator to instantly estimate your personal or business tax refund.",
  keywords: "Australian tax calculator, business tax calculator, personal tax refund",
  canonical: "https://www.chromeaccountants.com.au/australian-tax-calculator",
  h1: "Australian Tax Calculator",
  // h2: "Estimate Your Taxes Instantly",
  firstSentence: "Our Australian Tax Calculator provides quick and reliable estimates for individuals and businesses.",
  ogImage: "https://www.chromeaccountants.com.au/images/og-ca.png"
};
// --- TAX TABLES (2024–25, residents) ---
const TAX_BRACKETS = [
  { min: 0, max: 18200, rate: 0, base: 0 },
  { min: 18201, max: 45000, rate: 0.16, base: 0 },
  { min: 45001, max: 135000, rate: 0.30, base: 4288 },
  { min: 135001, max: 190000, rate: 0.37, base: 31288 },
  { min: 190001, max: Infinity, rate: 0.45, base: 51638 },
];

// Medicare Levy
const MEDICARE_LEVY_RATE = 0.02;
const MEDICARE_LEVY_THRESHOLD = 26000; // Singles threshold FY24-25

// HELP/HECS Repayment thresholds 2024–25 (official ATO)
const HELP_THRESHOLDS = [
  { min: 0, max: 51549, rate: 0.0 },
  { min: 51550, max: 59518, rate: 0.01 },
  { min: 59519, max: 63089, rate: 0.02 },
  { min: 63090, max: 66875, rate: 0.025 },
  { min: 66876, max: 70888, rate: 0.03 },
  { min: 70889, max: 75140, rate: 0.035 },
  { min: 75141, max: 79649, rate: 0.04 },
  { min: 79650, max: 84429, rate: 0.045 },
  { min: 84430, max: 89494, rate: 0.05 },
  { min: 89495, max: 94865, rate: 0.055 },
  { min: 94866, max: 100557, rate: 0.06 },
  { min: 100558, max: 106590, rate: 0.065 },
  { min: 106591, max: 112983, rate: 0.07 },
  { min: 112984, max: 119755, rate: 0.075 },
  { min: 119756, max: 126926, rate: 0.08 },
  { min: 126927, max: 134519, rate: 0.085 },
  { min: 134520, max: 142554, rate: 0.09 },
  { min: 142555, max: 151056, rate: 0.095 },
  { min: 151057, max: Infinity, rate: 0.10 },
];

// Low Income Tax Offset (LITO) – official
function calcLITO(taxable: number): number {
  if (taxable <= 37500) return 700;
  if (taxable <= 45000) return 700 - ((taxable - 37500) * 0.05);
  if (taxable <= 66667) return 325 - ((taxable - 45000) * 0.015);
  return 0;
}

const TaxCalculator = () => {
  // Main fields
  const [grossIncome, setGrossIncome] = useState('');
  const [taxWithheld, setTaxWithheld] = useState('');
  // Advanced fields (super/fringe: reportable only)
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [superContributions, setSuperContributions] = useState('');
  const [fringeBenefits, setFringeBenefits] = useState('');
  const [otherIncome, setOtherIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [hecsBalance, setHecsBalance] = useState('');
  // Result
  const [refund, setRefund] = useState<null | number>(null);

  // Calculation logic per ATO 2024–25
  const calculateTax = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Taxable Income (for standard tax/medicare/LITO)
    const gross = Number(grossIncome || 0);
    const other = Number(otherIncome || 0);
    const deduction = Number(deductions || 0);
    const taxable = Math.max(0, gross + other - deduction);

    // 2. Base tax from brackets
    let baseTax = 0;
    for (const bracket of TAX_BRACKETS) {
      if (taxable >= bracket.min && taxable <= bracket.max) {
        baseTax = bracket.base + (taxable - bracket.min + (bracket.min > 0 ? 1 : 0)) * bracket.rate;
        break;
      }
    }
    baseTax = Math.round(baseTax);

    // 3. Medicare Levy (only if income above threshold)
    const medicareLevy =
      taxable > MEDICARE_LEVY_THRESHOLD ? Math.round(taxable * MEDICARE_LEVY_RATE) : 0;

    // 4. HELP/HECS repayment
    // HELP "repayment income" = taxable + reportable super + reportable fringe
    const superReportable = Number(superContributions || 0);
    const fringeReportable = Number(fringeBenefits || 0);
    const helpRepaymentIncome = taxable + superReportable + fringeReportable;

    let helpRepayment = 0;
    if (hecsBalance && Number(hecsBalance) > 0) {
      for (const t of HELP_THRESHOLDS) {
        if (helpRepaymentIncome >= t.min && helpRepaymentIncome <= t.max) {
          helpRepayment = Math.round(helpRepaymentIncome * t.rate);
          break;
        }
      }
    }

    // 5. LITO (Low Income Tax Offset)
    const lito = Math.round(calcLITO(taxable));

    // 6. Total Tax Payable
    let totalTax = baseTax + medicareLevy + helpRepayment - lito;
    if (totalTax < 0) totalTax = 0;

    // 7. Compare to Tax Withheld
    const withheld = Number(taxWithheld || 0);
    const refundCalc = withheld - totalTax;

    setRefund(refundCalc);
  };

  // Info icon component
  const InfoIcon = () => (
    <Info className="inline h-4 w-4 text-ca-mango ml-1" aria-hidden="true" />
  );

  return (
    <>
      <Helmet>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <meta name="keywords" content={META.keywords} />
        <link rel="canonical" href={META.canonical} />

        {/* Social (optional but recommended) */}
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:url" content={META.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={META.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={META.ogImage} />
      </Helmet>
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Australian Tax Calculator
            </h1>
            <p className="text-xl lg:text-2xl text-ca-silver leading-relaxed">
              Instantly estimate your personal or business tax refund for the current financial year.
              Enter your details below for a fast, accurate projection - 
            </p>
            <span className="text-xl lg:text-2xl text-ca-mango"><b>Powered by Chrome Accountants.</b></span>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <div className="bg-[#f6f9f5] py-12 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl px-10 py-10">
          <div className="flex items-center mb-8">
            <DollarSign className="bg-ca-mango text-white h-8 w-8 rounded mr-4" />
            <h1 className="text-3xl lg:text-4xl font-extrabold text-ca-blue">Tax Calculator</h1>
          </div>
          <form onSubmit={calculateTax} autoComplete="off">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7 mb-2">
              <div>
                <label className="font-semibold block mb-2 text-ca-blue">
                  Your gross annual income before tax <span className="text-red-600">*</span>
                  {InfoIcon()}
                </label>
                <input
                  type="number"
                  min={0}
                  value={grossIncome}
                  onChange={e => setGrossIncome(e.target.value)}
                  placeholder="100000$"
                  className="w-full border border-gray-200 rounded-xl py-4 px-4 text-lg bg-[#f6f9f5] focus:border-ca-mango focus:outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="font-semibold block mb-2 text-ca-blue">
                  Your total tax withheld <span className="text-red-600">*</span>
                  {InfoIcon()}
                </label>
                <input
                  type="number"
                  min={0}
                  value={taxWithheld}
                  onChange={e => setTaxWithheld(e.target.value)}
                  placeholder="20000$"
                  className="w-full border border-gray-200 rounded-xl py-4 px-4 text-lg bg-[#f6f9f5] focus:border-ca-mango focus:outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Advanced Options Toggle */}
            <button
              type="button"
              onClick={() => setShowAdvanced((s) => !s)}
              className="font-semibold text-ca-blue hover:text-ca-mango mt-4 mb-2 flex items-center focus:outline-none"
              aria-expanded={showAdvanced}
              aria-controls="advanced-options"
            >
              {showAdvanced ? 'Hide' : 'Advanced options'}
              <span className="ml-2 text-xl">{showAdvanced ? '−' : '+'}</span>
            </button>

            {showAdvanced && (
              <div
                id="advanced-options"
                className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7 mb-2"
              >
                <div>
                  <label className="font-semibold block mb-2 text-ca-blue">
                    Reportable employer super contributions {InfoIcon()}
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={superContributions}
                    onChange={e => setSuperContributions(e.target.value)}
                    placeholder="10000$"
                    className="w-full border border-gray-200 rounded-xl py-4 px-4 text-lg bg-[#f6f9f5] focus:border-ca-mango focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-2 text-ca-blue">
                    Reportable fringe benefits {InfoIcon()}
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={fringeBenefits}
                    onChange={e => setFringeBenefits(e.target.value)}
                    placeholder="10000$"
                    className="w-full border border-gray-200 rounded-xl py-4 px-4 text-lg bg-[#f6f9f5] focus:border-ca-mango focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-2 text-ca-blue">
                    Other income {InfoIcon()}
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={otherIncome}
                    onChange={e => setOtherIncome(e.target.value)}
                    placeholder="10000$"
                    className="w-full border border-gray-200 rounded-xl py-4 px-4 text-lg bg-[#f6f9f5] focus:border-ca-mango focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-2 text-ca-blue">
                    Your total deductions {InfoIcon()}
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={deductions}
                    onChange={e => setDeductions(e.target.value)}
                    placeholder="5000$"
                    className="w-full border border-gray-200 rounded-xl py-4 px-4 text-lg bg-[#f6f9f5] focus:border-ca-mango focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-2 text-ca-blue">
                    Existing HELP/HECS balance {InfoIcon()}
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={hecsBalance}
                    onChange={e => setHecsBalance(e.target.value)}
                    placeholder="5000$"
                    className="w-full border border-gray-200 rounded-xl py-4 px-4 text-lg bg-[#f6f9f5] focus:border-ca-mango focus:outline-none transition"
                  />
                </div>
                <div />
              </div>
            )}

            <div className="flex flex-col md:flex-row items-center md:justify-end mt-8">
              <Button
                type="submit"
                className="w-full md:w-auto bg-ca-mango hover:bg-ca-blue text-white text-lg font-bold py-4 px-12 rounded-full shadow transition-colors"
              >
                Calculate your refund
              </Button>
            </div>
          </form>

          {/* Results */}
          {/* {refund !== null && (
            <div className="bg-ca-mango mt-8 p-6 rounded-xl text-center">
              <h2 className="text-xl font-bold text-white mb-1">Your Estimated Refund</h2>
              <span className={`text-2xl font-semibold ${refund >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                ${Math.abs(refund).toLocaleString()}
              </span>
              <div className="text-white mt-1">
                {refund >= 0 ? "This is your estimated refund." : "You may owe additional tax."}
              </div>
            </div>
          )} */}

          {refund !== null && (
            <div className={`${refund >= 0 ? 'bg-green-700' : 'bg-red-700'} mt-8 p-6 rounded-xl text-center`}>
              <h2 className="text-2xl font-bold text-white mb-1">Your Estimated Refund</h2>
              <span className={`text-6xl font-semibold text-white sm:text-3xl`}>

                {refund >= 0 ? '+' : '-'}${Math.abs(refund).toLocaleString()}
              </span>
              <div className="text-xl text-white mt-1">
                {refund >= 0 ? "This is your estimated refund." : "You may owe additional tax."}
              </div>
            </div>
          )}

          <div className="mt-10">
            <h3 className="font-bold text-ca-blue mb-2 text-lg">Important Information</h3>
            <p className="text-ca-text text-sm">
              This calculator estimates your FY2024-2025 tax return. It is for your general guidance only and does not constitute personal tax advice. 
              This tool provides automated estimates and may contain errors or AI-generated inaccuracies. 
              <br></br>
              <br></br>
              For a precise assessment of your tax results, consult with a qualified tax professional from Chrome Accountants.
            </p>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/paralox-mango-bg.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need a Professional to Guide you Through?
            </h2>
            <p className="text-xl text-white mb-8">
              Book a consultation session today and explore how our Chrome Financial Health System™ 
              can revolutionize your financial strategy with precise tax calculations for maximum returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HashLink to="/contact-chrome-accountants">

                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none"
                >
                  Book a Session
                </Button>
              </HashLink>
              <HashLink to="/services-chrome-accountants">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none"
                >
                  Explore Our Services
                </Button>
              </HashLink>
            </div>
          </div>
        </div>
      </section>        
    </div>
    </>
  );
};

export default TaxCalculator;
