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

const SoleTraderTaxServices = () => {
  const differentiators = [
    {
      icon: <CheckCircle className="h-8 w-8 text-ca-mango" />,
      title: "Fast ABN & GST Setup",
      description: "We register your ABN and (if required) GST, set PAYG instalments and get you compliant from day one.",
      benefit: "Start trading with confidence sooner"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-ca-mango" />,
      title: "BAS & Instalment Management",
      description: "Quarterly BAS preparation and PAYG instalment planning tailored to your cash flow.",
      benefit: "No surprises at BAS time"
    },
    {
      icon: <Users className="h-8 w-8 text-ca-mango" />,
      title: "Occupation‑Specific Deductions",
      description: "We identify allowable deductions based on your work profile and maintain clear records.",
      benefit: "Maximise your legal refund"
    },
    {
      icon: <Shield className="h-8 w-8 text-ca-mango" />,
      title: "ATO Compliance & Liaison",
      description: "We keep your lodgements on schedule and handle ATO correspondence on your behalf.",
      benefit: "Less admin, fewer penalties"
    }
  ];

  return (
    <div id="sole-trader-tax-services" className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Sole Trader Tax Services</h1>
            <p className="text-xl lg:text-2xl text-ca-silver leading-relaxed">
              All‑in‑one support for ABN registration, GST, PAYG instalments, BAS and annual income tax returns  -  tailored for sole traders.
            </p>
          </div>
        </div>
      </section>


      {/* What we do */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6 text-ca-text">
          <h2 className="text-2xl lg:text-3xl font-bold text-ca-blue">What this service covers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ABN registration and GST registration (if applicable)</li>
            <li>Quarterly BAS preparation and lodgement</li>
            <li>PAYG instalment setup and adjustments</li>
            <li>Annual income tax return for Sole Traders</li>
            <li>Record‑keeping guidance and deduction support</li>
            <li>Super contributions and compliance pointers</li>
          </ul>
          <p>
            As a sole trader, you are legally responsible for all aspects of the business. We set solid systems and keep you compliant so you can focus on growth.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">Why choose our Sole Trader service</h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">Simple setup, accurate returns, and proactive ATO compliance.</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Set up and lodge with confidence</h2>
            <p className="text-xl text-white mb-8">From ABN to annual return  -  we’ve got you covered.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HashLink to="/contact-chrome-accountants">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none">Book a Free Strategy Session</Button>
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

export default SoleTraderTaxServices;
