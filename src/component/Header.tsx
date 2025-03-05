import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-white border-gray-200 sticky top-0 z-20 shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.jpg"
            width={50}
            height={32}
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold text-purple-800 whitespace-nowrap">
            My <span className="text-orange-500">Debt</span> Change
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 !text-black hover:!text-purple-700 bg-blue-700 rounded-sm md:bg-transparent md:text-black md:hover:text-purple-600 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:!text-black hover:!text-purple-700 md:p-0 md:w-auto"
              >
                Learn{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white rounded-lg shadow-sm w-44"
              >
                <ul
                  className="py-2 text-sm"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="/dro"
                      className="block px-4 py-2 hover:bg-gray-100 !text-black hover:!text-purple-700"
                    >
                      DRO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/iva"
                      className="block px-4 py-2 hover:bg-gray-100 !text-black hover:!text-purple-700"
                    >
                      IVA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/debt-management"
                      className="block px-4 py-2 hover:bg-gray-100 !text-black hover:!text-purple-700"
                    >
                      Debt Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/debt-problems"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 !text-black hover:!text-purple-700"
                    >
                      Debt Problems
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:!text-black hover:!text-purple-700 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:!text-black hover:!text-purple-700 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
