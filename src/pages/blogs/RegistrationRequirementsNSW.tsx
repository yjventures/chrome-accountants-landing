// src/pages/registration-requirements-nsw.tsx
import { Contact } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function RegistrationRequirementsNSW() {
  const pageTitle = "Registration Requirements - NSW | Chrome Accountants";
  const metaDescription =
    "Registration Requirements for NSW and Sydney startups - ABN, business name, company ACN, GST, PAYG withholding, STP, workers compensation, payroll tax, and NSW licences.";

  return (
    <>
      {/* <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index,follow" />
      </Helmet> */}

      {/* Hero */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Registration Requirements - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Registration Requirements for NSW and Sydney businesses - follow this step by step list to register with ABR, ASIC, and the ATO, then complete NSW state obligations <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center">
              <Contact size={48} className="text-ca-mango mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
                Step by step registrations for Sydney and NSW
              </h2>
            </div>

            <ol className="list-decimal pl-6 text-[#444b53] leading-relaxed text-[15.5px] space-y-5">
              <li>
                <b>Choose your structure</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Sole trader, Company, Partnership, or Trust. Your choice affects liability, tax, and setup in NSW. If in doubt, obtain advice before you register.
                </div>
              </li>

              <li>
                <b>Apply for an ABN via the Australian Business Register</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  All NSW businesses require an ABN to invoice and register for other obligations. Apply online at the ABR. Companies will need an ACN first from ASIC.
                  <div className="mt-1">
                    <a href="https://www.abr.gov.au/business-super-funds-charities/applying-abn" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ABR - Apply for an ABN</a>
                  </div>
                </div>
              </li>

              <li>
                <b>Register or reserve your business name with ASIC if trading under a name</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Not required if you trade as your own personal name. Check availability and register nationally with ASIC.
                  <div className="mt-1">
                    <a href="https://asic.gov.au/for-business/registering-a-business-name/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ASIC - Business names</a>
                  </div>
                </div>
              </li>

              <li>
                <b>Company setup in NSW</b> <span className="text-xs text-[#9aa0a6]">(skip if not a company)</span>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Incorporate a Pty Ltd with ASIC to obtain an ACN. Appoint directors who hold Director IDs. Adopt a constitution and create share registers.
                  <div className="mt-1">
                    <a href="https://asic.gov.au/for-business/starting-a-company/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ASIC - Starting a company</a>
                  </div>
                </div>
              </li>

              <li>
                <b>Register with the ATO for tax obligations</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e] space-y-1">
                  <div><b>GST</b> - register if turnover is expected to be AUD 75,000 or more, or from day one for ride sharing and food delivery.</div>
                  <div><b>PAYG withholding</b> - register before paying staff or certain contractors in NSW.</div>
                  <div><b>TFN</b> - obtain for your entity type if required.</div>
                  <div className="mt-1">
                    <a href="https://www.ato.gov.au/business/registration/business-or-company/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Business registrations</a>
                  </div>
                </div>
              </li>

              <li>
                <b>Enable Single Touch Payroll in your payroll software</b> <span className="text-xs text-[#9aa0a6]">(skip if no employees yet)</span>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Map income types, allowances, deductions, and super to STP Phase 2 categories and connect to the ATO.
                  <div className="mt-1">
                    <a href="https://www.ato.gov.au/business/single-touch-payroll/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - STP</a>
                  </div>
                </div>
              </li>

              <li>
                <b>Set up workers compensation insurance with icare NSW</b> <span className="text-xs text-[#9aa0a6]">(when you hire)</span>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Employers in Sydney and wider NSW must obtain a workers compensation policy once they employ workers.
                  <div className="mt-1">
                    <a href="https://www.icare.nsw.gov.au/employers" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">icare NSW - Employers</a>
                  </div>
                </div>
              </li>

              <li>
                <b>Check NSW payroll tax with Revenue NSW</b> <span className="text-xs text-[#9aa0a6]">(only if wages exceed threshold or entities are grouped)</span>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  If your NSW taxable wages exceed the current threshold, register and lodge on time. Review grouping rules for related entities with Sydney staff.
                  <div className="mt-1">
                    <a href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/payroll-tax" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Revenue NSW - Payroll tax</a>
                  </div>
                </div>
              </li>

              <li>
                <b>Apply for NSW licences and local permits through Service NSW</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Industry licences can include food business approvals, trade licences, health and beauty, construction, and short term rental registrations. Check council rules for your Sydney LGA.
                  <div className="mt-1">
                    <a href="https://www.service.nsw.gov.au/business/nsw-licences-permits-register" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Service NSW - Licence Check</a>
                  </div>
                </div>
              </li>

              <li>
                <b>Open a dedicated NSW business bank account</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Essential for companies and trusts, strongly recommended for all structures. Use the exact legal or registered business name on the account.
                </div>
              </li>

              <li>
                <b>Register for domain, website, and privacy compliance</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Use an Australian domain if relevant, publish a privacy policy and terms that reflect Australian Privacy Act requirements, and set up secure payment gateways for Sydney customers.
                </div>
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-ca-blue mt-8 mb-2 text-center">
              Helpful links for NSW registrations
            </h3>
            <p className="text-center text-[15px] text-[#6a6c6e]">
              <a href="https://www.abr.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ABR</a> |{" "}
              <a href="https://asic.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ASIC</a> |{" "}
              <a href="https://www.ato.gov.au/business/registration/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Registration</a> |{" "}
              <a href="https://www.service.nsw.gov.au/business" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Service NSW - Business</a> |{" "}
              <a href="https://www.revenue.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Revenue NSW</a> |{" "}
              <a href="https://www.icare.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">icare NSW</a>
            </p>

            <div className="mt-6 p-4 bg-[#f1f5f9] rounded-md text-[14px] text-[#444b53]">
              <b>Important:</b> This page provides general registration information for NSW and Sydney. Laws, thresholds, and licence rules change. Confirm current requirements on the official sites above or obtain advice from a registered professional.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
