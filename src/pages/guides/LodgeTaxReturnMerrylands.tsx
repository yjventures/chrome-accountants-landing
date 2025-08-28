import {
  FileCheck,
  CalendarDays,
  ShieldCheck,
  CloudUpload,
  Receipt,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

export default function LodgeTaxReturnMerrylands() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How to Lodge a Tax Return in Merrylands: A Step-by-Step Guide
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              A simple NSW-focused walkthrough for individuals and sole traders in Australia  - what to prepare,
              how to lodge via myTax or through a registered agent, and key dates to avoid penalties. <span className="text-ca-mango"><b>Powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Guide */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-4">
              <FileCheck size={48} className="text-ca-mango" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-ca-blue text-center">
              Step-by-Step: Lodging Your Australian Tax Return (Merrylands, NSW)
            </h2>

            {/* Step 1: Check if you need to lodge */}
            <div className="space-y-8 text-[#444b53]">
              <div className="flex gap-3">
                <CheckCircle2 className="shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">1) Confirm you need to lodge</h3>
                  <p className="text-[15px] text-[#6a6c6e]">
                    Most residents with taxable income for the financial year (1 July – 30 June) must lodge.
                    This includes employees, sole traders, investors (e.g., property, shares, crypto),
                    and those who received government payments. If unsure, use the ATO’s “Do I need to lodge?”
                    tool.
                    {' '}
                    <a
                      href="https://www.ato.gov.au/individuals-and-families/your-tax-return/how-to-lodge-your-tax-return"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ca-blue underline"
                    >
                      Check with ATO
                    </a>.
                  </p>
                </div>
              </div>

              {/* Step 2: Gather documents */}
              <div className="flex gap-3">
                <Receipt className="shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">2) Gather your documents</h3>
                  <ul className="list-disc pl-5 text-[15px] text-[#6a6c6e] space-y-1">
                    <li>myGov account linked to the ATO</li>
                    <li>TFN, bank account for refunds, and personal details</li>
                    <li>Income statements (from employers via STP), PAYG summaries (if any)</li>
                    <li>Interest/dividends statements, managed fund statements</li>
                    <li>Private health insurance statement (if applicable)</li>
                    <li>Work-related deductions: receipts, logbooks, home office records</li>
                    <li>Sole traders: invoices, expenses, motor vehicle logs, accounting reports</li>
                    <li>Capital gains: buy/sell contracts for shares/crypto/property</li>
                  </ul>
                </div>
              </div>

              {/* Step 3: Choose how to lodge */}
              <div className="flex gap-3">
                <CloudUpload className="shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">3) Choose how to lodge</h3>
                  <p className="text-[15px] text-[#6a6c6e] mb-2">
                    <b>Option A  - myTax (self-lodge):</b> Log in to myGov, confirm prefill data, add deductions,
                    review Medicare levy/offsets, and submit.
                    {' '}
                    <a
                      href="https://www.ato.gov.au/individuals-and-families/your-tax-return/how-to-lodge-your-tax-return/lodge-your-tax-return-online-with-mytax"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ca-blue underline"
                    >
                      Lodge with myTax
                    </a>.
                  </p>
                  <p className="text-[15px] text-[#6a6c6e]">
                    <b>Option B  - Registered tax agent:</b> A TPB-registered agent can provide advice, handle
                    complex claims (e.g., investments, crypto, rental), and may access extended ATO due dates if you
                    are on their client list in time.
                    {' '}
                    <a
                      href="https://www.tpb.gov.au/search-register"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ca-blue underline"
                    >
                      Verify TPB registration
                    </a>.
                  </p>
                </div>
              </div>

              {/* Step 4: Key dates */}
              <div className="flex gap-3">
                <CalendarDays className="shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">4) Know the key dates (general guidance)</h3>
                  <ul className="list-disc pl-5 text-[15px] text-[#6a6c6e] space-y-1">
                    <li><b>Financial year:</b> 1 July – 30 June (e.g., FY 2024–25)</li>
                    <li><b>Self-lodger deadline:</b> typically <b>31 October</b> after the financial year ends</li>
                    <li>
                      <b>Using a tax agent:</b> agent program due dates vary; ensure you’re on the agent’s client list
                      (generally by 31 October) to access their extended schedule
                    </li>
                  </ul>
                  <p className="text-[13px] text-[#8a8f94] mt-2">
                    Dates can change  - always check the ATO’s current lodgment schedule.
                    {' '}
                    <a
                      href="https://www.ato.gov.au/tax-and-super-professionals/for-tax-professionals/prepare-and-lodge/registered-agent-lodgment-program-2025-26/due-dates-by-month"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ca-blue underline"
                    >
                      ATO lodgment info
                    </a>.
                  </p>
                </div>
              </div>

              {/* Step 5: Lodge accurately */}
              <div className="flex gap-3">
                <ShieldCheck className="shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">5) Lodge accurately & keep records</h3>
                  <p className="text-[15px] text-[#6a6c6e]">
                    Ensure income is complete (employment, bank interest, dividends, trust distributions, rental, capital gains).
                    Only claim deductions you’re entitled to, keep evidence for <b>5 years</b>, and retain a copy of your return.
                    Refunds usually issue within 2 weeks for online lodgments, but can take longer if reviewed by the ATO.
                  </p>
                </div>
              </div>

              {/* Penalties & help */}
              <div className="flex gap-3">
                <AlertCircle className="shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Penalties, amendments & support</h3>
                  <ul className="list-disc pl-5 text-[15px] text-[#6a6c6e] space-y-1">
                    <li>Late lodgment may attract failure-to-lodge penalties and interest charges</li>
                    <li>
                      If you make a mistake, you can usually <b>amend</b> your return via myGov or through your tax agent
                    </li>
                    <li>
                      Need help in Merrylands/Western Sydney? Engage a <b>TPB-registered</b> agent for personalised advice
                    </li>
                  </ul>
                </div>
              </div>

              {/* Local-friendly CTA */}
              <div className="mt-2 text-center">
                <a
                  href="/contact-chrome-accountants"
                  className="inline-block bg-ca-mango text-white font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition"
                  aria-label="Get help lodging your tax return in Merrylands"
                >
                  Get Help Lodging in Merrylands
                </a>
                <p className="text-sm text-[#6a6c6e] mt-3">
                  TPB-registered support • Secure digital onboarding • Western Sydney friendly hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white pb-14">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-center text-sm text-[#7c838a]">
            This guide is general information for NSW/Australian taxpayers and not personal advice.
            Dates and rules can change. Check the{' '}
            <a
              href="https://www.ato.gov.au/individuals-and-families/your-tax-return/how-to-lodge-your-tax-return"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ca-blue underline"
            >
              ATO's lodgment page
            </a>{' '}
            and seek advice from a registered tax agent for your situation.
          </p>
        </div>
      </section>
    </>
  );
}
