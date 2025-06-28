import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/app/components/RenderModel";
import AboutDetails from "@/app/components/about";
import Laryngoscope from "@/app/components/models/ laryngoscope";

export default function Home() {
  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src={bg}
        alt="background-image"
        className="fixed w-full h-full object-cover opacity-60 -z-0 top-0 left-0"
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen flex flex-col">
          {/* Model Container - responsive scale and position */}
          <div className="w-full h-[80vh] flex items-end justify-center pb-8 sm:pb-12 md:pb-34">
            <div className="w-full h-full max-w-4xl relative 
              scale-[0.95] xs:scale-[1.05] sm:scale-[1.1] md:scale-110 
              ml-0 xs:ml-[-20px] sm:ml-[-60px] md:ml-[-115px] 
              translate-y-4 sm:translate-y-4 md:translate-y-9">
              <RenderModel>
                <Laryngoscope />
              </RenderModel>
            </div>
          </div>

          {/* Heading and Subheading */}
          <div className="relative w-full h-[10vh] flex items-end justify-center 
          mt-[-10rem] xs:mt-[-6rem] sm:mt-0 
          -translate-y-10 xs:-translate-y-12 sm:translate-y-0">
            <div className="w-full max-w-4xl mx-auto text-center px-3">
              <h1 className="font-supermercado font-bold 
          text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          tracking-wide md:tracking-[0.11em] 
          whitespace-normal md:whitespace-nowrap 
          ml-0 md:ml-[-20px]">
                RUBAIYA KHAN JERIN
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl mt-2 font-supermercado 
         tracking-wide md:tracking-[0.4em]">
                PASSIONATE LEARNING WEB DEVELOPMENT
              </p>
            </div>
          </div>

        </section>

        {/* About Section */}
        <div className="-mt-64 sm:mt-10">
          <AboutDetails />
        </div>
      </div>
    </div>
  );
}