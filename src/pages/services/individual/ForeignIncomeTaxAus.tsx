import { Globe, Shield, FileCheck, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { HashLink } from 'react-router-hash-link';

const ForeignIncomeTaxAus = () => {
  const differentiators = [
    {
      icon: <Globe className="h-8 w-8 text-ca-mango" />,
      title: "Worldwide Income Reporting",
      description:
        "If you’re an Australian tax resident, we help declare pensions, employment, investments and business income earned overseas.",
      benefit: "Full compliance for global income"
    },
    {
      icon: <FileCheck className="h-8 w-8 text-ca-mango" />,
      title: "Foreign Tax Offset",
      description:
        "We assess eligibility for tax offsets on foreign tax you’ve already paid to reduce double taxation.",
      benefit: "Avoid paying tax twice"
    },
    {
      icon: <Shield className="h-8 w-8 text-ca-mango" />,
      title: "Penalty Risk Reduction",
      description:
        "We correct past omissions and lodge accurately to minimise penalties and interest from the ATO.",
      benefit: "Protect your position with the ATO"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-ca-mango" />,
      title: "Clean Documentation",
      description:
        "We prepare clear schedules for pensions, annuities, capital gains on overseas assets, and more.",
      benefit: "Audit‑ready records"
    }
  ];

  return (
    <div id="foreign-income-tax" className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Foreign Income Tax Services (AU)
          </h1>
          <p className="text-xl lg:text-2xl text-ca-silver">
            Declare worldwide income correctly and access foreign tax offsets where available.
          </p>
        </div>
      </section>

      {/* What we cover */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4 text-ca-text space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-ca-blue">What this service covers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pensions and annuities from overseas</li>
            <li>Employment and personal services income</li>
            <li>Business profits and investment income</li>
            <li>Capital gains on foreign assets</li>
            <li>Foreign tax offset assessment and documentation</li>
          </ul>
          <p>
            Failure to declare foreign income can trigger penalties and interest. We’ll help you lodge correctly and on time, and fix past issues where needed.
          </p>
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
        <h2 className="text-3xl font-bold mb-6">Have income from overseas?</h2>
        <p className="mb-8">
          We’ll prepare your return, apply offsets, and keep you compliant with the ATO.
        </p>
        <HashLink to="/contact-chrome-accountants">
          <Button size="lg" className="bg-white text-black">
            Book a Consultation
          </Button>
        </HashLink>
      </section>
    </div>
  );
};

export default ForeignIncomeTaxAus;
