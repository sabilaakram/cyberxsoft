import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import QuoteForm from "@/components/QuoteForm";
import BackgroundVideo from "@/components/BackgroundVideo";
import ScrollSectionButton from "@/components/ScrollSectionButton";

export const metadata: Metadata = {
  title: "BigO - Get A Quote",
};

const GetAQuote = () => {
  return (
    <>
      <BackgroundVideo videoSrc="/resource-bg.mp4">
        <div className="absolute top-0 bottom-0 w-full flex items-center justify-center px-8 sm:px-20 flex-col bg-custom-purple-700 bg-opacity-80 space-y-8">
          <h1 className="text-5xl md:text-6xl 2xl:text-7xl text-center uppercase font-tommy text-white">
            Tap Your{" "}
            <span className="font-bold">Business&apos;s Full Potential</span>{" "}
            with CyberXSoft
          </h1>
          <p className="text-white text-center text-xl 2xl:text-2xl max-w-2xl 2xl:max-w-3xl mx-auto">
            Without the integration of innovative technology, your business will
            miss out on experiencing its true potential. Collaborate with us and
            step up to achieve new heights of success and growth.
          </p>

          <ScrollSectionButton sectionId="quote" />
        </div>
      </BackgroundVideo>

      <section
        id="quote"
        className="space-y-4 text-center max-w-[95%] lg:max-w-4xl xl:max-w-5xl mx-auto my-8 md:mb-12 z-30 relative lg:-mt-20"
      >
        <h2 className="lg:text-white text-2xl">Request A Quote Today</h2>
        <Card className="max-w-4xl mx-auto bg-gray-200 border-none flex flex-wrap md:flex-nowrap items-center justify-between shadow-md overflow-hidden gap-8 p-8">
          <QuoteForm />
        </Card>
      </section>
    </>
  );
};

export default GetAQuote;
