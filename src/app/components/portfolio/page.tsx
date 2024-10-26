
// import React from 'react';

// const Portfolio = () => {
//     const projects = [
//         { 
//             title: "Office", 
//             description: "Designed for productivity and comfort, this modern home office blends sleek ergonomics with a touch of minimalism. The spacious layout features a height-adjustable desk paired with an ergonomic chair that promotes good posture, while large windows allow natural light to flood the room, reducing eye strain during long working hours.", 
//             image: "/images/office.jpg" 
//         },
//         { 
//             title: "Bedroom", 
//             description: "Relaxing retreats with a blend of comfort and design. This bedroom is a sanctuary, adorned with layers of soft textiles that invite you to unwind. A plush king-sized bed with a luxurious tufted headboard takes center stage, surrounded by strategically placed nightstands featuring stylish lamps for easy access to light.", 
//             image: "/images/bed-room.webp" 
//         },
//         { 
//             title: "Lounge", 
//             description: "Inviting lounges that create ambiance and relaxation. This lounge area is designed for social interaction and comfort, featuring a combination of plush, oversized sofas and sleek armchairs that encourage conversation and relaxation. A contemporary coffee table serves as the centerpiece, showcasing artful decor and a curated selection of coffee table books.", 
//             image: "/images/lounge.webp" 
//         },
//         { 
//             title: "Kitchen", 
//             description: "Stylish, functional kitchen spaces with modern appeal. This kitchen features an open-concept design, seamlessly connecting it to the dining area, ideal for entertaining friends and family. High-end stainless steel appliances are both functional and aesthetically pleasing, ensuring a professional-grade cooking experience.", 
//             image: "/images/kitchen.webp" 
//         },
//         { 
//             title: "Living Room", 
//             description: "Create cozy yet elegant living spaces for your home. This living room showcases a balanced blend of sophistication and comfort, featuring a statement sofa adorned with an array of decorative pillows and soft throws. A stylish area rug anchors the space, adding warmth and texture, while a modern entertainment unit offers practical storage and display options for books, decor, and electronics.", 
//             image: "/images/living-room.jpeg" 
//         },
//         { 
//             title: "Dining Area", 
//             description: "Elegant dining areas for everyday use or special occasions. This dining area exudes sophistication, featuring a beautifully crafted table made of reclaimed wood, which can accommodate family gatherings with ease. Elegant dining chairs surround the table, creating an inviting atmosphere that encourages long, leisurely meals.", 
//             image: "/images/dining-room.jpg" 
//         },
//     ];

//     return (
//         <div className="w-full mt-14 m-auto mb-10">
//             <div className='flex flex-col items-center text-center'>
//                 <h2 className="text-center text-black font-semibold text-3xl border-b-4 p-1 border-yellow-300 inline-block mt-10">Portfolio</h2>
//                 <h3 className="text-black font-bold text-xl w-[90%] md:w-[60%] lg:text-5xl xl:text-6xl my-6 md:my-10 font-mono">
//                     Innovative Designs, <span className="text-green-900">Seamless Development</span>
//                 </h3>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:w-[80%] lg:w-[85%] md:w-[80%] w-[70%] m-auto ">
//                 {projects.map((project, index) => (
//                     <div 
//                         key={index} 
//                         className="border-4 rounded-xl border-green-900 p-2 shadow-lg shadow-slate-500 transition-transform transform hover:scale-105 hover:shadow-xl "
//                     >
//                         <img className="rounded-lg w-full sm:h-36 h-28 lg:h-56 object-cover mb-2" src={project.image} alt={project.title} />
//                         <h3 className="text-xl font-semibold text-green-900">{project.title}</h3>
//                         <p className="text-xs md:text-md lg:text-lg mt-2">{project.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Portfolio;

// 'use client'
// import React, { useState } from 'react';

// // Define a type for the project
// interface Project {
//     title: string;
//     description: string;
//     image: string;
// }

// const Portfolio: React.FC = () => {
//     const projects: Project[] = [
//         { 
//             title: "Office", 
//             description: "Designed for productivity and comfort, this modern home office blends sleek ergonomics with a touch of minimalism.", 
//             image: "/images/office.jpg" 
//         },
//         { 
//             title: "Bedroom", 
//             description: "Relaxing retreats with a blend of comfort and design. This bedroom is a sanctuary, adorned with layers of soft textiles.", 
//             image: "/images/bed-room.webp" 
//         },
//         { 
//             title: "Lounge", 
//             description: "Inviting lounges that create ambiance and relaxation. This lounge area is designed for social interaction and comfort.", 
//             image: "/images/lounge.webp" 
//         },
//         { 
//             title: "Kitchen", 
//             description: "Stylish, functional kitchen spaces with modern appeal. This kitchen features an open-concept design, seamlessly connecting to the dining area.", 
//             image: "/images/kitchen.webp" 
//         },
//         { 
//             title: "Living Room", 
//             description: "Create cozy yet elegant living spaces for your home. This living room showcases a balanced blend of sophistication and comfort.", 
//             image: "/images/living-room.jpeg" 
//         },
//         { 
//             title: "Dining Area", 
//             description: "Elegant dining areas for everyday use or special occasions. This dining area exudes sophistication, featuring a beautifully crafted table made of reclaimed wood.", 
//             image: "/images/dining-room.jpg" 
//         },
//     ];

//     const [selectedProject, setSelectedProject] = useState<Project | null>(null); // Set the type of selectedProject

//     const handleProjectClick = (project: Project) => {
//         setSelectedProject(project);
//     };

//     const closeModal = () => {
//         setSelectedProject(null);
//     };

//     return (
//         <div className="w-full mt-14 m-auto mb-10">
//             <div className='flex flex-col items-center text-center'>
//                 <h2 className="text-center text-black font-semibold text-3xl border-b-4 p-1 border-yellow-300 inline-block mt-10">Portfolio</h2>
//                 <h3 className="text-black font-bold text-xl w-[90%] md:w-[60%] lg:text-5xl xl:text-6xl my-6 md:my-10 font-mono">
//                     Innovative Designs, <span className="text-green-900">Seamless Development</span>
//                 </h3>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:w-[80%] lg:w-[85%] md:w-[80%] w-[70%] m-auto">
//                 {projects.map((project, index) => (
//                     <div 
//                         key={index} 
//                         className="relative border-4 rounded-xl border-green-900 p-2 shadow-lg shadow-slate-500 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
//                         onClick={() => handleProjectClick(project)}
//                     >
//                         <img className="rounded-lg w-full sm:h-36 h-28 lg:h-56 object-cover mb-2" src={project.image} alt={project.title} />
//                         <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//                             <div className="text-white text-center p-4">
//                                 <h3 className="text-xl font-semibold">{project.title}</h3>
//                                 <p className="text-sm">{project.description.substring(0, 50)}...</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Modal for project details */}
//             {selectedProject && (
//                 <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//                     <div className="bg-white rounded-lg p-4 max-w-md mx-auto">
//                         <h2 className="text-green-900 text-2xl font-semibold">{selectedProject.title}</h2>
//                         <img className="rounded-lg w-full h-48 object-cover mt-2" src={selectedProject.image} alt={selectedProject.title} />
//                         <p className="mt-4">{selectedProject.description}</p>
//                         <button className="mt-4 bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded" onClick={closeModal}>
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Portfolio;




'use client';
import React, { useState } from 'react';

// Define a type for the project
interface Project {
    title: string;
    description: string;
    image: string;
}

const Portfolio: React.FC = () => {
    const projects: Project[] = [
        { 
            title: "Office", 
            description: "Designed for productivity and comfort, this modern home office blends sleek ergonomics with a touch of minimalism.", 
            image: "/images/office.jpg" 
        },
        { 
            title: "Bedroom", 
            description: "Relaxing retreats with a blend of comfort and design. This bedroom is a sanctuary, adorned with layers of soft textiles.", 
            image: "/images/bed-room.webp" 
        },
        { 
            title: "Lounge", 
            description: "Inviting lounges that create ambiance and relaxation. This lounge area is designed for social interaction and comfort.", 
            image: "/images/lounge.webp" 
        },
        { 
            title: "Kitchen", 
            description: "Stylish, functional kitchen spaces with modern appeal. This kitchen features an open-concept design, seamlessly connecting to the dining area.", 
            image: "/images/kitchen.webp" 
        },
        { 
            title: "Living Room", 
            description: "Create cozy yet elegant living spaces for your home. This living room showcases a balanced blend of sophistication and comfort.", 
            image: "/images/living-room.jpeg" 
        },
        { 
            title: "Dining Area", 
            description: "Elegant dining areas for everyday use or special occasions. This dining area exudes sophistication, featuring a beautifully crafted table made of reclaimed wood.", 
            image: "/images/dining-room.jpg" 
        },
    ];

    const [selectedProject, setSelectedProject] = useState<Project | null>(null); // Set the type of selectedProject

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="w-full mt-14 m-auto mb-10">
            <div className='flex flex-col items-center text-center'>
                <h2 className="text-center text-black font-semibold text-3xl border-b-4 p-1 border-yellow-300 inline-block mt-10">Portfolio</h2>
                <h3 className="text-black font-bold text-2xl w-[90%] md:w-[60%] lg:text-5xl xl:text-6xl my-6 md:my-10 font-mono">
                    Innovative Designs, <span className="text-green-900">Seamless Development</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:w-[80%] lg:w-[85%] md:w-[80%] sm:w-[70%] w-[60%] m-auto">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="relative border-4 rounded-xl border-green-900 p-2 shadow-lg shadow-slate-500 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                        onClick={() => handleProjectClick(project)}
                    >
                        <img className="rounded-lg w-full sm:h-40 h-32 lg:h-64 object-cover mb-2" src={project.image} alt={project.title} />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <div className="text-white text-center p-4">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-sm">{project.description.substring(0, 50)}...</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for project details */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 w-[90%] sm:max-w-md mx-auto">
                        <h2 className="text-green-900 text-2xl font-semibold">{selectedProject.title}</h2>
                        <img className="rounded-lg w-full  sm:h-48 h-32 object-cover mt-2" src={selectedProject.image} alt={selectedProject.title} />
                        <p className="mt-4 text-sm md:text-base">{selectedProject.description}</p>
                        <button className="mt-4 bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Portfolio;
