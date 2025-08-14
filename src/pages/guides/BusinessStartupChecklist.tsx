import { ClipboardCheck } from 'lucide-react';

export default function BusinessStartupChecklist() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Business Startup Checklist
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Start your business in Australia with confidence. Follow our step-by-step guide to choose the right structure, register with ASIC & ATO, and set up your financial foundations – <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <ClipboardCheck size={48} className="text-ca-mango mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
              Essential Steps for Starting a Business in NSW
            </h2>
            <ol className="list-decimal text-[#444b53] pl-6 mb-8 space-y-4 text-left max-w-xl mx-auto">
              <li>
                <b>Choose your business structure</b>  
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Sole Trader, Company, Partnership, or Trust - consider liability, tax, and compliance. <br />
                  <b>Tip:</b> ASIC registration is required for companies; partnerships and trusts need clear agreements.
                </div>
              </li>
              <li>
                <b>Register for an ABN (Australian Business Number)</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Register via the <a href="https://www.abr.gov.au/business-super-funds-charities/applying-abn" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Australian Business Register (ABR)</a>. For companies, register your ACN first with ASIC.
                </div>
              </li>
              <li>
                <b>Register your business name (if trading under a name)</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  <a href="https://asic.gov.au/for-business/registering-a-business-name/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Register with ASIC</a>. Ensure your name doesn’t infringe trademarks.
                </div>
              </li>
              <li>
                <b>Register for taxes</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  If expected turnover is $75,000+ (or for ride-sharing/food delivery, from $1), register for GST. <br />
                  Consider PAYG withholding if hiring staff. <br />
                  <a href="https://www.ato.gov.au/Business/Registration/Business-or-company/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO Registration Info</a>
                </div>
              </li>
              <li>
                <b>Open a dedicated business bank account</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Required for companies and trusts. Highly recommended for all structures for clear record keeping.
                </div>
              </li>
              <li>
                <b>Set up bookkeeping & record-keeping systems</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Use cloud accounting software (Xero, MYOB, QuickBooks) for compliance and easy BAS lodgment.
                </div>
              </li>
              <li>
                <b>Understand your ongoing compliance</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Annual ASIC fees (companies), BAS statements (if registered for GST), payroll, and superannuation for employees.
                </div>
              </li>
              <li>
                <b>Check NSW-specific licences & permits</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Visit <a href="https://www.service.nsw.gov.au/business/nsw-licences-permits-register" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Service NSW</a> to see what applies to your industry.
                </div>
              </li>
              <li>
                <b>Review insurance needs</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Consider public liability, professional indemnity, and workers compensation insurance.
                </div>
              </li>
              <li>
                <b>Seek professional advice</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Consult an accountant (like Chrome Accountants!), solicitor, or business adviser for tailored setup and tax advice.
                </div>
              </li>
            </ol>
            <div className="text-sm text-[#7c838a] text-center">
              This checklist is a general guide for NSW and Australian businesses. For tailored advice or if unsure, contact a professional adviser.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
