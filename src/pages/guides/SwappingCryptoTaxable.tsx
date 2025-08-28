import { ArrowLeftRight, FileSearch, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function SwappingCryptoTaxable() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Is Swapping Crypto Taxable in Australia? What You Need to Know
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              In Australia, swapping one crypto for another (e.g., BTC → ETH) is a <b>taxable event</b>.
              Learn how the ATO applies Capital Gains Tax and when to seek advice from a registered accountant. <span className="text-ca-mango"><b>Powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-4">
              <ArrowLeftRight size={48} className="text-ca-mango" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-ca-blue text-center">
              How the ATO Treats Crypto Swaps
            </h2>

            <ul className="list-disc pl-6 text-[#444b53] space-y-4">
              <li>
                <b>CGT event A1 applies:</b> Disposing of one crypto asset and acquiring another triggers
                a <i>capital gains tax event</i>, even if no cash is involved.
              </li>
              <li>
                <b>Market value in AUD:</b> You must calculate the market value of the crypto you receive
                (in Australian dollars at the time of the swap).
              </li>
              <li>
                <b>Cost base resets:</b> The new crypto’s cost base is the AUD value at acquisition time.
              </li>
              <li>
                <b>CGT discounts:</b> If you held the disposed crypto for more than 12 months, you may be
                eligible for the 50% CGT discount (individuals/trusts).
              </li>
              <li>
                <b>Record keeping:</b> Keep exchange records, wallet transactions, and market rate evidence
                (e.g., from CoinMarketCap or exchange statements).
              </li>
            </ul>

            {/* Common mistakes */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-ca-blue mb-3">Common Mistakes by Investors</h3>
              <div className="space-y-4 text-[#444b53]">
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>Believing crypto-to-crypto swaps aren’t taxable because no “cash out” occurred.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>Failing to record market values at the time of swap.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>Not including swap transactions in tax returns, risking ATO audits and penalties.</p>
                </div>
              </div>
            </div>

            {/* Advisory Note */}
            <div className="mt-10 flex gap-3 items-start bg-[#fff7ed] border border-[#fcd34d] rounded-lg p-4">
              <AlertCircle className="shrink-0 text-[#f59e0b]" />
              <p className="text-[15px] text-[#6a6c6e]">
                The ATO receives transaction data directly from Australian and overseas exchanges. If you swap,
                stake, or use DeFi protocols, assume it is visible to the ATO. Declaring accurately is the safest path.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <a
                href="/contact-chrome-accountants"
                className="inline-block bg-ca-mango text-white font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition"
                aria-label="Get crypto tax help in Australia"
              >
                Get Crypto Tax Help in Australia
              </a>
              <p className="text-sm text-[#6a6c6e] mt-3">
                Registered tax agent • Crypto CGT reporting • Sydney-based support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white pb-14">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-center text-sm text-[#7c838a]">
            This information is general and based on ATO guidance. Swapping crypto is usually a capital gains tax event.
            Treatment depends on your circumstances. Seek personalised advice from a registered tax agent.  
            See the{' '}
            <a
              href="https://www.ato.gov.au/general/other-languages/in-detail/information-in-other-languages/cryptocurrency/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ca-blue underline"
            >
              ATO cryptocurrency guide
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
