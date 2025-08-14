// src/pages/tax-return-preparation-guide-nsw.tsx
import { FileText } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function TaxReturnPreparationGuideNSW() {
  const pageTitle = "Tax Return Preparation Guide - NSW | Chrome Accountants";
  const metaDescription =
    "Tax Return Preparation Guide for NSW and Sydney individuals - what records to keep, common deductions, myTax vs tax agent, due dates, Medicare levy, and residency notes.";

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
              Tax Return Preparation Guide - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Tax Return Preparation Guide for NSW and Sydney individuals - use this step by step guide to organise records, claim eligible deductions, and lodge on time <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center">
              <FileText size={48} className="text-ca-mango mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
                What to prepare before lodging in Sydney or anywhere in NSW
              </h2>
            </div>

            <div className="text-[#444b53] leading-relaxed text-[15.5px] space-y-6">
              <h3 className="text-xl font-semibold text-ca-blue">1) Key dates and how to lodge</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Lodgment window:</b> Income year 1 July to 30 June. Self lodgers generally lodge by 31 October. Registered tax agents in NSW have extended dates if you are on their lodgment list.</li>
                <li><b>Ways to lodge:</b> ATO myTax, a registered tax agent, or by paper. Most Sydney residents use myTax or an agent.</li>
                <li><b>Pre fill:</b> Wait until late July or August for more complete pre fill data from employers, banks, and health funds.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">2) Identification and personal details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tax File Number, date of birth, and current NSW residential address.</li>
                <li>Bank account details for refunds.</li>
                <li>Private health insurance statements for Medicare levy surcharge assessment.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">3) Income records to gather</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Income statements from employers via STP (visible in myGov).</li>
                <li>Interest, dividends, and managed fund statements.</li>
                <li>Business or contractor income if you are a NSW sole trader - invoices, bank statements, and workpapers.</li>
                <li>Rental property income statements from your NSW property manager.</li>
                <li>Capital gains events - contract dates and statements for shares or Sydney property sales.</li>
                <li>Government payments and any foreign income.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">4) Common deductions for NSW individuals</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Work related expenses:</b> uniforms or occupation specific clothing, protective items, tools, professional memberships, union fees, phone and internet percentage, work related travel within ATO rules. Keep receipts and diaries.</li>
                <li><b>Working from home:</b> Use an eligible ATO method. Keep a record of hours and evidence of expenses.</li>
                <li><b>Self education:</b> Course fees and materials that maintain or improve current income earning activities. Exclusions and limits apply.</li>
                <li><b>Donations:</b> Gifts to Deductible Gift Recipients with valid receipts.</li>
                <li><b>Personal super contributions:</b> If eligible, lodge a notice of intent with your fund and receive acknowledgment before claiming.</li>
                <li><b>Rental property deductions:</b> Interest, council rates, strata, repairs, agent fees, insurance, and depreciation where eligible for NSW properties.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">5) Offsets and Medicare amounts</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Check low and middle income based offsets available for the year.</li>
                <li>Medicare levy is generally 2 percent of taxable income. The Medicare levy surcharge can apply without sufficient private hospital cover if income exceeds the thresholds.</li>
                <li>Private health information from your fund assists the correct calculation in myTax.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">6) Residency and moving to or from NSW</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tax residency is based on Australian rules, not only your NSW address. Records of arrival and departure dates help if you moved during the year.</li>
                <li>Foreign income and capital gains may need to be included depending on residency status. Keep foreign tax paid evidence for any offsets.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">7) Final checks before you lodge</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Compare pre fill amounts to your own records.</li>
                <li>Attach or retain evidence for every deduction claimed. Keep for at least 5 years for ATO review.</li>
                <li>Confirm bank details and contact information are current for your Sydney address.</li>
                <li>If unsure, contact a registered tax agent in NSW for tailored advice.</li>
              </ol>

              <div className="p-4 bg-[#f1f5f9] rounded-md text-[14px]">
                <b>Important:</b> This guide is general information for NSW and Sydney residents. It does not consider your personal circumstances. Confirm current rules on the ATO website or seek advice from a registered tax agent before lodging.
              </div>

              <h3 className="text-xl font-semibold text-ca-blue">Helpful links</h3>
              <p className="text-[15px]">
                <a href="https://www.ato.gov.au/Individuals/Lodging-your-tax-return/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Lodging your tax return</a>{" "}
                |{" "}
                <a href="https://www.servicesaustralia.gov.au/medicare-levy" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Medicare levy overview</a>{" "}
                |{" "}
                <a href="https://www.service.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Service NSW</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
