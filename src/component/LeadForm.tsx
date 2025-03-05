"use client";

import {ChangeEvent, FormEvent, useState } from "react";
import ThanksModal from "./ThanksModal";

const APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyUHcOtIe4VpbBsEc1lPpw5JVqtecoSQgTZG8J85L0Ku3HPYVpbR4kyOWPVKJiisCd-tg/exec"

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    debtValue: "",
    debtCount: "",
    employmentStatus: "",
  });

  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false)
  const closeModal = ()=>setShowModal(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setFormData((prev)=>{
      return{
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFormData = new FormData();
    newFormData.append("name", formData.name)
    newFormData.append("email", formData.email)
    newFormData.append("phone", formData.phone)
    newFormData.append("message", formData.message)
    newFormData.append("debtValue", formData.debtValue)
    newFormData.append("debtCount", formData.debtCount)
    newFormData.append("employmentStatus", formData.employmentStatus)

    try {
      const response = await fetch(
        APP_SCRIPT_URL,
        {
          method: "POST",
          mode: "no-cors",
          body: newFormData,
        }
      );
      console.log({response});
      
      // Check response (Google Apps Script returns 200 with no-cors)
      if (response) {
        setShowModal(true)
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          debtValue: "",
          debtCount: "",
          employmentStatus: "",
        });
      } else {
        alert("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <section className="min-h-[50vh] bg-gray-100 w-full flex items-center justify-center flex-col gap-8 p-8">
      <h2 className="text-5xl text-purple-700 font-semibold">
        Debt Solution Finder
      </h2>
      <p className="text-3xl">Step {step} of 4</p>
      <div className="w-10/12 md:w-1/2 bg-gray-200 rounded-full dark:bg-gray-700 relative">
        {step > 1 && (
          <button
            className="absolute -top-[400%] left-0 cursor-pointer active:scale-95"
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
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${step * 25}%` }}
        >
          {" "}
          {step * 25}%
        </div>
      </div>
      {step === 1 && (
        <>
          <p className="text-4xl font-semibold">
            What is the total value of your debt?
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full md:w-10/12 gap-4">
            <div
              className="aspect-video flex justify-center items-center bg-purple-700 text-white p-4 rounded-2xl shadow-xl text-xl text-center md:text-2xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtValue: "Less than £5,000",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <p>Less than £5,000</p>
            </div>
            <div
              className="aspect-video flex justify-center items-center bg-purple-700 text-white p-4 rounded-2xl shadow-xl text-xl text-center md:text-2xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtValue: "£5,000 - £10,000",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <p>£5,000 - £10,000</p>
            </div>
            <div
              className="aspect-video flex justify-center items-center bg-purple-700 text-white p-4 rounded-2xl shadow-xl text-xl text-center md:text-2xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtValue: "£10,000 - £20,000",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <p>£10,000 - £20,000</p>
            </div>
            <div
              className="aspect-video flex justify-center items-center bg-purple-700 text-white p-4 rounded-2xl shadow-xl text-xl text-center md:text-2xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtValue: "More than £20,000",
                }));
                setStep((prev) => prev + 1);
              }}
            >
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
              className="aspect-video flex justify-center items-center bg-purple-700 text-white p-4 rounded-2xl shadow-xl text-xl text-center md:text-2xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtCount: "Just the 1",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <p>Just the 1</p>
            </div>
            <div
              className="aspect-video flex justify-center items-center bg-purple-700 text-white p-4 rounded-2xl shadow-xl text-xl text-center md:text-2xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtCount: "Between 2 to 3",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <p>Between 2 to 3</p>
            </div>
            <div
              className="aspect-video flex justify-center items-center bg-purple-700 text-white p-4 rounded-2xl shadow-xl text-xl text-center md:text-2xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtCount: "4 or more",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <p>4 or more</p>
            </div>
            <div
              className="aspect-video flex justify-center items-center bg-purple-700 text-white p-4 rounded-2xl shadow-xl text-xl text-center md:text-2xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  debtCount: "Not Sure",
                }));
                setStep((prev) => prev + 1);
              }}
            >
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
              className="aspect-video flex justify-center items-center bg-purple-700 text-white p-4 rounded-2xl shadow-xl text-xl text-center md:text-2xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  employmentStatus: "Employed",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <p>Employed</p>
            </div>
            <div
              className="aspect-video flex justify-center items-center bg-purple-700 text-white p-4 rounded-2xl shadow-xl text-xl text-center md:text-2xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  employmentStatus: "Self Employed",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <p>Self Employed</p>
            </div>
            <div
              className="aspect-video flex justify-center items-center bg-purple-700 text-white p-4 rounded-2xl shadow-xl text-xl text-center md:text-2xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  employmentStatus: "Unemployed or Student",
                }));
                setStep((prev) => prev + 1);
              }}
            >
              <p>Unemployed or Student</p>
            </div>
            <div
              className="aspect-video flex justify-center items-center bg-purple-700 text-white p-4 rounded-2xl shadow-xl text-xl text-center md:text-2xl font-semibold cursor-pointer"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  employmentStatus: "Retired",
                }));
                setStep((prev) => prev + 1);
              }}
            >
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
          <div className="w-full max-w-xl space-y-8">
            <div className="bg-white shadow-md rounded-md p-6">
              <img
                className="mx-auto h-12 w-auto"
                src="https://www.svgrepo.com/show/499664/user-happy.svg"
                alt=""
              />
              <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-purple-600">
                You qualify for debt relief!
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      name="name"
                      type="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-700 focus:outline-none focus:ring-purple-700 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
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
                <div>
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
                <div>
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
                <div>
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
      <ThanksModal showModal={showModal} onClose={closeModal} />
    </section>
  );
}
