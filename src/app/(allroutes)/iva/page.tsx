import LeadForm from "@/component/LeadForm";
import Image from "next/image";
import Link from "next/link";

export default function IvaPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="w-full h-full flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-purple-600 mb-6">
              What is an IVA?
            </h2>
            <p className="text-lg mb-4">
              An Individual Voluntary Arrangement (IVA) is a formal, legally
              binding agreement between an individual and their creditors to
              repay debts over a fixed period. It is a structured debt solution
              that provides an alternative to bankruptcy, offering a more
              flexible approach to managing overwhelming financial obligations.
            </p>
            <p className="text-lg">
              An IVA is typically arranged with the help of an insolvency
              practitioner who negotiates with creditors on your behalf to
              create a manageable repayment plan.
            </p>
          </div>
          <div className="w-full aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1728044849347-ea6ff59d98dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={600}
              height={300}
              className="w-full h-full object-cover rounded-lg"
              alt="IVA"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-5">
          <div className="w-full aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
              width={600}
              height={300}
              className="w-full h-full object-cover rounded-lg"
              alt="IVA"
            />
          </div>
          <div className="bg-purple-50 p-6 rounded-lg self-center">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Key Characteristics
            </h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Legally binding agreement</li>
              <li>Fixed-term debt repayment plan</li>
              <li>Typically lasts 5-6 years</li>
              <li>Prevents creditors from taking further action</li>
              <li>Potential to write off some debt</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative z-10 overflow-hidden bg-purple-600 py-16 px-8">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="text-center lg:text-left ">
                <div className="mb-10 lg:mb-0 ">
                  <h1 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white ">
                    Struggling with Debt?
                  </h1>
                  <p className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white"></p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="text-center lg:text-right">
                <Link
                  className="font-semibold rounded-lg mx-auto inline-flex items-center !text-purple-700 justify-center bg-white py-4 px-9 hover:bg-opacity-90"
                  href="/contact"
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
        <span className="absolute top-0 right-0 -z-10">
          <svg
            width={324}
            height={250}
            viewBox="0 0 324 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.05"
              d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
              fill="url(#paint0_linear_971_6911)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_971_6911"
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
        <span className="absolute top-4 left-4 -z-10">
          <svg
            width={43}
            height={56}
            viewBox="0 0 43 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <circle
                cx="40.9984"
                cy="1.49626"
                r="1.49626"
                transform="rotate(90 40.9984 1.49626)"
                fill="white"
              />
              <circle
                cx="27.8304"
                cy="1.49626"
                r="1.49626"
                transform="rotate(90 27.8304 1.49626)"
                fill="white"
              />
              <circle
                cx="14.6644"
                cy="1.49626"
                r="1.49626"
                transform="rotate(90 14.6644 1.49626)"
                fill="white"
              />
              <circle
                cx="1.49642"
                cy="1.49626"
                r="1.49626"
                transform="rotate(90 1.49642 1.49626)"
                fill="white"
              />
              <circle
                cx="40.9984"
                cy="14.6642"
                r="1.49626"
                transform="rotate(90 40.9984 14.6642)"
                fill="white"
              />
              <circle
                cx="27.8304"
                cy="14.6642"
                r="1.49626"
                transform="rotate(90 27.8304 14.6642)"
                fill="white"
              />
              <circle
                cx="14.6644"
                cy="14.6642"
                r="1.49626"
                transform="rotate(90 14.6644 14.6642)"
                fill="white"
              />
              <circle
                cx="1.49642"
                cy="14.6642"
                r="1.49626"
                transform="rotate(90 1.49642 14.6642)"
                fill="white"
              />
              <circle
                cx="40.9984"
                cy="27.8302"
                r="1.49626"
                transform="rotate(90 40.9984 27.8302)"
                fill="white"
              />
              <circle
                cx="27.8304"
                cy="27.8302"
                r="1.49626"
                transform="rotate(90 27.8304 27.8302)"
                fill="white"
              />
              <circle
                cx="14.6644"
                cy="27.8302"
                r="1.49626"
                transform="rotate(90 14.6644 27.8302)"
                fill="white"
              />
              <circle
                cx="1.49642"
                cy="27.8302"
                r="1.49626"
                transform="rotate(90 1.49642 27.8302)"
                fill="white"
              />
              <circle
                cx="40.9984"
                cy="40.9982"
                r="1.49626"
                transform="rotate(90 40.9984 40.9982)"
                fill="white"
              />
              <circle
                cx="27.8304"
                cy="40.9963"
                r="1.49626"
                transform="rotate(90 27.8304 40.9963)"
                fill="white"
              />
              <circle
                cx="14.6644"
                cy="40.9982"
                r="1.49626"
                transform="rotate(90 14.6644 40.9982)"
                fill="white"
              />
              <circle
                cx="1.49642"
                cy="40.9963"
                r="1.49626"
                transform="rotate(90 1.49642 40.9963)"
                fill="white"
              />
              <circle
                cx="40.9984"
                cy="54.1642"
                r="1.49626"
                transform="rotate(90 40.9984 54.1642)"
                fill="white"
              />
              <circle
                cx="27.8304"
                cy="54.1642"
                r="1.49626"
                transform="rotate(90 27.8304 54.1642)"
                fill="white"
              />
              <circle
                cx="14.6644"
                cy="54.1642"
                r="1.49626"
                transform="rotate(90 14.6644 54.1642)"
                fill="white"
              />
              <circle
                cx="1.49642"
                cy="54.1642"
                r="1.49626"
                transform="rotate(90 1.49642 54.1642)"
                fill="white"
              />
            </g>
          </svg>
        </span>
      </section>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-green-600 mb-6">
            Pros of an IVA
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
              <span>Potential to write off a portion of unsecured debt</span>
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
              <span>Single, affordable monthly payment</span>
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
              <span>Avoid bankruptcy</span>
            </li>
          </ul>
        </section>
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-red-600 mb-6">
            Cons of an IVA
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
              <span>May require homeowners to release equity</span>
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
          IVA Process: Step by Step
        </h2>
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              1. Initial Consultation
            </h3>
            <p className="text-lg">
              Meet with an insolvency practitioner to assess your financial
              situation and determine if an IVA is suitable.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              2. Proposal Preparation
            </h3>
            <p className="text-lg">
              Your insolvency practitioner drafts a detailed proposal outlining
              your income, expenses, assets, and proposed repayment plan.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              3. Creditor Voting
            </h3>
            <p className="text-lg">
              Creditors review the proposal and vote. At least 75% (by value)
              must agree for the IVA to be approved.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              4. Implementation
            </h3>
            <p className="text-lg">
              Once approved, you begin making agreed monthly payments to the
              insolvency practitioner, who distributes funds to creditors.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              5. Completion
            </h3>
            <p className="text-lg">
              After successfully completing the IVA (typically 5-6 years),
              remaining qualifying debts are written off.
            </p>
          </div>
        </div>
      </section>
      <LeadForm />
    </main>
  );
}
