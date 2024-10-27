
import Image from "next/image";
import About from "./components/about/page";
import ContactSection from "./components/contact/page";
import HeroImage from "./components/hero-image/page";
import Portfolio from "./components/portfolio/page";
import Services from "./components/services/page";
import Testimonials from "./components/testimonials/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className="relative w-full xl:h-[500px] lg:h-[400px] md:h-[400px] sm:h-[400px] h-[300px]">
          <Image
            src="/images/home-page.jpg"
            alt="Home Page"
            layout="fill"
            objectFit="cover" 
            className="opacity-90"
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center xl:gap-y-6 gap-y-3">
            <div className="flex flex-col xl:w-[40%] lg:w-[40%] md:w-[50%] sm:w-[40%] w-[70%] text-center">
              <p className="text-white md:font-bold md:mb-4  text-[0.7rem] sm:text-lg md:text-lg xl:text-2xl lg:text-xl ">
                Where creativity meets function in every space.
              </p>
              <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                Transforming Spaces, Elevating Lifestyles
              </h1>
            </div>
            <button className="mt-6 bg-green-900 hover:bg-green-800 border-2 border-yellow-300 text-white xl:p-3 sm:p-2 xl:px-6 px-2 py-1 rounded-full md:text-lg text-sm xl:text-2xl">
              <Link href={"/components/portfolio"}>Explore Our Work</Link>
            </button>
          </div>
        </div>

        <div className="bg-green-950 w-full flex justify-evenly py-4">
          <div className="relative xl:w-40 xl:h-20 rounded-full lg:w-40 lg:h-20 md:w-32 md:h-16 sm:w-24 sm:h-12 w-16 h-6">
            <Image
              src="/images/logo-1.jpg"
              alt="Architecture Design"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="relative xl:w-40 xl:h-20 rounded-full lg:w-40 lg:h-20 md:w-32 md:h-16 sm:w-24 sm:h-12 w-16 h-6">
            <Image
              src="/images/logo-2.png"
              alt="Design Example"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="relative xl:w-40 xl:h-20 rounded-full lg:w-40 lg:h-20 md:w-32 md:h-16 sm:w-24 sm:h-12 w-16 h-6">
            <Image
              src="/images/logo-3.jpg"
              alt="Minimalist Logo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="relative xl:w-40 xl:h-20 rounded-full lg:w-40 lg:h-20 md:w-32 md:h-16 sm:w-24 sm:h-12 w-16 h-6">
            <Image
              src="/images/logo-4.png"
              alt="Another Design Example"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </main>

      
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <ContactSection />
     
    </div>
  );
}

