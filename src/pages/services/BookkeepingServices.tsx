import { useState, useEffect } from 'react';
import { Building, Calculator, Users, TrendingUp, FileCheck, Shield, BookOpen, PersonStanding, BriefcaseBusiness } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link, useLocation } from 'react-router-dom';
import servicesData from '@/data/services.json';

type Service = {
  name: string;
  description: string;
  features: string[];
  // Optional future overrides
  href?: string;
  slug?: string;
};

type Category = {
  title: string;
  description: string;
  services: Service[];
};

const BookkeepingServices = () => {
  const location = useLocation();

  // Read tab from hash in URL (e.g. #individual, #business, #bookkeeping)
  const getTabFromHash = () => {
    const hash = location.hash.replace('#', '');
    if (['business', 'individual', 'bookkeeping'].includes(hash)) return hash;
    return 'bookkeeping'; // fallback
  };

  const [activeTab, setActiveTab] = useState<string>(getTabFromHash());

  useEffect(() => {
    setActiveTab(getTabFromHash());
  }, [location.hash]);

  const tabs = [
    { id: 'bookkeeping', label: 'Bookkeeping Services', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'business', label: 'Business Services', icon: <BriefcaseBusiness className="h-5 w-5" /> },
    { id: 'individual', label: 'Individual Services', icon: <PersonStanding className="h-5 w-5" /> }
  ];

  const getServiceIcon = (serviceName: string) => {
    if (serviceName.includes('Setup')) return <Building className="h-6 w-6" />;
    if (serviceName.includes('Bookkeeping')) return <FileCheck className="h-6 w-6" />;
    if (serviceName.includes('Payroll')) return <Users className="h-6 w-6" />;
    if (serviceName.includes('Tax')) return <Calculator className="h-6 w-6" />;
    if (serviceName.includes('BAS') || serviceName.includes('IAS')) return <Shield className="h-6 w-6" />;
    return <TrendingUp className="h-6 w-6" />;
  };

  // Helpers to build placeholder links per service
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const getServicePath = (categoryKey: string, service: Service) => {
    // If you later add "href" in services.json, it will take priority
    if (service.href) return service.href;
    const base = `/services/${categoryKey}`;
    const serviceSlug = service.slug ? slugify(service.slug) : slugify(service.name);
    return `${base}/${serviceSlug}`;
  };

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    // keep URL hash in sync so deep-links work
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <div id="services" className="bg-white scroll-mt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Bookkeeping Services
            </h1>
            <p className="text-xl lg:text-2xl text-ca-silver leading-relaxed">
              Our Bookkeeping Services are key components of our proprietary Chrome Financial Health System™, 
              delivered by a team that acts as your dedicated financial champion and translator.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-col lg:flex-row justify-center mb-12 space-y-4 lg:space-y-0 lg:space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-ca-mango text-ca-blue shadow-lg'
                    : 'bg-gray-100 text-ca-text hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {Object.entries(servicesData as Record<string, Category>).map(([key, category]) => (
              <div
                key={key}
                className={`${activeTab === key ? 'block' : 'hidden'} space-y-8`}
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
                    {category.title}
                  </h2>
                  <p className="text-xl text-ca-text max-w-4xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.services.map((service, index) => {
                    const to = getServicePath(key, service);
                    return (
                      <div
                        key={`${service.name}-${index}`}
                        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                      >
                        <div className="flex items-center mb-4">
                          <div className="bg-ca-mango/20 rounded-lg p-3 mr-4">
                            <div className="text-ca-mango">
                              {getServiceIcon(service.name)}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-ca-blue">{service.name}</h3>
                        </div>

                        <p className="text-ca-text leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-ca-text">
                              <div className="w-2 h-2 bg-ca-mango rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </div>
                          ))}
                        </div>

                        <Link to={to}>
                          <Button className="w-full" size="sm">
                            See More
                          </Button>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <img
        src="/images/all-jobs-photo.jpg"
        alt="Catering to all jobs"
        className="w-[800px] h-auto sm:w-full sm:h-auto"
      />

      {/* Chrome Financial Health System Feature */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
              The Chrome Financial Health System™ Advantage
            </h2>
            <p className="text-xl text-ca-text max-w-4xl mx-auto">
              What sets our services apart is our integrated approach. Every service 
              is delivered through our proprietary system that ensures consistency, 
              quality, and optimal outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-ca-mango/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-ca-mango" />
              </div>
              <h3 className="text-lg font-semibold text-ca-blue mb-2">Integrated Approach</h3>
              <p className="text-ca-text">
                All services work together seamlessly, eliminating gaps and inefficiencies
              </p>
            </div>

            <div className="text-center">
              <div className="bg-ca-mango/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-ca-mango" />
              </div>
              <h3 className="text-lg font-semibold text-ca-blue mb-2">Plain English Explanations</h3>
              <p className="text-ca-text">
                We translate complex financial concepts into understandable insights
              </p>
            </div>

            <div className="text-center">
              <div className="bg-ca-mango/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-ca-mango" />
              </div>
              <h3 className="text-lg font-semibold text-ca-blue mb-2">Future-Focused Planning</h3>
              <p className="text-ca-text">
                Every client receives our Annual Strategy Forecast for long-term success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-ca-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We follow a proven process to ensure you receive exceptional service and optimal outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Expert Consultation', description: 'We understand your needs and explain how we can help' },
              { step: '2', title: 'Transparent Quote', description: 'Clear pricing with no hidden fees or surprises' },
              { step: '3', title: 'Service Delivery', description: 'Expert execution using our proven systems and processes' },
              { step: '4', title: 'Meeting Close', description: 'Complete transparency on outcomes and next steps' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-ca-mango text-ca-blue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white bg-cover" style={{ backgroundImage: "url('/images/paralox-mango-bg.jpg')" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience Integrated Financial Services?
            </h2>
            <p className="text-xl text-white mb-8">
              Book a strategy session and discover how our Chrome Financial Health System™ 
              can transform your financial management.
            </p>

            <Link to="/bookkeeping-service-booking">
              <Button size="lg" className="bg-white text-ca-blue hover:bg-opacity-90">
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookkeepingServices;
