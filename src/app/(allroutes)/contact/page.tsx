import LeadForm from "@/component/LeadForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - My Debt Change",
  description: "A simple debt repayment guide for beginners.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <LeadForm />
    </div>
  );
}
