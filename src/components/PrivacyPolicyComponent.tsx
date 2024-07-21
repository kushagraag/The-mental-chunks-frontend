import Link from "next/link";

export default function PrivacyPolicyComponent() {
  return (
    <div className="container mx-auto text-justify max-w-screen-lg  ">
      <div className="mx-[7.5vw] md:mx-[0vw]">
        <h2 className="text-[24px] font-bold font-serif mb-4 mt-8">
          Privacy Policy
        </h2>
        <p className="text-[18px] mb-4">
          At Mental Chunks, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard your information
          when you visit our website and use our services.
        </p>
        <h3 className="text-[24px] font-bold font-serif mb-4 mt-8">
          Information We Collect
        </h3>
        <ul className="list-disc ml-4">
          <li className="text-[18px] mb-4">
            <span className="font-bold">Personal Information: </span>We may
            collect personal information such as your name, email address, phone
            number, and other contact details when you sign up for our
            newsletter, create an account, or contact us.
          </li>
          <li className="text-[18px] mb-4">
            <span className="font-bold">Usage Data: </span> We collect
            information about your interactions with our website, including your
            IP address, browser type, operating system, pages visited, and the
            dates/times of your visits.
          </li>
          <li className="text-[18px] mb-4">
            <span className="font-bold">Cookies: </span>We use cookies to
            enhance your browsing experience, remember your preferences, and
            collect anonymous data about site usage. You can manage cookie
            preferences through your browser settings.
          </li>
        </ul>
        <h3 className="text-[24px] font-bold font-serif mb-4 mt-8">
          How We Use Your Information
        </h3>
        <ul className="list-disc ml-4">
          <li className="text-[18px] mb-4">
            <span className="font-bold">Provide Services: </span>To deliver the
            content, services, and products you request from us.
          </li>
          <li className="text-[18px] mb-4">
            <span className="font-bold">Communication: </span>To send you
            newsletters, updates, and promotional materials. You can opt-out of
            these communications at any time.
          </li>
          <li className="text-[18px] mb-4">
            <span className="font-bold">Improvement: </span>To analyze site
            usage and improve our website and services.
          </li>
          <li className="text-[18px] mb-4">
            <span className="font-bold">Compliance: </span>To comply with legal
            obligations and protect our rights.
          </li>
        </ul>
        <h3 className="text-[24px] font-bold font-serif mb-4 mt-8">
          Sharing Your Information
        </h3>
        <p className="text-[18px] mb-4">
          We do not sell, trade, or rent your personal information to third
          parties. We may share your information with trusted partners who
          assist us in operating our website, conducting our business, or
          serving our users, provided they agree to keep this information
          confidential. We may also disclose your information if required by law
          or to protect our rights.
        </p>
        <h3 className="text-[24px] font-bold font-serif mb-4 mt-8">Security</h3>
        <p className="text-[18px] mb-4">
          We implement a variety of security measures to protect your personal
          information. However, no method of transmission over the Internet or
          electronic storage is 100% secure, and we cannot guarantee absolute
          security.
        </p>
        <h3 className="text-[24px] font-bold font-serif mb-4 mt-8">
          Changes to This Policy
        </h3>
        <p className="text-[18px] mb-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on our website and
          updating the effective date.
        </p>
        <h3 className="text-[24px] font-bold font-serif mb-4 mt-8">
          Contact Us
        </h3>
        <p className="text-[18px] mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <Link
            href="mailto:contact@mentalchunks.com"
            className="text-blue-600"
          >
            contact@mentalchunks.com
          </Link>
          .
        </p>
        <h4 className="text-[20px] font-bold font-serif mb-12 mt-8">
          Effective Date: [8 june 2024]
        </h4>
      </div>
    </div>
  );
}
