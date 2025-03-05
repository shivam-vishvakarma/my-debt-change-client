"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import ThanksModal from "./ThanksModal";
import Image from "next/image";

const APP_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyUHcOtIe4VpbBsEc1lPpw5JVqtecoSQgTZG8J85L0Ku3HPYVpbR4kyOWPVKJiisCd-tg/exec";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    debtValue: "",
    debtCount: "",
    employmentStatus: "",
  });

  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const closeModal = () => setShowModal(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoading(true);
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    setLoading(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const newFormData = new FormData();
    newFormData.append("first_name", formData.first_name);
    newFormData.append("last_name", formData.last_name);
    newFormData.append("email", formData.email);
    newFormData.append("phone", formData.phone);
    newFormData.append("message", formData.message);
    newFormData.append("debtValue", formData.debtValue);
    newFormData.append("debtCount", formData.debtCount);
    newFormData.append("employmentStatus", formData.employmentStatus);

    try {
      const response = await fetch(APP_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: newFormData,
      });

      // Check response (Google Apps Script returns 200 with no-cors)
      if (response) {
        setLoading(false);
        setShowModal(true);
        // Reset form after successful submission
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
          debtValue: "",
          debtCount: "",
          employmentStatus: "",
        });
      } else {
        alert("Submission failed");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[50vh] bg-gray-100 w-full flex items-center justify-center flex-col gap-8 p-8">
      <h2 className="text-5xl text-purple-700 font-semibold">
        Debt Solution Finder
      </h2>
      <p className="text-3xl">Step {step} of 4</p>
      <ol className="relative items-center w-full md:w-10/12 mx-auto justify-around space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
        <div className="w-full absolute z-0 bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-purple-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${step * 25}%` }}
          >
            {" "}
            {step * 25}%
          </div>
        </div>
        {step > 1 && (
          <button
            className="absolute -top-[100%] left-0 cursor-pointer active:scale-95"
            onClick={() => setStep((prev) => prev - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-purple-800 text-3xl size-10"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          </button>
        )}
        <li
          className={`flex items-center ${
            step >= 1
              ? "text-purple-600 dark:text-purple-500"
              : "text-gray-500 dark:text-gray-400"
          } space-x-2.5 rtl:space-x-reverse z-10 bg-white rounded-full border-2 border-white`}
        >
          <span
            className={`flex items-center justify-center w-8 h-8 border-2  rounded-full shrink-0 ${
              step >= 1
                ? "border-purple-600 dark:border-purple-500"
                : " dark:border-gray-400 border-gray-500"
            }`}
          >
            1
          </span>
          {/* <span>
            <h3 className="font-medium leading-tight">User info</h3>
            <p className="text-sm">Step details here</p>
          </span> */}
        </li>
        <li
          className={`flex items-center ${
            step >= 2
              ? "text-purple-600 dark:text-purple-500"
              : "text-gray-500 dark:text-gray-400"
          } space-x-2.5 rtl:space-x-reverse z-10 bg-white rounded-full border-2 border-white`}
        >
          <span
            className={`flex items-center justify-center w-8 h-8 border-2  rounded-full shrink-0 ${
              step >= 2
                ? "border-purple-600 dark:border-purple-500"
                : " dark:border-gray-400 border-gray-500"
            }`}
          >
            2
          </span>
        </li>
        <li
          className={`flex items-center ${
            step >= 3
              ? "text-purple-600 dark:text-purple-500"
              : "text-gray-500 dark:text-gray-400"
          } space-x-2.5 rtl:space-x-reverse z-10 bg-white rounded-full border-2 border-white`}
        >
          <span
            className={`flex items-center justify-center w-8 h-8 border-2  rounded-full shrink-0 ${
              step >= 3
                ? "border-purple-600 dark:border-purple-500"
                : " dark:border-gray-400 border-gray-500"
            }`}
          >
            3
          </span>
        </li>
        <li
          className={`flex items-center ${
            step >= 4
              ? "text-purple-600 dark:text-purple-500"
              : "text-gray-500 dark:text-gray-400"
          } space-x-2.5 rtl:space-x-reverse z-10 bg-white rounded-full border-2 border-white`}
        >
          <span
            className={`flex items-center justify-center w-8 h-8 border-2  rounded-full shrink-0 ${
              step >= 4
                ? "border-purple-600 dark:border-purple-500"
                : " dark:border-gray-400 border-gray-500"
            }`}
          >
            4
          </span>
        </li>
      </ol>

      {step === 1 && (
        <>
          <p className="text-4xl font-semibold">
            What is the total value of your debt?
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full md:w-10/12 gap-4">
            <div
              className="flex justify-center items-center border-2 border-purple-700 text-purple-700 p-4 rounded-sm shadow-xl text-lg text-center md:text-xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtValue: "Less than £5,000",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              {" "}
              <input type="radio" className="text-purple-700 mr-2" />
              <p>Less than £5,000</p>
            </div>
            <div
              className="flex justify-center items-center border-2 border-purple-700 text-purple-700 p-4 rounded-sm shadow-xl text-lg text-center md:text-xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtValue: "£5,000 - £10,000",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <input type="radio" className="text-purple-700 mr-2" />
              <p>£5,000 - £10,000</p>
            </div>
            <div
              className="flex justify-center items-center border-2 border-purple-700 text-purple-700 p-4 rounded-sm shadow-xl text-lg text-center md:text-xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtValue: "£10,000 - £20,000",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <input type="radio" className="text-purple-700 mr-2" />
              <p>£10,000 - £20,000</p>
            </div>
            <div
              className="flex justify-center items-center border-2 border-purple-700 text-purple-700 p-4 rounded-sm shadow-xl text-lg text-center md:text-xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtValue: "More than £20,000",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <input type="radio" className="text-purple-700 mr-2" />
              <p>More than £20,000</p>
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <p className="text-4xl font-semibold">How many debts do you have?</p>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full md:w-10/12 gap-4">
            <div
              className="flex justify-center items-center border-2 border-purple-700 text-purple-700 p-4 rounded-sm shadow-xl text-lg text-center md:text-xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtCount: "Just the 1",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <input type="radio" className="text-purple-700 mr-2" />
              <p>Just the 1</p>
            </div>
            <div
              className="flex justify-center items-center border-2 border-purple-700 text-purple-700 p-4 rounded-sm shadow-xl text-lg text-center md:text-xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtCount: "Between 2 to 3",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <input type="radio" className="text-purple-700 mr-2" />
              <p>Between 2 to 3</p>
            </div>
            <div
              className="flex justify-center items-center border-2 border-purple-700 text-purple-700 p-4 rounded-sm shadow-xl text-lg text-center md:text-xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtCount: "4 or more",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <input type="radio" className="text-purple-700 mr-2" />
              <p>4 or more</p>
            </div>
            <div
              className="flex justify-center items-center border-2 border-purple-700 text-purple-700 p-4 rounded-sm shadow-xl text-lg text-center md:text-xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtCount: "Not Sure",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <input type="radio" className="text-purple-700 mr-2" />
              <p>Not Sure</p>
            </div>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <p className="text-4xl font-semibold">
            What is your employment status?
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full md:w-10/12 gap-4">
            <div
              className="flex justify-center items-center border-2 border-purple-700 text-purple-700 p-4 rounded-sm shadow-xl text-lg text-center md:text-xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  employmentStatus: "Employed",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <input type="radio" className="text-purple-700 mr-2" />
              <p>Employed</p>
            </div>
            <div
              className="flex justify-center items-center border-2 border-purple-700 text-purple-700 p-4 rounded-sm shadow-xl text-lg text-center md:text-xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  employmentStatus: "Self Employed",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <input type="radio" className="text-purple-700 mr-2" />
              <p>Self Employed</p>
            </div>
            <div
              className="flex justify-center items-center border-2 border-purple-700 text-purple-700 p-4 rounded-sm shadow-xl text-lg text-center md:text-xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  employmentStatus: "Unemployed or Student",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <input type="radio" className="text-purple-700 mr-2" />
              <p>Unemployed or Student</p>
            </div>
            <div
              className="flex justify-center items-center border-2 border-purple-700 text-purple-700 p-4 rounded-sm shadow-xl text-lg text-center md:text-xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  employmentStatus: "Retired",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <input type="radio" className="text-purple-700 mr-2" />
              <p>Retired</p>
            </div>
          </div>
        </>
      )}
      {step === 4 && (
        <>
          <p className="text-5xl md:text-6xl font-semibold text-purple-600 text-center">
            Good News
          </p>
          <div className="w-full max-w-3xl space-y-8">
            <div className="bg-white shadow-md rounded-md p-6">
              <Image
                height={48}
                width={48}
                className="mx-auto h-12 w-auto"
                src="https://www.svgrepo.com/show/499664/user-happy.svg"
                alt=""
              />
              <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-purple-600">
                You qualify for debt relief!
              </h2>
              <form className="grid grid-cols-12 gap-2" onSubmit={handleSubmit}>
                <div className="col-span-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      name="first_name"
                      type="name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-700 focus:outline-none focus:ring-purple-700 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      name="last_name"
                      type="text"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-700 focus:outline-none focus:ring-purple-700 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      name="email"
                      type="email-address"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email-address"
                      required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-700 focus:outline-none focus:ring-purple-700 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-700 focus:outline-none focus:ring-purple-700 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-700 focus:outline-none focus:ring-purple-700 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-12">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-purple-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      {loading && (
        <div className="absolute bg-white/50 z-10 h-full w-full flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-3xl mr-4">Loading</span>
            <svg
              className="animate-spin h-8 w-8 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      )}
      <ThanksModal showModal={showModal} onClose={closeModal} />
    </section>
  );
}
