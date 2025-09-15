import { Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { HashLink } from 'react-router-hash-link';

const trustIndicators = [
  { metric: "400+", label: "Trusted Clients" },
  { metric: "$2.5M+", label: "Tax Savings Delivered" },
  { metric: "95%", label: "Client Retention Rate" },
  { metric: "4.9", label: "Google Rating" }
];

const BasIasLodgementServices = () => {
  const differentiators = [
    {
      icon: <Shield className="h-8 w-8 text-ca-mango" />,
      title: "ATO Compliant Lodgements",
      description:
        "We prepare and lodge BAS and IAS in full compliance with ATO rules. Your figures are checked against source data to reduce errors and keep your account in good standing.",
      benefit: "Accurate, on-time submissions that reduce risk"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-ca-mango" />,
      title: "Data Collation and Review",
      description:
        "We collate and reconcile the data that drives your activity statements, including sales, purchases, payroll, and fuel usage, then determine correct reportable figures.",
      benefit: "Strong numbers backed by proper records"
    },
    {
      icon: <Users className="h-8 w-8 text-ca-mango" />,
      title: "End-to-End BAS & IAS Support",
      description:
        "From GST and PAYG instalments to PAYG withheld, FBT instalments and fuel tax credits, we handle monthly, quarterly, or annual cycles based on your obligations.",
      benefit: "Single partner for every activity statement"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-ca-mango" />,
      title: "Deadline Management",
      description:
        "We track statutory dates and advise you ahead of time, so lodgements and payments are never a scramble. Expect clear reminders and status updates.",
      benefit: "Fewer surprises and late fees"
    }
  ];

  return (
    <div id="bas-ias-lodgement" className="bg-white">
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              BAS &amp; IAS Lodgement
            </h1>
            <p className="text-xl lg:text-2xl text-ca-silver leading-relaxed">
              Chrome Accountants keeps you on top of your statutory liabilities all year round. We prepare and lodge Business Activity Statements and Instalment Activity Statements, keep your records audit-ready, and help you maintain a clean profile with the ATO.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-ca-text">
            <h2 className="text-2xl lg:text-3xl font-bold text-ca-blue">
              What this service covers
            </h2>
            <p>
              We collate data relating to your BAS provision, determine the correct figures to use in your activity statements, and provide practical advice on treatment. This includes preparing and lodging:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Goods and Services Tax (GST)</li>
              <li>Pay As You Go (PAYG) tax instalments</li>
              <li>PAYG tax withheld from employees</li>
              <li>Fringe Benefits Tax (FBT) instalments</li>
              <li>Fuel tax credits</li>
            </ul>
            <p>
              Lodgement frequency can be monthly, quarterly, or yearly based on your ATO registration and turnover. We will advise you on the most suitable cycle and ensure every deadline is met.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
              Why choose us for BAS &amp; IAS
            </h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">
              Our process-driven approach gives you accurate figures, clear timelines, and strong documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <div className="bg-ca-mango/20 rounded-lg p-3 mt-1">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-ca-blue mb-3">{item.title}</h3>
                    <p className="text-ca-text leading-relaxed mb-4">{item.description}</p>
                    <div className="bg-ca-mango/10 rounded-lg p-3">
                      <p className="text-ca-blue font-semibold text-sm">
                        ✓ {item.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ca-blue text-white" style={{ backgroundImage: "url('/images/paralox-mango-bg.jpg')" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to simplify your BAS &amp; IAS?
            </h2>
            <p className="text-xl text-white mb-8">
              Work with a team that keeps you compliant, on time, and confident about your numbers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HashLink to="/contact-chrome-accountants" className="inline-block min-h-[48px] min-w-[48px]">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none"
                >
                  Book Your Appointment
                </Button>
              </HashLink>
              <HashLink to="/services-chrome-accountants" className="inline-block min-h-[48px] min-w-[48px]">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none"
                >
                  View All Services
                </Button>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasIasLodgementServices;
