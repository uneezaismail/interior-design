import React from 'react';

const About = () => {
  return (
    <section>

    <div className="flex flex-col md:flex-row w-[90%] m-auto my-5 md:my-14 md:gap-y-8">
      <div className='flex flex-col items-center w-full text-center md:hidden'>
        <span className="text-black font-semibold text-xl border-b-4 border-yellow-300 pb-1 block">
            About us
        </span>
        <h3 className="text-black font-bold text-3xl lg:text-5xl xl:text-6xl my-3 md:my-10 font-mono">
            Your Partners in <span className="text-green-900">Transformation</span>
        </h3>
    </div>

   
        
      {/* Images Section */}
      <div className="flex flex-col justify-around md:w-[60%] md:h-[80%]  lg:gap-y-8 items-center md:items-start">
        <img className="border-4 border-green-900 h-60 md:h-72 w-[80%] md:w-[80%] lg:h-96" src="/images/about-2.jpg" alt="Interior design example" />
        <img className="md:block hidden border-4 border-green-900 h-60 w-[60%] lg:h-72 md:w-[60%]" src="/images/about-1.webp" alt="Interior design example" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-[60%]  text-center md:text-left">
        <span className="md:inline-block hidden text-black font-semibold text-3xl border-b-4 border-yellow-400 pb-1">
          About us
        </span>
        <h3 className="md:inline-block hidden text-black font-bold text-4xl md:text-3xl lg:text-5xl  xl:text-6xl my-6 md:my-10 font-mono">
          Your Partners in <span className="text-green-900">Transformation</span>
        </h3>
        <p className="w-full text-sm md:text-lg lg:text-2xl text-left font-serif md:mx-0 m-2 my-4 sm:m-4">
          With over 10 years of experience, we transform homes and offices into visually stunning and functional spaces that reflect our clients' style and needs. We believe that every space tells a story. Our passion for design goes beyond aesthetics—it’s about creating environments that inspire, uplift, and bring comfort to your everyday life. From modern minimalism to timeless elegance, we specialize in transforming spaces into personalized sanctuaries that reflect your unique lifestyle and taste. With our expertise and commitment to excellence, we turn your design aspirations into reality, blending creativity with practicality to create spaces that not only look stunning but also feel like a perfect fit for your lifestyle or business needs.
        </p>
        <button className="mt-5 py-2 md:py-5 md:px-8 px-5 bg-green-900 text-white rounded-full text-lg md:text-xl font-semibold hover:bg-green-800 transition border-2 border-yellow-500">
          Our Services
        </button>
      </div>
    </div>
    </section>
  );
}

export default About;
