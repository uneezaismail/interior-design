import Image from 'next/image';

const ImageLayout = () => {
  return (
    <div>
    
      <div className="relative flex flex-col items-center">
        <div className="w-full h-[180px] md:h-[200px] lg:h-[400px] relative">
          <Image
            src="/images/book-1.webp"
            alt="Top Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

     
        <div className="absolute flex gap-1 sm:gap-4 w-full justify-center md:-bottom-16 -bottom-12 lg:-bottom-20 transform">
          <div className="relative w-[30vw] h-[25vw] sm:w-[200px] sm:h-[140px] lg:w-[300px] lg:h-[180px] border-2 border-white">
            <Image
              src="/images/book-2.jpg"
              alt="Small Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-[30vw] h-[25vw] sm:w-[200px] sm:h-[140px] lg:w-[300px] lg:h-[180px] border-2 border-white">
            <Image
              src="/images/book-3.jpg"
              alt="Small Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="relative w-[30vw] h-[25vw] sm:w-[200px] sm:h-[140px] lg:w-[300px] lg:h-[180px] border-2 border-white">
            <Image
              src="/images/book-4.jpg"
              alt="Small Image 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

     
      {/* <div className="lg:my-20 lg:mt-32 mt-20 flex flex-col items-center px-4 text-center">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-green-900 pb-8">
          Booking Form
        </h2>
        <p className="lg:text-2xl md:text-xl text-lg">
          Experience something new every moment.
        </p>
      </div>

     
      <div className="lg:w-[70%] w-[90%] mx-auto my-10">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col text-lg lg:text-xl">
            <label className="mb-2" htmlFor="name">Name</label>
            <input className="h-12 lg:h-14 border-2 border-black p-2" type="text" id="name" />
          </div>
          <div className="flex flex-col text-lg lg:text-xl">
            <label className="mb-2" htmlFor="email">Email</label>
            <input className="h-12 lg:h-14 border-2 border-black p-2" type="email" id="email" />
          </div>
        </div>

        <div className="flex flex-col text-lg lg:text-xl my-4">
          <label className="mb-2" htmlFor="phone">Phone</label>
          <input className="h-12 lg:h-14 border-2 border-black p-2" type="tel" id="phone" />
        </div>

        <div className="flex flex-col text-lg lg:text-xl my-4">
          <label className="mb-2" htmlFor="budget">Budget Range</label>
          <input className="h-12 lg:h-14 border-2 border-black p-2" type="text" id="budget" />
        </div>

        <div className="flex flex-col text-lg lg:text-xl my-4">
          <label className="mb-2" htmlFor="project">Project Type</label>
          <input className="h-12 lg:h-14 border-2 border-black p-2" type="text" id="project" />
        </div>

        <div className="flex flex-col text-lg lg:text-xl my-4">
          <label className="mb-2" htmlFor="message">Special Message</label>
          <textarea
            className="border-2 border-black p-2 h-32 lg:h-48 resize-none"
            id="message"
          ></textarea>
        </div>

        <button className="m-auto flex items-center px-8 py-3 rounded-full text-lg lg:text-xl text-white bg-green-800">
          Submit
        </button>
      </div> */}

<div className="lg:my-20 lg:mt-32 mt-20 flex flex-col items-center px-4 text-center">
  <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-green-900 pb-8">
    Booking Form
  </h2>
  <p className="lg:text-2xl md:text-xl text-lg text-gray-700">
    Experience something new every moment.
  </p>
</div>

{/* Form Section */}
<div className="lg:w-[70%] w-[90%] mx-auto my-10 p-6 lg:p-10 rounded-lg shadow-md">
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
    <div className="flex flex-col text-lg lg:text-xl">
      <label className="mb-2 font-semibold text-gray-700" htmlFor="name">Name</label>
      <input
        className="h-12 lg:h-14 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-green-800 transition duration-300"
        type="text"
        id="name"
        placeholder="Enter your name"
      />
    </div>
    <div className="flex flex-col text-lg lg:text-xl">
      <label className="mb-2 font-semibold text-gray-700" htmlFor="email">Email</label>
      <input
        className="h-12 lg:h-14 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-green-800 transition duration-300"
        type="email"
        id="email"
        placeholder="Enter your email"
      />
    </div>
  </div>

  <div className="flex flex-col text-lg lg:text-xl my-4">
    <label className="mb-2 font-semibold text-gray-700" htmlFor="phone">Phone</label>
    <input
      className="h-12 lg:h-14 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-green-800 transition duration-300"
      type="tel"
      id="phone"
      placeholder="Enter your phone number"
    />
  </div>

  <div className="flex flex-col text-lg lg:text-xl my-4">
    <label className="mb-2 font-semibold text-gray-700" htmlFor="budget">Budget Range</label>
    <input
      className="h-12 lg:h-14 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-green-800 transition duration-300"
      type="text"
      id="budget"
      placeholder="Enter your budget range"
    />
  </div>

  <div className="flex flex-col text-lg lg:text-xl my-4">
    <label className="mb-2 font-semibold text-gray-700" htmlFor="project">Project Type</label>
    <input
      className="h-12 lg:h-14 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:border-green-800 transition duration-300"
      type="text"
      id="project"
      placeholder="Describe your project"
    />
  </div>

  <div className="flex flex-col text-lg lg:text-xl my-4">
    <label className="mb-2 font-semibold text-gray-700" htmlFor="message">Special Message</label>
    <textarea
      className="border-2 border-gray-300 rounded-lg p-2 h-32 lg:h-48 resize-none focus:outline-none focus:border-green-800 transition duration-300"
      id="message"
      placeholder="Add any special instructions"
    ></textarea>
  </div>

  <button className="m-auto flex items-center justify-center px-8 py-3 mt-6 rounded-full text-lg lg:text-xl text-white bg-green-800 hover:bg-green-700 transition duration-300 shadow-lg focus:outline-none">
    Submit
  </button>
</div>

    </div>
  );
};

export default ImageLayout;
