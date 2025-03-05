import LeadForm from "@/component/LeadForm";
import Image from "next/image";
import Link from "next/link";

export default function DroPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="w-full h-full flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-purple-600 mb-6">
              What is a Debt Relief Order?
            </h2>
            <p className="text-lg mb-4">
              A Debt Relief Order (DRO) is a form of debt solution designed for
              individuals with low income, minimal assets, and relatively low
              levels of debt. It provides a way to write off certain debts
              without going through bankruptcy, offering a lifeline to those
              struggling with unmanageable financial obligations.
            </p>
            <p className="text-lg">
              DROs are administered by the Insolvency Service and provide
              temporary relief from debt repayments, typically lasting 12 months
              before potentially writing off qualifying debts.
            </p>
          </div>
          <div className="w-full aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D"
              width={600}
              height={300}
              className="w-full h-full object-cover rounded-lg"
              alt="dro"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-5">
          <div className="w-full aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D"
              width={600}
              height={300}
              className="w-full h-full object-cover rounded-lg"
              alt="dro"
            />
          </div>
          <div className="bg-purple-50 p-6 rounded-lg self-center">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Key Characteristics
            </h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Designed for low-income individuals</li>
              <li>Provides debt relief for 12 months</li>
              <li>Stops creditor actions</li>
              <li>Minimal application costs</li>
              <li>Potential to write off qualifying debts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-purple-600 py-16 px-8">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="text-center lg:text-left">
                <div className="mb-10 lg:mb-0">
                  <h1 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white">
                    Struggling with Overwhelming Debt?
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="text-center lg:text-right">
                <Link
                  href="/contact"
                  className="font-semibold rounded-lg mx-auto inline-flex items-center justify-center !text-purple-700 bg-white py-4 px-9 hover:bg-opacity-90"
                >
                  Get Help Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="absolute top-0 right-0 -z-10">
          <svg
            width={388}
            height={250}
            viewBox="0 0 388 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.05"
              d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
              fill="url(#paint0_linear_971_6910)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_971_6910"
                x1="60.5"
                y1={111}
                x2={287}
                y2={111}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.520507" stopColor="white" />
                <stop offset={1} stopColor="white" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-green-600 mb-6">
            Pros of a Debt Relief Order
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Stops creditor harassment and legal action</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Low-cost alternative to bankruptcy</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Potential to write off qualifying debts</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Quick process with minimal paperwork</span>
            </li>
          </ul>
        </section>
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-red-600 mb-6">
            Cons of a Debt Relief Order
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-red-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Negatively impacts credit rating</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-red-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Remains on credit file for 6 years</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-red-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Strict eligibility criteria</span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-red-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Not all debts can be included</span>
            </li>
          </ul>
        </section>
      </div>

      <section className="bg-white shadow-lg rounded-lg p-8 mt-8">
        <h2 className="text-3xl font-semibold text-purple-600 mb-6">
          DRO Process: Step by Step
        </h2>
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              1. Eligibility Check
            </h3>
            <p className="text-lg">
              Verify that you meet the strict criteria for a Debt Relief Order,
              including income, debt, and asset limitations.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              2. Application Preparation
            </h3>
            <p className="text-lg">
              Work with an approved debt adviser to complete the DRO
              application, detailing your financial circumstances.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              3. Submission and Review
            </h3>
            <p className="text-lg">
              Submit the application to the Insolvency Service, who will review
              and decide whether to grant the DRO.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              4. Moratorium Period
            </h3>
            <p className="text-lg">
              Once approved, enter a 12-month moratorium where creditors cannot
              take action against you.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              5. Debt Discharge
            </h3>
            <p className="text-lg">
              After 12 months, if your circumstances haven&apos;t changed, qualifying
              debts are written off.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <LeadForm />
      </section>
    </main>
  );
}
