// src/pages/payroll-compliance-checklist-nsw.tsx
import { ClipboardCheck } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function PayrollComplianceChecklistNSW() {
  const pageTitle = "Payroll Compliance Checklist - NSW | Chrome Accountants";
  const metaDescription =
    "Payroll Compliance Checklist for NSW and Sydney employers - hiring steps, STP Phase 2, super, payslips, record keeping, workers compensation, and payroll tax.";

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
              Payroll Compliance Checklist - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Payroll Compliance Checklist for NSW and Sydney employers - use this step by step list to set up payroll correctly, meet STP and super obligations, and issue compliant payslips <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center">
              <ClipboardCheck size={48} className="text-ca-mango mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
                Employer payroll setup checklist for Sydney and NSW
              </h2>
            </div>

            <ol className="list-decimal pl-6 text-[#444b53] leading-relaxed text-[15.5px] space-y-5">
              <li>
                <b>Confirm employee or contractor status</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Use the ATO and Fair Work guidance to classify correctly. Contractors may still attract super and payroll tax in NSW in some cases.
                </div>
              </li>

              <li>
                <b>Collect onboarding forms</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  TFN declaration, Super standard choice form, bank details, tax residency info, and right to work checks for Sydney hires.
                </div>
              </li>

              <li>
                <b>Set award, pay rates, and entitlements</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Check the correct modern award or enterprise agreement under <a href="https://www.fairwork.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Fair Work</a>. Configure penalties, allowances, leave loading, and overtime applicable in NSW workplaces.
                </div>
              </li>

              <li>
                <b>Configure payroll software and STP Phase 2</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Map income types, allowances, deductions, and leave to STP Phase 2 categories. Enable Single Touch Payroll reporting to the ATO for each pay run.
                </div>
              </li>

              <li>
                <b>Superannuation guarantee setup</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Apply the current super guarantee rate and pay on ordinary time earnings to the employee chosen fund or your default fund. Pay by the legislated quarterly due dates so deductions are available.
                </div>
              </li>

              <li>
                <b>Payslip and record keeping rules</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Issue payslips within one working day of payment showing employer name, ABN, pay period, hours, pay rate, gross, net, tax withheld, super, and leave balances where required. Keep employment and payroll records for at least 7 years in NSW.
                </div>
              </li>

              <li>
                <b>Workers compensation insurance in NSW</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Obtain a policy through <a href="https://www.icare.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">icare NSW</a> when you employ workers in Sydney or elsewhere in NSW. Maintain a safe workplace and follow <a href="https://www.safework.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">SafeWork NSW</a> requirements.
                </div>
              </li>

              <li>
                <b>Payroll tax - check NSW threshold and registration</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  If NSW taxable wages exceed the current threshold or you are grouped with related entities, register with <a href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/payroll-tax" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Revenue NSW</a> and lodge monthly or annually as required.
                </div>
              </li>

              <li>
                <b>Pay cycle, withholdings, and remittances</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Set a weekly or fortnightly cycle that suits your Sydney team. Withhold PAYG correctly and pay ATO activity statement liabilities by the due dates. Reconcile super, PAYG withholding, and wages each month.
                </div>
              </li>

              <li>
                <b>End of year finalisation</b>
                <div className="text-[15px] mt-1 text-[#6a6c6e]">
                  Finalise STP for the income year by the ATO due date so employees can access their income statements. Reconcile leave balances, review award changes, and update rates for the new financial year in NSW.
                </div>
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-ca-blue mt-8 mb-2 text-center">
              Helpful NSW links
            </h3>
            <p className="text-center text-[15px] text-[#6a6c6e]">
              <a href="https://www.ato.gov.au/business/single-touch-payroll/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO STP</a> |{" "}
              <a href="https://www.fairwork.gov.au/pay-and-wages/payslips-and-record-keeping" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Fair Work payslips and records</a> |{" "}
              <a href="https://www.ato.gov.au/super/super-for-employers/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Super for employers</a> |{" "}
              <a href="https://www.icare.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">icare workers compensation</a> |{" "}
              <a href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/payroll-tax" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Revenue NSW payroll tax</a>
            </p>

            <div className="mt-6 p-4 bg-[#f1f5f9] rounded-md text-[14px] text-[#444b53]">
              <b>Important:</b> This checklist provides general payroll information for NSW and Sydney employers. It does not consider your specific circumstances. Confirm current rates and deadlines with the ATO, Fair Work, icare, and Revenue NSW, or obtain advice from a registered tax or payroll professional.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
