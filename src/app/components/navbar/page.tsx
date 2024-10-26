'use client';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('/');

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLinkClick = (link: string) => {
    if (link) {
      setActiveLink(link);
      setIsSidebarOpen(false);
    }
  };

  const links = ['/', '/components/about', '/components/services', '/components/portfolio', '/components/testimonials', '/components/contact'];

  return (
    <header className='flex flex-col md:justify-start text-center border-2 border-gray-100 transition-all duration-300 ease-in-out'>
      <p className='bg-green-950 py-2 items-center text-white text-[0.6rem] sm:text-sm md:text-md rounded-md'>
        Limited Time Offer🌟 Get 20% Off on Your First Design Project! —›
      </p>
      <nav className='flex justify-between items-center text-center xl:px-20 lg:px-18 md:px-10 px-6 bg-white transition-all duration-300 ease-in-out'>
        <div className='flex items-center py-2 justify-between w-full'>
          <div className='flex items-center'>
            <FaBars
              className='md:hidden mr-2 sm:mr-3 cursor-pointer'
              size={20}
              onClick={toggleSidebar}
            />
            <h1 className='lg:text-2xl md:text-xl text-lg font-semibold font-serif'>
              PEARL<span className='text-headingcolor'>VISTA</span>
            </h1>
          </div>

         
          <ul className='md:flex xl:text-xl lg:text-lg md:text-md text-center items-center hidden font-semibold'>
            {links.map((link, index) => (
              <li key={index} className='relative md:mx-3 lg:mx-4 rounded-md group'>
                <Link
                  href={link}
                  className={`block py-2 px-4 text-center hover:text-green-950 rounded-md transition duration-300 ease-in-out ${activeLink === link ? 'text-green-950' : ''}`}
                  onClick={() => handleLinkClick(link)}
                >
                  {link === '/' ? 'Home' : (link.split('/').pop() || '').replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())}
                </Link>
                <span className={`absolute left-0 bottom-0 h-0.5 w-full bg-green-950 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${activeLink === link ? 'scale-x-100' : ''}`}></span>
              </li>
            ))}
          </ul>

          <button className='bg-green-950 lg:text-md hover:bg-green-900 md:p-2 p-1 lg:px-4 md:px-3 px-2 rounded-lg text-white text-sm md:text-md lg:text-lg'>
            BOOK NOW
          </button>
        </div>
      </nav>

    
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-40 md:hidden transition-opacity duration-300 ease-in-out ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed top-0 left-0 w-2/3 bg-white h-full p-4 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button className='absolute top-4 right-4 text-3xl font-bold' onClick={toggleSidebar}>
            &times;
          </button>
          <ul className='flex flex-col items-start mt-10'>
            {links.map((link, index) => (
              <li key={index} className={`mb-4 sm:text-lg w-full py-2 ${activeLink === link ? 'bg-green-800 text-white' : 'hover:bg-green-700 hover:text-white'}`}>
                <Link href={link} className='block w-full' onClick={() => handleLinkClick(link)}>
                  {link === '/' ? 'Home' : (link.split('/').pop() || '').replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
