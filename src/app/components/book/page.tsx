// // import Image from 'next/image';

// // const ImageLayout = () => {
// //   return (
// //     <div className="relative flex flex-col items-center mt-6">
// //       {/* Large top image */}
// //       <div className="w-full max-w-4xl">
// //         <Image 
// //           src="/images/book-1.webp" 
// //           alt="Top Image" 
// //           width={800} 
// //           height={400} 
// //           className="w-full object-cover" 
// //         />
// //       </div>

// //       {/* Overlay images */}
// //       <div className="absolute flex gap-3 w-full justify-center top-1/2 transform -translate-y-1/2">
// //         <Image 
// //           src="/images/book-2.jpg" 
// //           alt="Small Image 1" 
// //           width={150} 
// //           height={150} 
// //           className="rounded-lg shadow-md"
// //         />
// //         <Image 
// //           src="/images/book-3.jpg" 
// //           alt="Small Image 2" 
// //           width={150} 
// //           height={150} 
// //           className="rounded-lg shadow-md"
// //         />
// //         <Image 
// //           src="/images/book-4.jpg" 
// //           alt="Small Image 3" 
// //           width={150} 
// //           height={150} 
// //           className="rounded-lg shadow-md"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageLayout;


// import Image from 'next/image';

// const ImageLayout = () => {
//   return (
//     <div className="relative flex flex-col items-center mt-6">
//       {/* Large top image */}
//       <div className="w-full h-[300px] max-w-4xl">
//         <Image 
//           src="/images/book-1.webp" 
//           alt="Top Image" 
//           layout="fill" 
//           objectFit="cover" 
//           className="w-full h-full"
//         />
//       </div>

//       {/* Overlay images */}
//       <div className="absolute flex gap-3 w-full justify-center -bottom-3/4 transform -translate-y-1/2">
//         <Image 
//           src="/images/book-2.jpg" 
//           alt="Small Image 1" 
//           width={250} 
//           height={100} 
//           className="rounded-lg shadow-md"
//         />
//         <Image 
//           src="/images/book-3.jpg" 
//           alt="Small Image 2" 
//           width={250} 
//           height={100}  
//           className="rounded-lg shadow-md"
//         />
//         <Image 
//           src="/images/book-4.jpg" 
//           alt="Small Image 3" 
//           width={250} 
//           height={100} 
//           className="rounded-lg shadow-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default ImageLayout;



import Image from 'next/image';

const ImageLayout = () => {
  return (
    <div className="relative flex flex-col items-center mt-6">
      {/* Large top image */}
      <div className="w-full md:h-[300px] h-[200px] relative">
        <Image 
          src="/images/book-1.webp" 
          alt="Top Image" 
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full"
        />
      </div>

      {/* Overlay images */}
      <div className="mx-5 absolute flex gap-3 w-full justify-center -bottom-1/3 md:-bottom-2/4 transform -translate-y-1/2">
        <Image 
          src="/images/book-2.jpg" 
          alt="Small Image 1" 
          width={250} // Adjusted width
          height={150} 
          className="rounded-lg shadow-md sm:w-[300px] sm:h-[180px] w-[40vw] h-[25vw]"
        />
        <Image 
          src="/images/book-3.jpg" 
          alt="Small Image 2" 
          width={250} 
          height={150}  
          className="rounded-lg shadow-md sm:w-[300px] sm:h-[180px] w-[40vw] h-[25vw]"
        />
        <Image 
          src="/images/book-4.jpg" 
          alt="Small Image 3" 
          width={250} 
          height={150} 
          className="rounded-lg shadow-md sm:w-[300px] sm:h-[180px] w-[40vw] h-[25vw]"
        />
      </div>
    </div>
  );
};

export default ImageLayout;
