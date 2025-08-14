// src/pages/startup-financial-planning-template-nsw.tsx
import { LineChart, FileSpreadsheet, ClipboardList, Calculator } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function StartupFinancialPlanningTemplateNSW() {
  const pageTitle = "Startup Financial Planning Template - NSW | Chrome Accountants";
  const metaDescription =
    "Startup Financial Planning Template - NSW and Sydney founders can use this one page plan with budget, runway, pricing, registrations, and compliance calendar to launch with confidence.";

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
              Startup Financial Planning Template - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Startup Financial Planning Template - use this practical one page framework tailored for NSW and Sydney to map your budget, runway, pricing, registrations, and first year compliance <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Template */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-10">
            {/* 1. Business Snapshot */}
            <div>
              <div className="flex items-center justify-center mb-3">
                <ClipboardList className="text-ca-mango mr-2" />
                <h2 className="text-2xl font-bold text-ca-blue text-center">
                  1) Business Snapshot - NSW
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#444b53] text-[15.5px]">
                <div>
                  <b>Business name:</b> ____________________________________
                </div>
                <div>
                  <b>ABN:</b> ____________________________________
                </div>
                <div>
                  <b>Structure:</b> Sole Trader | Company | Partnership | Trust
                </div>
                <div>
                  <b>Location:</b> Sydney suburb or NSW region
                </div>
                <div>
                  <b>GST registration:</b> Yes | No  -  Start date: _____________
                </div>
                <div>
                  <b>Bank account set up:</b> Yes | No
                </div>
              </div>
            </div>

            {/* 2. 12 Month Budget */}
            <div>
              <div className="flex items-center justify-center mb-3">
                <FileSpreadsheet className="text-ca-mango mr-2" />
                <h2 className="text-2xl font-bold text-ca-blue text-center">
                  2) 12 Month Budget - Sydney and NSW
                </h2>
              </div>
              <p className="text-[#6a6c6e] text-[15px] mb-3">
                List expected sales and costs by month. Include GST where relevant. Most NSW startups lodge BAS quarterly.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-[#444b53] border">
                  <thead className="bg-[#f1f5f9]">
                    <tr>
                      <th className="p-2">Category</th>
                      <th className="p-2">Monthly Amount</th>
                      <th className="p-2">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      "Revenue - Product or Services",
                      "Cost of Sales - materials or contractors",
                      "Marketing and Ads",
                      "Rent or Workspace",
                      "Software and Subscriptions",
                      "Wages and Super",
                      "Workers Compensation - icare NSW",
                      "Accounting and Bookkeeping",
                      "Insurance - public or professional",
                      "Other Operating Costs",
                    ].map((row) => (
                      <tr key={row} className="border-t">
                        <td className="p-2">{row}</td>
                        <td className="p-2">$
                          __________</td>
                        <td className="p-2">____________________________</td>
                      </tr>
                    ))}
                    <tr className="border-t font-semibold">
                      <td className="p-2">Total Monthly Expenses</td>
                      <td className="p-2">$ __________</td>
                      <td className="p-2"></td>
                    </tr>
                    <tr className="border-t font-semibold">
                      <td className="p-2">Expected Monthly Profit before tax</td>
                      <td className="p-2">$ __________</td>
                      <td className="p-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Runway and Cash Plan */}
            <div>
              <div className="flex items-center justify-center mb-3">
                <Calculator className="text-ca-mango mr-2" />
                <h2 className="text-2xl font-bold text-ca-blue text-center">
                  3) Runway and Cash Plan
                </h2>
              </div>
              <div className="text-[#444b53] text-[15.5px] space-y-2">
                <p><b>Opening cash:</b> $ __________</p>
                <p><b>Average monthly burn:</b> $ __________</p>
                <p><b>Runway formula:</b> Runway months = Opening cash divided by average monthly burn.</p>
                <p><b>Target runway:</b> 6 to 9 months for Sydney conditions.</p>
                <ul className="list-disc pl-6">
                  <li>Create 3 buckets - Operating, Tax set aside, Owner pay.</li>
                  <li>Move 10 percent to 20 percent of revenue weekly into the tax bucket for BAS and income tax.</li>
                  <li>Forecast 13 weeks ahead to spot gaps and plan actions early.</li>
                </ul>
              </div>
            </div>

            {/* 4. Pricing and Unit Economics */}
            <div>
              <div className="flex items-center justify-center mb-3">
                <LineChart className="text-ca-mango mr-2" />
                <h2 className="text-2xl font-bold text-ca-blue text-center">
                  4) Pricing and Unit Economics
                </h2>
              </div>
              <div className="text-[#444b53] text-[15.5px] space-y-2">
                <p><b>Offer or product:</b> ______________________________</p>
                <p><b>Price GST inclusive for NSW customers:</b> $ __________</p>
                <p><b>Direct cost per unit:</b> $ __________</p>
                <p><b>Gross margin per unit:</b> $ __________</p>
                <p><b>Breakeven units per month:</b> __________</p>
                <ul className="list-disc pl-6">
                  <li>Confirm if you must register for GST. For most businesses the threshold is AUD 75,000 turnover. Ride sharing and food delivery require registration from day one.</li>
                  <li>Display GST inclusive pricing where relevant in NSW.</li>
                </ul>
              </div>
            </div>

            {/* 5. Registrations and Licences */}
            <div>
              <div className="flex items-center justify-center mb-3">
                <ClipboardList className="text-ca-mango mr-2" />
                <h2 className="text-2xl font-bold text-ca-blue text-center">
                  5) Registration and Licence Checklist - NSW
                </h2>
              </div>
              <ol className="list-decimal pl-6 text-[#444b53] text-[15.5px] space-y-2">
                <li>ABN via the Australian Business Register - status: ______ date: ______</li>
                <li>Business name with ASIC if trading under a name - status: ______</li>
                <li>Company ACN and Director ID if using a company - status: ______</li>
                <li>GST and PAYG withholding with the ATO - status: ______</li>
                <li>Single Touch Payroll enabled in software - status: ______</li>
                <li>Workers compensation insurance with icare NSW when you hire - status: ______</li>
                <li>NSW payroll tax - register if wages exceed threshold or you are grouped - status: ______</li>
                <li>Industry licences and local council permits via Service NSW - status: ______</li>
              </ol>
            </div>

            {/* 6. First Year Compliance Calendar */}
            <div>
              <div className="flex items-center justify-center mb-3">
                <ClipboardList className="text-ca-mango mr-2" />
                <h2 className="text-2xl font-bold text-ca-blue text-center">
                  6) First Year Compliance Calendar
                </h2>
              </div>
              <ul className="list-disc pl-6 text-[#444b53] text-[15.5px] space-y-2">
                <li><b>Monthly</b> - reconcile bank feeds, review cash flow, and back up data.</li>
                <li><b>Quarterly</b> - lodge BAS, pay super by the due date, review PAYG instalments.</li>
                <li><b>Annually</b> - stocktake if applicable, finalise STP, prepare income tax return, review insurance, review NSW payroll tax and land tax if relevant.</li>
              </ul>
            </div>

            {/* 7. Funding Plan */}
            <div>
              <div className="flex items-center justify-center mb-3">
                <Calculator className="text-ca-mango mr-2" />
                <h2 className="text-2xl font-bold text-ca-blue text-center">
                  7) Funding Plan
                </h2>
              </div>
              <div className="text-[#444b53] text-[15.5px] space-y-2">
                <p><b>Sources:</b> Founder savings  -  Bank facility  -  Grants  -  Investors</p>
                <p><b>Amount required:</b> $ __________  -  <b>Use of funds:</b> _____________________________________</p>
                <p>Check current programs at <a href="https://www.service.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Service NSW</a>. Obtain legal and tax advice before issuing equity.</p>
              </div>
            </div>

            {/* Notes and Disclaimer */}
            <div className="p-4 bg-[#f1f5f9] rounded-md text-[14px] text-[#444b53]">
              <b>Important:</b> This Startup Financial Planning Template is general information for NSW and Sydney founders. It does not consider your specific circumstances. Confirm current rules with the ATO, ASIC, Service NSW, Revenue NSW, Fair Work, and icare NSW, or seek advice from a registered professional.
            </div>

            <div className="text-sm text-[#7c838a]">
              Helpful links:{" "}
              <a href="https://www.service.nsw.gov.au/business" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Service NSW - Business</a>{" "}
              |{" "}
              <a href="https://asic.gov.au/for-business/starting-a-company/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ASIC - Starting a company</a>{" "}
              |{" "}
              <a href="https://www.ato.gov.au/business/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Business</a>{" "}
              |{" "}
              <a href="https://www.revenue.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Revenue NSW</a>{" "}
              |{" "}
              <a href="https://www.icare.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">icare NSW</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
