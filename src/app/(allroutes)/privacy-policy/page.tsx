import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - My Debt Change",
  description: "Privacy Policy for My Debt Change",
  keywords: "Privacy Policy, Debt Advice, Debt Help, Debt Solutions",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">
          Privacy Policy for My Debt Change Limited
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Website:{" "}
          <Link
            href="http://www.mydebtchange.co.uk"
            className="text-purple-500 hover:underline"
          >
            www.mydebtchange.co.uk
          </Link>
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-600">
              1. Introduction
            </h2>
            <p className="text-gray-700">
              My Debt Change Limited (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or the &quot;Company&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, and safeguard your personal information when
              you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-600">
              2. Information We Collect
            </h2>
            <p className="text-gray-700">
              We may collect the following types of personal information:
              <ul className="list-disc list-inside mt-1">
                <li>
                  Contact information (e.g., name, email address, phone number).
                </li>
                <li>Financial information (e.g., income, expenses, debts).</li>
                <li>
                  Identification documents (e.g., passport, driver&apos;s license).
                </li>
                <li>
                  Technical data (e.g., IP address, browser type, device
                  information).
                </li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-600">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700">
              We use your personal information for the following purposes:
              <ul className="list-disc list-inside mt-1">
                <li>
                  To provide and manage our services, including IVA and debt
                  management solutions.
                </li>
                <li>
                  To communicate with you about your account or our services.
                </li>
                <li>To comply with legal and regulatory obligations.</li>
                <li>To improve our website and services.</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-600">
              4. Sharing Your Information
            </h2>
            <p className="text-gray-700">
              We may share your information with:
              <ul className="list-disc list-inside mt-1">
                <li>
                  Creditors and insolvency practitioners as part of your IVA or
                  debt management plan.
                </li>
                <li>
                  Regulatory bodies or law enforcement agencies if required by
                  law.
                </li>
                <li>
                  Third-party service providers who assist us in delivering our
                  services.
                </li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-600">
              5. Data Security
            </h2>
            <p className="text-gray-700">
              We take appropriate measures to protect your personal information
              from unauthorized access, alteration, or disclosure. These
              measures include encryption, secure servers, and access controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-600">
              6. Your Rights
            </h2>
            <p className="text-gray-700">
              Under the UK General Data Protection Regulation (GDPR), you have
              the following rights:
              <ul className="list-disc list-inside mt-1">
                <li>The right to access your personal data.</li>
                <li>The right to correct inaccurate or incomplete data.</li>
                <li>The right to request the deletion of your data.</li>
                <li>
                  The right to restrict or object to the processing of your
                  data.
                </li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-600">
              7. Cookies
            </h2>
            <p className="text-gray-700">
              Our website uses cookies to enhance your experience. Cookies are
              small text files stored on your device that help us analyze
              website traffic and improve functionality. You can manage or
              disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-600">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and the effective date will be
              updated accordingly. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-purple-600">
              9. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
              <br />
              <strong>My Debt Change Limited</strong>
              <br />
              Email: support@mydebtchange.co.uk
            </p>
          </section>

          <p className="text-gray-700 text-center mt-8">
            By using our website and services, you acknowledge that you have
            read and understood this Privacy Policy.
          </p>
          <p className="text-purple-600 text-center font-semibold mt-4">
            Thank you for trusting My Debt Change Limited.
          </p>
        </div>
      </div>
    </div>
  );
}
