import GetInTouch from "@/components/GetInTouch";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="p-8 sm:p-10 md:px-20 space-y-8 container">
        <h1 className="inline-block text-5xl font-tommy relative after:absolute after:content-[''] after:w-full after:h-1 after:block after:bg-custom-purple-400 after:top-full after:right-0 after:mt-1 after:left-0 after:animate-line-width">
          Privacy <span className="font-bold">Policy</span>
        </h1>

        <div className="space-y-4">
          <div className="">
            <h2 className="font-bold text-2xl">Introduction</h2>
            <p className="text-gray-800">
              CyberXSoft.com operates the website{" "}
              <Link
                href="/"
                className="text-custom-purple-400 hover:text-gray-800 hover:underline focus-within:text-gray-800 focus:underline"
              >
                www.cyberxsoft.com
              </Link>{" "}
              and provides various IT services, including AI, cloud computing,
              business intelligence, and IoT solutions. This Privacy Policy
              describes how we collect, use, and share your personal information
              when you use our services.
            </p>
          </div>
          <div className="">
            <h2 className="font-bold text-2xl">Information Collection</h2>
            <p className="text-gray-800">
              We collect information that you provide directly to us when you:{" "}
            </p>
            <ul className="list-disc pl-4 py-1">
              <li>Contact us via email or phone</li>
              <li>Use our services</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            <p className="text-gray-800">
              This may include your name, email address, phone number, and any
              other details you choose to provide.
            </p>
          </div>
          <div className="">
            <h2 className="font-bold text-2xl">Use of Information</h2>
            <p className="text-gray-800">
              The information we collect is used to:{" "}
            </p>
            <ul className="list-disc pl-4 py-1">
              <li>Provide, maintain, and improve our services</li>
              <li>
                Communicate with you, respond to your inquiries, and meet your
                service needs
              </li>
              <li>
                Send you technical notices, updates, security alerts, and
                support and administrative messages
              </li>
              <li>
                Comply with our legal obligations, resolve disputes, and enforce
                our agreements
              </li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-2xl">Sharing of Information</h2>
            <p className="text-gray-800">
              We do not share your personal information with third parties
              except as necessary to provide our services or as required by law.
              We may share information with:{" "}
            </p>

            <ul className="list-disc pl-4 py-1">
              <li>
                Service providers who need access to such information to perform
                services on our behalf
              </li>
              <li>
                Professional advisors, such as lawyers, auditors, or insurers,
                where necessary
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold text-2xl">Data Security</h2>
            <p className="text-gray-800">
              We implement reasonable measures to help protect information about
              you from loss, theft, misuse, and unauthorized access. However, no
              method of transmission over the internet or electronic storage is
              completely secure.
            </p>
          </div>
          <div className="">
            <h2 className="font-bold text-2xl">Changes to this Policy</h2>
            <p className="text-gray-800">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on our
              website.
            </p>
          </div>
          <div className="">
            <h2 className="font-bold text-2xl">Contact Us</h2>
            <p className="text-gray-800">
              If you have questions about this Privacy Policy, please contact us
              at{" "}
              <Link
                href="mailto:info@cyberxsoft.com"
                className="text-custom-purple-400 hover:text-gray-800 hover:underline focus-within:text-gray-800 focus:underline"
              >
                info@cyberxsoft.com
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <GetInTouch />
    </>
  );
};

export default PrivacyPolicy;
