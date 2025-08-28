import { Coins, ShieldCheck, AlertTriangle, FileSearch, CheckCircle2 } from 'lucide-react';

export default function CryptoTaxesSydney() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Crypto Taxes in Australia: Do You Need a Specialist Accountant in Sydney?
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              The ATO treats cryptocurrency as property  - not currency. Learn when you need a specialist accountant
              in Sydney to stay compliant, avoid penalties, and maximise deductions. <span className="text-ca-mango"><b>Powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-4">
              <Coins size={48} className="text-ca-mango" />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-ca-blue text-center">
              How Crypto Is Taxed in Australia (ATO Guidance)
            </h2>
            <ul className="list-disc pl-6 text-[#444b53] space-y-4">
              <li>
                <b>Capital Gains Tax (CGT):</b> Applies when you sell, swap, or gift crypto.  
                Example: exchanging Bitcoin for AUD or swapping ETH for USDT.
              </li>
              <li>
                <b>Ordinary Income:</b> If you receive crypto as payment for services or through mining/staking,
                it is treated as assessable income.
              </li>
              <li>
                <b>Record keeping:</b> ATO requires records of date, value in AUD, purpose, and counterparties. Keep for <b>5 years</b>.
              </li>
              <li>
                <b>GST:</b> Crypto is generally input-taxed; buying/selling crypto is not subject to GST in most cases.
              </li>
            </ul>

            {/* Why a Specialist Helps */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-ca-blue mb-4">
                Do You Need a Specialist Crypto Accountant?
              </h3>
              <div className="space-y-5 text-[#444b53]">
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>
                    <b>Multiple wallets & exchanges:</b> A specialist can consolidate trades across platforms (Binance,
                    Coinbase, DeFi wallets) and calculate gains accurately.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>
                    <b>Complex transactions:</b> Swaps, staking, liquidity pools, NFTs  - these often trigger CGT events
                    or income tax obligations.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>
                    <b>ATO scrutiny:</b> The ATO receives data from exchanges. Specialist accountants help reduce audit risk
                    with compliant reporting.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="shrink-0 mt-1" />
                  <p>
                    <b>Strategic tax planning:</b> Professionals can advise on CGT discounts (holding less than 12 months),
                    loss harvesting, and record-keeping tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="mt-10 flex gap-3 items-start bg-[#fff7ed] border border-[#fcd34d] rounded-lg p-4">
              <AlertTriangle className="shrink-0 text-[#f59e0b]" />
              <p className="text-[15px] text-[#6a6c6e]">
                Many Sydney investors mistakenly think crypto is anonymous or untaxed. The ATO uses data matching with
                exchanges and international partners. Failure to declare can lead to penalties and interest charges.
              </p>
            </div>

            {/* Local CTA */}
            <div className="mt-10 text-center">
              <a
                href="/contact-chrome-accountants"
                className="inline-block bg-ca-mango text-white font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition"
                aria-label="Speak to a crypto tax specialist in Sydney"
              >
                Speak to a Crypto Tax Specialist in Sydney
              </a>
              <p className="text-sm text-[#6a6c6e] mt-3">
                Registered tax agent • Crypto reporting software integration • Sydney-based support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white pb-14">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-center text-sm text-[#7c838a]">
            This information is general and based on ATO guidance. Cryptocurrency tax treatment can be complex and
            fact-specific. Always seek tailored advice from a registered tax agent or accountant.  
            See the{' '}
            <a
              href="https://www.ato.gov.au/individuals-and-families/investments-and-assets/crypto-asset-investments"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ca-blue underline"
            >
              ATO’s cryptocurrency investments
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
