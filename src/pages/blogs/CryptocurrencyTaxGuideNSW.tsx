// src/pages/cryptocurrency-tax-guide-nsw.tsx
import { Coins } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function CryptocurrencyTaxGuideNSW() {
  const pageTitle = "Cryptocurrency Tax Guide - NSW | Chrome Accountants";
  const metaDescription =
    "Cryptocurrency Tax Guide for NSW and Sydney investors - how the ATO taxes crypto, CGT events, staking income, record keeping, and avoiding compliance issues.";

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
              Cryptocurrency Tax Guide - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Cryptocurrency Tax Guide for NSW and Sydney investors - understand how the ATO treats crypto transactions, what records to keep, and how to avoid tax penalties <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center">
              <Coins size={48} className="text-ca-mango mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
                Key crypto tax rules for Sydney and NSW investors
              </h2>
            </div>

            <div className="text-[#444b53] leading-relaxed text-[15.5px] space-y-6">
              <h3 className="text-xl font-semibold text-ca-blue">Crypto is taxed as property, not currency</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The ATO treats cryptocurrency as an asset for tax purposes. Capital gains tax (CGT) rules apply to most disposals.</li>
                <li>Every time you sell, swap, gift, or use crypto to purchase goods or services, it is a taxable event if you make a gain or loss.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Common CGT events in NSW</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Selling crypto for AUD</b> - compare the sale price to your cost base to calculate gain or loss.</li>
                <li><b>Swapping crypto for another crypto</b> - each swap is a disposal for tax purposes.</li>
                <li><b>Using crypto for purchases</b> - triggers a CGT event if the value exceeds your cost base.</li>
                <li><b>Gifting crypto</b> - treated as disposal at market value.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Staking, airdrops, and DeFi income</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Staking rewards and airdrops are generally ordinary income when received, based on the AUD value at that time.</li>
                <li>Later disposal of those tokens will be subject to CGT with a cost base equal to the value previously included as income.</li>
                <li>DeFi transactions can be complex. Keep clear transaction logs and consider specialist tax advice in Sydney.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Record keeping requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Date of each transaction.</li>
                <li>Type of transaction (buy, sell, swap, spend, earn).</li>
                <li>Amount and type of cryptocurrency.</li>
                <li>Value in AUD at the time of the transaction.</li>
                <li>Wallet and exchange records.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">CGT discounts and exemptions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Individuals may access the 50 percent CGT discount if the crypto was held for at least 12 months before disposal.</li>
                <li>Personal use exemption may apply for small value crypto used to buy goods or services for personal consumption, but strict conditions apply and rarely apply to investors.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">ATO compliance in NSW</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The ATO receives data from Australian and some international exchanges.</li>
                <li>Failure to declare gains, income, or holdings can result in penalties and interest charges.</li>
                <li>Review pre-fill data in myGov but don’t rely on it exclusively. Your own records may be more complete.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">Practical Sydney investor tips</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use portfolio tracking software that supports AUD reporting.</li>
                <li>Separate personal use wallets from investment and staking wallets.</li>
                <li>Export transaction history at least quarterly to avoid missing exchange data later.</li>
              </ul>

              <div className="p-4 bg-[#f1f5f9] rounded-md text-[14px]">
                <b>Important:</b> This guide is general information for NSW and Sydney cryptocurrency investors. It does not consider your personal situation. Rules can change quickly in the crypto space. Always confirm current ATO guidance or consult a registered tax agent.
              </div>

              <h3 className="text-xl font-semibold text-ca-blue">Helpful links</h3>
              <p className="text-[15px]">
                <a href="https://www.ato.gov.au/individuals/investing/in-detail/crypto-asset-investments/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Crypto asset investments</a>{" "}
                |{" "}
                <a href="https://www.ato.gov.au/Business/Record-keeping-for-business/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Record keeping</a>{" "}
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
