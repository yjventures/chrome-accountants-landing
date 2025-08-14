// src/pages/business-structure-comparison-nsw.tsx
import { Scale } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function BusinessStructureComparisonNSW() {
  const pageTitle = "Business Structure Comparison - NSW | Chrome Accountants";
  const metaDescription =
    "Business Structure Comparison for NSW and Sydney founders - sole trader, company, partnership, and trust compared on liability, tax, setup, costs, and compliance.";

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
              Business Structure Comparison - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Business Structure Comparison for NSW and Sydney entrepreneurs - understand the key differences between a Sole Trader, Company, Partnership, and Trust so you can choose the right fit <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center">
              <Scale size={48} className="text-ca-mango mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
                Compare NSW business structures at a glance
              </h2>
            </div>

            {/* Responsive table */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-[#444b53]">
                <thead className="bg-[#f1f5f9] text-[#0e2a47]">
                  <tr>
                    <th className="p-3">Feature</th>
                    <th className="p-3">Sole Trader</th>
                    <th className="p-3">Company (Pty Ltd)</th>
                    <th className="p-3">Partnership</th>
                    <th className="p-3">Discretionary Trust</th>
                  </tr>
                </thead>
                <tbody className="[&_td]:align-top">
                  <tr className="border-b">
                    <td className="p-3 font-semibold">Legal status</td>
                    <td className="p-3">No separate legal entity. You are the business.</td>
                    <td className="p-3">Separate legal entity registered with ASIC in NSW or nationally.</td>
                    <td className="p-3">Two or more people or entities carry on business together under a partnership agreement.</td>
                    <td className="p-3">Trustee holds assets for beneficiaries under a trust deed. Often with a corporate trustee.</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-3 font-semibold">Liability</td>
                    <td className="p-3">Unlimited personal liability for NSW debts and claims.</td>
                    <td className="p-3">Limited to company assets. Directors can be liable for breaches and certain debts.</td>
                    <td className="p-3">Joint and several liability for partners for NSW debts and obligations.</td>
                    <td className="p-3">Generally limited at the trustee level. Corporate trustee helps ring fence risk.</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-3 font-semibold">Tax</td>
                    <td className="p-3">Taxed at individual rates. PSI rules may apply. Report on individual return.</td>
                    <td className="p-3">Company tax rate applies. Dividends to NSW shareholders may be franked.</td>
                    <td className="p-3">Partners taxed on share of profits at individual or entity rates.</td>
                    <td className="p-3">Trust distributes income to beneficiaries. Streaming possibilities subject to deed and law.</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-3 font-semibold">Setup</td>
                    <td className="p-3">ABN and business name via ABR and ASIC. Simple and low cost.</td>
                    <td className="p-3">Incorporate with ASIC. Obtain ACN then ABN. Set constitution and registers.</td>
                    <td className="p-3">Draft partnership agreement. Apply for ABN and register business name if required.</td>
                    <td className="p-3">Prepare trust deed. Appoint trustee. Apply for TFN and ABN. Consider corporate trustee with ASIC setup.</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-3 font-semibold">Ongoing compliance</td>
                    <td className="p-3">Individual tax return. BAS and payroll if registered in NSW.</td>
                    <td className="p-3">Annual ASIC review fee. Company tax return and financial records. BAS and payroll.</td>
                    <td className="p-3">No ASIC obligations for the partnership itself. Partners lodge individual returns. BAS and payroll if applicable.</td>
                    <td className="p-3">Trust tax return. Resolutions prepared before 30 June. BAS and payroll if applicable.</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-3 font-semibold">NSW specific items</td>
                    <td className="p-3">Check Service NSW licences and local council permits for sole traders in Sydney.</td>
                    <td className="p-3">Director ID, payroll tax exposure if wages exceed NSW thresholds, workers compensation via icare.</td>
                    <td className="p-3">Registration for NSW payroll tax may include partners as employees in limited cases. Seek advice.</td>
                    <td className="p-3">NSW land tax and duty considerations where property is involved. Keep trust records for Revenue NSW.</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-3 font-semibold">Pros</td>
                    <td className="p-3">Simple setup. Full control. Low cost in Sydney.</td>
                    <td className="p-3">Limited liability. Easier to raise capital. Clear separation of personal and business.</td>
                    <td className="p-3">Shared skills and resources. Flexible profit sharing with an agreement.</td>
                    <td className="p-3">Potential tax flexibility by distributing to beneficiaries. Asset protection with corporate trustee.</td>
                  </tr>

                  <tr>
                    <td className="p-3 font-semibold">Cons</td>
                    <td className="p-3">Personal asset risk. Harder to scale. Perception limits with larger clients.</td>
                    <td className="p-3">Higher compliance cost. Director duties and penalties for breaches.</td>
                    <td className="p-3">Partner disputes can affect all. Joint liability risk in NSW.</td>
                    <td className="p-3">Setup cost and complexity. Must follow deed and make timely resolutions.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-ca-blue mt-8">Which NSW structure suits who</h3>
            <ul className="list-disc pl-6 text-[15.5px] space-y-2 text-[#444b53]">
              <li><b>Sole Trader</b> - freelancers, trades, or early testing of a Sydney idea with low risk.</li>
              <li><b>Company</b> - growth focused ventures that need liability protection or outside investment.</li>
              <li><b>Partnership</b> - two professionals starting together with a clear agreement and similar risk tolerance.</li>
              <li><b>Discretionary Trust</b> - family operated NSW businesses or investment holding with a corporate trustee and proper advice.</li>
            </ul>

            <div className="mt-6 p-4 bg-[#f1f5f9] rounded-md text-[14px] text-[#444b53]">
              <b>Important:</b> This Business Structure Comparison is general information for NSW and Sydney. Choose a structure with advice from a registered tax agent and solicitor. Laws and thresholds change and your circumstances matter.
            </div>

            <h3 className="text-xl font-semibold text-ca-blue mt-6">Helpful NSW links</h3>
            <p className="text-[15px]">
              <a href="https://asic.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ASIC</a>{" "}
              |{" "}
              <a href="https://www.ato.gov.au/business/starting-your-own-business/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Starting a business</a>{" "}
              |{" "}
              <a href="https://www.service.nsw.gov.au/business" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Service NSW - Business</a>{" "}
              |{" "}
              <a href="https://www.revenue.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Revenue NSW</a>{" "}
              |{" "}
              <a href="https://www.icare.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">icare NSW</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
