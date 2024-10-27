'use client';
import React, { useState } from 'react';
import Image from 'next/image';  

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

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="w-full m-auto mt-5 mb-10 ">
            <div className='flex flex-col items-center text-center'>
                <h2 className="text-center p-1  inline-block text-gray-800 font-bold text-4xl border-b-4 border-yellow-500">Portfolio</h2>
                <h3 className="text-black font-bold text-2xl w-[80%] md:w-[60%] lg:text-5xl xl:text-6xl my-6 md:my-10 font-serif">
                    Innovative Designs, <span className="text-green-900">Seamless Development</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:w-[80%] lg:w-[85%] md:w-[80%] sm:w-[80%] w-[70%]  m-auto">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="relative border-4 rounded-xl border-green-900 p-2 shadow-lg shadow-slate-500 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                        onClick={() => handleProjectClick(project)}
                    >
                        <Image 
                            className="rounded-lg w-full sm:h-520 h-40 lg:h-64 object-cover mb-2" 
                            src={project.image} 
                            alt={project.title} 
                            width={800}  
                            height={600}  
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            <div className="text-white text-center p-4">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-sm">{project.description.substring(0, 50)}...</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

           
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 w-[90%] sm:max-w-md mx-auto">
                        <h2 className="text-green-900 text-2xl font-semibold">{selectedProject.title}</h2>
                        <Image 
                            className="rounded-lg w-full sm:h-48 h-32 object-cover mt-2" 
                            src={selectedProject.image} 
                            alt={selectedProject.title} 
                            width={800}  
                            height={600}  
                        />
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
