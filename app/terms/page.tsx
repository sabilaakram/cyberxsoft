import GetInTouch from "@/components/GetInTouch";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <>
      <section className="p-8 sm:p-10 md:px-20 space-y-8 container">
        <h1 className="inline-block text-5xl font-tommy relative after:absolute after:content-[''] after:w-full after:h-1 after:block after:bg-custom-purple-400 after:top-full after:right-0 after:mt-1 after:left-0 after:animate-line-width">
          Terms of <span className="font-bold">Service</span>
        </h1>

        <div className="space-y-4">
          <div className="">
            <h2 className="font-bold text-2xl">Introduction</h2>
            <p className="text-gray-800">
              Welcome to{" "}
              <Link
                href="/"
                className="text-custom-purple-400 hover:text-gray-800 hover:underline focus-within:text-gray-800 focus:underline"
              >
                www.cyberxsoft.com
              </Link>
              ! These terms govern your use of our services, including our AI,
              cloud services, IoT, and business intelligence solutions.
            </p>
          </div>

          <div className="">
            <h2 className="font-bold text-2xl">Use of Services</h2>
            <p className="text-gray-800">
              You are responsible for ensuring that your use of our services
              complies with all applicable laws and regulations. You must not
              use our services to:{" "}
            </p>
            <ul className="list-disc pl-4 py-1">
              <li>Conduct illegal activities</li>
              <li>Infringe on the intellectual property rights of others</li>
              <li>Transmit harmful or malicious software</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold text-2xl">Intellectual Property</h2>
            <p className="text-gray-800">
              All intellectual property rights related to our services and the
              underlying technology are owned by us or our licensors. You may
              not copy, modify, distribute, sell, or lease any part of our
              services or included software.
            </p>
          </div>

          <div className="">
            <h2 className="font-bold text-2xl">Termination</h2>
            <p className="text-gray-800">
              We may terminate or suspend your access to our services
              immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>
          </div>
          <div className="">
            <h2 className="font-bold text-2xl">Disclaimer</h2>
            <p className="text-gray-800">
              Our services are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. We do not warrant that the services will be
              uninterrupted, secure, or free from errors.
            </p>
          </div>
          <div className="">
            <h2 className="font-bold text-2xl">Changes to Terms</h2>
            <p className="text-gray-800">
              We reserve the right to modify these terms at any time. We will
              provide notice of these changes by posting the updated terms on
              our website.
            </p>
          </div>

          <div className="">
            <h2 className="font-bold text-2xl">Contact Us</h2>
            <p className="text-gray-800">
              For questions about these terms, please contact us at{" "}
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

export default TermsAndConditions;
