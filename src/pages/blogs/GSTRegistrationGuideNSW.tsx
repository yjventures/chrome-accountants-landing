// src/pages/gst-registration-guide.tsx
import { FileCheck } from 'lucide-react';
// If you use React Router, consider react-helmet-async for SEO tags:
// import { Helmet } from 'react-helmet-async';

export default function GSTRegistrationGuideNSW() {
  const pageTitle = "GST Registration Guide - NSW | Chrome Accountants";
  const metaDescription =
    "GST Registration Guide for NSW and Sydney businesses - who must register, thresholds, how to register with the ATO, and key NSW considerations. Powered by Chrome Accountants.";

  return (
    <>
      {/* Optional SEO (requires react-helmet-async) */}
      {/* <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index,follow" />
      </Helmet> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ca-blue to-ca-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              GST Registration Guide - NSW
            </h1>
            <p className="text-xl lg:text-2xl text-white leading-relaxed">
              GST Registration Guide for NSW businesses - learn when you must register, how to apply with the ATO, and what Sydney businesses should prepare <span className="text-ca-mango"><b>powered by Chrome Accountants.</b></span>
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-[#f8fafc] py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <FileCheck size={48} className="text-ca-mango mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-ca-blue text-center">
              Who must register for GST in NSW
            </h2>

            <div className="text-[#444b53] space-y-5 leading-relaxed text-[15.5px]">
              <p>
                In Australia, you must register for Goods and Services Tax (GST) if your GST turnover is <b>AUD 75,000 or more</b> in a 12 month period, or if you provide <b>taxi, ride-sourcing, or food delivery services</b> regardless of turnover. This applies to NSW and Sydney businesses of all structures including Sole Traders, Companies, Partnerships, and Trusts.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><b>Compulsory registration threshold:</b> AUD 75,000 projected or actual turnover (AUD 150,000 for not-for-profits).</li>
                <li><b>Voluntary registration:</b> allowed below the threshold if it benefits your customers or cash flow.</li>
                <li><b>When to register:</b> within 21 days of becoming aware you will exceed the threshold.</li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue mt-6">
                Step-by-step - how to register from Sydney or anywhere in NSW
              </h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <b>Get your ABN ready</b> - Apply or locate your Australian Business Number. NSW businesses apply through the{" "}
                  <a
                    href="https://www.abr.gov.au/business-super-funds-charities/applying-abn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ca-blue underline"
                  >
                    Australian Business Register
                  </a>.
                </li>
                <li>
                  <b>Have MyGovID and Relationship Authorisation Manager (RAM)</b> - For companies and trusts operating from Sydney and wider NSW, set up digital identity to access online ATO services.
                </li>
                <li>
                  <b>Register for GST with the ATO</b> - Use{" "}
                  <a
                    href="https://www.ato.gov.au/Business/Registration/Business-or-company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ca-blue underline"
                  >
                    ATO online services
                  </a>{" "}
                  or ask your tax agent to lodge on your behalf. Select your accounting method (cash or accrual) and reporting cycle.
                </li>
                <li>
                  <b>Choose your BAS reporting period</b> - Most small NSW businesses lodge <b>quarterly BAS</b>. Some may choose monthly if cash flow or refunds warrant it.
                </li>
                <li>
                  <b>Update NSW records and invoices</b> - Once registered, show prices as GST-inclusive where relevant and issue valid tax invoices to Sydney customers when required.
                </li>
              </ol>

              <h3 className="text-xl font-semibold text-ca-blue mt-6">
                NSW and Sydney specific considerations
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <b>Local grants and events:</b> Some NSW government grants require recipients to be GST-registered. Check current program terms at{" "}
                  <a
                    href="https://www.service.nsw.gov.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ca-blue underline"
                  >
                    Service NSW
                  </a>.
                </li>
                <li>
                  <b>Food businesses in Sydney:</b> Market stalls and hospitality venues often hit the threshold quickly - monitor turnover from launch.
                </li>
                <li>
                  <b>Ride-sourcing and delivery drivers:</b> Registration is compulsory from your first dollar of GST turnover.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-ca-blue mt-6">
                After you register - ongoing obligations
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><b>Charge and collect 10 percent GST</b> on taxable sales.</li>
                <li><b>Lodge BAS</b> on time for your cycle and pay net GST or claim credits.</li>
                <li><b>Keep NSW compliant records</b> - retain invoices and adjustment notes for at least 5 years.</li>
                <li><b>Cancel GST</b> if your business ceases or no longer meets the threshold and you do not wish to stay registered.</li>
              </ul>

              <div className="p-4 bg-[#f1f5f9] rounded-md text-[14px]">
                <b>Important:</b> This guide is general information for NSW and Sydney. It does not consider your specific circumstances. For tailored advice, speak with a registered tax agent or the ATO.
              </div>

              <div className="text-sm text-[#7c838a]">
                Sources: ATO guidance on GST registration and BAS obligations, Service NSW program information. Links provided above.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
