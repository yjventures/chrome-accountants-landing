// src/pages/first-year-tax-tips-nsw.tsx
import { Lightbulb } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function FirstYearTaxTipsNSW() {
  const pageTitle = "First Year Tax Tips - NSW | Chrome Accountants";
  const metaDescription =
    "First Year Tax Tips for NSW and Sydney businesses - plan for BAS, keep good records, claim eligible deductions, set aside for tax, and meet ATO and state deadlines.";

  return (
    <>
      {/* <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index,follow" />
      </Helmet> */}

      {/* Hero */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              First Year Tax Tips - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              First Year Tax Tips for NSW and Sydney business owners - build smart habits early so you stay compliant, save tax, and manage cash flow <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center">
              <Lightbulb size={48} className="text-ca-mango mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
                Key tax habits for your first year in Sydney and NSW
              </h2>
            </div>

            <div className="text-[#444b53] leading-relaxed text-[15.5px] space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-ca-blue">1) Separate business and personal finances</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Open a dedicated NSW business bank account in your registered name.</li>
                  <li>Run all business income and expenses through this account to simplify BAS and year end.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-ca-blue">2) Choose a record keeping system from day one</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cloud accounting software (Xero, MYOB, QuickBooks) makes GST, BAS, and payroll easier.</li>
                  <li>Scan and store receipts electronically to meet ATO record keeping rules.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-ca-blue">3) Understand your tax obligations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><b>GST</b> - register if your turnover reaches AUD 75,000 or more. Lodge BAS on time each quarter or month.</li>
                  <li><b>PAYG withholding</b> - register before paying wages in NSW. Report via STP each pay cycle.</li>
                  <li><b>Income tax</b> - lodge your first return by the due date or via a registered tax agent.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-ca-blue">4) Set aside money for tax and super</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Put aside 20–30 percent of income into a separate “tax” account each week.</li>
                  <li>Pay super guarantee for NSW employees by quarterly deadlines to claim deductions.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-ca-blue">5) Track and claim eligible deductions</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Common first year deductions include business insurance, advertising, professional fees, bank fees, interest on business loans, and depreciation on assets.</li>
                  <li>Keep a logbook for vehicle claims and diaries for home office use to meet ATO substantiation rules.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-ca-blue">6) Plan for BAS and cash flow in Sydney</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mark BAS lodgment and payment dates in your calendar. The December quarter often has extended deadlines.</li>
                  <li>Reconcile GST accounts monthly so you are not scrambling at BAS time.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-ca-blue">7) Learn about NSW specific obligations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Workers compensation insurance via icare once you hire staff.</li>
                  <li>Payroll tax if wages exceed NSW thresholds or you are grouped with other entities.</li>
                  <li>Local council permits and Service NSW licences for your industry.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-ca-blue">8) Use your first year to set better pricing and margins</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Factor GST, super, and other costs into your prices to avoid underquoting in the Sydney market.</li>
                  <li>Review supplier agreements and delivery costs for efficiency.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-ca-blue">9) Seek professional advice early</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Book a session with a registered tax agent before year end to discuss deductions and tax planning.</li>
                  <li>Get payroll and award advice from Fair Work to avoid fines in NSW.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-ca-blue">10) Prepare for your second year</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Review profitability and set aside funds for potential PAYG instalments in year two.</li>
                  <li>Update budgets, cash flow forecasts, and marketing plans based on first year performance.</li>
                </ul>
              </section>

              <div className="p-4 bg-[#f1f5f9] rounded-md text-[14px]">
                <b>Important:</b> This page is general information for NSW and Sydney business owners in their first year. It does not consider your specific circumstances. Confirm current rules with the ATO, Service NSW, Revenue NSW, Fair Work, or a registered tax professional.
              </div>

              <h3 className="text-xl font-semibold text-ca-blue">Helpful NSW links</h3>
              <p className="text-[15px]">
                <a href="https://www.ato.gov.au/business/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Business</a>{" "}
                |{" "}
                <a href="https://www.service.nsw.gov.au/business" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Service NSW - Business</a>{" "}
                |{" "}
                <a href="https://www.icare.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">icare NSW</a>{" "}
                |{" "}
                <a href="https://www.revenue.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Revenue NSW</a>{" "}
                |{" "}
                <a href="https://www.fairwork.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Fair Work</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
