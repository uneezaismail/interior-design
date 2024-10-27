// import React from 'react';
// import Image from 'next/image'; 
// import Link from 'next/link';

// const About = () => {
//   return (
//     <section className="py-10 bg-gray-100">
//       <div className="flex flex-col md:flex-row w-[90%] mx-auto my-5 md:my-14 md:gap-y-8">
//         <div className='flex flex-col items-center w-full text-center md:hidden'>
//           <span className="text-black font-semibold text-xl border-b-4 border-yellow-300 pb-1">
//             About us
//           </span>
//           <h3 className="text-black font-bold text-3xl lg:text-5xl xl:text-6xl my-3 md:my-10 font-mono">
//             Your Partners in <span className="text-green-900">Transformation</span>
//           </h3>
//         </div>

//         <div className="flex flex-col justify-around md:w-[60%] lg:gap-y-8 items-center md:items-start">
//           <div className="relative border-4 border-green-900 h-60 md:h-72 w-[90%] md:w-[80%] lg:h-96 shadow-lg">
//             <Image
//               src="/images/about-2.jpg"
//               alt="Interior design example"
//               layout="fill" 
//               objectFit="cover" 
//               className="rounded-lg"
//             />
//           </div>
//           <div className="md:block hidden relative border-4 border-green-900 h-60 w-[60%] lg:h-72 md:w-[60%] shadow-lg">
//             <Image
//               src="/images/about-1.webp"
//               alt="Interior design example"
//               layout="fill" 
//               objectFit="cover" 
//               className="rounded-lg"
//             />
//           </div>
//         </div>

//         <div className="w-full md:w-[60%] text-center md:text-left">
//           <span className="md:inline-block hidden text-black font-semibold text-3xl border-b-4 border-yellow-400 pb-1">
//             About us
//           </span>
//           <h3 className="md:inline-block hidden text-black font-bold text-4xl md:text-3xl lg:text-5xl xl:text-6xl my-6 md:my-10 font-mono">
//             Your Partners in <span className="text-green-900">Transformation</span>
//           </h3>
//           <p className="w-full text-sm md:text-lg lg:text-2xl text-left font-serif md:mx-0 m-2 my-4 sm:m-4">
//             With over 10 years of experience, we transform homes and offices into visually stunning and functional spaces that reflect our clients&apos; style and needs. We believe that every space tells a story. Our passion for design goes beyond aesthetics—it&apos;s about creating environments that inspire, uplift, and bring comfort to your everyday life. From modern minimalism to timeless elegance, we specialize in transforming spaces into personalized sanctuaries that reflect your unique lifestyle and taste. With our expertise and commitment to excellence, we turn your design aspirations into reality, blending creativity with practicality to create spaces that not only look stunning but also feel like a perfect fit for your lifestyle or business needs.
//           </p>
//           <button className="mt-5 py-2 md:py-5 md:px-8 px-5 bg-green-900 text-white rounded-full text-lg md:text-xl font-semibold hover:bg-green-800 transition duration-300  border-2 border-yellow-500">
//             <Link href={"/components/services"}>Our Services</Link>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;



import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="py-10 bg-white">
      <div className="flex flex-col md:flex-row w-[90%] mx-auto my-5 md:my-14 gap-y-8">
        {/* Mobile View for "About us" Title */}
        <div className="flex flex-col items-center w-full text-center md:hidden">
          <span className=" text-gray-800 font-bold text-4xl border-b-4 border-yellow-500 pb-1">
            About us
          </span>
          <h3 className="text-black font-bold text-3xl lg:text-5xl xl:text-6xl my-3 md:my-10 font-serif">
            Your Partners in <span className="text-green-900">Transformation</span>
          </h3>
        </div>

        {/* Images Section */}
        <div className="flex flex-col justify-around md:w-[60%] lg:gap-y-8 items-center md:items-start">
          <div className="relative border-4 border-green-900 h-60 md:h-72 w-[90%] md:w-[80%] lg:h-96 shadow-lg hover:scale-105 transition-all duration-300">
            <Image
              src="/images/about-2.jpg"
              alt="Interior design example"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="md:block hidden relative border-4 border-green-900 h-60 w-[60%] lg:h-72 md:w-[60%] shadow-lg hover:scale-105 transition-all duration-300">
            <Image
              src="/images/about-1.webp"
              alt="Interior design example"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-[60%] text-center md:text-left">
          {/* Desktop View for "About us" Title */}
          <span className="md:inline-block hidden  pb-1 text-gray-800 font-bold text-4xl border-b-4 border-yellow-500">
            About us
          </span>
          <h3 className="md:inline-block hidden text-black font-bold text-4xl md:text-3xl lg:text-5xl xl:text-6xl my-6 md:my-10 font-serif">
            Your Partners in <span className="text-green-900">Transformation</span>
          </h3>
          <p className="w-full text-sm md:text-lg lg:text-2xl text-left font-serif md:mx-0 m-2 my-4 sm:m-4">
            With over 10 years of experience, we transform homes and offices into visually stunning and functional
            spaces that reflect our clients&apos; style and needs. We believe that every space tells a story. Our
            passion for design goes beyond aesthetics—it&apos;s about creating environments that inspire, uplift, and
            bring comfort to your everyday life. From modern minimalism to timeless elegance, we specialize in
            transforming spaces into personalized sanctuaries that reflect your unique lifestyle and taste. With our
            expertise and commitment to excellence, we turn your design aspirations into reality, blending creativity
            with practicality to create spaces that not only look stunning but also feel like a perfect fit for your
            lifestyle or business needs.
          </p>
          <button className="mt-5 py-2 md:py-5 md:px-8 px-5 bg-green-900 text-white rounded-full text-lg md:text-xl font-semibold hover:bg-green-800 transition duration-300 border-2 border-yellow-500 hover:shadow-xl">
            <Link href={"/components/services"}>Our Services</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

