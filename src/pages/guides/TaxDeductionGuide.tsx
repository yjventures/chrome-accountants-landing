import { FileText } from 'lucide-react';

export default function TaxDeductionGuide() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tax Deduction Guide
            </h1>
            <p className="text-xl lg:text-2xl text-ca-white leading-relaxed">
              Maximise your tax refund with our comprehensive, easy-to-read deduction guide - updated for the current financial year and tailored for individuals & small businesses in Australia.
              <span className="text-ca-mango"> <b>Powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Deduction Guide Section */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <FileText size={48} className="text-ca-mango mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
              Common Deductions for Individuals & Businesses (2024–25)
            </h2>
            <ul className="list-disc text-[#444b53] pl-6 mb-8 space-y-4 text-left max-w-xl mx-auto">
              <li>
                <b>Work-related expenses (Individuals):</b>  
                Uniforms, tools, self-education, home office, professional subscriptions. <br />
                <span className="text-[14px] text-[#6a6c6e]">Must be directly related to your income and not reimbursed by employer.</span>
              </li>
              <li>
                <b>Motor vehicle & travel expenses:</b>  
                Deductible if used for business/work purposes (logbook or cents-per-km method). Commuting from home to work is <b>not</b> deductible.
              </li>
              <li>
                <b>Home office expenses:</b>  
                Electricity, phone, internet, depreciation of equipment. Special rules apply if you run your business from home. See ATO's <a href="https://www.ato.gov.au/Individuals/Income-and-deductions/Deductions-you-can-claim/Home-office-expenses/" className="text-ca-blue underline" target="_blank" rel="noopener noreferrer">home office guide</a>.
              </li>
              <li>
                <b>Donations to registered charities:</b>  
                Gifts over $2 to DGR charities are deductible. Keep receipts!
              </li>
              <li>
                <b>Business expenses (Sole traders, Companies, Trusts):</b>
                <ul className="list-disc pl-5 mt-2 text-[15px] text-[#6a6c6e] space-y-2">
                  <li>Business-related software, website costs, and digital subscriptions</li>
                  <li>Professional fees (accountants, legal)</li>
                  <li>Interest on business loans, bank fees</li>
                  <li>Employee wages, superannuation, contractor payments</li>
                  <li>Advertising, marketing, insurance, and rent</li>
                  <li>Tools, equipment (instant asset write-off rules apply)</li>
                  <li>Bad debts (must be written off in same financial year)</li>
                </ul>
              </li>
              <li>
                <b>Superannuation contributions:</b>  
                Personal and employer contributions may be deductible - must be paid before 30 June.
              </li>
              <li>
                <b>Prepaid expenses:</b>  
                "Small businesses (Less than $50m turnover) can claim prepaid expenses for up to 12 months in advance.""
              </li>
              <li>
                <b>Record keeping tips:</b>  
                Keep digital or physical receipts, bank statements, invoices. The ATO requires you to keep records for at least 5 years.
              </li>
            </ul>
            <div className="text-sm text-[#7c838a] text-center">
              <b>Note:</b> Deductibility depends on your individual/business situation. For official info see the <a href="https://www.ato.gov.au/Individuals/Income-and-deductions/Deductions-you-can-claim/" className="text-ca-blue underline" target="_blank" rel="noopener noreferrer">ATO Deductions Guide</a>.<br />
              Always seek advice from a registered tax agent for personal or complex claims.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
