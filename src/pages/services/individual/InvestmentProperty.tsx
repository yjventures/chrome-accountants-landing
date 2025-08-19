import { Home, TrendingUp, FileCheck, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { HashLink } from 'react-router-hash-link';

const InvestmentProperty = () => {
  const differentiators = [
    {
      icon: <Home className="h-8 w-8 text-ca-mango" />,
      title: "Maximise Your Property Deductions",
      description:
        "Claim all eligible deductions including interest, rates, repairs, and management fees.",
      benefit: "Boost your rental property return"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-ca-mango" />,
      title: "Depreciation Schedules",
      description:
        "We work with quantity surveyors to prepare compliant depreciation schedules.",
      benefit: "Claim more over time"
    },
    {
      icon: <FileCheck className="h-8 w-8 text-ca-mango" />,
      title: "Capital Gains Tax Advice",
      description:
        "Minimise tax when selling with strategic CGT planning.",
      benefit: "Keep more of your profit"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-ca-mango" />,
      title: "ATO Compliance",
      description:
        "Ensure rental income and expenses are correctly reported.",
      benefit: "Avoid costly penalties"
    }
  ];

  return (
    <div id="investment-property" className="bg-white">
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Investment Property Tax Services
        </h1>
        <p className="text-xl lg:text-2xl text-ca-silver">
          Maximise returns and stay compliant with expert property tax advice.
        </p>
      </section>

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
        <h2 className="text-3xl font-bold mb-6">Get Expert Property Advice</h2>
        <p className="mb-8">
          Let us handle the numbers so you can grow your property portfolio.
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

export default InvestmentProperty;
