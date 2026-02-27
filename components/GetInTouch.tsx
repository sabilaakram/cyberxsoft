import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import GetInTouchForm from "./GetInTouchForm";
import Link from "next/link";
import NewsletterEmail from "./NewsletterEmail";

const GetInTouch = () => {
  return (
    <section className="bg-custom-purple-500 text-white py-12 px-6 sm:px-12 md:px-20">
      <strong className="uppercase text-center block">Connect</strong>
      <h2 className="text-center text-5xl font-bold">Get In Touch</h2>
      <p className="text-center text-white">
        We&apos;re here to answer any questions you may have. Feel free to reach
        out to us.
      </p>
      <div className="container px-0 mt-8 flex items-start justify-between gap-8 md:gap-20  flex-wrap md:flex-nowrap">
        <GetInTouchForm />

        <div className="space-y-4 w-full">
          <div className="flex items-center gap-4">
            <span className="p-2 bg-custom-purple-300/50 rounded-md">
              <MdEmail size={25} className="text-white" />
            </span>

            <div>
              <h5 className="text-lg font-bold">Email</h5>
              <Link
                className="hover:text-custom-purple-200 transition-all duration-200"
                href="mailto:info@cyberxsoft.com"
              >
                info@cyberxsoft.com
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="p-2 bg-custom-purple-300/50 rounded-md">
              <FaPhoneAlt size={25} className="text-white" />
            </span>

            <div>
              <h5 className="text-lg font-bold">Phone</h5>
              <Link
                className="hover:text-custom-purple-200 transition-all duration-200"
                href="tel:+92-312-978-6297"
              >
                +92-312-978-6297
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="p-2 bg-custom-purple-300/50 rounded-md">
              <FaLocationDot size={25} className="text-white" />
            </span>

            <div>
              <h5 className="text-lg font-bold">Office</h5>
              <Link
                className="hover:text-custom-purple-200 transition-all duration-200"
                href="https://maps.app.goo.gl/MvLL7BbYZG1expJVA"
                target="_blank"
              >
                First Floor, Plaza #54, Sector F, DHA Phase 1, Islamabad.
              </Link>
            </div>
          </div>

          <NewsletterEmail />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
