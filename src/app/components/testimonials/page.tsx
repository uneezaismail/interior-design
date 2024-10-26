import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: "“The transformation of our home was incredible! The team listened to our ideas and made them a reality. We couldn’t be happier!”",
      author: "Sarah L.",
      image: "/images/photo-1.jpg"
    },
    {
      text: "“Professional and attentive! They turned our office into a vibrant and functional space that reflects our brand perfectly.”",
      author: "Jack R.",
      image: "/images/photo-2.jpeg"
    },
    {
      text: "“The team truly understood our vision and worked hard to bring it to life. We love our new space!”",
      author: "Jessica T.",
      image: "/images/photo-3.jpg"
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="flex justify-center">
        <h2 className="my-6 text-center text-black font-semibold text-3xl border-b-4 p-1 border-yellow-300 flex flex-col">
          <span className="font-light font-serif">Customer</span> Testimonials
        </h2>
      </div>

      <p className="text-center md:text-[5vh] text-lg w-[90%] mx-auto md:my-10 my-5 pb-10 md:leading-10">
        Discover how we've transformed spaces and exceeded expectations through the voices of our satisfied customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] sm:w-[70%] md:w-full m-auto gap-3 lg:gap-0 md:px-8 gap-y-20 px-6 lg:px-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative lg:w-[90%] sm:w-[90%] md:w-full w-full m-auto">
            {/* Using Image component from Next.js for better optimization */}
            <div className="w-32 lg:w-48 h-32 lg:h-48 rounded-full overflow-hidden border-2 border-green-950 absolute left-1/2 transform -translate-x-1/2 -top-10">
              <Image
                src={testimonial.image}
                alt={`${testimonial.author}'s picture`}
                layout="fill" // Fill the container
                objectFit="cover" // Cover the container while maintaining aspect ratio
                className="rounded-full" // Ensure the image is rounded
              />
            </div>

            {/* Testimonial Text */}
            <div className="lg:text-2xl text-lg bg-green-950 text-white p-6 rounded shadow-md mt-8 pt-24 md:pt-20 lg:pt-36 text-center h-72 lg:h-96">
              <p className="italic">"{testimonial.text}"</p>
              <p className="font-bold mt-4">- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
