import { Home, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function StampDutyLandTaxNSW() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Stamp Duty & Land Tax in NSW: What’s Deductible and What’s Not
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Buying or owning property in NSW? Understand how stamp duty and land tax work, and 
              when these expenses are deductible for Australian taxpayers. <span className="text-ca-mango"><b>Powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-4">
              <Home size={48} className="text-ca-mango" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-ca-blue text-center">
              How Stamp Duty & Land Tax Apply in NSW
            </h2>

            {/* Stamp Duty */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-ca-blue mb-3">Stamp Duty (Transfer Duty)</h3>
              <ul className="list-disc pl-6 text-[#444b53] space-y-3">
                <li>
                  Stamp duty is a <b>state tax</b> charged on property purchases in NSW.
                </li>
                <li>
                  Paid upfront when you buy property. Rates depend on property value, type, and whether you are a first-home buyer.
                  <a
                    href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/transfer-duty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ca-blue underline ml-1"
                  >
                    Revenue NSW calculator
                  </a>.
                </li>
                <li>
                  <b>Deductibility:</b> Stamp duty on acquiring a property is <b>not tax deductible</b> for individuals.
                  For investment properties, it is added to the <b>cost base</b> for CGT purposes.
                </li>
              </ul>
            </div>

            {/* Land Tax */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-ca-blue mb-3">Land Tax</h3>
              <ul className="list-disc pl-6 text-[#444b53] space-y-3">
                <li>
                  Land tax is an annual tax on landholdings above the threshold in NSW (excluding your principal place of residence).
                </li>
                <li>
                  <b>Deductibility:</b> Land tax on investment properties <b>is deductible</b> against rental income in your tax return.
                </li>
                <li>
                  Thresholds and rates are updated annually by Revenue NSW.
                  <a
                    href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/land-tax"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ca-blue underline ml-1"
                  >
                    Revenue NSW Land Tax info
                  </a>.
                </li>
              </ul>
            </div>

            {/* Common Misunderstandings */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-ca-blue mb-3">Common Misunderstandings</h3>
              <div className="space-y-4 text-[#444b53]">
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>Thinking stamp duty is deductible in the year paid  - it isn’t.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>Not claiming land tax on rental properties as a deduction against rental income.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>Confusing state-based rules (NSW) with federal tax deductions (ATO).</p>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="mt-10 flex gap-3 items-start bg-[#fff7ed] border border-[#fcd34d] rounded-lg p-4">
              <AlertCircle className="shrink-0 text-[#f59e0b]" />
              <p className="text-[15px] text-[#6a6c6e]">
                Stamp duty rules vary by state and depend on property type and value.
                Land tax thresholds change annually. Always check the current Revenue NSW guidance.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <a
                href="/contact-chrome-accountants"
                className="inline-block bg-ca-mango text-white font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition"
                aria-label="Get NSW property tax advice"
              >
                Get NSW Property Tax Advice
              </a>
              <p className="text-sm text-[#6a6c6e] mt-3">
                Investment property tax advice • Land tax deductions • CGT planning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white pb-14">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-center text-sm text-[#7c838a]">
            This page provides general information for NSW property owners. 
            Stamp duty is not deductible but may form part of your cost base for CGT. 
            Land tax on investment properties is deductible. 
            Confirm current thresholds and rates at{' '}
            <a
              href="https://www.revenue.nsw.gov.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ca-blue underline"
            >
              Revenue NSW
            </a>{' '}
            and seek advice from a registered tax agent for your circumstances.
          </p>
        </div>
      </section>
    </>
  );
}
