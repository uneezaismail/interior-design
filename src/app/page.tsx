import About from "./components/about/page";
import ContactSection from "./components/contact/page";
import HeroImage from "./components/hero-image/page";
import Portfolio from "./components/portfolio/page";
import Services from "./components/services/page";
import Testimonials from "./components/testimonials/page";


export default function Home() {
  return (
    <div>
      <main>      
        <div className="relative w-full xl:h-[500px] lg:h-[400px] md:h-[350px] sm:h-[300px] h-[200px]">
          <img
            src="/images/home-page.jpg"
            alt="Home Page"
            className="w-full h-full opacity-90" 
          />
       
          <div className="absolute inset-0 flex flex-col items-center justify-center xl:gap-y-6 gap-y-3">
            <div className="flex flex-col xl:w-[50%] w-[80%] text-center">
              <p className="text-black md:font-bold text-[0.7rem] sm:text-lg md:text-lg xl:text-2xl lg:text-xl ">
                Where creativity meets function in every space.
              </p>
              <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
                Transforming Spaces, Elevating Lifestyles
              </h1>
            </div>
            <button className="mt-6 bg-green-900 hover:bg-green-800 border-2 border-yellow-300 text-white xl:p-3 sm:p-2 xl:px-6 px-2 py-1  rounded-full md:text-lg text-sm xl:text-2xl">
              Explore Our Work
            </button>
          </div>
        </div>
        <div className="bg-green-950 w-full flex justify-evenly py-4">
  <img className="xl:w-40 xl:h-20 rounded-full lg:w-40 lg:h-20 md:w-32 md:h-16 sm:w-24 sm:h-12 w-16 h-6" src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/09/18094359/arch-design.jpg" alt="" />
  <img className="xl:w-40 xl:h-20 rounded-full lg:w-40 lg:h-20 md:w-32 md:h-16 sm:w-24 sm:h-12 w-16 h-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQelXsSqKL6wGkBShFUXNYsecaS3Ut0NrnA&s" alt="" />
  <img className="xl:w-40 xl:h-20 rounded-full lg:w-40 lg:h-20 md:w-32 md:h-16 sm:w-24 sm:h-12 w-16 h-6" src="https://marketplace.canva.com/EAFWyYGBw4k/1/0/1600w/canva-black-white-minimalist-elegant-interior-design-logo-PaeQcAxb2Lg.jpg" alt="" />
  <img className="xl:w-40 xl:h-20 rounded-full lg:w-40 lg:h-20 md:w-32 md:h-16 sm:w-24 sm:h-12 w-16 h-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNI0HziFtd5b_bm7bi6y924NzPkLsuGxo7Ng&s" alt="" />
</div>
      </main>
      <About/>
     <Portfolio/>
       <ContactSection/>
      <Services/>
      <Testimonials/>
      <HeroImage/> 
    </div>
  );
}
