import { Star, ShieldCheck, ClipboardList, MapPin, CheckCircle2, GraduationCap, Layers3, Handshake } from 'lucide-react';

export default function TopTaxAgentsMerrylands() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Top Tax Agents in Merrylands: How to Choose the Right One
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Find the best fit for your tax needs in Merrylands NSW. Learn what actually matters - registration,
              expertise, fees, turnaround times - and how Chrome Accountants stands out for local individuals and small businesses. <span className="text-ca-mango"><b>Powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* CA UVP (Unique Value Proposition) – visible only on this first page */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-14">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-ca-blue mb-4">
              Why Chrome Accountants Leads in Merrylands
            </h2>
            <p className="text-lg text-[#5a6168] mb-10">
              <b>Chrome Accountants is your financial champion and translator.</b> We go beyond tax returns with our
              proprietary <b>Chrome Financial Health System™</b> - an integrated, defensible methodology that brings bookkeeping,
              payroll, tax planning, and advisory into one seamless system, while translating finance into plain English so
              you feel empowered.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="rounded-xl border p-6 shadow-sm">
                <Layers3 className="mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Integrated</h3>
                <p className="text-sm text-[#6a6c6e]">One point of contact - no fragmented services.</p>
              </div>
              <div className="rounded-xl border p-6 shadow-sm">
                <GraduationCap className="mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Educational</h3>
                <p className="text-sm text-[#6a6c6e]">We teach the “why” behind the “what”.</p>
              </div>
              <div className="rounded-xl border p-6 shadow-sm">
                <Handshake className="mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Personalised</h3>
                <p className="text-sm text-[#6a6c6e]">Friendly, approachable, long-term partner.</p>
              </div>
              <div className="rounded-xl border p-6 shadow-sm">
                <ShieldCheck className="mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Outcome-Focused</h3>
                <p className="text-sm text-[#6a6c6e]">
                  We work to achieve the best legal financial outcomes - maximising refunds & supporting growth.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="/contact-chrome-accountants"
                className="inline-block bg-ca-mango text-white font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition"
                aria-label="Book a consultation with Chrome Accountants"
              >
                Book a Consultation in Merrylands
              </a>
              <p className="text-sm text-[#6a6c6e] mt-3">
                TPB-registered tax agents • Secure digital onboarding • Western Sydney friendly hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose – Core Checklist */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-4">
              <ClipboardList size={48} className="text-ca-mango" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-ca-blue text-center">
              What to Look For in a Merrylands Tax Agent (NSW)
            </h2>
            <ul className="space-y-6 text-[#444b53]">
              <li className="flex gap-3">
                <ShieldCheck className="shrink-0 mt-1" />
                <div>
                  <b>Registered with the Tax Practitioners Board (TPB).</b><br />
                  Check they’re a <i>registered tax agent</i> (legal requirement in Australia).
                  You can verify via the TPB register.&nbsp;
                  <a
                    href="https://www.tpb.gov.au/search-register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ca-blue underline"
                  >
                    Search the TPB Register
                  </a>.
                </div>
              </li>

              <li className="flex gap-3">
                <Star className="shrink-0 mt-1" />
                <div>
                  <b>Relevant expertise for your situation.</b><br />
                  Individuals (work-related deductions), sole traders, companies, contractors, or <i>crypto</i> gains - ask for
                  examples of similar client work and ATO audit experience.
                </div>
              </li>

              <li className="flex gap-3">
                <MapPin className="shrink-0 mt-1" />
                <div>
                  <b>Local availability & support (Merrylands & Western Sydney).</b><br />
                  Consider extended hours during Jul–Oct, quick response times, and secure digital document workflows.
                </div>
              </li>

              <li className="flex gap-3">
                <CheckCircle2 className="shrink-0 mt-1" />
                <div>
                  <b>Transparent fees & scope.</b><br />
                  Get a written quote (what’s included/excluded), advice vs. lodgment fees, and turnaround timeframes.
                </div>
              </li>

              <li className="flex gap-3">
                <GraduationCap className="shrink-0 mt-1" />
                <div>
                  <b>Plain-English explanations.</b><br />
                  Your agent should translate ATO rules into clear, practical steps - and document advice for your records.
                </div>
              </li>
            </ul>

            {/* Quick Questions Checklist */}
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold text-ca-blue mb-3">5 Questions to Ask Before You Decide</h3>
              <ol className="list-decimal pl-5 text-[#444b53] space-y-2">
                <li>Are you <b>TPB-registered</b>? What’s your registration number?</li>
                <li>Do you have recent experience with <b>clients like me</b> (e.g., contractors, small companies, crypto)?</li>
                <li>What’s the <b>turnaround time</b> and how do we exchange documents securely?</li>
                <li>How are <b>fees</b> structured - fixed fee or hourly, and what’s included?</li>
                <li>Will you provide <b>written advice</b> or a summary of recommendations?</li>
              </ol>
            </div>
          </div>
        </div>
      </section>


      {/* Disclaimer */}
      <section className="bg-white pb-14">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-center text-sm text-[#7c838a]">
            This page provides general information for NSW/Australian taxpayers and is not financial or legal advice.
            Rules change and individual situations vary - please seek advice from a registered tax agent or professional adviser.
            Verify agent registration via the{' '}
            <a
              href="https://www.tpb.gov.au/search-register"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ca-blue underline"
            >
              Tax Practitioners Board Register
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
