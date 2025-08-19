import { useState } from 'react';
import { Star, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import testimonialsData from '@/data/testimonials.json';
import faqsData from '@/data/faqs.json';
import Accordion from '@/components/ui/Accordion';
import { HashLink } from 'react-router-hash-link';

const trustIndicators = [
    { metric: "400+", label: "Trusted Clients" },
    { metric: "$2.5M+", label: "Tax Savings Delivered" },
    { metric: "95%", label: "Client Retention Rate" },
    { metric: "4.9", label: "Google Rating" }
  ];

const WhyUs = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filters = [
    { id: 'all', label: 'All Clients' },
    { id: 'business', label: 'Business Owners' },
    { id: 'individual', label: 'Individuals' }
  ];

  const filteredTestimonials =
    activeFilter === 'all'
      ? testimonialsData
      : testimonialsData.filter(testimonial => testimonial.persona === activeFilter);

  const testimonialsToShow = showAll
    ? filteredTestimonials
    : filteredTestimonials.slice(0, 6);

  const differentiators = [
    {
      icon: <Shield className="h-8 w-8 text-ca-mango" />,
      title: "Chrome Financial Health System™",
      description: "Our proprietary methodology ensures consistent, exceptional outcomes. Unlike traditional accountants who work in isolation, our integrated system optimizes every aspect of your financial management.",
      benefit: "Guaranteed superior results through proven processes"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-ca-mango" />,
      title: "Annual Strategy Forecast",
      description: "Every client receives a personalized one-page roadmap with actionable recommendations to improve their financial outcome for the following year. This isn't just compliance - it's strategic planning.",
      benefit: "Future-focused advice that builds long-term wealth"
    },
    {
      icon: <Users className="h-8 w-8 text-ca-mango" />,
      title: "Financial Champion & Translator",
      description: "We don't just process numbers - we're on your side, fighting for the best possible outcome. We translate complex concepts into plain English so you understand and can make informed decisions.",
      benefit: "True partnership with transparent communication"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-ca-mango" />,
      title: "Meeting Close Transparency",
      description: "Our formal Meeting Close procedure ensures total clarity on outcomes, fees, and next steps before we finalize anything. No surprises, no hidden costs, complete transparency.",
      benefit: "Complete peace of mind with transparent processes"
    }
  ];

  const guarantees = [
    "Maximum legal tax refund guaranteed",
    "Best possible financial outcome for your situation",
    "Plain English explanations for all services",
    "Transparent pricing with no hidden fees",
    // "Responsive, personalized service"
  ];

  return (
    <div id="why-us" className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Chrome Accountants?
            </h1>
            <p className="text-xl lg:text-2xl text-ca-silver leading-relaxed">
              We're not just another accounting firm. We're your financial champions, 
              committed to delivering exceptional outcomes through our proven Chrome Financial Health System™.
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">
              Our unique approach and proprietary systems deliver results that traditional accountants simply can't match.
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
      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50"  style={{ backgroundImage: "url('/images/paralox-mango-bg.jpg')" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {trustIndicators.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-ca-blue">{item.metric}</div>
                <div className="text-ca-blue font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section with Filter */}
      <section id="testimonials" className="py-20 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">
              Don't just take our word for it. Over 100 clients have given us 5 star rating on Google and other platforms.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setShowAll(false);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-ca-mango text-ca-blue shadow-lg'
                    : 'bg-white text-ca-text hover:bg-gray-100 shadow-md'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsToShow.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-ca-mango fill-current" />
                  ))}
                </div>
                <p className="text-ca-text leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-ca-mango rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-ca-blue">{testimonial.name}</p>
                    <p className="text-sm text-ca-text">{testimonial.role}</p>
                    {testimonial.company !== 'Individual Tax Client' && (
                      <p className="text-sm text-ca-text">{testimonial.company}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {filteredTestimonials.length > 6 && (
            <div className="flex justify-center mt-10">
              <Button
                size="lg"
                className="bg-ca-mango text-ca-blue hover:bg-ca-mango/80"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? 'Show Less' : 'See All Reviews'}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Old Guarantees Section */}
      {/* <section className="py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/paralox-mango-bg.jpg')" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Guarantees to You
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We stand behind our work with these ironclad guarantees.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white rounded-lg shadow-md p-6">
                  <div className="bg-success/20 rounded-full p-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <span className="text-ca-text font-medium">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/*  Guarantees Section */}
      <section
        className="py-20 bg-ca-blue bg-center bg-no-repeat"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Guarantees to You
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              We stand behind our work with these ironclad guarantees.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Guarantees list (left) */}
            <div className="flex-1 w-full">
              <div className="max-w-2xl">
                <div className="grid grid-cols-1 gap-4">
                  {guarantees.map((guarantee, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white rounded-lg shadow-md p-6"
                    >
                      <div className="bg-ca-mango/20 rounded-full p-2">
                        <CheckCircle className="h-5 w-5 text-ca-mango" />
                      </div>
                      <span className="text-ca-text font-medium">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Image (right) */}
            <div className="flex-1 flex justify-center items-center w-full">
            <img
              src="/images/professional-handshake.jpg"
              alt="Our Guarantees"
              className="rounded-2xl shadow-lg max-w-xl w-full object-cover"
            />

            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">
              Get answers to common questions about our services and approach.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion items={faqsData} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ca-blue text-white bg-cover" style={{ backgroundImage: "url('/images/paralox-mango-bg.jpg')" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Experience the Chrome Accountants Difference
            </h2>
            <p className="text-xl text-white mb-8">
              Join hundreds of satisfied clients who have transformed their financial 
              management with our expert guidance and proven systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HashLink to="/contact-chrome-accountants">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none"
              >
                Book Your Appointment
              </Button>
            </HashLink>
            <HashLink to="/services-chrome-accountants">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none"
              >
                View Our Services
              </Button>
            </HashLink>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
