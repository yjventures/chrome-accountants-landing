import { Users, Award, Heart, Target } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";


const META = {
  title: "About Us | Chrome Accountants",
  description:
    "Learn more about Chrome Accountants, our mission, values, and the experienced team behind our trusted tax and accounting services in Sydney.",
  keywords:
    "About Chrome Accountants, Sydney tax experts, professional accountants",
  canonical: "https://www.chromeaccountants.com.au/about-us-chrome-accountants",
  h1: "Your Financial Champion & Tax Experts",
  // h2: "We demystify the complexities of tax and business finance so obligations become opportunities",
  firstSentence:
    "We believe that financial management shouldn't be a source of stress, but a tool for empowerment. Our mission is to demystify the complexities of tax and business finance, transforming obligations into opportunities.",
  ogImage: "https://www.chromeaccountants.com.au/images/og-ca.png"
};


const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-ca-mango" />,
      title: "1. Expertise & Professionalism",
      description: "We maintain the highest standards of professional competence and stay current with all regulatory changes to serve you better."
    },
    {
      icon: <Heart className="h-8 w-8 text-ca-mango" />,
      title: "2. Client Education & Care",
      description: "We believe in empowering our clients through education, explaining complex concepts in plain English so you can make informed decisions."
    },
    {
      icon: <Users className="h-8 w-8 text-ca-mango" />,
      title: "3. Approachability & Transparency",
      description: "We build genuine relationships with our clients, providing clear communication and transparent processes every step of the way."
    },
    {
      icon: <Target className="h-8 w-8 text-ca-mango" />,
      title: "4. Integrity & Reliability",
      description: "We are committed to acting in your best interests, always providing honest advice and delivering on our promises."
    }
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

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={META.ogImage} />

        {/* Optional: favicon */}
        <link rel="icon" type="image/png" href="/images/favicon-2.png" />
      </Helmet>
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {META.h1}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-ca-silver leading-relaxed">
              {META.firstSentence}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ca-blue mb-6">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-ca-text leading-relaxed mb-6">
                To bring clarity and confidence to the world of accounting. We are driven 
                by the success and peace of mind of the individuals and businesses we 
                partner with. Our goal is to transform complex financial obligations into 
                clear opportunities for growth and savings.
              </p>
              <p className="text-lg text-ca-text leading-relaxed">
                We deliver integrated accounting and tax solutions with a focus on client 
                education, guaranteeing the best financial outcomes and building lasting 
                partnerships that grow with you.
              </p>
            </div>
            <div>
              <img 
                src="/images/our-mission.jpg" 
                alt="Chrome Accountants' mission" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
              Meet our Leadership
            </h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">
              Our team combines deep technical expertise with a genuine commitment 
              to client success. We're here to be your trusted advisors and champions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Featured Team Member */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-ca-mango to-ca-blue flex items-center justify-center">
                    <img 
                      src="/images/tarek-ca.jpg" 
                      alt="Tarek Alarab, Principal Accountant" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-ca-blue mb-2">Tarek Alarab</h3>
                  <p className="text-ca-mango font-semibold mb-4">Principal Accountant & Founder</p>
                  <p className="text-ca-text leading-relaxed mb-4">
                    With over 15 years of experience in accounting and business advisory, 
                    Tarek founded Chrome Accountants with a vision to revolutionize how 
                    accounting services are delivered. His expertise spans business setup, 
                    tax strategy, and financial optimization.
                  </p>
                  <p className="text-ca-text leading-relaxed">
                    Tarek is passionate about education and empowerment, believing that 
                    every client deserves to understand their financial position and 
                    opportunities. He developed the Chrome Financial Health System™ to 
                    ensure consistent, exceptional outcomes for every client.
                  </p>
                </div>
              </div>
            </div>
            
             <div className="max-w-4xl mx-auto">
            {/* Other Team Members */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-ca-mango to-ca-blue flex items-center justify-center">
                    <img 
                      src="/images/abed-ca.png" 
                      alt="Abed Alatif Itani, Bookkeeping Coordinator" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-ca-blue mb-2">Abed Alatif Itani</h3>
                  <p className="text-ca-mango font-semibold mb-4">Bookkeeping Coordinator</p>
                  <p className="text-ca-text leading-relaxed mb-4">
                    As Chrome Accountants’ Bookkeeping Coordinator, Abed ensures every detail of our clients’ financial records is accurate, timely, and 
                    aligned with the bigger picture. With a strong foundation in bookkeeping and a keen eye for detail, he bridges the gap between day-to-day 
                    accounts management and long-term financial clarity.                  
                  </p>
                  <p className="text-ca-text leading-relaxed">
                    Abed is dedicated to making bookkeeping not just a back-office task, but a powerful tool that supports smarter decision-making. 
                    His collaborative approach means clients can trust that their financial data is not only compliant, but also an asset for growth.                    
                  </p>
                </div>
              </div>
            </div>
            </div>

            {/* <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-ca-mango to-ca-blue flex items-center justify-center">
                    <img 
                      src="/images/demo-business-person.jpg" 
                      alt="Tarek Alarab, Principal Accountant" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-ca-blue mb-2">Demo Team Member</h3>
                  <p className="text-ca-mango font-semibold mb-4">Demo Team Position</p>
                  <p className="text-ca-text leading-relaxed mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium explicabo nobis fugit, accusamus et voluptatem? Provident temporibus recusandae nulla, 
                    deleniti voluptatum soluta suscipit quia, quis mollitia et similique consequuntur asperiores.
                  </p>
                  <p className="text-ca-text leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dignissimos vitae libero praesentium, molestiae vero? 
                    Voluptas necessitatibus, ipsa repudiandae neque ex ab consequuntur rerum incidunt ad voluptatem maxime illo qui! 
                    
                  </p>
                </div>
              </div>
            </div> */}

            {/* Team Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ca-mango/20 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-ca-mango" />
                  </div>
                  <h3 className="text-lg font-semibold text-ca-blue">Qualified Professionals</h3>
                </div>
                <p className="text-ca-text">
                  Our team holds relevant qualifications and maintains continuous 
                  professional development to stay current with industry changes.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ca-mango/20 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-ca-mango" />
                  </div>
                  <h3 className="text-lg font-semibold text-ca-blue">Client-Focused Approach</h3>
                </div>
                <p className="text-ca-text">
                  Every team member is trained in our client-first philosophy, 
                  ensuring you receive personalized attention and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chrome Financial Health System */}
      <section className="py-20 bg-ca-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              The Chrome Financial Health System™
            </h2>
            <p className="text-xl text-ca-silver max-w-4xl mx-auto">
              Our proprietary methodology that turns expert experience into a consistent, 
              scalable, and defensible process. This system ensures every client receives 
              the same high level of service and optimal outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ca-mango rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ca-blue font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Integration</h3>
              <p className="text-ca-silver">
                Seamless one-stop solution eliminating inefficiencies of fragmented services
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ca-mango rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ca-blue font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <p className="text-ca-silver">
                Plain English explanations that empower you with knowledge and understanding
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ca-mango rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ca-blue font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Personalization</h3>
              <p className="text-ca-silver">
                Genuine long-term relationships built on trust, care, and understanding
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* Values Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">
              These values guide everything we do and define how we serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-ca-mango/20 rounded-lg p-3 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ca-blue mb-3">{value.title}</h3>
                    <p className="text-ca-text leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">
              These values guide everything we do and define how we serve our clients.
            </p>
          </div>

          {/* First Row: Values left, Image right */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 mb-12">
            {/* Left: First 2 values */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-8">
                {values.slice(0, 2).map((value, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-ca-mango/20 rounded-lg p-3 mt-1">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-ca-blue mb-3">
                          {value.title}
                        </h3>
                        <p className="text-ca-text leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: First image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/images/core-values-1.jpg"
                alt="Chrome Accountants Core Values 1"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>

          {/* Second Row: Image left, Values right */}
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch gap-12">
            {/* Left: Second image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/images/core-values-2.jpg"
                alt="Chrome Accountants Core Values 2"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
            {/* Right: Last 2 values */}
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-8">
                {values.slice(2, 4).map((value, index) => (
                  <div
                    key={index + 2}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-ca-mango/20 rounded-lg p-3 mt-1">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-ca-blue mb-3">
                          {value.title}
                        </h3>
                        <p className="text-ca-text leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="py-20 bg-cover" style={{ backgroundImage: "url('/images/paralox-mango-bg.jpg')" }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Experience the Chrome Difference?
            </h2>
            <p className="text-xl text-white mb-8">
              Join hundreds of satisfied clients who have transformed their financial 
              management with our expert guidance and Chrome Financial Health System™.
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
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;