import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function ContactSection() {
    return (
      <section className="bg-white py-10 lg:px-20 px-6 m-auto">
        <div className="flex justify-center">
          <h2 className="my-6 text-center  p-1  block mb-[3rem] md:mb-[7rem] text-gray-800 font-bold text-4xl border-b-4 border-yellow-500">Contact Us</h2>
        </div>

        <div className="flex flex-col md:flex-row md:justify-around items-center">
        
          <div className="mb-6 md:mb-0 md:w-[80%] w-full">
            <h3 className="font-semibold lg:text-2xl md:text-xl text-md text-green-900">Get in Touch</h3>
            <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold">Your Trusted Design Partners</h2>
            <p className="md:mt-8 mt-4 lg:text-xl md:text-lg text-md md:w-[80%] w-full">
  Whether you&apos;re building, renovating, or simply redecorating, we&apos;re here to bring your vision to life. Contact us to discuss your project ideas and make them a reality.
</p>

            <div className="mt-6 space-y-2 bg-gray-200 md:w-[60%] w-full rounded-lg">
              <ul className="mt-6 space-y-3">
                <li className="border-b-2 border-dashed border-black p-4 flex items-center space-x-4">
                  <span className="flex items-center justify-center h-[8vh] w-[8vh] bg-white rounded-full">
                    <FaPhoneAlt size={20}/>
                  </span>
                  <div className="flex flex-col">
                    <span>Call us anytime</span>
                    <span className="lg:text-xl text-green-900">0301-XXXXXXX</span>
                  </div>
                </li>

                <li className="border-b-2 border-dashed border-black p-4 flex items-center space-x-4">
                  <span className="flex items-center justify-center h-[8vh] w-[8vh] bg-white rounded-full">
                    <IoIosMailOpen size={20}/>
                  </span>
                  <div className="flex flex-col">
                    <span>Mail us anytime</span>
                    <span className="lg:text-xl text-green-900">info@gmail.com</span>
                  </div>
                </li>

                <li className="p-4 flex items-center space-x-4">
                  <span className="flex items-center justify-center h-[8vh] w-[8vh] bg-white rounded-full">
                    <IoLocationSharp size={20}/>
                  </span>
                  <div className="flex flex-col">
                    <span>Our Location</span>
                    <span className="lg:text-xl text-green-900">456 Design Street, Karachi, Sindh, 12345</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

         
          <div className="bg-gray-50 p-3 rounded shadow-md w-full md:w-[60%]">
            <h2 className="text-green-900 text-2xl font-semibold text-center p-4">Contact</h2>
            <h3 className="text-center font-semibold md:text-3xl text-xl">Get in Touch With PearlVista</h3>

            <form className="mt-4 space-y-4">
              <div className="flex flex-wrap justify-between">
                <input type="text" placeholder="Your Name" className="w-full md:w-[49%] md:h-12 p-2 h-10 border rounded mb-4 md:mb-0" />
                <input type="text" placeholder="Phone No" className="w-full md:w-[49%] md:h-12 h-10 p-2 border rounded" />
              </div>
              <input type="email" placeholder="Email" className="w-full md:h-12 h-10 p-2 border rounded" />
              <textarea placeholder="Message" className="w-full p-2 md:h-44 h-20 border-2 rounded"></textarea>
              <button className="bg-green-700 hover:bg-green-600 text-xl text-white w-full py-2 rounded">Submit</button>
            </form>
          </div>
        </div>
      </section>
    );
}
