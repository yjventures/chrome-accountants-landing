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

const PartnershipTaxServices = () => {
  const differentiators = [
    {
      icon: <Users className="h-8 w-8 text-ca-mango" />,
      title: "End‑to‑End Compliance",
      description: "Partnership return plus individual partner returns, with BAS/GST where required.",
      benefit: "Everything prepared and lodged together"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-ca-mango" />,
      title: "Clear Profit Allocation",
      description: "We record and explain income distribution so partners understand their obligations.",
      benefit: "No confusion at year‑end"
    },
    {
      icon: <Shield className="h-8 w-8 text-ca-mango" />,
      title: "ATO & ASIC Setup",
      description: "We handle ATO registrations and assist with ASIC‑related requirements.",
      benefit: "Right structure, right registrations"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-ca-mango" />,
      title: "Practical Tax Advice",
      description: "Guidance on deductions and documentation for smooth audits and reviews.",
      benefit: "Cleaner books, stronger position"
    }
  ];

  return (
    <div id="partnership-tax-services" className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Partnership Tax Services</h1>
            <p className="text-xl lg:text-2xl text-ca-silver leading-relaxed">
              Partnership tax returns plus individual partner returns, with BAS/GST and registrations managed for you.
            </p>
          </div>
        </div>
      </section>


      {/* What we do */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6 text-ca-text">
          <h2 className="text-2xl lg:text-3xl font-bold text-ca-blue">What this service covers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Preparation and lodgement of the Partnership tax return</li>
            <li>Preparation and lodgement of individual partner returns</li>
            <li>GST registration and BAS preparation (if applicable)</li>
            <li>ATO registrations and ASIC assistance</li>
            <li>Income allocation and distribution statements</li>
            <li>Record‑keeping guidance and deduction support</li>
          </ul>
          <p>
            Partners are jointly liable for business debts and liabilities. We keep documentation clear so obligations are understood and met.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">Why choose our Partnership service</h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">Aligned returns, accurate distributions, on‑time lodgements.</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Make partnership tax simple</h2>
            <p className="text-xl text-white mb-8">We align your returns and keep lodgements on schedule.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HashLink to="/contact-chrome-accountants">
                <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none">Book an Appointment</Button>
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

export default PartnershipTaxServices;
