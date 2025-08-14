// src/pages/bas-lodgment-guide-nsw.tsx
import { FileSpreadsheet } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function BASLodgmentGuideNSW() {
  const pageTitle = "BAS Lodgment Guide - NSW | Chrome Accountants";
  const metaDescription =
    "BAS Lodgment Guide for NSW and Sydney businesses - who must lodge, due dates, step by step preparation, common errors, GST adjustments, PAYG withholding, and payment options.";

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
              BAS Lodgment Guide - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              BAS Lodgment Guide for NSW and Sydney businesses - learn who must lodge, when it is due, and how to prepare and submit a correct BAS to the ATO <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center">
              <FileSpreadsheet size={48} className="text-ca-mango mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
                Business Activity Statement basics for Sydney and NSW
              </h2>
            </div>

            <div className="text-[#444b53] leading-relaxed text-[15.5px] space-y-6">
              <h3 className="text-xl font-semibold text-ca-blue">Who needs to lodge BAS</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Entities registered for Goods and Services Tax in NSW and across Australia.</li>
                <li>Employers who report PAYG withholding through activity statements.</li>
                <li>Businesses that pay PAYG instalments for income tax during the year.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Lodgment frequency and due dates</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Quarterly</b> is common for small NSW businesses. Due dates are generally around 28 days after the end of each quarter. The December quarter typically has an extended due date.</li>
                <li><b>Monthly</b> applies if your GST turnover or withholding obligations require it.</li>
                <li><b>Annually</b> can apply in limited cases. If you are unsure, check your ATO registration settings or speak with a registered tax or BAS agent in Sydney.</li>
                <li>Using a registered agent may provide different due dates if you are on their lodgment program.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Step by step - preparing a NSW BAS</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <b>Reconcile bank and cash accounts</b> - import transactions from your NSW bank feeds and match to invoices and bills.
                </li>
                <li>
                  <b>Check GST coding</b> - review sales and purchases are coded correctly as GST, GST free, or input taxed.
                </li>
                <li>
                  <b>Confirm totals for key GST labels</b> - verify your accounting software figures for total sales and purchases and the GST on each. Common fields include total sales and GST on sales, and total purchases and GST on purchases.
                </li>
                <li>
                  <b>Review payroll</b> - reconcile wages and PAYG withholding for the period. Ensure super payments and Single Touch Payroll submissions are up to date for your Sydney staff.
                </li>
                <li>
                  <b>Check PAYG instalments</b> - confirm if an instalment is showing and whether a variation is needed based on current year profit expectations.
                </li>
                <li>
                  <b>Generate a draft BAS</b> - compare to your GST control accounts and payroll reports. Investigate any large movements compared to previous periods.
                </li>
                <li>
                  <b>Lodge and pay</b> - submit through Online services for business, your agent, or enabled software. Pay any net amount by the due date. Set up a payment plan with the ATO if required.
                </li>
              </ol>

              <h3 className="text-xl font-semibold text-ca-blue">Adjustments and special items</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Bad debts</b> - if you write off a taxable sale as a bad debt, you may adjust GST previously reported.</li>
                <li><b>Change in use</b> - if the business or private use of an asset in NSW changes, adjust GST credits accordingly.</li>
                <li><b>Import GST</b> - include deferred GST on imports if you use the deferred GST scheme.</li>
                <li><b>Fuel tax credits</b> - claim in eligible industries according to current ATO rates and evidence requirements.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Common BAS errors to avoid</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Claiming GST credits without a valid tax invoice.</li>
                <li>Including GST free sales as taxable sales.</li>
                <li>Missing PAYG withholding for NSW employees or contractors who are treated as employees for withholding.</li>
                <li>Not reconciling GST control accounts to the BAS report before lodging.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Payments, refunds, and records</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Payment options</b> - BPAY, credit card, bank transfer, or direct debit. Keep the payment reference for your records.</li>
                <li><b>Refunds</b> - the ATO generally pays to your nominated NSW business bank account. Ensure details are current.</li>
                <li><b>Record keeping</b> - keep BAS working papers, invoices, payroll reports, and bank statements for at least 5 years.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">If you are late or make a mistake</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact the ATO promptly to discuss payment plans if cash flow is tight in your Sydney business.</li>
                <li>Correct minor errors in the next BAS where allowed or lodge a revision. Keep clear notes of what changed and why.</li>
              </ul>

              <div className="p-4 bg-[#f1f5f9] rounded-md text-[14px]">
                <b>Important:</b> This guide provides general BAS information for NSW and Sydney businesses. It does not consider your specific circumstances. Confirm current rules on the ATO website or speak with a registered tax or BAS agent.
              </div>

              <h3 className="text-xl font-semibold text-ca-blue">Helpful links</h3>
              <p className="text-[15px]">
                <a href="https://www.ato.gov.au/business/business-activity-statements-(bas)/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Business Activity Statements</a>{" "}
                |{" "}
                <a href="https://www.ato.gov.au/business/gst/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - GST</a>{" "}
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
