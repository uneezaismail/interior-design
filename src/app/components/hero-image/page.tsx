// components/HeroImage.js
export default function HeroImage() {
    return (
      <div className="relative h-64 md:h-96">
        <img src="/images/hero-image.webp" alt="Dream Space" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center ">
          <h2 className="lg:w-[50%] text-white text-3xl md:text-5xl font-semibold">Let's Create Your Dream Space Together</h2>
          <button className="lg:mt-16 mt-10 border-2 lg:text-2xl border-white text-white py-2 px-6 rounded">Book Now</button>
        </div>
      </div>
    );
  }
  