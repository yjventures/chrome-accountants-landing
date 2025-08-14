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

const AccountsPayableReceivable = () => {
  const differentiators = [
    {
      icon: <TrendingUp className="h-8 w-8 text-ca-mango" />,
      title: "Healthy Cash Flow",
      description: "We manage bills, expenses, invoicing and collections so cash keeps moving the right way.",
      benefit: "Fewer bottlenecks, faster payments"
    },
    {
      icon: <Users className="h-8 w-8 text-ca-mango" />,
      title: "Supplier & Customer Care",
      description: "Clear communication, timely follow‑ups and accurate statements for both AP and AR.",
      benefit: "Better relationships, fewer disputes"
    },
    {
      icon: <Shield className="h-8 w-8 text-ca-mango" />,
      title: "Reconciled & Audit‑Ready",
      description: "We reconcile transactions and keep documentation complete across bank feeds and ledgers.",
      benefit: "Confidence in your numbers"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-ca-mango" />,
      title: "Xero & MYOB Processes",
      description: "Recognised partners with cloud workflows for approvals, reminders and on‑time lodgements.",
      benefit: "Less admin, more control"
    }
  ];

  return (
    <div id="ap-ar" className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Accounts Payable &amp; Receivable</h1>
            <p className="text-xl lg:text-2xl text-ca-silver leading-relaxed">
              Accurate tracking of bills, expenses, invoices and payments  -  with strong reconciliations to protect cash flow.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6 text-ca-text">
          <h2 className="text-2xl lg:text-3xl font-bold text-ca-blue">What this service covers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Supplier &amp; bill management (AP)</li>
            <li>Employee expense tracking &amp; approvals</li>
            <li>Customer invoicing &amp; reminders (AR)</li>
            <li>Bank feeds &amp; reconciliation</li>
          </ul>
          <p>
            Our bookkeeping solutions are designed for small to medium businesses across construction, retail/eCommerce, hospitality, healthcare, real estate, franchises and more.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">Why outsource AP &amp; AR</h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">Tight processes, faster payments, cleaner books.</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to improve cash flow?</h2>
            <p className="text-xl text-white mb-8">We’ll keep AP &amp; AR moving  -  and your ledgers reconciled.</p>
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

export default AccountsPayableReceivable;
