

// "use client"; // Add this directive to make it a client component

// import React, { useState } from 'react';

// const Services = () => {
//   const [selectedImage, setSelectedImage] = useState<number | null>(null); // Allow number or null

//   return (
//     <div className='bg-custom-green md:rounded-tl-[100px] rounded-br-[50px] rounded-tl-[50px] md:rounded-br-[100px] w-full mx-auto my-20 py-16'>
//       <div className='flex flex-col items-center  md:text-center'>
//         <span className="text-center text-white font-semibold text-3xl border-b-4 p-1 border-yellow-300 inline-block ">
//           Services
//         </span>

//         <p className='md:w-[90%] w-[90%] m-4 md:m-3 py-3 text-sm md:text-md lg:text-2xl'>
//           Our comprehensive interior design services are tailored to transform your vision into reality, whether you’re looking to create a cozy home environment or a dynamic office space. We pride ourselves on our attention to detail, ensuring that every element of your design reflects your unique style and preferences. <span className='md:inline hidden'> With our innovative designs and meticulous craftsmanship, we aim to exceed your expectations and bring your dream space to life. Trust us to handle every detail, ensuring a seamless and enjoyable experience as we create a space that truly feels like home or a productive work environment. Together, let’s embark on a journey to redefine your space!</span>
//         </p>
//       </div>

//       {/* Image Grid Section */}
//       <div className='grid grid-cols-3 grid-rows-2 gap-1 mx-auto md:w-[80%] w-[90%]'>
//         {/* Large image */}
//         <div className='col-span-2 row-span-2 relative'>
//           <img
//             className={`w-full h-[30vh] md:h-[400px] rounded-lg border-2 border-white object-cover transition-opacity duration-300 ${selectedImage === 0 ? 'opacity-60' : ''}`} // Change opacity if selected
//             src="/images/commercial-design.jpg"
//             alt="Commercial Design"
//             onClick={() => setSelectedImage(selectedImage === 0 ? null : 0)} // Update selection
//           />
//           {selectedImage === 0 && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//               <span className="text-white md:text-3xl text-sm">Commercial Design</span>
//             </div>
//           )}
//         </div>

//         {/* Two smaller images to the right of the big image */}
//         <div className='col-span-1 row-span-1 relative'>
//           <img
//             className={`w-full h-[15vh] md:h-[200px] rounded-lg border-2 border-white object-cover transition-opacity duration-300 ${selectedImage === 1 ? 'opacity-60' : ''}`} // Change opacity if selected
//             src="/images/home-staging.webp"
//             alt="Home Staging"
//             onClick={() => setSelectedImage(selectedImage === 1 ? null : 1)} // Update selection
//           />
//           {selectedImage === 1 && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//               <span className="text-white text-[3vw] md:text-xl">Home Staging</span>
//             </div>
//           )}
//         </div>
//         <div className='col-span-1 row-span-1 relative'>
//           <img
//             className={`w-full h-[15vh] md:h-[200px] rounded-lg border-2 border-white object-cover transition-opacity duration-300 ${selectedImage === 2 ? 'opacity-60' : ''}`} // Change opacity if selected
//             src="/images/furniture-selection.jpeg"
//             alt="Furniture Selection"
//             onClick={() => setSelectedImage(selectedImage === 2 ? null : 2)} // Update selection
//           />
//           {selectedImage === 2 && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//               <span className="text-white text-[3vw] md:text-xl">Furniture Selection</span>
//             </div>
//           )}
//         </div>

//         {/* Three smaller images below the big image */}
//         <div className='col-span-1 row-span-1 relative'>
//           <img
//             className={`w-full h-[15vh] md:h-[200px] rounded-lg border-2 border-white object-cover transition-opacity duration-300 ${selectedImage === 3 ? 'opacity-60' : ''}`} // Change opacity if selected
//             src="/images/space-planning.jpg"
//             alt="Space Planning"
//             onClick={() => setSelectedImage(selectedImage === 3 ? null : 3)} // Update selection
//           />
//           {selectedImage === 3 && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//               <span className="text-white text-[3vw] md:text-xl">Space Planning</span>
//             </div>
//           )}
//         </div>
//         <div className='col-span-1 row-span-1 relative'>
//           <img
//             className={`w-full h-[15vh] md:h-[200px] rounded-lg border-2 border-white object-cover transition-opacity duration-300 ${selectedImage === 4 ? 'opacity-60' : ''}`} // Change opacity if selected
//             src="/images/residential-design.jpg"
//             alt="Residential Design"
//             onClick={() => setSelectedImage(selectedImage === 4 ? null : 4)} // Update selection
//           />
//           {selectedImage === 4 && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//               <span className="text-white text-[3vw] md:text-xl">Residential Design</span>
//             </div>
//           )}
//         </div>
//         <div className='col-span-1 row-span-1 relative'>
//           <img
//             className={`w-full h-[15vh] md:h-[200px] rounded-lg border-2 border-white object-cover transition-opacity duration-300 ${selectedImage === 5 ? 'opacity-60' : ''}`} // Change opacity if selected
//             src="/images/color-consultation.jpg"
//             alt="Color Consultation"
//             onClick={() => setSelectedImage(selectedImage === 5 ? null : 5)} // Update selection
//           />
//           {selectedImage === 5 && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//               <span className="text-white text-[3vw] md:text-xl">Color Consultation</span>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
// // 

"use client"; // Add this directive to make it a client component

import React, { useState } from 'react';
import Image from 'next/image';

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null); // Allow number or null

  return (
    <div className='bg-custom-green md:rounded-tl-[100px] rounded-br-[50px] rounded-tl-[50px] md:rounded-br-[100px] w-full mx-auto my-20 py-16'>
      <div className='flex flex-col items-center md:text-center'>
        <span className="text-center text-white font-semibold text-3xl border-b-4 p-1 border-yellow-300 inline-block">
          Services
        </span>

        <p className='md:w-[90%] w-[90%] m-4 md:m-3 py-3 text-sm md:text-md lg:text-2xl'>
          Our comprehensive interior design services are tailored to transform your vision into reality, whether you’re looking to create a cozy home environment or a dynamic office space. We pride ourselves on our attention to detail, ensuring that every element of your design reflects your unique style and preferences. <span className='md:inline hidden'> With our innovative designs and meticulous craftsmanship, we aim to exceed your expectations and bring your dream space to life. Trust us to handle every detail, ensuring a seamless and enjoyable experience as we create a space that truly feels like home or a productive work environment. Together, let’s embark on a journey to redefine your space!</span>
        </p>
      </div>

      {/* Image Grid Section */}
      <div className='grid grid-cols-3 grid-rows-2 gap-1 mx-auto md:w-[80%] w-[90%]'>
        {/* Large image */}
        <div className='col-span-2 row-span-2 relative'>
          <div className="relative w-full h-[30vh] md:h-[400px] rounded-lg border-2 border-white">
            <Image
              src="/images/commercial-design.jpg"
              alt="Commercial Design"
              layout="fill"
              objectFit="cover"
              className={`rounded-lg transition-opacity duration-300 ${selectedImage === 0 ? 'opacity-30' : 'opacity-100'}`} // Change opacity if selected
              onClick={() => setSelectedImage(selectedImage === 0 ? null : 0)} // Update selection
            />
            {selectedImage === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70"> {/* Increased opacity for better text visibility */}
                <span className="text-white md:text-3xl text-lg">Commercial Design</span>
              </div>
            )}
          </div>
        </div>

        {/* Two smaller images to the right of the big image */}
        <div className='col-span-1 row-span-1 relative'>
          <div className="relative w-full h-[15vh] md:h-[200px] rounded-lg border-2 border-white">
            <Image
              src="/images/home-staging.webp"
              alt="Home Staging"
              layout="fill"
              objectFit="cover"
              className={`rounded-lg transition-opacity duration-300 ${selectedImage === 1 ? 'opacity-30' : 'opacity-100'}`} // Change opacity if selected
              onClick={() => setSelectedImage(selectedImage === 1 ? null : 1)} // Update selection
            />
            {selectedImage === 1 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                <span className="text-white text-[3vw] md:text-xl">Home Staging</span>
              </div>
            )}
          </div>
        </div>
        <div className='col-span-1 row-span-1 relative'>
          <div className="relative w-full h-[15vh] md:h-[200px] rounded-lg border-2 border-white">
            <Image
              src="/images/furniture-selection.jpeg"
              alt="Furniture Selection"
              layout="fill"
              objectFit="cover"
              className={`rounded-lg transition-opacity duration-300 ${selectedImage === 2 ? 'opacity-30' : 'opacity-100'}`} // Change opacity if selected
              onClick={() => setSelectedImage(selectedImage === 2 ? null : 2)} // Update selection
            />
            {selectedImage === 2 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                <span className="text-white text-[3vw] md:text-xl">Furniture Selection</span>
              </div>
            )}
          </div>
        </div>

        {/* Three smaller images below the big image */}
        <div className='col-span-1 row-span-1 relative'>
          <div className="relative w-full h-[15vh] md:h-[200px] rounded-lg border-2 border-white">
            <Image
              src="/images/space-planning.jpg"
              alt="Space Planning"
              layout="fill"
              objectFit="cover"
              className={`rounded-lg transition-opacity duration-300 ${selectedImage === 3 ? 'opacity-30' : 'opacity-100'}`} // Change opacity if selected
              onClick={() => setSelectedImage(selectedImage === 3 ? null : 3)} // Update selection
            />
            {selectedImage === 3 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                <span className="text-white text-[3vw] md:text-xl">Space Planning</span>
              </div>
            )}
          </div>
        </div>
        <div className='col-span-1 row-span-1 relative'>
          <div className="relative w-full h-[15vh] md:h-[200px] rounded-lg border-2 border-white">
            <Image
              src="/images/residential-design.jpg"
              alt="Residential Design"
              layout="fill"
              objectFit="cover"
              className={`rounded-lg transition-opacity duration-300 ${selectedImage === 4 ? 'opacity-30' : 'opacity-100'}`} // Change opacity if selected
              onClick={() => setSelectedImage(selectedImage === 4 ? null : 4)} // Update selection
            />
            {selectedImage === 4 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                <span className="text-white text-[3vw] md:text-xl">Residential Design</span>
              </div>
            )}
          </div>
        </div>
        <div className='col-span-1 row-span-1 relative'>
          <div className="relative w-full h-[15vh] md:h-[200px] rounded-lg border-2 border-white">
            <Image
              src="/images/color-consultation.jpg"
              alt="Color Consultation"
              layout="fill"
              objectFit="cover"
              className={`rounded-lg transition-opacity duration-300 ${selectedImage === 5 ? 'opacity-30' : 'opacity-100'}`} // Change opacity if selected
              onClick={() => setSelectedImage(selectedImage === 5 ? null : 5)} // Update selection
            />
            {selectedImage === 5 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                <span className="text-white text-[3vw] md:text-xl">Color Consultation</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
