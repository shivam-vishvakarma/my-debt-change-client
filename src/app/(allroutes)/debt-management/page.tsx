import LeadForm from "@/component/LeadForm";
import Image from "next/image";
import Link from "next/link";

export default function DebtManagementPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="bg-white shadow-xl rounded-2xl p-8 mb-10 border-t-4 border-purple-500">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">
              Understanding Debt Management Plans
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A Debt Management Plan (DMP) is a flexible, informal arrangement
              that helps individuals repay multiple debts through a structured
              and manageable approach. Unlike formal insolvency solutions, a DMP
              allows you to work with a professional to negotiate reduced
              payments and potentially lower interest rates with your creditors.
            </p>
            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-purple-800 mb-3">
                Key Benefits
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Consolidated debt payments
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-purple-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Potential interest rate reduction
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1726137569752-ede37855620d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D"
              width={600}
              height={300}
              className="w-full h-full object-cover rounded-lg"
              alt="dro"
            />
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl font-semibold text-green-600 mb-6">
            Advantages of a DMP
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1 group-hover:text-green-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Single monthly payment</span>
            </li>
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1 group-hover:text-green-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Potential reduction in interest rates</span>
            </li>
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1 group-hover:text-green-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Simplified debt management</span>
            </li>
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1 group-hover:text-green-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Less stressful than other solutions</span>
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl font-semibold text-red-600 mb-6">
            Potential Drawbacks
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-red-500 mr-3 mt-1 group-hover:text-red-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Longer repayment period</span>
            </li>
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-red-500 mr-3 mt-1 group-hover:text-red-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>May impact credit score</span>
            </li>
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-red-500 mr-3 mt-1 group-hover:text-red-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Not legally binding</span>
            </li>
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-red-500 mr-3 mt-1 group-hover:text-red-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Requires creditor cooperation</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-purple-600 mb-8 text-center">
          The Debt Management Plan Process
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-5xl font-bold text-purple-500 mb-4">1</div>
            <h3 className="text-xl font-semibold mb-3">Initial Assessment</h3>
            <p>Comprehensive review of your financial situation</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-5xl font-bold text-purple-500 mb-4">2</div>
            <h3 className="text-xl font-semibold mb-3">Proposal Development</h3>
            <p>Create a tailored debt repayment strategy</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-5xl font-bold text-purple-500 mb-4">3</div>
            <h3 className="text-xl font-semibold mb-3">Creditor Negotiation</h3>
            <p>Negotiate reduced payments and terms</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-5xl font-bold text-purple-500 mb-4">4</div>
            <h3 className="text-xl font-semibold mb-3">Implementation</h3>
            <p>Begin making consolidated monthly payments</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-5xl font-bold text-purple-500 mb-4">5</div>
            <h3 className="text-xl font-semibold mb-3">Ongoing Management</h3>
            <p>Regular review and adjustment of the plan</p>
          </div>
        </div>
      </section>

      <section className="bg-purple-600 text-white py-12 mt-10 rounded-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Take Control of Your Finances
          </h2>
          <p className="text-xl mb-8">
            Don&apos;t let debt overwhelm you. We&apos;re here to help you find a path
            forward.
          </p>
          <Link
            href="/contact"
            className="bg-white !text-purple-600 hover:bg-purple-50 py-3 px-8 rounded-full font-semibold text-lg transition duration-300"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <LeadForm />
      </section>
    </main>
  );
}
