import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions - My Debt Change",
  description: "Terms and conditions of use for the My Debt Change website.",
  keywords: "terms, conditions, debt, advice, help, website, privacy, policy",
};

export default function TermsConditionsPage() {
  return (
    <main className="max-w-screen-xl mx-auto p-4 space-y-5">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">
          Terms and Conditions for My Debt Change Limited
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Website:{" "}
          <Link
            href="http://www.mydebtchange.co.uk"
            className="!text-purple-500 hover:underline"
          >
            www.mydebtchange.co.uk
          </Link>
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-800">
              1. About My Debt Change Limited
            </h2>
            <p className="text-gray-700">
              My Debt Change Limited is a UK-based company registered in England
              and Wales (Company Registration Number: 9369491). We provide
              Individual Voluntary Arrangement (IVA) services and debt
              management solutions to individuals seeking financial assistance.
            </p>
            <p className="text-gray-700 mt-2">
              Our services are intended for residents of the UK who are over the
              age of 18. By using our services, you confirm that you meet these
              eligibility criteria.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-800">
              2. Use of Our Website
            </h2>
            <h3 className="font-semibold mb-1 text-purple-700">
              2.1. Access and Eligibility
            </h3>
            <p className="text-gray-700">
              Our website is intended for personal, non-commercial use. You must
              be at least 18 years old and a UK resident to use our services.
            </p>
            <h3 className="font-semibold mb-1 text-purple-700 mt-2">
              2.2. Accuracy of Information
            </h3>
            <p className="text-gray-700">
              You agree to provide accurate, complete, and up-to-date
              information when using our website or services. Any false or
              misleading information may result in the termination of your
              access to our services.
            </p>
            <h3 className="font-semibold mb-1 text-purple-700 mt-2">
              2.3. Prohibited Activities
            </h3>
            <p className="text-gray-700">
              You must not:
              <ul className="list-disc list-inside mt-1">
                <li>
                  Use our website for any illegal or unauthorized purpose.
                </li>
                <li>
                  Attempt to gain unauthorized access to our systems or data.
                </li>
                <li>
                  Use our website to distribute spam, viruses, or harmful
                  content.
                </li>
                <li>
                  Engage in any activity that disrupts or interferes with the
                  functionality of our website.
                </li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-800">
              3. IVA and Debt Management Services
            </h2>
            <h3 className="font-semibold mb-1 text-purple-700">
              3.1. Service Description
            </h3>
            <p className="text-gray-700">
              My Debt Change Limited provides IVA and debt management services
              to help individuals manage and resolve their debts. Our services
              include:
              <ul className="list-disc list-inside mt-1">
                <li>Assessing your financial situation.</li>
                <li>Proposing an IVA or alternative debt solution.</li>
                <li>Acting as your intermediary with creditors.</li>
              </ul>
            </p>
            <h3 className="font-semibold mb-1 text-purple-700 mt-2">
              3.2. No Guarantee of Outcome
            </h3>
            <p className="text-gray-700">
              While we strive to provide effective debt solutions, we cannot
              guarantee the success of an IVA or any other debt management plan.
              The outcome depends on various factors, including your financial
              circumstances and creditor approval.
            </p>
            <h3 className="font-semibold mb-1 text-purple-700 mt-2">
              3.3. Fees and Charges
            </h3>
            <p className="text-gray-700">
              Our fees for IVA and debt management services will be clearly
              explained to you before you agree to proceed. All fees are
              regulated and comply with UK laws and guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-800">
              4. Privacy and Data Protection
            </h2>
            <h3 className="font-semibold mb-1 text-purple-700">
              4.1. Data Collection
            </h3>
            <p className="text-gray-700">
              We collect and process personal data in accordance with our
              Privacy Policy, which complies with the UK General Data Protection
              Regulation (GDPR) and the Data Protection Act 2018. By using our
              services, you consent to the collection and use of your data as
              outlined in our Privacy Policy.
            </p>
            <h3 className="font-semibold mb-1 text-purple-700 mt-2">
              4.2. Third-Party Sharing
            </h3>
            <p className="text-gray-700">
              We may share your information with third parties, such as
              creditors, insolvency practitioners, or regulatory bodies, as
              necessary to provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-800">
              5. Intellectual Property
            </h2>
            <p className="text-gray-700">
              All content on our website, including text, graphics, logos, and
              images, is the property of My Debt Change Limited or its licensors
              and is protected by UK and international copyright laws. You may
              not reproduce, distribute, or use any content without our prior
              written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-800">
              6. Limitation of Liability
            </h2>
            <h3 className="font-semibold mb-1 text-purple-700">
              6.1. No Financial Advice
            </h3>
            <p className="text-gray-700">
              The information provided on our website is for general
              informational purposes only and does not constitute financial,
              legal, or professional advice. You should seek independent advice
              before making any financial decisions.
            </p>
            <h3 className="font-semibold mb-1 text-purple-700 mt-2">
              6.2. Exclusion of Liability
            </h3>
            <p className="text-gray-700">
              To the fullest extent permitted by law, My Debt Change Limited
              shall not be liable for any direct, indirect, incidental, or
              consequential damages arising from your use of our website or
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-800">
              7. Changes to Terms and Conditions
            </h2>
            <p className="text-gray-700">
              We reserve the right to update or modify these Terms and
              Conditions at any time. Any changes will be effective immediately
              upon posting on our website. Your continued use of our website or
              services constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-800">
              8. Governing Law
            </h2>
            <p className="text-gray-700">
              These Terms and Conditions are governed by and construed in
              accordance with the laws of England and Wales. Any disputes
              arising from these terms shall be subject to the exclusive
              jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-800">
              9. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions or concerns about these Terms and
              Conditions, please contact us at:
              <br />
              <strong>My Debt Change Limited</strong>
              <br />
              Email: support@mydebtchange.co.uk
            </p>
          </section>

          <p className="text-gray-700 text-center mt-8">
            By using our website and services, you acknowledge that you have
            read, understood, and agreed to these Terms and Conditions.
          </p>
          <p className="text-purple-600 text-center font-semibold mt-4">
            Thank you for choosing My Debt Change Limited.
          </p>
        </div>
      </div>
    </main>
  );
}
