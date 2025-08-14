import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const pages = [
  { path: "/", label: "Home" },
  { path: "/about-us-chrome-accountants", label: "About Us" },
  { path: "/services-chrome-accountants", label: "Services" },
  { path: "/why-us-chrome-accountants", label: "Why Us" },
  { path: "/resources-chrome-accountants", label: "Resources" },
  { path: "/contact-chrome-accountants", label: "Contact" },
  { path: "/client-login-chrome-accountants", label: "Client Login" },
  { path: "/privacy-policy-chrome-accountants", label: "Privacy Policy" },
  { path: "/terms-of-service-chrome-accountants", label: "Terms of Service" },
  { path: "/australian-tax-calculator", label: "Australian Tax Calculator" },
  { path: "/business-startup-checklist", label: "Business Startup Checklist" },
  { path: "/tax-deduction-guide", label: "Tax Deduction Guide" },
  { path: "/financial-health-checklist", label: "Financial Health Checklist" },
  { path: "/bookkeeping-service-booking", label: "Bookkeeping Service Booking" },
  { path: "/business-service-booking", label: "Business Service Booking" },
  { path: "/individual-service-booking", label: "Individual Service Booking" },
  { path: "/bookkeeping-services-chrome-accountants", label: "Bookkeeping Services" },
  { path: "/business-services-chrome-accountants", label: "Business Services" },
  { path: "/individual-services-chrome-accountants", label: "Individual Services" },
  { path: "/gst-registration-guide-nsw-chrome-accountants", label: "GST Registration Guide (NSW)" },
  { path: "/bookkeeping-basics-nsw-chrome-accountants", label: "Bookkeeping Basics (NSW)" },
  { path: "/tax-planning-strategies-nsw-chrome-accountants", label: "Tax Planning Strategies (NSW)" },
  { path: "/payroll-compliance-checklist-nsw-chrome-accountants", label: "Payroll Compliance Checklist (NSW)" },
  { path: "/investment-property-tax-tips-nsw-chrome-accountants", label: "Investment Property Tax Tips (NSW)" },
  { path: "/work-related-deductions-nsw-chrome-accountants", label: "Work-Related Deductions (NSW)" },
  { path: "/cryptocurrency-tax-guide-nsw-chrome-accountants", label: "Cryptocurrency Tax Guide (NSW)" },
  { path: "/business-structure-comparison-nsw-chrome-accountants", label: "Business Structure Comparison (NSW)" },
  { path: "/startup-financial-planning-template-nsw-chrome-accountants", label: "Startup Financial Planning Template (NSW)" },
  { path: "/registration-requirements-nsw-chrome-accountants", label: "Registration Requirements (NSW)" },
  { path: "/first-year-tax-tips-nsw-chrome-accountants", label: "First-Year Tax Tips (NSW)" }
];

export default function Sitemap() {
  const title200chars =
    "Sitemap | Chrome Accountants Sydney NSW  -  explore our full list of services, resources, guides, calculators, booking pages, and expert tax advice covering bookkeeping, BAS, GST, payroll, business structure comparison, work-related deductions, and more | Navigate directly to any page and discover how our registered tax agents deliver ATO-compliant, transparent, and growth-focused support for businesses and individuals across Australia";

  const metaDescription =
    "Human-readable sitemap of Chrome Accountants Sydney NSW. Browse all pages including services, guides, calculators, booking forms, and resources.";

  const metaKeywords =
    "sitemap, Chrome Accountants, Sydney, NSW, tax returns, bookkeeping, BAS, GST, payroll, business services, individual services, resources, guides";

  return (
    <>
      <Helmet>
        <title>{title200chars}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        {/* Optional: Social tags */}
        <meta property="og:title" content={title200chars} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:title" content={title200chars} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
          <p className="mb-8 text-gray-700">
            Here’s a complete list of all pages on Chrome Accountants. Click any link to navigate directly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="block border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
