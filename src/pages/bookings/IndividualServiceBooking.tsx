declare global {
  interface Window {
    Calendly?: any;
  }
}


import { useEffect, useState, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ParkingCircle, BusFront } from 'lucide-react';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';

const calendlyUrl = "https://calendly.com/chromeaccountants/30min?primary_color=ffb000";

const IndividualServiceBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calendlyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Load Calendly script if not already loaded
    const existingScript = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = initCalendly;
      document.body.appendChild(script);
    } else {
      // If already loaded, just init the widget
      initCalendly();
    }

    function initCalendly() {
      if (window.Calendly && calendlyRef.current) {
        calendlyRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });
      }
    }

    // Clean up the Calendly widget on unmount
    return () => {
      if (calendlyRef.current) {
        calendlyRef.current.innerHTML = "";
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', enquiryType: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-ca-mango" />,
      title: "Phone",
      content: "(+61) 401 809 559",
      subtitle: "Mon-Fri 9am-5pm AEST"
    },
    {
      icon: <Mail className="h-6 w-6 text-ca-mango" />,
      title: "Email",
      content: "info@chromeaccountants.com.au",
      subtitle: "We respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-ca-mango" />,
      title: "Office",
      content: "Level 1/161 Merrylands Rd",
      subtitle: "Merrylands NSW 2160"
    },
    {
      icon: <Clock className="h-6 w-6 text-ca-mango" />,
      title: "Hours",
      content: "Monday - Friday: 9:00 AM - 5:00 PM",
      subtitle: "Saturday: By appointment"
    }
  ];

  const enquiryTypes = [
    { value: '', label: 'Select enquiry type...' },
    { value: 'business-setup', label: 'Business Setup & Registration' },
    { value: 'tax-services', label: 'Tax Services & Planning' },
    { value: 'bookkeeping', label: 'Bookkeeping & Payroll' },
    { value: 'advisory', label: 'Financial Advisory' },
    { value: 'general', label: 'General Enquiry' }
  ];

  const contactFaqs = [
    {
      id: 1,
      question: "What happens in an appointment?",
      answer:
        "It's a friendly, informal chat where we listen to your goals and challenges. We'll review your situation and provide at least one actionable piece of advice you can use right away, whether you decide to work with us or not."
    },
    {
      id: 2,
      question: "Is there any obligation to sign up after the session?",
      answer:
        "None at all. Our goal is to show you the value we can provide. If it's a good fit, great. If not, you'll still walk away with valuable advice."
    },
    {
      id: 3,
      question: "What should I prepare for the meeting?",
      answer:
        "Nothing is required. Just come ready to talk about your business or financial goals. If you have a recent tax return or business report handy it can be helpful, but it's not necessary for our initial chat."
    }
    // {
    //   id: #,
    //   question: "How quickly can I get an appointment?",
    //   answer:
    //     "We typically have availability within 1-2 business days for strategy sessions. For urgent matters, we can often accommodate same-day appointments. Use our online booking system for the fastest scheduling, or call us directly."
    // },
    // {
    //   id: #,
    //   question: "Do you offer virtual consultations?",
    //   answer:
    //     "Yes! We offer both in-person and virtual consultations via video call. Many of our clients prefer virtual meetings for convenience, and we've found them to be just as effective for initial consultations and ongoing service delivery."
    // },
    // {
    //   id: #,
    //   question: "What should I bring to my consultation?",
    //   answer:
    //     "For the initial strategy session, just bring yourself and any specific questions you have. If you have existing financial documents, tax returns, or business records, they can be helpful but aren't required for the first meeting."
    // }
  ];

  return (
    <div id="book-a-consultation" className="bg-white scroll-mt-24" >
      {/* <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Expert Individual Services for Your Financial Success
            </h1>
            <p className="text-xl lg:text-2xl text-ca-silver leading-relaxed">
              Chrome Accountants’ Individual Services help you maximise returns, claim every deduction, 
              and plan with confidence - all as part of our proven Chrome Financial Health System™.
            </p>

          </div>
        </div>
      </section> */}
      <section className="relative isolate text-white">
      {/* BG image */}
      <img
        src="/images/booking-header.jpg" // <- ensure this path is correct
        alt="Chrome Accountants booking"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        fetchPriority="high"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/40 md:bg-black/55" />

      {/* Text overlay */}
      <div className="container mx-auto px-4">
        <div className="flex min-h-[50vh] md:min-h-[35vh] items-end justify-end pb-10 pt-28 md:pt-36">
          <div className="absolute right-3 sm:right-8 md:right-16 lg:right-28 bottom-10 md:bottom-16 text-right">
            <p className="mb-1 text-2xl md:text-3xl font-bold tracking-tight">With</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-[0.95] text-ca-mango drop-shadow">
              CHROME <br className="hidden sm:block" />
              ACCOUNTANTS
            </h1>
            <p className="mt-1 text-2xl md:text-3xl font-bold tracking-tight">You matter!</p>
          </div>
        </div>
      </div>
    </section>

    
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-ca-blue mb-6">
                Reserve Your Individual Service Appointment
              </h2>
              <p className="text-lg text-ca-text mb-8">
                Choose a time that works for you. Our calendar is updated in real-time, so you can book with confidence.
              </p>

              {/* Calendly Embed */}
              <div
                id="book-free-session"
                ref={calendlyRef}
                className="rounded-xl border border-gray-300"
                style={{ minWidth: '320px', height: '630px' }}
              ></div>

              <div className="mt-6 p-4 bg-ca-mango/10 rounded-lg">
                <p className="text-sm text-ca-text">
                  ℹ️ Your session will include a review of your current situation, discussion of opportunities, and a clear explanation of how we can help.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-ca-blue mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-ca-mango/20 rounded-lg p-3">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-ca-blue">{info.title}</h3>
                      <p className="text-ca-blue font-medium">{info.content}</p>
                      <p className="text-ca-text text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-ca-blue mb-4">Quick Contact Form</h3>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                      />
                      <select
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleInputChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                        required
                      >
                        {enquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your needs..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-mango focus:border-ca-mango"
                    />

                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-ca-blue mb-2">Message Sent!</h3>
                    <p className="text-ca-text">
                      Thanks for getting in touch. We'll respond within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Visit Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
              Visit Our Sydney Office
            </h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">
              Conveniently located in the heart of Sydney's business district, with easy access to public transport and parking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-ca-blue mb-6">Office Details</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-ca-mango mt-1" />
                    <div>
                      <p className="font-medium text-ca-blue">Address</p>
                      <p className="text-ca-text">Level 1/161 Merrylands Rd<br />
                      Merrylands NSW 2160</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-ca-mango mt-1" />
                    <div>
                      <p className="font-medium text-ca-blue">Office Hours</p>
                      <p className="text-ca-text">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: By appointment only
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <ParkingCircle className="h-5 w-5 text-ca-mango mt-1" />
                    <div>
                      <p className="font-medium text-ca-blue">Parking</p>
                      <p className="text-ca-text">Visitor parking available<br />Street parking available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <BusFront className="h-5 w-5 text-ca-mango mt-1" />
                    <div>
                      <p className="font-medium text-ca-blue">Public Transport</p>
                      <p className="text-ca-text">2 minute walk from Merrylands Station<br />Multiple bus routes nearby</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* Google Maps Embed */}
              <div className="bg-gray-200 rounded-xl h-96 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=level+1%2F161+Merrylands+Rd%2C+Merrylands+NSW+2160%2C+Australia&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chrome Accountants Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-4">
              Booking & Consultation FAQ
            </h2>
            <p className="text-xl text-ca-text max-w-3xl mx-auto">
              Common questions about our consultation process and what to expect.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion items={contactFaqs} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualServiceBooking;
