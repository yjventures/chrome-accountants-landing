// src/pages/fbt-essentials-nsw.tsx
import { Briefcase } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function FBTEssentialsNSW() {
  const pageTitle = "FBT Essentials - NSW | Chrome Accountants";
  const metaDescription =
    "FBT Essentials for NSW and Sydney employers - what is FBT, who pays, common benefits, exemptions, car benefits methods, records, reportable benefits, and NSW interactions.";

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
              FBT Essentials - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              FBT Essentials for NSW and Sydney employers - understand when Fringe Benefits Tax applies, common benefit types, key exemptions, and what records you must keep <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center">
              <Briefcase size={48} className="text-ca-mango mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
                Fringe Benefits Tax basics for Sydney and NSW
              </h2>
            </div>

            <div className="text-[#444b53] leading-relaxed text-[15.5px] space-y-6">
              <p>
                Fringe Benefits Tax applies to certain non salary benefits provided to employees or their associates in connection with employment. It is paid by the employer. The FBT year runs from 1 April to 31 March. NSW employers must consider FBT alongside PAYG withholding, super, and NSW payroll tax.
              </p>

              <h3 className="text-xl font-semibold text-ca-blue">Common fringe benefits in NSW workplaces</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cars provided for private use by employees in Sydney or elsewhere in NSW.</li>
                <li>Expense payment benefits such as reimbursed personal expenses.</li>
                <li>Entertainment such as meals and drinks for staff or clients.</li>
                <li>Loans at low or zero interest to employees.</li>
                <li>Housing, living away from home allowance, or accommodation.</li>
                <li>Parking at or near the workplace in metropolitan Sydney locations where conditions are met.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Key exemptions and reductions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Minor benefits:</b> benefits less than a small value and infrequent may be exempt if conditions are met.</li>
                <li><b>Otherwise deductible rule:</b> reduce taxable value where the employee could have claimed an income tax deduction if they incurred the expense themselves. Obtain employee declarations as required.</li>
                <li><b>Portable electronic devices for work use:</b> certain work related items may be exempt subject to conditions.</li>
                <li><b>Work related travel and protective clothing:</b> may be exempt where criteria are satisfied.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Car fringe benefits - valuation methods</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Statutory formula method</b> - based on the car value and days available for private use. Keep opening values and availability records.</li>
                <li><b>Operating cost method</b> - based on actual running costs and private use percentage determined by a valid 12 week logbook and odometer records.</li>
                <li>Sydney employers should choose the method that gives a reasonable and supportable outcome and keep evidence for ATO review.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Entertainment and meal expenses</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Client entertainment and staff entertainment may give rise to FBT or may be non deductible for income tax. Keep clear records that separate staff functions, client meals, and simple refreshments.</li>
                <li>Small in house refreshments provided during work may be exempt. Venue based functions in Sydney often require careful classification.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Reportable fringe benefits amounts</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>If an employee has more than the annual reporting threshold in taxable value, you must show a reportable fringe benefits amount on their income statement through Single Touch Payroll. This is not taxed in the hands of the employee but can affect certain income tested benefits.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Records NSW employers must keep</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Benefit calculations, employee declarations, logbooks, odometer readings, invoices, entertainment attendance lists, and policies.</li>
                <li>Retain records for at least 5 years. Keep a documented methodology for any apportionment used by your Sydney business.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Lodgment and payment overview</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Register for FBT if you provide fringe benefits in NSW. Lodge the FBT return after 31 March by the relevant due date. Registered tax agents may have different due dates.</li>
                <li>Pay any FBT assessed. Consider quarterly instalments if required. Review your position each year before 31 March.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Interaction with NSW payroll tax</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Some fringe benefits are included as taxable wages for NSW payroll tax purposes. Review Revenue NSW guidance to determine inclusion and valuation for Sydney payroll tax returns.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Practical NSW tips</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Set up cost codes to track entertainment and employee benefits separately from client costs.</li>
                <li>Collect employee declarations on time for the otherwise deductible rule and living away from home allowance.</li>
                <li>Run an interim FBT review in January in Sydney so there is time to adjust benefits or obtain missing records before 31 March.</li>
              </ul>

              <div className="p-4 bg-[#f1f5f9] rounded-md text-[14px]">
                <b>Important:</b> This page is general information for NSW and Sydney employers. FBT rates, thresholds, and concessions change. Confirm current rules on the ATO website or seek advice from a registered tax professional.
              </div>

              <h3 className="text-xl font-semibold text-ca-blue">Helpful links</h3>
              <p className="text-[15px]">
                <a href="https://www.ato.gov.au/business/fringe-benefits-tax/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Fringe Benefits Tax</a>{" "}
                |{" "}
                <a href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/payroll-tax" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Revenue NSW - Payroll tax</a>{" "}
                |{" "}
                <a href="https://www.ato.gov.au/business/fringe-benefits-tax/fbt-records-you-need-to-keep/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - FBT records</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
