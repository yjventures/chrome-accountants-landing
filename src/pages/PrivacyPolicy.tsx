const PrivacyPolicy = () => {
  return (
    <>
      <main className="bg-white text-ca-blue min-h-screen pt-10 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-ca-blue mb-6 text-center">
            Chrome Accountants: Privacy Policy
          </h1>
          <p className="text-sm text-ca-blue text-center mb-8">Last Updated: 29th July 2025</p>
          <section className="mb-6">
            <p>
              <strong>ABN:</strong> 79 814 490 037<br />
              <strong>Business Name:</strong> Chrome Accountants<br />
              <strong>Location:</strong> Level 1/161 Merrylands Rd, Merrylands NSW 2160, Australia
            </p>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-xl mb-2">1. Introduction</h2>
            <p>
              Chrome Accountants respects your right to privacy and is committed to safeguarding the privacy of our clients and website visitors in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the Australian Privacy Principles (APPs).
            </p>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-xl mb-2">2. What Personal Information We Collect</h2>
            <ul className="list-disc pl-5">
              <li>Name, email address, phone number</li>
              <li>Tax File Number (TFN), ABN, financial and accounting data</li>
              <li>Business and employment information</li>
              <li>Any details you provide via our forms, consultations, or emails</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-xl mb-2">3. How We Collect Your Information</h2>
            <ul className="list-disc pl-5">
              <li>Through direct interaction (e.g. website forms, phone, email)</li>
              <li>During client onboarding</li>
              <li>From publicly available sources or referrals</li>
              <li>Via third-party accounting software platforms (e.g. Xero)</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-xl mb-2">4. Why We Collect It</h2>
            <ul className="list-disc pl-5">
              <li>Provide accounting, tax, and advisory services</li>
              <li>Comply with ATO and ASIC obligations</li>
              <li>Improve our website and services</li>
              <li>Communicate with you regarding your account or services</li>
              <li>Send marketing content (only with your consent)</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-xl mb-2">5. Disclosure of Information</h2>
            <ul className="list-disc pl-5">
              <li>To the Australian Taxation Office or ASIC as required</li>
              <li>To trusted third-party service providers (e.g., bookkeepers, cloud accounting tools)</li>
              <li>As required by law (e.g. subpoenas, warrants)</li>
            </ul>
            <p className="mt-2">
              We will never sell or rent your personal information.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-xl mb-2">6. Data Storage and Security</h2>
            <p>
              We store your data securely using encrypted digital systems and limit access only to authorised personnel. We take reasonable steps to protect personal information from misuse, interference, and unauthorised access.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-xl mb-2">7. Access and Correction</h2>
            <p>
              You may request access to the personal information we hold about you and request corrections if inaccurate.<br />
              <strong>Email:</strong> info@chromeaccountants.com.au<br />
              <strong>Phone:</strong> (+61) 401 809 559
            </p>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-xl mb-2">8. Cookies and Website Analytics</h2>
            <p>
              Our website may use cookies and analytics tools (e.g., Google Analytics) to track user interaction and improve performance. You can disable cookies via your browser settings.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-xl mb-2">9. Overseas Disclosure</h2>
            <p>
              We do not typically disclose your information overseas unless required by cloud services (e.g., data stored in Google Cloud or Xero data centres). In such cases, we ensure appropriate safeguards are in place.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-xl mb-2">10. Contact Us or Lodge a Complaint</h2>
            <p>
              For privacy concerns or to lodge a complaint:<br />
              <strong>Email:</strong> info@chromeaccountants.com.au<br />
              <strong>Phone:</strong> (+61) 401 809 559<br />
              <strong>Address:</strong> Level 1/161 Merrylands Rd, Merrylands NSW 2160
            </p>
            <p className="mt-2">
              You may also contact the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="underline text-ca-blue">www.oaic.gov.au</a> if you are not satisfied with our response.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
