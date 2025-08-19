import { Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { HashLink } from 'react-router-hash-link';

const EmploymentIncome = () => {
  const differentiators = [
    {
      icon: <Shield className="h-8 w-8 text-ca-mango" />,
      title: "Specialised Tax Returns",
      description:
        "We prepare tax returns for all types of employees including full-time, part-time, and casual workers.",
      benefit: "Maximise your eligible deductions"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-ca-mango" />,
      title: "Industry-Specific Deductions",
      description:
        "From uniforms to tools of trade, we ensure you claim every allowable deduction for your job type.",
      benefit: "More money back in your pocket"
    },
    {
      icon: <Users className="h-8 w-8 text-ca-mango" />,
      title: "Simple, Guided Process",
      description:
        "We make lodging your tax return easy with guided questions and document checklists.",
      benefit: "No stress, no mistakes"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-ca-mango" />,
      title: "ATO Compliance",
      description:
        "Accurate reporting to ensure you meet ATO requirements and avoid penalties.",
      benefit: "Peace of mind"
    }
  ];

  return (
    <div id="employment-income" className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Employment Income Tax Services
          </h1>
          <p className="text-xl lg:text-2xl text-ca-silver">
            Get expert help to lodge your employment income tax return and maximise your refund.
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
        <h2 className="text-3xl font-bold mb-6">Maximise Your Tax Refund</h2>
        <p className="mb-8">
          Let our experts prepare your employment income tax return with accuracy and speed.
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

export default EmploymentIncome;
