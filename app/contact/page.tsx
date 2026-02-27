import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactForm from "./_components/ContactForm";
import NewsletterEmail from "@/components/NewsletterEmail";

export const metadata: Metadata = {
  title: "CyberXSoft - Contact",
};

const ContactUs = async () => {
  return (
    <>
      <section className="relative h-full lg:h-screen lg:max-h-[850px] py-20 bg-custom-purple-700 content-center">
        <div className="container relative z-10 px-8 sm:px-10 lg:px-20 flex items-center gap-10 lg:gap-32 justify-between flex-col lg:flex-row">
          <div className="text-white lg:max-w-2xl space-y-4">
            <strong className="uppercase">Connect</strong>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Get in Touch With CyberXSoft - Your Partner in Excellence
            </h1>
            <p className="">
              Whether you wish to dominate the digital arena by employing the
              latest business solutions or have queries regarding our services,
              our team at CyberXSoft is here to serve you. Your success is our
              victory, and we are excited to talk about how we might adapt our
              offerings to suit your particular requirements.
            </p>
          </div>

          <div className="space-y-4 ">
            <div className="flex items-center gap-4">
              <span className="p-2 bg-custom-purple-300/50 rounded-md">
                <MdEmail size={25} className="text-white" />
              </span>

              <div>
                <h5 className="text-lg font-bold text-white">Email</h5>
                <Link
                  className="text-white hover:text-custom-purple-100 transition-all duration-200"
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
                <h5 className="text-lg font-bold text-white">Phone</h5>
                <Link
                  className="text-white hover:text-custom-purple-100 transition-all duration-200"
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
                <h5 className="text-lg font-bold text-white">Office</h5>
                <Link
                  className="text-white hover:text-custom-purple-100 transition-all duration-200"
                  href="https://maps.app.goo.gl/MvLL7BbYZG1expJVA"
                  target="_blank"
                >
                  First Floor, Plaza #54, Sector F, DHA Phase 1, Islamabad.
                </Link>
              </div>
            </div>

            <NewsletterEmail />

            <p className="text-white/50">
              At CyberXSoft, communication is key, and we are excited to hear from
              you. Let&apos;s make big things happen together!
            </p>
          </div>
        </div>
        <Image
          src="/contact-bg.png"
          alt=""
          fill={true}
          className="object-cover "
        />
      </section>

      <section
        id="quote"
        className="text-center max-w-[95%] lg:max-w-4xl xl:max-w-5xl mx-auto my-8 md:mb-12 z-30 relative lg:-mt-20"
      >
        <ContactForm />
      </section>
    </>
  );
};

export default ContactUs;
