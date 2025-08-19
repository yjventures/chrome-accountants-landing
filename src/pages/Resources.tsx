import { useState } from 'react';
import { Download, Calculator, BookOpen, Users, TrendingUp, FileText, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Resources = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [taxableIncome, setTaxableIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [taxResult, setTaxResult] = useState<any>(null);

  const calculateTax = () => {
    const income = parseFloat(taxableIncome);
    const totalDeductions = parseFloat(deductions) || 0;
    const taxableAmount = income - totalDeductions;
    
    let tax = 0;
    
    // Australian tax brackets for 2024-25
    if (taxableAmount <= 18200) {
      tax = 0;
    } else if (taxableAmount <= 45000) {
      tax = (taxableAmount - 18200) * 0.19;
    } else if (taxableAmount <= 120000) {
      tax = 5092 + (taxableAmount - 45000) * 0.325;
    } else if (taxableAmount <= 180000) {
      tax = 29467 + (taxableAmount - 120000) * 0.37;
    } else {
      tax = 51667 + (taxableAmount - 180000) * 0.45;
    }
    
    // Add Medicare Levy (2%)
    const medicareLevy = taxableAmount > 23226 ? taxableAmount * 0.02 : 0;
    const totalTax = tax + medicareLevy;
    
    setTaxResult({
      grossIncome: income,
      deductions: totalDeductions,
      taxableIncome: taxableAmount,
      incomeTax: tax,
      medicareLevy,
      totalTax,
      netIncome: income - totalTax
    });
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to an email service
    setIsSubscribed(true);
    setEmail('');
  };

  const leadMagnets = [
    {
      title: "Business Startup Guide",
      description: "A comprehensive step-by-step guide to starting your business correctly from day one. Includes structure comparison, registration requirements, and initial setup tasks.",
      icon: <CheckCircle className="h-8 w-8 text-ca-mango" />,
      downloadLink: "/business-startup-checklist",
      target: "entrepreneur"
    },
    {
      title: "Tax Deduction Guide",
      description: "Maximize your tax refund with our detailed guide to commonly missed deductions for individuals and businesses. Updated for the current financial year.",
      icon: <FileText className="h-8 w-8 text-ca-mango" />,
      downloadLink: "/tax-deduction-guide",
      target: "individual"
    },
    {
      title: "Financial Health Guide",
      description: "Evaluate your business's financial health with our comprehensive guide based on the Chrome Financial Health System™.",
      icon: <TrendingUp className="h-8 w-8 text-ca-mango" />,
      downloadLink: "/financial-health-checklist",
      target: "business"
    }
  ];

  const resourceCategories = [
    {
      title: "For Business Owners",
      icon: <Users className="h-6 w-6 text-ca-mango" />,
      resources: [
        { title: "GST Registration Guide", type: "Document", url: "/gst-registration-guide-nsw-chrome-accountants" },
        { title: "Bookkeeping Basics", type: "Article", url: "/bookkeeping-basics-nsw-chrome-accountants" }, 
        { title: "Tax Planning Strategies", type: "Article", url: "/tax-planning-strategies-nsw-chrome-accountants" },
        { title: "Payroll Compliance Checklist", type: "Document", url: "/payroll-compliance-checklist-nsw-chrome-accountants" }
      ]
    },
    {
      title: "For Individuals",
      icon: <Users className="h-6 w-6 text-ca-mango" />,
      resources: [
        { title: "Tax Return Preparation Guide", type: "Document", url: "/tax-return-preparation-guide-nsw-chrome-accountants" },
        { title: "Investment Property Tax Tips", type: "Article", url: "/investment-property-tax-tips-nsw-chrome-accountants" },
        { title: "Work-Related Deductions", type: "Article", url: "/work-related-deductions-nsw-chrome-accountants" },
        { title: "Cryptocurrency Tax Guide", type: "Article", url: "/cryptocurrency-tax-guide-nsw-chrome-accountants" }
      ]
    },
    {
      title: "For Entrepreneurs",
      icon: <TrendingUp className="h-6 w-6 text-ca-mango" />,
      resources: [
        { title: "Business Structure Comparison", type: "Document", url: "/business-structure-comparison-nsw-chrome-accountants" },
        { title: "Startup Financial Planning", type: "Article", url: "/startup-financial-planning-nsw-chrome-accountants" },
        { title: "Registration Requirements", type: "Document", url: "/registration-requirements-nsw-chrome-accountants" },
        { title: "First Year Tax Tips", type: "Article", url: "/first-year-tax-tips-nsw-chrome-accountants" }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Financial Resources & Tools
            </h1>
            <p className="text-xl lg:text-2xl text-ca-silver leading-relaxed">
              Access valuable tools, guides, and resources to help you make informed 
              financial decisions and maximize your outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Tax Calculator Section
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
                Interactive Tax Calculator
              </h2>
              <p className="text-xl text-ca-text">
                Get an estimate of your tax liability and potential refund. 
                For accurate calculations, book a consultation with our experts.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-ca-blue mb-6">Calculate Your Tax</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-ca-text mb-2">
                        Annual Taxable Income ($)
                      </label>
                      <input
                        type="number"
                        value={taxableIncome}
                        onChange={(e) => setTaxableIncome(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                        placeholder="e.g., 75000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-ca-text mb-2">
                        Total Deductions ($)
                      </label>
                      <input
                        type="number"
                        value={deductions}
                        onChange={(e) => setDeductions(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                        placeholder="e.g., 5000"
                      />
                    </div>
                    
                    <Button onClick={calculateTax} className="w-full">
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculate Tax
                    </Button>
                  </div>
                </div>
                
                <div>
                  {taxResult ? (
                    <div>
                      <h3 className="text-lg font-semibold text-ca-blue mb-6">Your Tax Estimate</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-ca-text">Gross Income:</span>
                          <span className="font-semibold">${taxResult.grossIncome.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ca-text">Deductions:</span>
                          <span className="font-semibold">-${taxResult.deductions.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-ca-text">Taxable Income:</span>
                          <span className="font-semibold">${taxResult.taxableIncome.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ca-text">Income Tax:</span>
                          <span className="font-semibold">${taxResult.incomeTax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ca-text">Medicare Levy:</span>
                          <span className="font-semibold">${taxResult.medicareLevy.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2 text-lg">
                          <span className="text-ca-blue font-semibold">Total Tax:</span>
                          <span className="font-bold text-ca-blue">${taxResult.totalTax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ca-blue font-semibold">Net Income:</span>
                          <span className="font-bold text-ca-mango">${taxResult.netIncome.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-ca-mango/10 rounded-lg">
                        <p className="text-sm text-ca-text">
                          ⚠️ This is an estimate only. For accurate tax planning and optimization, 
                          book a consultation with our experts.
                        </p>
                        <Link to="/contact">
                          <Button size="sm" className="mt-3">
                            Get Professional Advice
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center text-ca-text">
                        <Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p>Enter your income details to calculate your tax estimate</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Lead Magnets Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
              Free Resources & Downloads
            </h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">
              Get immediate access to our expert-created guides and tools designed 
              to help you succeed financially.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadMagnets.map((magnet, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-ca-mango/20 rounded-lg p-4 w-fit mb-6">
                  {magnet.icon}
                </div>
                
                <h3 className="text-xl font-bold text-ca-blue mb-4">{magnet.title}</h3>
                <p className="text-ca-text leading-relaxed mb-6">{magnet.description}</p>
                
                <Link to={magnet.downloadLink} className="w-full">
                  <Button className="w-full" size="sm">
                    See Guide
                  </Button>
                </Link>

              </div>
            ))}
          </div>
        </div>
      </section>      

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
              Educational Content Library
            </h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">
              Browse our comprehensive library of educational content organized by your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-ca-blue ml-3">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <p className="font-medium text-ca-blue">{resource.title}</p>
                        <p className="text-sm text-ca-text">{resource.type}</p>
                      </div>
                      <a href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-ca-mango text-ca-blue px-4 py-2 rounded hover:bg-ca-blue hover:text-white transition">
                        View
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      {/* <section className="py-20 bg-ca-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay Updated with Financial Tips
            </h2>
            <p className="text-xl text-ca-silver mb-8">
              Get monthly insights, tax tips, and financial strategies delivered 
              straight to your inbox.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-ca-blue"
                    required
                  />
                  <Button type="submit" className="bg-ca-mango text-ca-blue hover:bg-opacity-90">
                    Subscribe
                  </Button>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-success/20 border border-success rounded-lg p-4">
                  <CheckCircle className="h-6 w-6 text-success mx-auto mb-2" />
                  <p className="text-white font-semibold">Successfully subscribed!</p>
                  <p className="text-ca-silver text-sm mt-2">You'll receive our next newsletter soon.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section> */}

         {/* CTA Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/paralox-mango-bg.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Take Control of Your Financial Future?
            </h2>
            <p className="text-xl text-white mb-8">
              Book an appointment and discover how our Chrome Financial Health System™ 
              can transform your financial management and maximize your outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-chrome-accountants">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none"
                >
                  Book a Session
                </Button>
              </Link>
              <HashLink to="/services-chrome-accountants">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none"
                >
                  Explore Our Services
                </Button>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;