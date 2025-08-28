import { Percent, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function GSTinNSWGuide() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How Much is GST in NSW? Simple Guide for Small Businesses
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Goods and Services Tax (GST) applies across Australia, including NSW. 
              Here’s what small businesses need to know about the 10% GST rate, thresholds, and reporting. <span className="text-ca-mango"><b>Powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* GST Guide */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-4">
              <Percent size={48} className="text-ca-mango" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-ca-blue text-center">
              GST Basics for NSW Small Businesses
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-[#444b53]">
              <li>
                <b>GST rate:</b> The standard GST rate in Australia is <b>10%</b>.
              </li>
              <li>
                <b>Threshold:</b> If your business turnover is <b>$75,000 or more</b> (or $150,000+ for non-profits), 
                you must register for GST with the ATO.
              </li>
              <li>
                <b>When to register:</b> Registration is compulsory once turnover exceeds the threshold. 
                Voluntary registration is possible if under the limit.
              </li>
              <li>
                <b>Reporting cycle:</b> Most small businesses lodge Business Activity Statements (BAS) <b>quarterly</b>. 
                Larger businesses may report monthly.
              </li>
              <li>
                <b>Claiming credits:</b> You can claim GST credits for GST paid on business purchases if you are registered.
              </li>
              <li>
                <b>Exemptions:</b> Basic foods, certain education and health services are GST-free. Exports are generally GST-free too.
              </li>
            </ul>

            {/* Common Errors */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-ca-blue mb-3">Common GST Mistakes</h3>
              <div className="space-y-4 text-[#444b53]">
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>Charging GST when not registered (illegal).</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>Failing to register when turnover exceeds $75,000.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>Not keeping proper tax invoices for claiming credits.</p>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="mt-10 flex gap-3 items-start bg-[#fff7ed] border border-[#fcd34d] rounded-lg p-4">
              <AlertCircle className="shrink-0 text-[#f59e0b]" />
              <p className="text-[15px] text-[#6a6c6e]">
                Penalties apply if you fail to register, charge GST incorrectly, or lodge BAS late. 
                Keep accurate records and reconcile regularly with accounting software.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <a
                href="/contact-chrome-accountants"
                className="inline-block bg-ca-mango text-white font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition"
                aria-label="Get GST help in NSW"
              >
                Get GST & BAS Help in NSW
              </a>
              <p className="text-sm text-[#6a6c6e] mt-3">
                BAS preparation • GST registration • Small business advisory
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white pb-14">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-center text-sm text-[#7c838a]">
            This guide is for general information only. GST is a federal tax that applies across all Australian states, including NSW. 
            Always confirm your obligations with the{' '}
            <a
              href="https://www.ato.gov.au/Business/GST/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ca-blue underline"
            >
              Australian Taxation Office (ATO)
            </a>{' '}
            or seek advice from a registered tax agent.
          </p>
        </div>
      </section>
    </>
  );
}
