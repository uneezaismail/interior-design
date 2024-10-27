import Link from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black md:p-4 py-4 px-2  text-white flex flex-col '>
        <div className='flex justify-evenly md:p-4'>
        <div className='flex flex-col md:gap-y-2'>
            <span className='font-semibold underline md:text-2xl sm:text-lg text-[0.8rem] pb-3'>PEARLVISTA</span>
            <span className='flex gap-x-2 mr-2'><FaFacebook className='md:size-6 sm:size-4 size-3' /> <FaInstagram className='md:size-6 sm:size-4 size-3'/> <FaLinkedin className='md:size-6 sm:size-4 size:3'/> <FaTwitter className='md:size-6 sm:size-4 size-3'/> <FaPinterest className='md:size-6 sm:size-4 size-3'/></span>
<div className='md:flex py-4 md:gap-y-4 font-light sm:text-sm text-[0.7rem] md:text-md hidden'>
    <ul className='list-none'>
    <span className='font-semibold block md:py-2 md:mt-4'>Working Hours </span>
    <li>Monday to Friday: 9 AM – 6 PM</li>
    <li>Saturday: 10 AM – 4 PM</li>
    <li>Sunday: Closed</li>
    </ul>

</div>
    <div className='md:hidden py-4 md:gap-y-4 font-light sm:text-sm text-[0.7rem] md:text-lg flex flex-col'>
            <span className='font-semibold text:sm md:text-md block'>Quick Links</span>
            <ul className='list-none'>
            <li className='hover:text-headingcolor'><Link href={"/"}>Home</Link> </li>
        <li className='hover:text-headingcolor'> <Link href={"/components/about"}>About Us</Link></li>
        <li className='hover:text-headingcolor'> <Link href={"/components/portfolio"}>Portofolio</Link></li>
        <li className='hover:text-headingcolor'> <Link href={"/components/services"}>Services</Link></li>
        <li className='hover:text-headingcolor'> <Link href={"/components/testimonials"}>Testimonals</Link></li>
        <li className='hover:text-headingcolor'> <Link href={"/components/contact"}>Contact</Link></li>
        </ul>
        </div>

        </div>
        
        <div className='md:flex flex-col hidden font-light sm:text-sm text-[0.7rem] md:text-lg'>
            <span className='font-semibold text:sm md:text-md block py-2'>Quick Links</span>
            
            <ul className='list-none'>
            <li className='hover:text-headingcolor'><Link href={"/"}>Home</Link> </li>
        <li className='hover:text-headingcolor'> <Link href={"/components/about"}>About Us</Link></li>
        <li className='hover:text-headingcolor'> <Link href={"/components/portfolio"}>Portofolio</Link></li>
        <li className='hover:text-headingcolor'> <Link href={"/components/services"}>Services</Link></li>
        <li className='hover:text-headingcolor'> <Link href={"/components/testimonials"}>Testimonals</Link></li>
        <li className='hover:text-headingcolor'> <Link href={"/components/contact"}>Contact</Link></li>
        </ul>
        </div>
        <div className='flex flex-col px-2 font-light sm:text-sm text-[0.7rem] md:text-lg'>
        <span className='font-semibold block py-2'>Property Services</span>
            <ul className='list-none font-light'>
        <li>Residential  Design</li>
            <li>Commercial Spaces</li>
        <li>Home Renovations</li>
        <li>Space Planning
        </li>
        <li>Decor Selection
        </li>
        </ul>
        </div>
        <div className='flex flex-col font-light sm:text-sm text-[0.7rem] md:text-lg'>
        <span className='font-semibold block py-2'>Policies </span>
            <ul className='flex flex-col list-none font-light '>
        <li>Terms and Conditions</li>
            <li>Privacy Policy
            </li>
        <li>Refund Policy
        </li>
        </ul>
        </div>
        </div>
        <hr className='text-gray-500 md:w-[90%] w-full m-auto'/>
        <p className='m-auto md:p-4 sm:p-2 text-[0.6rem] md:text-lg'>© 2024  PEARVISTA by <span className='text-headingcolor'>UNEEZA</span>  | All Rights Reserved.</p>
    </footer>
  )
}

export default Footer