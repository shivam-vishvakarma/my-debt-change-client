import LeadForm from "@/component/LeadForm";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto md:min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Advice to get rid of</span>
              <br />
              <span className="block text-purple-700 xl:inline">
                Your all debts
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Get personalized recommendations to help you achieve your
              financial goals and get rid of your debts. Our platform uses
              advanced algorithms to analyze your financial situation and
              provide customized recommendations to help you achieve your
              financial goals.
            </p>
            {/* Button Section */}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-purple-700 hover:bg-gray-600 !text-white md:py-4 md:text-lg md:px-10"
                >
                  Get Help Now
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  href="/about"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                    Learn more
                </Link>
              </div>
            </div>
            {/* End of Button Section */}
          </div>
          {/*   Image Section     */}
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 bg-gradient-to-r from-purple-700 to-purple-500 rounded-lg p-4 animate-pulse">
            {/* <Image
              className="rounded-lg"
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            /> */}
          </div>
          {/*   End of Image Section     */}
        </div>
      </section>
      <section className="bg-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find the right solution for your situation
          </h2>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white !text-purple-700 rounded-lg font-bold shadow-md hover:bg-blue-50"
          >
            Get Debt Help Now
          </Link>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl tracking-tight font-bold text-primary-800">
              Highlighted Features
            </h2>
          </div>
          <div className="flex flex-col md:flex-row">
            {/* can help image */}
            {/* <div className="mr-0 md:mr-8 mb-6 md:mb-0">
              <Image
                className="w-1/2 md:w-full mx-auto"
                width={400}
                height={400}
                src="/calling women.jpg"
                alt="Can Help"
              />
            </div> */}
            {/* end can help image */}
            <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
              <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    Personalized Recommendations
                  </h3>
                  <p className="text-sm">
                    Our platform uses advanced algorithms to analyze your
                    financial situation and provide customized recommendations
                    to help you achieve your financial goals.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    Mobile-First Design
                  </h3>
                  <p className="text-sm">
                    {" "}
                    Our platform is designed with mobile users in mind, making
                    it easy to access your account and manage your finances on
                    the go.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    24/7 Customer Support
                  </h3>
                  <p className="text-sm">
                    U.K.-based customer support team is available around the
                    clock to answer any questions, resolve any issues, and
                    provide helpful solutions. Whether it&apos;s through email,
                    phone, or live chat, we&apos;re always here to support you.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                  <h3 className="text-2xl font-bold text-md mb-6">
                    Secure Payment Processing
                  </h3>
                  <p className="text-sm">
                    We use cutting-edge security measures to protect our
                    customers&apos; sensitive information and ensure the safety of
                    all transactions made on our site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LeadForm />
      <section className="bg-center bg-no-repeat bg-gray-700 bg-blend-overlay">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world&apos;s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at My Debt Change, we believe in the power of the individual to
            change the world. We invest in the potential of every person to
            create a better future for themselves and their community.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center !text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300"
            >
              Clear your debts
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex justify-center hover:!text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center !text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
