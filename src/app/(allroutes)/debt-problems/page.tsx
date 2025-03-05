import LeadForm from "@/component/LeadForm";
import Link from "next/link";

export default function DebtProblemsPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="bg-white shadow-xl rounded-2xl overflow-hidden mb-10">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-10 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-purple-600 mb-6">
              Understanding Debt Problems
            </h1>
            <p className="text-lg text-gray-600 mb-5">
              Debt problems can feel overwhelming and isolating, but you&apos;re not
              alone. Financial challenges can arise from various life
              circumstances, and recognizing the signs early is the first step
              towards regaining financial control.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
              <p className="text-purple-700 font-semibold">
                Quick Fact: Over 8 million people in the UK are currently
                struggling with serious debt problems.
              </p>
            </div>
          </div>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1630941150115-ae465f29ece0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="h-full bg-black/30 flex items-center justify-center">
              <div className="text-orange-500 text-center p-8">
                <h2 className="text-3xl font-bold mb-4">
                  Are You Experiencing Debt Stress?
                </h2>
                <p className="text-xl mb-6">
                  Recognizing the warning signs is crucial to taking control of
                  your financial health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-orange-600 mb-6">
            Common Signs of Debt Problems
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-orange-500 mr-3 mt-1 group-hover:text-orange-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Difficulty making minimum payments</span>
            </li>
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-orange-500 mr-3 mt-1 group-hover:text-orange-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Using credit cards for daily expenses</span>
            </li>
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-orange-500 mr-3 mt-1 group-hover:text-orange-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Avoiding calls from creditors</span>
            </li>
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-orange-500 mr-3 mt-1 group-hover:text-orange-700 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>No savings or emergency fund</span>
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-purple-600 mb-6">
            Potential Causes of Debt
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-purple-500 mr-3 mt-1 group-hover:text-purple-700 transition"
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
              <span>Job loss or reduced income</span>
            </li>
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-purple-500 mr-3 mt-1 group-hover:text-purple-700 transition"
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
              <span>Medical emergencies</span>
            </li>
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-purple-500 mr-3 mt-1 group-hover:text-purple-700 transition"
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
              <span>Unexpected life changes</span>
            </li>
            <li className="flex items-start group">
              <svg
                className="w-6 h-6 text-purple-500 mr-3 mt-1 group-hover:text-purple-700 transition"
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
              <span>Poor financial management</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-10 mb-10">
        <h2 className="text-3xl font-semibold text-purple-600 mb-8 text-center">
          Steps to Address Debt Problems
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-5xl font-bold text-purple-500 mb-4">1</div>
            <h3 className="text-xl font-semibold mb-3">
              Assess Your Situation
            </h3>
            <p>
              Calculate total debt and create a comprehensive financial overview
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-5xl font-bold text-purple-500 mb-4">2</div>
            <h3 className="text-xl font-semibold mb-3">Create a Budget</h3>
            <p>Develop a realistic budget that prioritizes debt repayment</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-5xl font-bold text-purple-500 mb-4">3</div>
            <h3 className="text-xl font-semibold mb-3">Contact Creditors</h3>
            <p>Negotiate payment plans or seek temporary relief</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-5xl font-bold text-purple-500 mb-4">4</div>
            <h3 className="text-xl font-semibold mb-3">
              Seek Professional Advice
            </h3>
            <p>Consult a financial advisor or debt counselor</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <div className="text-5xl font-bold text-purple-500 mb-4">5</div>
            <h3 className="text-xl font-semibold mb-3">
              Explore Debt Solutions
            </h3>
            <p>
              Consider debt management plans, consolidation, or other options
            </p>
          </div>
        </div>
      </section>

      <section className="bg-purple-600 text-white py-12 rounded-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">You&apos;re Not Alone</h2>
          <p className="text-xl mb-8">
            Financial challenges happen to many people. There&apos;s always a path
            forward.
          </p>
          <Link
            href="/contact"
            className="bg-white !text-purple-600 hover:bg-purple-50 py-3 px-8 rounded-full font-semibold text-lg transition duration-300"
          >
            Get Free Debt Consultation
          </Link>
        </div>
      </section>

      <footer className="text-center mt-8 text-gray-600">
        <p className="text-lg">
          Remember, taking the first step is the most important part of solving
          debt problems.
        </p>
      </footer>

      <section className="mt-10">
        <LeadForm />
      </section>
    </main>
  );
}
