// src/pages/work-related-deductions-nsw.tsx
import { ClipboardList } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function WorkRelatedDeductionsNSW() {
  const pageTitle = "Work-Related Deductions - NSW | Chrome Accountants";
  const metaDescription =
    "Work-Related Deductions for NSW and Sydney taxpayers - common eligible expenses, record keeping tips, substantiation rules, and ATO compliance checks.";

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
              Work-Related Deductions - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Work-Related Deductions for NSW and Sydney individuals - learn which expenses you can claim, how to keep the right records, and avoid ATO audit issues <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center">
              <ClipboardList size={48} className="text-ca-mango mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
                Eligible work-related deductions for Sydney and NSW taxpayers
              </h2>
            </div>

            <div className="text-[#444b53] leading-relaxed text-[15.5px] space-y-6">
              <h3 className="text-xl font-semibold text-ca-blue">The three golden rules for NSW deductions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must have spent the money yourself and not been reimbursed by your NSW employer.</li>
                <li>The expense must be directly related to earning your income.</li>
                <li>You must keep a record (such as a receipt, logbook, or diary) to prove the claim.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Common deductible expenses in NSW</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Protective clothing and uniforms</b> - occupation specific clothing, protective gear, or registered uniforms. Laundry claims require evidence if above $150 per year.</li>
                <li><b>Tools and equipment</b> - small tools under $300 can be claimed immediately, larger items depreciated over time.</li>
                <li><b>Work-related travel</b> - car expenses for work trips (excluding travel to and from your regular Sydney workplace) using the cents per kilometre or logbook method.</li>
                <li><b>Home office expenses</b> - electricity, internet, phone, and decline in value of office furniture or equipment. Follow the ATO method and keep hourly records.</li>
                <li><b>Union fees and professional memberships</b> - paid to organisations directly related to your employment in NSW.</li>
                <li><b>Self-education and training</b> - directly related to your current employment duties. Includes course fees, textbooks, and travel to the course venue.</li>
                <li><b>Other expenses</b> - work related subscriptions, stationery, overtime meals under ATO rules, and work-related portion of phone bills.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Travel and car deductions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep a logbook for 12 continuous weeks if you want to use the logbook method. Record odometer readings, trip purposes, and kilometres.</li>
                <li>The cents per kilometre method can be used up to 5,000 work-related kilometres per year per vehicle.</li>
                <li>Travel between separate workplaces or to alternative work sites in Sydney may be deductible.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Record keeping for ATO compliance</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep digital or paper copies of all receipts and invoices showing the supplier, amount, date, and description.</li>
                <li>Maintain a diary for work-related use of assets or phone/internet where split with private use.</li>
                <li>Retain records for 5 years from the date of lodging your NSW tax return.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Common mistakes NSW taxpayers make</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Claiming expenses without receipts or proof of use for work.</li>
                <li>Including personal travel or private use of assets in full without apportionment.</li>
                <li>Claiming standard amounts without evidence. The ATO does not allow "automatic" claims.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">ATO audit focus areas for Sydney taxpayers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>High claims for home office expenses without diary records.</li>
                <li>Car expense claims inconsistent with occupation or employer details.</li>
                <li>Travel expense claims without travel diaries for overnight trips.</li>
              </ul>

              <div className="p-4 bg-[#f1f5f9] rounded-md text-[14px]">
                <b>Important:</b> This guide provides general information for NSW and Sydney residents. Rules can change and your circumstances matter. Confirm current ATO requirements or consult a registered tax agent.
              </div>

              <h3 className="text-xl font-semibold text-ca-blue">Helpful links</h3>
              <p className="text-[15px]">
                <a href="https://www.ato.gov.au/Individuals/Income-and-deductions/Deductions-you-can-claim/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Deductions you can claim</a>{" "}
                |{" "}
                <a href="https://www.ato.gov.au/Individuals/Income-and-deductions/In-detail/Record-keeping-for-deductions/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Record keeping</a>{" "}
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
