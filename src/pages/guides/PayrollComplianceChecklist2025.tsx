import { ClipboardCheck, Users, CalendarDays, ShieldCheck, FileText } from 'lucide-react';

export default function PayrollComplianceChecklist2025() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Payroll Compliance Checklist for Australian Businesses (2025 Update)
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Stay compliant with the Fair Work Act, ATO, and superannuation laws in 2025. 
              Use this payroll checklist designed for small and medium businesses across NSW and Australia. <span className="text-ca-mango"><b>Powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-4">
              <ClipboardCheck size={48} className="text-ca-mango" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-ca-blue text-center">
              2025 Payroll Compliance Essentials
            </h2>
            <ul className="list-decimal pl-6 space-y-6 text-[#444b53]">
              <li>
                <b>Employee onboarding:</b>
                <p className="text-[15px] text-[#6a6c6e]">
                  Collect TFNs, superannuation fund choice forms, Fair Work Information Statements,
                  and ensure contracts comply with the Fair Work Act 2009.
                </p>
              </li>
              <li>
                <b>Fair Work Awards & minimum wages:</b>
                <p className="text-[15px] text-[#6a6c6e]">
                  Check correct classification under modern awards and enterprise agreements.
                  From <b>1 July 2025</b>, apply new minimum wage rates.
                  <a 
                    href="https://www.fairwork.gov.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ca-blue underline ml-1"
                  >
                    Fair Work Ombudsman
                  </a>
                </p>
              </li>
              <li>
                <b>Single Touch Payroll (STP) Phase 2:</b>
                <p className="text-[15px] text-[#6a6c6e]">
                  Employers must report salaries, PAYG withholding, and superannuation each payday to the ATO.
                  Ensure your payroll software (Xero, MYOB, QuickBooks) is STP-enabled.
                </p>
              </li>
              <li>
                <b>Superannuation obligations:</b>
                <p className="text-[15px] text-[#6a6c6e]">
                  The Superannuation Guarantee (SG) rate is <b>12%</b> from 1 July 2025.
                  Payments must be made at least quarterly through SuperStream-compliant methods.
                </p>
              </li>
              <li>
                <b>Leave entitlements:</b>
                <p className="text-[15px] text-[#6a6c6e]">
                  Annual, personal/carer’s, parental, and long service leave must be calculated correctly
                  under the National Employment Standards (NES).
                </p>
              </li>
              <li>
                <b>Payroll tax (NSW):</b>
                <p className="text-[15px] text-[#6a6c6e]">
                  Payroll tax applies if your NSW wages exceed the state threshold. For 2025, check current thresholds and rates at{' '}
                  <a 
                    href="https://www.revenue.nsw.gov.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ca-blue underline"
                  >
                    Revenue NSW
                  </a>.
                </p>
              </li>
              <li>
                <b>Record keeping:</b>
                <p className="text-[15px] text-[#6a6c6e]">
                  Employers must keep payroll, time, wage, and super records for <b>7 years</b>.
                  Records must be accessible and in English.
                </p>
              </li>
              <li>
                <b>Workplace rights & compliance:</b>
                <p className="text-[15px] text-[#6a6c6e]">
                  Display Fair Work rights, provide payslips within 1 working day, 
                  and ensure compliance with anti-discrimination and WHS laws.
                </p>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-10 text-center">
              <a
                href="/contact-chrome-accountants"
                className="inline-block bg-ca-mango text-white font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition"
                aria-label="Get payroll compliance support in Australia"
              >
                Get Payroll Compliance Support
              </a>
              <p className="text-sm text-[#6a6c6e] mt-3">
                STP-ready setup • Super guarantee compliance • Fair Work award advice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white pb-14">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-center text-sm text-[#7c838a]">
            This checklist is general guidance for Australian businesses in 2025. 
            Always confirm award coverage, superannuation rates, and payroll tax thresholds with the ATO, 
            Fair Work Ombudsman, and Revenue NSW. Seek professional advice for complex payroll arrangements.
          </p>
        </div>
      </section>
    </>
  );
}
