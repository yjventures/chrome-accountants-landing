import { Briefcase, TrendingUp, FileCheck, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { HashLink } from 'react-router-hash-link';

const CapitalGainsTaxService = () => {
  const differentiators = [
    {
      icon: <TrendingUp className="h-8 w-8 text-ca-mango" />,
      title: "Accurate CGT Calculations",
      description:
        "We calculate capital gains and losses for assets like shares and property, factoring in cost base adjustments and events.",
      benefit: "Know exactly what you owe  -  no guesswork"
    },
    {
      icon: <FileCheck className="h-8 w-8 text-ca-mango" />,
      title: "CGT Discount & Exemptions",
      description:
        "We assess eligibility for the 50% CGT discount and applicable exemptions or rollovers.",
      benefit: "Reduce tax legally where possible"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-ca-mango" />,
      title: "Depreciating Assets & Records",
      description:
        "We help you track depreciation and improvements that affect your cost base and CGT outcome.",
      benefit: "Optimised results with clean documentation"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-ca-mango" />,
      title: "ATO‑Ready Lodgement",
      description:
        "Clear schedules and supporting evidence to withstand review.",
      benefit: "Confidence when the ATO asks questions"
    }
  ];

  return (
    <div id="capital-gains-tax" className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Capital Gains Tax (CGT) Services
          </h1>
          <p className="text-xl lg:text-2xl text-ca-silver">
            Sell property or shares? We calculate CGT correctly, apply eligible discounts, and lodge with confidence.
          </p>
        </div>
      </section>

      

      {/* What we cover */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4 text-ca-text space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-ca-blue">What this service covers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Asset sale calculations for real estate, shares and managed funds</li>
            <li>CGT discount checks and eligibility (e.g., 12‑month rule)</li>
            <li>Record‑keeping for improvements, depreciation and cost base adjustments</li>
            <li>Advice on timing, losses, and offsets to minimise tax</li>
            <li>Preparation of CGT schedules and ATO‑compliant lodgement</li>
          </ul>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 container mx-auto grid lg:grid-cols-2 gap-8">
        {differentiators.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-ca-mango/20 p-3 rounded-lg">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-ca-blue">{item.title}</h3>
                <p className="text-ca-text mb-4">{item.description}</p>
                <p className="bg-ca-mango/10 p-3 rounded-lg text-sm font-semibold text-ca-blue">
                  ✓ {item.benefit}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 bg-ca-mango text-white text-center" style={{ backgroundImage: "url('/images/paralox-mango-bg.jpg')" }}>
        <h2 className="text-3xl font-bold mb-6">Selling an asset? Plan your CGT.</h2>
        <p className="mb-8">
          We’ll crunch the numbers, apply discounts, and prepare compliant schedules.
        </p>
        <HashLink to="/contact-chrome-accountants">
          <Button size="lg" className="bg-white text-black">
            Book a Free Consultation
          </Button>
        </HashLink>
      </section>
    </div>
  );
};

export default CapitalGainsTaxService;
