import { Briefcase, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export default function IndependentContractorDeductions() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tax Deductions Every Independent Contractor in NSW Should Know
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              If you’re a contractor in NSW, you may be eligible to claim a wide range of deductions. 
              Here’s a clear guide to help reduce your taxable income while staying compliant with ATO rules. <span className="text-ca-mango"><b>Powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Deduction Guide */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-4">
              <Briefcase size={48} className="text-ca-mango" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-ca-blue text-center">
              Common Contractor Deductions (NSW & Australia)
            </h2>

            <ul className="list-disc pl-6 space-y-4 text-[#444b53]">
              <li>
                <b>Tools & equipment:</b> Power tools, laptops, and software directly related to your work.
                Instant asset write-off rules may apply (subject to ATO thresholds).
              </li>
              <li>
                <b>Motor vehicle expenses:</b> If you use your car for work (not commuting), claim logbook or cents-per-km method.
              </li>
              <li>
                <b>Home office expenses:</b> Electricity, internet, phone bills, and depreciation of office furniture/equipment.
              </li>
              <li>
                <b>Protective clothing & uniforms:</b> Safety gear, high-visibility clothing, or branded uniforms.
              </li>
              <li>
                <b>Work-related travel:</b> Accommodation, meals, and flights for business trips (not personal travel).
              </li>
              <li>
                <b>Training & education:</b> Courses, certifications, and seminars that improve or maintain your current skills.
              </li>
              <li>
                <b>Insurance:</b> Professional indemnity, public liability, or other business-related cover.
              </li>
              <li>
                <b>Superannuation contributions:</b> Personal contributions may be deductible if lodged with a Notice of Intent.
              </li>
              <li>
                <b>Professional services:</b> Accounting, bookkeeping, and legal fees linked to your contracting business.
              </li>
            </ul>

            {/* Tips */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-ca-blue mb-3">Tips for Contractors</h3>
              <div className="space-y-4 text-[#444b53]">
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>Keep receipts and invoices for at least <b>5 years</b>.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>Separate business and personal bank accounts for clear records.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>Use accounting software (Xero, MYOB, QuickBooks) for easy BAS and tax return prep.</p>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="mt-10 flex gap-3 items-start bg-[#fff7ed] border border-[#fcd34d] rounded-lg p-4">
              <AlertCircle className="shrink-0 text-[#f59e0b]" />
              <p className="text-[15px] text-[#6a6c6e]">
                The ATO closely monitors contractors for compliance with <b>Personal Services Income (PSI)</b> rules.
                Deductions must directly relate to earning assessable income. Incorrect claims may lead to audits or penalties.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <a
                href="/contact-chrome-accountants"
                className="inline-block bg-ca-mango text-white font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition"
                aria-label="Get contractor tax advice in NSW"
              >
                Get Contractor Tax Advice in NSW
              </a>
              <p className="text-sm text-[#6a6c6e] mt-3">
                Contractor-friendly support • BAS & GST help • PSI compliance checks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white pb-14">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-center text-sm text-[#7c838a]">
            This page provides general information for independent contractors in NSW. 
            Deductibility depends on your circumstances and PSI rules may apply. 
            Always seek advice from a registered tax agent or accountant.  
            For more, see the{' '}
            <a
              href="https://www.ato.gov.au/Business/Income-and-deductions-for-business/Deductions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ca-blue underline"
            >
              ATO’s contractor deductions guidance
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
