// src/pages/investment-property-tax-tips-nsw.tsx
import { Home } from 'lucide-react';
// Optional SEO if you use react-helmet-async
// import { Helmet } from 'react-helmet-async';

export default function InvestmentPropertyTaxTipsNSW() {
  const pageTitle = "Investment Property Tax Tips - NSW | Chrome Accountants";
  const metaDescription =
    "Investment Property Tax Tips for NSW and Sydney landlords - interest deductibility, repairs vs improvements, depreciation, land tax, record keeping, and CGT planning.";

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
              Investment Property Tax Tips - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              Investment Property Tax Tips for NSW and Sydney owners - understand what you can claim, how to keep records, and how CGT and land tax work <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col items-center">
              <Home size={48} className="text-ca-mango mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
                Practical tax tips for Sydney and NSW landlords
              </h2>
            </div>

            <div className="text-[#444b53] leading-relaxed text-[15.5px] space-y-6">
              <h3 className="text-xl font-semibold text-ca-blue">1) Interest and borrowing costs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Interest on loans used to buy or improve a NSW rental that is producing assessable rent is generally deductible. If you redraw for private reasons, apportion the interest.</li>
                <li>Borrowing costs like loan application fees and mortgage registration are deductible over 5 years or the loan term if shorter.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">2) Repairs vs improvements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Repairs</b> that restore the property to its original condition after tenants cause damage are usually deductible in the year incurred.</li>
                <li><b>Improvements</b> or initial repairs when you first purchase the Sydney property are capital in nature. Claim via depreciation or capital works where eligible.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">3) Depreciation and capital works</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Capital works deductions may be available for structural items at 2.5 percent per year over 40 years if construction dates qualify.</li>
                <li>For second hand residential plant and equipment, deductions are restricted. Consider a QS report prepared to Australian standards for NSW properties to support claims.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">4) Common rental deductions in NSW</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Agent fees, advertising for tenants, strata levies, council rates, water charges you pay, landlord insurance, pest control, cleaning, and bank fees for the rental account.</li>
                <li>Travel to inspect or maintain a residential rental is generally not deductible for individuals and SMSFs under current federal rules.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">5) Apportionment and private use</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>If the NSW property is rented for only part of the year, or you use it personally, apportion expenses by time and floor area where relevant.</li>
                <li>Holiday homes in coastal NSW that are available for rent but used privately need careful diary evidence to support any claims.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">6) Land tax in NSW</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>NSW land tax may apply to taxable land values above the current threshold. Your principal place of residence can be exempt if the conditions are met.</li>
                <li>Review grouping and trust rules. Register and lodge with <a href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/land-tax" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Revenue NSW</a> if required.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">7) Records and statements for Sydney landlords</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep annual property manager statements, invoices, bank statements, QS reports, loan contracts, and settlement statements for at least 5 years.</li>
                <li>Maintain a capital improvements register to speed up CGT calculations later.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">8) Capital gains tax planning</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hold residential property for 12 months or more to access the general CGT discount if eligible.</li>
                <li>Main residence rules are complex. If you move out of a Sydney home and rent it, consider the absence rule and any apportionment based on time and use.</li>
                <li>Keep purchase and sale contracts, legal fees, stamp duty, and improvement costs to reduce the capital gain.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">9) NSW tenancy and compliance context</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Residential tenancies in NSW are regulated by <a href="https://www.fairtrading.nsw.gov.au/housing-and-property/renting" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">NSW Fair Trading</a>. Ensure bonds, condition reports, and notices meet NSW rules.</li>
                <li>Short term rentals in Sydney may be subject to planning and registration requirements. Check local council rules and <a href="https://www.service.nsw.gov.au/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Service NSW</a> updates.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue">10) Cash flow and PAYG instalments</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Large net rental income can trigger PAYG instalments. Review and vary with a reasonable basis if circumstances change.</li>
                <li>Use a separate NSW rental bank account for clean record keeping and easier reconciliations with your property manager statements.</li>
              </ul>

              <div className="p-4 bg-[#f1f5f9] rounded-md text-[14px]">
                <b>Important:</b> This page provides general information for NSW and Sydney property investors. Rules change and your circumstances matter. Confirm current ATO and Revenue NSW guidance or seek advice from a registered tax agent.
              </div>

              <h3 className="text-xl font-semibold text-ca-blue">Helpful links</h3>
              <p className="text-[15px]">
                <a href="https://www.ato.gov.au/individuals/income-deductions-and-credits/in-detail/rental-property/rental-properties-2024/" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">ATO - Rental properties</a>{" "}
                |{" "}
                <a href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/land-tax" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">Revenue NSW - Land tax</a>{" "}
                |{" "}
                <a href="https://www.fairtrading.nsw.gov.au/housing-and-property/renting" target="_blank" rel="noopener noreferrer" className="text-ca-blue underline">NSW Fair Trading - Renting</a>{" "}
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
