import { useState } from 'react';
import { Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import faqsData from '@/data/faqs.json';
import Accordion from '@/components/ui/Accordion';
import { HashLink } from 'react-router-hash-link';

const trustIndicators = [
  { metric: "400+", label: "Trusted Clients" },
  { metric: "$2.5M+", label: "Tax Savings Delivered" },
  { metric: "95%", label: "Client Retention Rate" },
  { metric: "4.9", label: "Google Rating" }
];

const TrustTaxReturnServices = () => {
  const differentiators = [
    {
      icon: <Users className="h-8 w-8 text-ca-mango" />,
      title: "Income Distribution Planning",
      description: "We advise on beneficiary distributions and document decisions clearly.",
      benefit: "Optimised outcomes with clear records"
    },
    {
      icon: <Shield className="h-8 w-8 text-ca-mango" />,
      title: "Asset Protection Focus",
      description: "Trust structures to manage risk, protect assets and support long‑term wealth goals.",
      benefit: "Structure aligned with strategy"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-ca-mango" />,
      title: "Accurate Trust Returns",
      description: "Preparation and lodgement of trust income tax returns with supporting schedules.",
      benefit: "Compliant, complete filings"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-ca-mango" />,
      title: "ATO & Registration Support",
      description: "TFN/ABN where required, and BAS if the trust is registered for GST.",
      benefit: "End‑to‑end compliance"
    }
  ];

  return (
    <div id="trust-tax-return-services" className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Trust Tax Return Services</h1>
            <p className="text-xl lg:text-2xl text-ca-silver leading-relaxed">
              Tax and compliance support for trust structures to distribute income, manage tax and protect assets.
            </p>
          </div>
        </div>
      </section>


      {/* What we do */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6 text-ca-text">
          <h2 className="text-2xl lg:text-3xl font-bold text-ca-blue">What this service covers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Trust income tax return preparation and lodgement</li>
            <li>Beneficiary distribution statements and minutes</li>
            <li>TFN/ABN registrations and updates (as needed)</li>
            <li>GST/BAS if registered for GST</li>
            <li>Record‑keeping guidance and reconciliations</li>
          </ul>
          <p>
            We help set structures to minimise tax legally, protect assets, and support long‑term wealth outcomes.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">Why choose our Trust service</h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">Clear documentation, compliant lodgements, strategic distributions.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-ca-mango/20 rounded-lg p-3 mt-1">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-ca-blue mb-3">{item.title}</h3>
                    <p className="text-ca-text leading-relaxed mb-4">{item.description}</p>
                    <div className="bg-ca-mango/10 rounded-lg p-3">
                      <p className="text-ca-blue font-semibold text-sm">✓ {item.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ca-blue text-white" style={{ backgroundImage: "url('/images/paralox-mango-bg.jpg')" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get trust returns done right</h2>
            <p className="text-xl text-white mb-8">We align distributions and documentation with your goals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HashLink to="/contact-chrome-accountants">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none">Book a Strategy Session</Button>
              </HashLink>
              <HashLink to="/services-chrome-accountants">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none">View All Services</Button>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustTaxReturnServices;
