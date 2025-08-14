import { useState } from 'react';
import { Star, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import testimonialsData from '@/data/testimonials.json';
import faqsData from '@/data/faqs.json';
import Accordion from '@/components/ui/Accordion';
import { HashLink } from 'react-router-hash-link';

const LendingServices  = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Lending Partners', value: 'lending' },
    { label: 'Borrowing Partners', value: 'borrowing' },
  ];


      {/* CTA Section */}
      <section className="py-20 bg-ca-blue text-white" style={{ backgroundImage: "url('/images/paralox-mango-bg.jpg')" }}>
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
                Book Your Free Strategy Session
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

};

export default LendingServices;
