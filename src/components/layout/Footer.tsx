import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, MailCheck } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-ca-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex justify-center lg:justify-start">
              <img
                src="/images/chrome-accountants-footer-logo.png"
                alt="Chrome Accountants Footer Logo"
                className="object-contain max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto"
                style={{ height: '100px' }}
                loading="lazy"
              />
            </div>
            {/* <p className="text-ca-silver text-sm mb-4">
              Your financial champion and translator. We bring clarity and confidence to the world of accounting.
            </p> */}
            <div className="flex space-x-4 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/tarek-alarab-aab7b577/?originalSubdomain=au" 
              aria-label="Follow us on LinkedIn"
              className="text-ca-silver hover:text-ca-mango transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100064209634852" 
              aria-label="Follow us on Facebook"
              className="text-ca-silver hover:text-ca-mango transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/chrome_accountants/" 
              aria-label="Follow us on Instagram"
              className="text-ca-silver hover:text-ca-mango transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="text-left">
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><HashLink to="/bookkeeping-services-chrome-accountants" className="text-ca-silver hover:text-ca-mango transition-colors">Bookkeeping Services</HashLink></li>
              <li><HashLink to="/business-services-chrome-accountants" className="text-ca-silver hover:text-ca-mango transition-colors">Business Services</HashLink></li>
              <li><HashLink to="/individual-services-chrome-accountants" className="text-ca-silver hover:text-ca-mango transition-colors">Individual Services</HashLink></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="text-left">
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/why-us-chrome-accountants" className="text-ca-silver hover:text-ca-mango transition-colors">Why Us</Link></li>
              <li><Link to="/about-us-chrome-accountants" className="text-ca-silver hover:text-ca-mango transition-colors">About Us</Link></li>
              <li><Link to="/tax-resources-chrome-accountants" className="text-ca-silver hover:text-ca-mango transition-colors">Resources</Link></li>
              <li><Link to="/australian-tax-calculator" className="text-ca-silver hover:text-ca-mango transition-colors">Tax Calculator</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-left">
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-start space-x-2">
                <Phone className="h-4 w-4 text-ca-mango" />
                <a href="tel:+61401809559" className="text-ca-silver hover:text-ca-mango transition-colors">(+61) 401 809 559</a>
              </div>
              <div className="flex items-center justify-start space-x-2">
                <Mail className="h-4 w-4 text-ca-mango" />
                <a href = "mailto:info@chromeaccountants.com.au" className="text-ca-silver transition-colors hover:text-ca-mango transition-colors">info@chromeaccountants.com.au</a>
              </div>
              <div className="flex items-start justify-start space-x-2">
                <MapPin className="h-4 w-4 text-ca-mango mt-0.5" />
                <a href="https://maps.app.goo.gl/mQ9BZUtwpKxwP6176" className="text-ca-silver hover:text-ca-mango transition-colors">
                Level 1/161 Merrylands Rd<br />
                Merrylands NSW 2160
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ca-silver/20 mt-8 pt-8 text-center">
          <p className="text-ca-silver text-sm mb-4">
            Liability limited by a scheme approved under Professional Standards Legislation.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-ca-silver text-sm">
              Designed & Developed by 
              <a href="https://www.inovasolutions.ai/" 
              aria-label="Visit Inova AI Solutions website"
              target="_blank" rel="noopener noreferrer"
              className="text-ca-mango hover:text-ca-mango transition-colors"> Inova AI Solutions</a> © 2025 Chrome Accountants. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/sitemap-chrome-accountants" className="text-ca-silver hover:text-ca-mango transition-colors">Sitemap</Link>
              <Link to="/privacy-policy-chrome-accountants" className="text-ca-silver hover:text-ca-mango transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service-chrome-accountants" className="text-ca-silver hover:text-ca-mango transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
