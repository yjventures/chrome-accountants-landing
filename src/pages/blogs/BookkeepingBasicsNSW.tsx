// src/pages/bookkeeping-basics-nsw.tsx
import { NotebookPen } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function BookkeepingBasicsNSW() {
  const pageTitle = "Bookkeeping Basics - NSW | Chrome Accountants";
  const metaDescription =
    "Bookkeeping Basics for NSW and Sydney small businesses - how to set up accounts, track GST, lodge BAS, run payroll with STP, and stay compliant.";

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
              Bookkeeping Basics - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Bookkeeping Basics for NSW and Sydney businesses - learn how to set up your books, manage GST and BAS, and keep payroll and records compliant <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center">
              <NotebookPen size={48} className="text-ca-mango mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
                Getting started with bookkeeping in Sydney and NSW
              </h2>
            </div>

            <div className="text-[#444b53] leading-relaxed text-[15.5px] space-y-6">
              <p>
                Good bookkeeping is the foundation for BAS, tax returns, and cash flow decisions in NSW. The steps below keep you compliant with ATO rules while meeting practical needs for Sydney based businesses.
              </p>

              <h3 className="text-xl font-semibold text-ca-blue">1) Choose software and set up your file</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://www.xero.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Xero</a> - Strong bank feeds and payroll for small businesses.</li>
                <li><a href="https://www.myob.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">MYOB</a> - Popular with retailers and established firms.</li>
                <li><a href="https://www.quickbooks.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">QuickBooks Online</a> - Competitive pricing and solid reporting.</li>
                <li>Create the file in the correct entity name registered in NSW. Switch on GST and select your BAS cycle.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">2) Build a chart of accounts that suits NSW operations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Separate revenue streams - eg services, product sales, delivery income.</li>
                <li>Split cost of sales from operating expenses for clear margins.</li>
                <li>Include liability accounts for GST collected, GST paid, PAYG withholding, and Superannuation payable.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">3) Connect bank feeds and reconcile weekly</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Link NSW bank accounts and merchant services so transactions import daily.</li>
                <li>Use bank rules for recurring items like rent and utilities.</li>
                <li>Attach source documents to transactions for audit trail and NSW record keeping.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">4) Manage GST and BAS correctly</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Apply the right GST code on sales and purchases - GST, GST free, or input taxed.</li>
                <li>Most small NSW businesses lodge BAS quarterly. Some choose monthly if refunds are frequent.</li>
                <li>Reconcile GST control accounts to the BAS report before lodging.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">5) Payroll and STP in NSW</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Onboard employees with TFN declarations and super choice forms.</li>
                <li>Set award wages and penalties as per Fair Work requirements for NSW workplaces.</li>
                <li>Report pay events via Single Touch Payroll each pay run and pay super by due dates.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">6) Record keeping and document retention</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep tax invoices, receipts, bank statements, and payroll records for at least 5 years.</li>
                <li>Store securely and make records accessible for ATO or NSW regulator requests.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">7) Cash vs accrual accounting</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Cash</b> - Report GST and income when money moves. Often simpler for small service businesses.</li>
                <li><b>Accrual</b> - Report when invoices are issued or bills received. Gives clearer profitability for growing Sydney firms.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Monthly bookkeeping checklist - NSW</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Reconcile bank and merchant accounts to statements.</li>
                <li>Review Aged Receivables and follow up overdue Sydney customers.</li>
                <li>Enter supplier bills and match to payments.</li>
                <li>Check GST coding and review the draft BAS if monthly.</li>
                <li>Back up data and export a Profit and Loss and Balance Sheet.</li>
              </ol>

              <h3 className="text-xl font-semibold text-ca-blue">Year end tasks for NSW small businesses</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Complete stocktake if you hold trading stock in NSW.</li>
                <li>Reconcile wages, PAYG withholding, and superannuation.</li>
                <li>Finalise STP for the income year and issue income statements to employees.</li>
                <li>Provide accountants with software access and supporting documents for tax return preparation.</li>
              </ol>

              <h3 className="text-xl font-semibold text-ca-blue">Common mistakes to avoid</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Claiming GST credits without valid tax invoices.</li>
                <li>Mixing personal and business spending in the NSW business bank account.</li>
                <li>Missing STP deadlines or super guarantee due dates.</li>
                <li>Not reconciling control accounts before lodging BAS.</li>
              </ul>

              <div className="p-4 bg-[#f1f5f9] rounded-md text-[14px]">
                <b>Important:</b> This page provides general bookkeeping information for NSW and Sydney. It is not personal advice. For assistance tailored to your business, contact a registered tax or BAS agent.
              </div>

              <div className="text-sm text-[#7c838a]">
                Helpful links:{" "}
                <a href="https://www.ato.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO</a>{" "}
                |{" "}
                <a href="https://www.fairwork.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Fair Work</a>{" "}
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
