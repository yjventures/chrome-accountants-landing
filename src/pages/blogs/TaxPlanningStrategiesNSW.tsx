// src/pages/tax-planning-strategies-nsw.tsx
import { TrendingUp } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function TaxPlanningStrategiesNSW() {
  const pageTitle = "Tax Planning Strategies - NSW | Chrome Accountants";
  const metaDescription =
    "Tax Planning Strategies for NSW and Sydney small businesses - timing income and deductions, super strategies, GST choices, and NSW specific issues to review before 30 June.";

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
              Tax Planning Strategies - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Tax Planning Strategies for NSW and Sydney businesses - practical steps to manage cash flow, optimise deductions, and stay compliant with ATO rules <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center">
              <TrendingUp size={48} className="text-ca-mango mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
                Year round tax planning checklist for Sydney and NSW
              </h2>
            </div>

            <div className="text-[#444b53] leading-relaxed text-[15.5px] space-y-6">
              <p>
                Effective tax planning starts early. The strategies below are general information for NSW and Sydney and should be checked against current ATO guidance before you act.
              </p>

              <h3 className="text-xl font-semibold text-ca-blue">1) Time income and deductions carefully</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Issue invoices and receive payments with cash flow in mind. Consider whether bringing forward or deferring income is appropriate for your NSW business.</li>
                <li>Prepay up to 12 months of deductible expenses where allowed, such as rent or insurance, if this suits your cash flow.</li>
                <li>Write off obsolete stock and review debtor balances before year end.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">2) Review asset purchases</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Check the current ATO rules for immediate deductions and depreciation for small businesses. Thresholds and eligibility can change. Confirm the rate and dates before purchasing plant, tools, or technology.</li>
                <li>Keep tax invoices and ensure the asset is installed ready for use by the relevant date to claim for that income year.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">3) Superannuation strategies</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pay employee super by the due dates to claim a deduction. Payments must clear the fund to be deductible in that year.</li>
                <li>Consider personal deductible contributions within your cap. Obtain a valid notice of intent and keep confirmations.</li>
                <li>For company owners in Sydney, align director fees, wages, and super to support both cash flow and compliance.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">4) Manage GST and BAS</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Choose cash or accrual accounting based on your business model. Many NSW service businesses prefer cash for smoother BAS outcomes.</li>
                <li>Reconcile GST control accounts to supporting reports each period and keep valid tax invoices.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">5) Motor vehicle and home based business</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep a 12 week logbook for business use of a car if you want to use the logbook method. Retain running cost records and consider fringe benefits tax if a vehicle is available for private use.</li>
                <li>For home office, record actual additional running costs that meet ATO rules. Keep contemporaneous records.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">6) Structure, profit allocation, and PSI rules</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Company, trust, or sole trader - review whether your structure still fits your NSW risk profile and growth plans.</li>
                <li>If you operate a trust, plan distributions before 30 June and prepare trustee resolutions on time.</li>
                <li>Check the Personal Services Income rules if most income is from your personal effort. These rules can restrict income splitting.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">7) NSW specific matters to watch</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payroll tax - if your NSW wages exceed the current threshold, register with Revenue NSW and lodge on time. Review grouping rules if you have related entities.</li>
                <li>Land tax - for Sydney property investors, confirm land tax obligations and keep records of exemptions where applicable.</li>
                <li>Keep an eye on Service NSW grants or rebates that may affect taxable income or GST treatment.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">8) PAYG instalments and cash flow</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Review your PAYG instalments after significant profit changes. You can vary instalments with a reasonable basis to avoid large year end balances.</li>
                <li>Set aside GST, PAYG withholding, and super each week to avoid bill shock.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">9) Record keeping and evidence</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Retain receipts, contracts, bank statements, and workpapers for at least 5 years.</li>
                <li>Attach documents in your accounting software for a clear audit trail that meets ATO expectations.</li>
              </ul>

              <div className="p-4 bg-[#f1f5f9] rounded-md text-[14px]">
                <b>Important:</b> This page is general information for NSW and Sydney. Thresholds, rates, and concessions change. Confirm current rules on the ATO and Revenue NSW websites or seek advice from a registered tax agent.
              </div>

              <div className="text-sm text-[#7c838a]">
                Helpful links:{" "}
                <a href="https://www.ato.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO</a>{" "}
                |{" "}
                <a href="https://www.revenue.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Revenue NSW</a>{" "}
                |{" "}
                <a href="https://www.service.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Service NSW</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
