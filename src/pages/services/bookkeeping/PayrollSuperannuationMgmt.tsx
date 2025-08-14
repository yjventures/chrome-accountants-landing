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

const PayrollSuperannuationMgmt = () => {
  const differentiators = [
    {
      icon: <Users className="h-8 w-8 text-ca-mango" />,
      title: "End‑to‑End Payroll",
      description: "Setup, processing, onboarding/offboarding, leave and award management  -  all handled in a single, reliable system.",
      benefit: "Employees paid correctly and on time"
    },
    {
      icon: <Shield className="h-8 w-8 text-ca-mango" />,
      title: "STP & Super Compliance",
      description: "We submit Single Touch Payroll and manage superannuation obligations in line with ATO rules.",
      benefit: "Confidence you’re meeting obligations"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-ca-mango" />,
      title: "Xero Payroll Specialists",
      description: "We build a customised cloud‑based Xero setup, including employee details and award requirements.",
      benefit: "A scalable, modern payroll stack"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-ca-mango" />,
      title: "Proactive Updates",
      description: "We keep up with changing tax rates and super rules so you don’t have to.",
      benefit: "Less admin, fewer penalties"
    }
  ];

  return (
    <div id="payroll-superannuation" className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Payroll &amp; Superannuation Management</h1>
            <p className="text-xl lg:text-2xl text-ca-silver leading-relaxed">
              We run payroll, handle STP submissions, manage super, and keep entitlements accurate  -  so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>


      {/* What we do */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-6 text-ca-text">
          <h2 className="text-2xl lg:text-3xl font-bold text-ca-blue">What this service covers</h2>
          <p>
            We establish and maintain a cloud‑based payroll function (Xero), set up employees and awards, and manage ongoing processing:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payroll setup &amp; processing</li>
            <li>Single Touch Payroll (STP) submissions</li>
            <li>Superannuation calculations &amp; payments</li>
            <li>Onboarding &amp; offboarding</li>
            <li>Award and leave management</li>
          </ul>
          <p>
            With ever‑changing tax rates and obligations, our team keeps everything up‑to‑date and audit‑ready.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">Why choose us for Payroll &amp; Super</h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">Reliable processing, compliant reporting, clear records.</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to modernise your payroll?</h2>
            <p className="text-xl text-white mb-8">Let our Xero specialists run payroll and super the right way, every time.</p>
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

export default PayrollSuperannuationMgmt;
