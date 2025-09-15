import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavChild = { name: string; href: string; description?: string };
type NavItem  = { name: string; href?: string; children?: NavChild[] };

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopIdx, setOpenDesktopIdx] = useState<number | null>(null); // desktop hover
  const [openMobileIdx, setOpenMobileIdx] = useState<number | null>(null);   // mobile collapse
  const location = useLocation();

  const navigation: NavItem[] = [
    {
      name: 'Services', href: "/services-chrome-accountants",
      children: [
        { name: 'Bookkeeping Services', href: '/bookkeeping-services-chrome-accountants' },
        { name: 'Business Services', href: '/business-services-chrome-accountants' },
        { name: 'Individual Services', href: '/individual-services-chrome-accountants' },
      ],
    },
    { name: 'Why Us', href: '/why-us-chrome-accountants' },
    { name: 'About Us', href: '/about-us-chrome-accountants' },
    { name: 'Resources', href: '/tax-resources-chrome-accountants' },
    { name: 'AI Tax Calculator', href: '/australian-tax-calculator' },
  ];

  const isActive = (path?: string) => !!path && location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-[60]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/chrome-accountants-header-logo.avif"
              alt="Chrome Accountants Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item, idx) => {
              const hasChildren = !!item.children?.length;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.name}
                    to={item.href!}
                    className={`text-sm font-medium transition-colors hover:text-ca-mango ${
                      isActive(item.href) ? 'text-ca-mango' : 'text-ca-text'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }

              // Parent with dropdown (e.g., Services)
              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setOpenDesktopIdx(idx)}
                  onMouseLeave={() => setOpenDesktopIdx(null)}
                >
                  {/* Make parent clickable */}
                  <Link
                    to={item.href!}
                    className="inline-flex items-center gap-1 text-sm font-medium text-ca-text hover:text-ca-mango"
                    aria-haspopup="menu"
                    aria-expanded={openDesktopIdx === idx}
                    onClick={() => setOpenDesktopIdx(null)}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDesktopIdx === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    role="menu"
                    className={`
                      absolute left-0 top-full mt-2 w-56 rounded-xl border border-gray-100 bg-white shadow-xl z-50
                      transition-all duration-150
                      ${openDesktopIdx === idx ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}
                    `}
                  >
                    {item.children!.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        role="menuitem"
                        className="block px-4 py-2.5 text-sm text-ca-blue hover:bg-gray-50 hover:text-ca-mango"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center gap-4">
            {navigation.slice(0, 3).map((item, idx) => (
              <Link
                key={item.name}
                to={item.href!}
                className={`text-sm font-medium transition-colors hover:text-ca-mango ${
                  isActive(item.href) ? 'text-ca-mango' : 'text-ca-text'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA and Client Login */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link
              to="/login"
              className="text-sm font-medium text-ca-text hover:text-ca-blue transition-colors"
            >
              Client Login
            </Link>
            <Link
              to="/contact-chrome-accountants"
              className="bg-ca-mango text-ca-blue px-4 lg:px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-md text-sm lg:text-base"
            >
              Book a Session
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
              setOpenMobileIdx(null);
            }}
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-ca-blue" />
            ) : (
              <Menu className="h-6 w-6 text-ca-blue" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-nav" className="lg:hidden py-4 border-t">
            <nav className="flex flex-col">
              {navigation.map((item, idx) => {
                const hasChildren = !!item.children?.length;

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href!}
                      className={`px-2 py-3 text-sm font-medium transition-colors hover:text-ca-mango ${
                        isActive(item.href) ? 'text-ca-mango' : 'text-ca-text'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                }

                // Collapsible for Services on mobile
                return (
                  <div key={item.name} className="border-b last:border-0">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-2 py-3 text-left text-sm font-medium text-ca-text hover:text-ca-mango"
                      onClick={() =>
                        setOpenMobileIdx(openMobileIdx === idx ? null : idx)
                      }
                      aria-expanded={openMobileIdx === idx}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openMobileIdx === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {openMobileIdx === idx && (
                      <div className="pb-2">
                        {/* Optional: quick access to parent page on mobile */}
                        <Link
                          to={item.href!}
                          className="block pl-6 pr-2 py-2 text-sm font-semibold text-ca-text hover:text-ca-mango"
                          onClick={() => setIsOpen(false)}
                        >
                          All Services
                        </Link>
                        {item.children!.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block pl-6 pr-2 py-2 text-sm text-ca-blue hover:text-ca-mango"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                to="/login"
                className="px-2 py-3 text-sm font-medium text-ca-text hover:text-ca-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Client Login
              </Link>
              <Link
                to="/contact-chrome-accountants"

                className="mx-2 mt-2 bg-ca-mango text-ca-blue px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all w-fit"
                onClick={() => setIsOpen(false)}
              >
                Book a Session
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
