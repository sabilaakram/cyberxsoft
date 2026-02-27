import Image from "next/image";
import bgImage from "@/public/about-intro.png";
import GetInTouch from "@/components/GetInTouch";
import CoreValues from "./_components/CoreValues";
import WhyUs from "./_components/WhyUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CyberXSoft - About Us",
};

const AboutUs = () => {
  return (
    <>
      <section className="h-full flex flex-col xl:flex-row gap-10 lg:gap-20 justify-between items-center w-full bg-custom-purple-500 px-8 sm:px-14 lg:px-20 2xl:px-28 pt-10 sm:pt-20">
        <div className="pb-0 lg:pb-20 space-y-4 container text-center lg:text-left">
          <h1 className="text-white font-tommy uppercase text-4xl md:text-5xl lg:text-7xl">
            <span className="font-bold">Who</span> <br /> we are?
          </h1>
          <p className="text-lg md:text-xl text-secondary">
            At CyberXSoft, we take pride in our significant role as catalysts for
            transformative shifts. We actively engage in investing in
            cutting-edge capabilities to level up and stay ahead of the curve.
            Our commitment extends to fostering a culture of continuous
            improvement by channeling resources into talent acquisition,
            ensuring our team possesses specialized skills adept at solving
            intricate business challenges.
          </p>
          <p className="text-lg md:text-xl text-secondary">
            We are devoted to delivering sustainable and substantial value to
            every industry vertical. Empowered by our collective proficiency, we
            redefine possibilities and offer enduring contributions to the
            realms we influence.
          </p>
        </div>

        <Image src={bgImage} alt="" className="h-full w-full" />
      </section>

      <section className="flex items-center justify-between flex-col md:flex-row gap-10 pt-12 pb-8 sm:py-12 px-8 sm:px-10 md:px-20 container">
        <div className="space-y-4">
          <h2 className="text-custom-purple-500 uppercase text-4xl font-tommy">
            Vision
          </h2>
          <p className="">
            We envision a future where CyberXSoft revolutionizes industries through
            the smooth integration of responsive AI, cloud services, IoT, and
            business intelligence. Our vision is to be the driving force behind
            businesses&apos; operational excellence, fostering unparalleled
            efficiency and convenience. By relentlessly innovating and adapting,
            we aspire to create a future where organizations effortlessly
            optimize their work processes and achieve unprecedented levels of
            success by continuously innovating and adapting.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-custom-purple-500 uppercase text-4xl font-tommy">
            Mission
          </h2>
          <p className="">
            The mission of CyberXSoft is centered around delivering a suite of
            cutting-edge technologies and services in the fields of Artificial
            Intelligence (AI), cloud computing, the Internet of Things (IoT),
            and business intelligence. The primary goal is to offer businesses
            responsive and adaptable solutions that automate and streamline
            their operational processes. By harnessing the power of AI, CyberXSoft
            aims to create tools and offer services that not only enhance
            efficiency but also respond dynamically to the evolving needs of
            businesses.
          </p>
        </div>
      </section>

      <div className="sm:pt-8 px-8 sm:px-10 md:px-20 container">
        <Image
          src="/about-vision-mission.png"
          alt=""
          width={1500}
          height={450}
        />
      </div>

      <CoreValues />
      <WhyUs />
      <GetInTouch />
    </>
  );
};

export default AboutUs;
