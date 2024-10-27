"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null); 

  return (
    <div className='bg-gradient-to-br from-gray-100 to-gray-300 md:rounded-tl-[100px] rounded-br-[50px] rounded-tl-[50px] md:rounded-br-[100px] w-full mx-auto pb-16 my-4 shadow-lg'>
      <div className='flex flex-col items-center md:text-center'>
        <h2 className="text-center text-gray-800 font-bold text-4xl border-b-4 border-yellow-500 inline-block p-2 mb-6">
          Our Services
        </h2>

        <p className='md:w-[85%] w-[90%] m-4 md:m-3 py-4 text-base md:text-lg lg:text-xl text-gray-700'>
          Our comprehensive interior design services are tailored to transform your vision into reality, whether you&apos;re looking to create a cozy home environment or a dynamic office space. We pride ourselves on attention to detail, ensuring that every element of your design reflects your unique style and preferences. 
          <span className='block md:inline mt-2'>
            With innovative designs and meticulous craftsmanship, we aim to exceed your expectations and bring your dream space to life. Trust us to handle every detail, ensuring a seamless and enjoyable experience. Let&apos;s create a space that truly feels like home or a productive work environment!
          </span>
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 mx-auto md:w-[85%] w-[80%]'>
       
        <div className='col-span-1 md:col-span-2 row-span-2 relative'>
          <div className="relative w-full md:w-full m-auto sm:w-[80%] h-[35vh] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/commercial-design.jpg"
              alt="Commercial Design"
              layout="fill"
              objectFit="cover"
              className={`rounded-lg transition-opacity duration-300 ${selectedImage === 0 ? 'opacity-40' : 'opacity-100'}`}
              onClick={() => setSelectedImage(selectedImage === 0 ? null : 0)} 
            />
            {selectedImage === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                <span className="text-white text-2xl md:text-4xl font-semibold">Commercial Design</span>
              </div>
            )}
          </div>
        </div>

        {/* Smaller Images */}
        {[
          { id: 1, src: "/images/home-staging.webp", label: "Home Staging" },
          { id: 2, src: "/images/furniture-selection.jpeg", label: "Furniture Selection" },
          { id: 3, src: "/images/space-planning.jpg", label: "Space Planning" },
          { id: 4, src: "/images/residential-design.jpg", label: "Residential Design" },
          { id: 5, src: "/images/color-consultation.jpg", label: "Color Consultation" }
        ].map((service, index) => (
          <div className='relative' key={index}>
            <div className="relative w-full sm:w-[80%] sm:m-auto md:w-full h-[30vh] md:h-[250px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={service.src}
                alt={service.label}
                layout="fill"
                objectFit="cover"
                className={`rounded-lg transition-opacity duration-300 ${selectedImage === service.id ? 'opacity-40' : 'opacity-100'}`}
                onClick={() => setSelectedImage(selectedImage === service.id ? null : service.id)} 
              />
              {selectedImage === service.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                  <span className="text-white text-lg md:text-2xl">{service.label}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
