import { TrendingUp } from 'lucide-react';

export default function FinancialHealthChecklist() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Financial Health Checklist
            </h1>
            <p className="text-xl lg:text-2xl text-ca-white leading-relaxed">
              Assess your business’s financial fitness with our practical checklist - built for SMEs and entrepreneurs in Sydney & Australia.
              <span className="text-ca-mango"> <b>Powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <TrendingUp size={48} className="text-ca-mango mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
              Chrome Financial Health System™ Checklist
            </h2>
            <ol className="list-decimal text-[#444b53] pl-6 mb-8 space-y-4 text-left max-w-xl mx-auto">
              <li>
                <b>Cash flow review</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Track inflows/outflows monthly. Ensure you have at least 3 months of operating expenses in reserve. Use a separate business account.
                </div>
              </li>
              <li>
                <b>Profitability check</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Review gross/net profit margins and expenses quarterly. Compare to ATO industry benchmarks for your sector.
                </div>
              </li>
              <li>
                <b>Compliance health</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Are BAS/GST/super lodged and paid on time? Are your ASIC and business registrations up to date?  
                  <a href="https://www.ato.gov.au/businesses-and-organisations/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO Business Portal</a>
                </div>
              </li>
              <li>
                <b>Tax planning & forecasting</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Meet with your tax adviser at least once a year before EOFY. Review potential deductions, losses, and small business concessions.
                </div>
              </li>
              <li>
                <b>Debt & liability check</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  List all business debts. Is your debt manageable? Can you negotiate better rates? Prioritise paying down high-interest liabilities.
                </div>
              </li>
              <li>
                <b>Insurance & risk management</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Review business insurance policies annually. Does your cover reflect your current risks (public liability, cyber, professional indemnity, workers comp)?
                </div>
              </li>
              <li>
                <b>Growth & succession planning</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Do you have a growth strategy? Have you considered business continuity, succession, or exit planning?
                </div>
              </li>
              <li>
                <b>Record keeping & technology</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Are your records digital, organised, and ATO-compliant? Consider using cloud platforms for invoicing, payroll, and reporting.
                </div>
              </li>
            </ol>
            <div className="text-sm text-[#7c838a] text-center">
              <b>Tip:</b> Review your business health every quarter, not just at tax time. NSW and ATO rules change regularly - stay updated via your adviser or <a href="https://www.service.nsw.gov.au/business" className="text-ca-blue underline" target="_blank" rel="noopener noreferrer">Service NSW Business</a>.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
