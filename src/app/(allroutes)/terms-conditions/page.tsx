import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - My Debt Change",
  description: "Terms and conditions of use for the My Debt Change website.",
  keywords: "terms, conditions, debt, advice, help, website, privacy, policy",
};


export default function TermsConditionsPage() {
  return (
    <main className="max-w-screen-xl mx-auto p-4 space-y-5">
      <h1 className="text-5xl font-semibold text-purple-700 text-center">
        Terms and Conditions
      </h1>
      <p>
        The terms and conditions of use set out below apply to the website
        owned, operated and controlled by My Debt Change Limited, at
        www.mydebtchange.co.uk
      </p>
      <p>
        The Website is intended for use by residents of the United Kingdom of
        Great Britain and Northern Ireland only.
      </p>
      <p>
        By using the Website, users are deemed to have full knowledge of the
        following terms and conditions and to accept them.
      </p>
      <h2 className="text-3xl font-semibold text-purple-700">Accuracy</h2>
      <p>
        The Site has been prepared to provide information. Whilst we make every
        effort to ensure the content is accurate, it is not a comprehensive
        statement of the law, or of the issues raised and should not be relied
        upon for that purpose.
      </p>
      <p>
        You are responsible for the accuracy of any information you provide to
        us via this website or in any dealings with us. We are not liable for
        any loss incurred by you as a result of actions we take based on
        inaccurate information.
      </p>
      <h2 className="text-3xl font-semibold text-purple-700">Liability</h2>
      <p>
        In no event will employees be liable for any decisions made or action
        taken through relying on the information in this site.
      </p>
      <h2 className="text-3xl font-semibold text-purple-700">Authority</h2>
      <p>
        You authorise us to accept and act on your instructions. You acknowledge
        that the information you provide will form the basis upon which we will
        advise you.
      </p>
      <h2 className="text-3xl font-semibold text-purple-700">
        Data Protection
      </h2>
      <p>
        My Debt Plan Ltd does not collect any personal data through its Website
        without users’ consent. Users alone decide whether to provide My Debt
        Plan Ltd with such data or not.
      </p>
      <p>
        When users visit the Website, information may be saved on users’
        computers as a “cookie” which is then automatically recognised on the
        next visit to the Website.
      </p>
      <p>For further details please see our privacy policy.</p>
      <h2 className="text-3xl font-semibold text-purple-700">Monitoring</h2>
      <p>
        Telephone calls and ‘online chats’ may be monitored and recorded for
        quality and training purposes.
      </p>
      <h2 className="text-3xl font-semibold text-purple-700">General</h2>
      <p>
        These Terms and Conditions are governed by and shall be construed in
        accordance with English law. Disputes in connection with the Website
        shall be subject to the jurisdiction of English Courts.
      </p>
    </main>
  );
}
