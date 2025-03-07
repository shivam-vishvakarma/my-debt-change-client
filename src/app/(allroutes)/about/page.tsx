import LeadForm from "@/component/LeadForm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - My Debt Change",
  description: "A simple debt repayment guide for beginners.",
};

export default function Page() {
  return (
    <main>
      <section>
        <div className="relative overflow-hidden pt-16 pb-32 space-y-24">
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-purple-700">
                      Enjoy debt free life
                    </h2>
                    <p className="mt-4 text-lg text-black">
                      Contact us to get a free consultation on how to get out of
                      debt and start living a debt free life. We can help you
                      with debt consolidation, debt management, and debt relief.
                    </p>
                    <div className="mt-6">
                      <Link
                        className="inline-flex rounded-lg bg-purple-600 px-4 py-1.5 text-base font-semibold leading-7 !text-white shadow-sm ring-1 ring-purple-600 hover:bg-purple-700 hover:ring-purple-700"
                        href="/contact"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    width={647}
                    height={486}
                    loading="lazy"
                    alt="Inbox user interface"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-purple-700">
                      Individual Voluntary Arrangement (IVA)
                    </h2>
                    <p className="mt-4 text-lg text-black">
                      An IVA is a formal agreement between you and your
                      creditors to pay off your debts over a period of time.
                      Contact us to find out if an IVA is the right solution for
                      you.
                    </p>
                    <div className="mt-6">
                      <Link
                        className="inline-flex rounded-lg bg-purple-600 px-4 py-1.5 text-base font-semibold leading-7 !text-white shadow-sm ring-1 ring-purple-600 hover:bg-purple-700 hover:ring-purple-700"
                        href="/iva"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    alt="Inbox user interface"
                    loading="lazy"
                    width={647}
                    height={486}
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src="https://images.unsplash.com/photo-1607827448452-6fda561309d0?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-purple-700">
                      Debt Problems
                    </h2>
                    <p className="mt-4 text-lg text-black">
                      Are you having problems with your debts? Contact us to get
                      a free consultation on how to get out of debt and start
                      living a debt free life.
                    </p>
                    <div className="mt-6">
                      <Link
                        className="inline-flex rounded-lg bg-purple-600 px-4 py-1.5 text-base font-semibold leading-7 !text-white shadow-sm ring-1 ring-purple-600 hover:bg-purple-700 hover:ring-purple-700"
                        href="/debt-problems"
                      >
                        Debt Free Life
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    loading="lazy"
                    width={646}
                    height={485}
                    alt="Inbox user interface"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    style={{ color: "transparent" }}
                    src="https://images.unsplash.com/photo-1634128222187-18eababc763d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LeadForm />
      <section className="bg-white px-4 py-12 md:py-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-black text-black text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12">
            What Our Customers Are Saying
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative">
            <div className="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
              <p className="font-bold uppercase">John Doe</p>
              <p className="text-xl font-light italic text-gray-700">
                I found the advice and support I received from Debt Free Life to
                be invaluable. I&apos;m now on the road to financial freedom!
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                <svg
                  className="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
              <p className="font-bold uppercase">Jane Smith</p>
              <p className="text-xl font-light italic text-gray-700">
                This company has been a lifesaver! I was drowning in debt and
                didn&apos;t know where to turn. Debt Free Life helped me get
                back on my feet.
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                <svg
                  className="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
              <p className="font-bold uppercase">Emily Johnson</p>
              <p className="text-xl font-light italic text-gray-700">
                I am so grateful for the help I received from Debt Free Life. I
                can now see a light at the end of the tunnel. Thank you!
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                <svg
                  className="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  className="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 text-center">
          <p className="flex items-center justify-center space-x-2 flex-col sm:flex-row">
            <span className="text-xl sm:text-2xl">Average Customer Rating: </span>
            <span className="flex"><svg
              role="img"
              width={30}
              height={30}
              viewBox="2 2 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Filled star</title>
              <defs>
                <clipPath id="clip-1iljp5ha10bb3519b239ce">
                  <rect
                    width={8}
                    height="7.6636257"
                    x="3.9863169"
                    y="4.3568988"
                  />
                </clipPath>
              </defs>
              <g id="decimal-star">
                <path
                  id="border-star"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M 13.3854,6.01933 10.1084,5.52017 8.64374,2.41743 c -0.26243,-0.55305 -1.0228,-0.56008 -1.28748,0 L 5.89159,5.52017 2.61459,6.01933 C 2.02693,6.10838 1.79141,6.86532 2.21758,7.29886 L 4.58842,9.71263 4.02767,13.1224 c -0.10093,0.6163 0.52037,1.078 1.04075,0.7897 L 8,12.3021 l 2.9316,1.61 c 0.5204,0.2859 1.1417,-0.1734 1.0407,-0.7897 L 11.4116,9.71263 13.7824,7.29886 C 14.2086,6.86532 13.9731,6.10838 13.3854,6.01933 Z M 10.238,11.8199 9.80791,9.20473 11.6987,7.27971 9.09291,6.88279 8,4.56758 6.90709,6.88279 4.30131,7.27971 6.19209,9.20473 5.76202,11.8199 8,10.5908 Z"
                  style={{ fill: "rgb(255, 208, 0)", fillOpacity: 1 }}
                />
                <path
                  id="inner"
                  d="M 10.365089,11.940869 9.9112316,9.2401755 11.906508,7.2522018 9.1567203,6.8423012 8.0034155,4.4513771 6.8501108,6.8423012 4.100334,7.2522018 6.0955995,9.2401755 5.6417636,11.940869 8.0034155,10.671574 Z"
                  style={{
                    fill: "rgb(255, 208, 0)",
                    clipPath: 'url("#clip-1iljp5ha10bb3519b239ce")',
                  }}
                />
              </g>
            </svg>
            <svg
              role="img"
              width={30}
              height={30}
              viewBox="2 2 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Filled star</title>
              <defs>
                <clipPath id="clip-1iljp5ha10bb3519b239ce">
                  <rect
                    width={8}
                    height="7.6636257"
                    x="3.9863169"
                    y="4.3568988"
                  />
                </clipPath>
              </defs>
              <g id="decimal-star">
                <path
                  id="border-star"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M 13.3854,6.01933 10.1084,5.52017 8.64374,2.41743 c -0.26243,-0.55305 -1.0228,-0.56008 -1.28748,0 L 5.89159,5.52017 2.61459,6.01933 C 2.02693,6.10838 1.79141,6.86532 2.21758,7.29886 L 4.58842,9.71263 4.02767,13.1224 c -0.10093,0.6163 0.52037,1.078 1.04075,0.7897 L 8,12.3021 l 2.9316,1.61 c 0.5204,0.2859 1.1417,-0.1734 1.0407,-0.7897 L 11.4116,9.71263 13.7824,7.29886 C 14.2086,6.86532 13.9731,6.10838 13.3854,6.01933 Z M 10.238,11.8199 9.80791,9.20473 11.6987,7.27971 9.09291,6.88279 8,4.56758 6.90709,6.88279 4.30131,7.27971 6.19209,9.20473 5.76202,11.8199 8,10.5908 Z"
                  style={{ fill: "rgb(255, 208, 0)", fillOpacity: 1 }}
                />
                <path
                  id="inner"
                  d="M 10.365089,11.940869 9.9112316,9.2401755 11.906508,7.2522018 9.1567203,6.8423012 8.0034155,4.4513771 6.8501108,6.8423012 4.100334,7.2522018 6.0955995,9.2401755 5.6417636,11.940869 8.0034155,10.671574 Z"
                  style={{
                    fill: "rgb(255, 208, 0)",
                    clipPath: 'url("#clip-1iljp5ha10bb3519b239ce")',
                  }}
                />
              </g>
            </svg>
            <svg
              role="img"
              width={30}
              height={30}
              viewBox="2 2 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Filled star</title>
              <defs>
                <clipPath id="clip-1iljp5ha10bb3519b239ce">
                  <rect
                    width={8}
                    height="7.6636257"
                    x="3.9863169"
                    y="4.3568988"
                  />
                </clipPath>
              </defs>
              <g id="decimal-star">
                <path
                  id="border-star"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M 13.3854,6.01933 10.1084,5.52017 8.64374,2.41743 c -0.26243,-0.55305 -1.0228,-0.56008 -1.28748,0 L 5.89159,5.52017 2.61459,6.01933 C 2.02693,6.10838 1.79141,6.86532 2.21758,7.29886 L 4.58842,9.71263 4.02767,13.1224 c -0.10093,0.6163 0.52037,1.078 1.04075,0.7897 L 8,12.3021 l 2.9316,1.61 c 0.5204,0.2859 1.1417,-0.1734 1.0407,-0.7897 L 11.4116,9.71263 13.7824,7.29886 C 14.2086,6.86532 13.9731,6.10838 13.3854,6.01933 Z M 10.238,11.8199 9.80791,9.20473 11.6987,7.27971 9.09291,6.88279 8,4.56758 6.90709,6.88279 4.30131,7.27971 6.19209,9.20473 5.76202,11.8199 8,10.5908 Z"
                  style={{ fill: "rgb(255, 208, 0)", fillOpacity: 1 }}
                />
                <path
                  id="inner"
                  d="M 10.365089,11.940869 9.9112316,9.2401755 11.906508,7.2522018 9.1567203,6.8423012 8.0034155,4.4513771 6.8501108,6.8423012 4.100334,7.2522018 6.0955995,9.2401755 5.6417636,11.940869 8.0034155,10.671574 Z"
                  style={{
                    fill: "rgb(255, 208, 0)",
                    clipPath: 'url("#clip-1iljp5ha10bb3519b239ce")',
                  }}
                />
              </g>
            </svg>
            <svg
              role="img"
              width={30}
              height={30}
              viewBox="2 2 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Filled star</title>
              <defs>
                <clipPath id="clip-1iljp5ha10bb3519b239ce">
                  <rect
                    width={8}
                    height="7.6636257"
                    x="3.9863169"
                    y="4.3568988"
                  />
                </clipPath>
              </defs>
              <g id="decimal-star">
                <path
                  id="border-star"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M 13.3854,6.01933 10.1084,5.52017 8.64374,2.41743 c -0.26243,-0.55305 -1.0228,-0.56008 -1.28748,0 L 5.89159,5.52017 2.61459,6.01933 C 2.02693,6.10838 1.79141,6.86532 2.21758,7.29886 L 4.58842,9.71263 4.02767,13.1224 c -0.10093,0.6163 0.52037,1.078 1.04075,0.7897 L 8,12.3021 l 2.9316,1.61 c 0.5204,0.2859 1.1417,-0.1734 1.0407,-0.7897 L 11.4116,9.71263 13.7824,7.29886 C 14.2086,6.86532 13.9731,6.10838 13.3854,6.01933 Z M 10.238,11.8199 9.80791,9.20473 11.6987,7.27971 9.09291,6.88279 8,4.56758 6.90709,6.88279 4.30131,7.27971 6.19209,9.20473 5.76202,11.8199 8,10.5908 Z"
                  style={{ fill: "rgb(255, 208, 0)", fillOpacity: 1 }}
                />
                <path
                  id="inner"
                  d="M 10.365089,11.940869 9.9112316,9.2401755 11.906508,7.2522018 9.1567203,6.8423012 8.0034155,4.4513771 6.8501108,6.8423012 4.100334,7.2522018 6.0955995,9.2401755 5.6417636,11.940869 8.0034155,10.671574 Z"
                  style={{
                    fill: "rgb(255, 208, 0)",
                    clipPath: 'url("#clip-1iljp5ha10bb3519b239ce")',
                  }}
                />
              </g>
            </svg>
            <svg
              role="img"
              width={30}
              height={30}
              viewBox="2 2 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Partial star</title>
              <defs>
                <clipPath id="clip-1iljp12jh044e3e354ac896">
                  <rect
                    width="5.8"
                    height="7.6636257"
                    x="3.9863169"
                    y="4.3568988"
                  />
                </clipPath>
              </defs>
              <g id="decimal-star">
                <path
                  id="border-star"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M 13.3854,6.01933 10.1084,5.52017 8.64374,2.41743 c -0.26243,-0.55305 -1.0228,-0.56008 -1.28748,0 L 5.89159,5.52017 2.61459,6.01933 C 2.02693,6.10838 1.79141,6.86532 2.21758,7.29886 L 4.58842,9.71263 4.02767,13.1224 c -0.10093,0.6163 0.52037,1.078 1.04075,0.7897 L 8,12.3021 l 2.9316,1.61 c 0.5204,0.2859 1.1417,-0.1734 1.0407,-0.7897 L 11.4116,9.71263 13.7824,7.29886 C 14.2086,6.86532 13.9731,6.10838 13.3854,6.01933 Z M 10.238,11.8199 9.80791,9.20473 11.6987,7.27971 9.09291,6.88279 8,4.56758 6.90709,6.88279 4.30131,7.27971 6.19209,9.20473 5.76202,11.8199 8,10.5908 Z"
                  style={{ fill: "rgb(255, 208, 0)", fillOpacity: 1 }}
                />
                <path
                  id="inner"
                  d="M 10.365089,11.940869 9.9112316,9.2401755 11.906508,7.2522018 9.1567203,6.8423012 8.0034155,4.4513771 6.8501108,6.8423012 4.100334,7.2522018 6.0955995,9.2401755 5.6417636,11.940869 8.0034155,10.671574 Z"
                  style={{
                    fill: "rgb(255, 208, 0)",
                    clipPath: 'url("#clip-1iljp12jh044e3e354ac896")',
                  }}
                />
              </g>
            </svg>
             <span className="text-2xl font-semibold">4.5</span>/5</span>
          </p>
          <p className="text-sm mt-2 text-gray-500">service rating based on verified reviews</p>
        </div>
      </section>
    </main>
  );
}
