import { HashLink } from 'react-router-hash-link';
import {Users, Shield, TrendingUp, Calculator, FileCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import ConsentPopup from '@/components/layout/Cookie';
import testimonialsData from '@/data/testimonials.json';
import { Star } from 'lucide-react';
import { Helmet } from "react-helmet";

const META = {
  title: "Chrome Accountants | Your Financial Champion",
  description: "Chrome Accountants offers expert tax, bookkeeping, and business advisory services in Sydney. Helping individuals and businesses grow with confidence.",
  keywords: "Sydney accountants, tax services, bookkeeping, business advisory, Chrome Accountants",
  canonical: "https://www.chromeaccountants.com.au/",
  // h1: "Trusted Accountants in Sydney",
  // h2: "Expert Tax and Business Services",
  // firstSentence: "Welcome to Chrome Accountants, your partner for reliable tax and accounting solutions in Sydney."
  ogImage: "https://www.chromeaccountants.com.au/images/og-ca.png"
};

const Home = () => {
  const valueProps = [
    {
      icon: <Users className="h-8 w-8 text-ca-mango" />,
      title: "For Ambitious Business Owners",
      description: "Stop juggling multiple providers. Get integrated services that save time and reduce costs while providing strategic growth advice.",
      persona: "business"
    },
    {
      icon: <Shield className="h-8 w-8 text-ca-mango" />,
      title: "For Overwhelmed Individuals",
      description: "Maximize your tax refund with guaranteed expert advice explained in plain English. No confusing jargon, just results.",
      persona: "individual"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-ca-mango" />,
      title: "For Aspiring Entrepreneurs",
      description: "Start your business correctly from day one. Get expert guidance on structure, registration, and financial systems.",
      persona: "entrepreneur"
    }
  ];

  const systemFeatures = [
    {
      icon: <Calculator className="h-6 w-6 text-ca-mango" />,
      title: "Integrated Approach",
      description: "All services work together seamlessly, eliminating gaps and inefficiencies"
    },
    {
      icon: <FileCheck className="h-6 w-6 text-ca-mango" />,
      title: "Plain English Explanations",
      description: "We translate complex financial concepts into understandable insights"
    },
    {
      icon: <Users className="h-6 w-6 text-ca-mango" />,
      title: "Future-Focused Planning",
      description: "Every client receives our Annual Strategy Forecast for long-term success"
    }
  ];

  const trustIndicators = [
    { metric: "400+", label: "Trusted Clients" },
    { metric: "$2.5M+", label: "Tax Savings Delivered" },
    { metric: "95%", label: "Client Retention Rate" },
    { metric: "4.9", label: "Google Rating" }
  ];

  return (
    <>
    <Helmet>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <meta name="keywords" content={META.keywords} />
        <link rel="canonical" href={META.canonical} />

        {/* Social (optional but recommended) */}
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:url" content={META.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={META.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={META.ogImage} />

        <link rel="icon" type="image/png" href="/images/favicon-2.png" />
      </Helmet>

    <main className="overflow-x-clip">
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Stop just paying taxes.
                    <span className="block text-ca-mango">Start building your future.</span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-ca-silver leading-relaxed">
                    As your financial champion and translator, we deliver our proprietary
                    <strong className="text-ca-mango"> Chrome Financial Health System™</strong> to
                    integrate services, explain everything in plain English, and guarantee
                    the best possible outcome for your financial future.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <HashLink to="/individual-service-booking">
                    <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg">
                      Book Your Appointment
                    </Button>
                  </HashLink>
                  <HashLink to="/why-us-chrome-accountants">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-ca-blue text-base sm:text-lg">
                      Why Us?
                    </Button>
                  </HashLink>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/sarah-chen.jpg"
                    alt="Sarah Chen, Business Owner"
                    className="w-full h-full object-cover"
                    width="380"
                    height="380"
                    fetchPriority="high"
                    loading="eager"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/team-meeting.jpg';
                    }}
                  />
                </div>

                {/* Floating testimonial card */}
                <div
                  className="
                    absolute -bottom-6 left-0 sm:-left-2 md:-left-3 lg:-left-4 xl:-left-6
                    bg-white rounded-lg shadow-xl p-3 sm:p-4
                    max-w-[90%] sm:max-w-xs
                  "
                >
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-ca-mango fill-current" />
                    ))}
                  </div>
                  <p className="text-ca-text text-xs sm:text-sm">
                    "Chrome Accountants transformed how I manage my business finances.
                    Their system gave me clarity I never had before."
                  </p>
                  <p className="text-ca-blue font-semibold text-xs sm:text-sm mt-2">
                    - Sarah Chen, Business Owner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section
          className="py-12 bg-no-repeat bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/paralox-mango-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll'
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              {trustIndicators.map((item, index) => (
                <div key={index} className="space-y-1 md:space-y-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{item.metric}</div>
                  <div className="text-white font-medium text-sm sm:text-base">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Propositions by Persona */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
                Your Financial Champion for Every Journey
              </h2>
              <p className="text-lg sm:text-xl text-ca-text max-w-3xl mx-auto">
                Whether you're growing a business, managing personal taxes, or starting your entrepreneurial journey,
                we have the expertise to guide you to success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {valueProps.map((prop, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    {prop.icon}
                    <h3 className="text-lg md:text-xl font-bold text-ca-blue ml-3">{prop.title}</h3>
                  </div>
                  <p className="text-ca-text leading-relaxed mb-6 text-sm md:text-base">{prop.description}</p>
                  <HashLink
                    to="/contact-chrome-accountants"
                    className="text-ca-mango font-semibold hover:text-ca-blue transition-colors inline-flex items-center"
                  >
                    Get Started →
                  </HashLink>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* Chrome Financial Health System */}
        <section className="py-20 bg-ca-blue text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                  The Chrome Financial Health System™
                </h2>
                <p className="text-lg sm:text-xl text-ca-silver mb-8">
                  Our proprietary system transforms complex financial obligations into
                  clear opportunities for growth. Unlike traditional accountants who work
                  in silos, our integrated approach ensures every aspect of your financial
                  management works together.
                </p>

                <div className="space-y-6">
                  {systemFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-ca-mango/20 rounded-lg p-2 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-ca-silver text-sm md:text-base">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/chrome-financial-health-system.png"
                  alt="Chrome Financial Health System"
                  className="w-full rounded-xl shadow-2xl"
                  width="380"
                  height="254"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Partners Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
                Our Lending Partners
              </h2>
              <p className="text-lg sm:text-xl text-ca-text max-w-3xl mx-auto">
                Our trusted partners in financial excellence,
                ensuring seamless tax solutions and strategic financial planning.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center mt-12 md:mt-20 sm:flex-wrap sm:gap-8 md:gap-16">
              <a
                href="https://www.commonwealthbank.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="/images/commbank-partner-logo.png"
                  alt="Commonwealth Bank"
                  className="h-40 sm:h-48 md:h-52 lg:h-60 object-contain max-w-[200px] sm:max-w-[280px] w-auto"
                  width="200"
                  height="100"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.westpac.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="/images/westpac-partner-logo.png"
                  alt="Westpac Bank"
                  className="h-40 sm:h-48 md:h-52 lg:h-60 object-contain max-w-[200px] sm:max-w-[300px] w-auto"
                  width="200"
                  height="100"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.stgeorge.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="/images/st-george-partner-logo.png"
                  alt="St. George Bank"
                  className="h-40 sm:h-44 md:h-48 lg:h-60 object-contain max-w-[200px] sm:max-w-[280px] w-auto"
                  width="200"
                  height="100"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Homepage Testimonials Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
                Client Testimonials
              </h2>
              <p className="text-lg sm:text-xl text-ca-text max-w-3xl mx-auto">
                See what over a 100+ clients say about working with Chrome Accountants.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
              {testimonialsData.slice(0, 3).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col h-full hover:shadow-xl transition-all"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-ca-mango fill-current" />
                    ))}
                  </div>
                  <p className="text-ca-text leading-relaxed mb-6 italic text-sm md:text-base">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3 mt-auto">
                    <div className="w-12 h-12 bg-ca-mango rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-ca-blue text-sm md:text-base">{testimonial.name}</p>
                      <p className="text-xs md:text-sm text-ca-text">{testimonial.role}</p>
                      {testimonial.company !== 'Individual Tax Client' && (
                        <p className="text-xs md:text-sm text-ca-text">{testimonial.company}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <HashLink to="/why-us-chrome-accountants#testimonials">
                <Button size="lg" className="bg-ca-mango text-ca-blue hover:bg-ca-mango/80">
                  View More Testimonials
                </Button>
              </HashLink>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/paralox-mango-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll'
          }}
        >
          <div className="absolute inset-0 pointer-events-none" />
          <div className="container relative mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Take Control of Your Financial Future?
              </h2>
              <p className="text-lg sm:text-xl text-white mb-8">
                Book an appointment and discover how our Chrome Financial Health System™
                can transform your financial management and maximize your outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HashLink to="/contact-chrome-accountants">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-black hover:bg-ca-blue hover:text-white border-none"
                  >
                    Book a Session
                  </Button>
                </HashLink>
                <HashLink to="/bookkeeping-services-chrome-accountants">
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
      <ConsentPopup />
    </main>
    </>
  );
};

export default Home;
