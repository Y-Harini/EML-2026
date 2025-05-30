"use client"; // Needed for client-side rendering

import { useState, useEffect } from "react";
import Animation from "../../../components/animation";
import Menu from "../../../components/menu25-26";
import Head from "../../../components/head";
import Navbar from "../../../components/Navbar";
import Ss from "../ss/page"; // Small-screen version

// Coordinator component (included inline as per your request)
const Coordinator = ({ imageSrc, name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110 shadow-lg">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-center text-lg font-semibold text-[#1D4F7C]">
        {name}
      </p>
    </div>
  );
};


const coordinators = [
  { imageSrc: "/images/Rishitha.webp", name: "Rishitha Rajapu" },
  { imageSrc: "/images/Harini.webp", name: "Harini Yoligi" },
  { imageSrc: "/images/Dinesh.webp", name: "Tavva Dinesh Reddy" },
  { imageSrc: "/images/Abhinav.webp", name: "Sri Sai Abhinav Reddy Boreddy" },
  { imageSrc: "/images/Dhanaji.webp", name: "Om Dhanaji Khot" },
];

export default function WebDevelopment() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="w-full min-h-screen relative bg-white flex flex-col items-center overflow-hidden">
      {isLargeScreen ? (
        <>
          {/* Animation */}
          <div className="hidden md:block w-full">
            <Animation />
          </div>

          <div className="flex flex-col">
            <Navbar />

            {/* Responsive Layout */}
            <div className="flex flex-col md:flex-row w-full">
              <Menu />

              {/* Head + Coordinators as a Column, Aligned Left */}
              <div className="flex flex-col justify-start items-center md:items-start w-full max-w-7xl gap-10 mt-[70px] md:ml-[350px] px-4">
                {/* Head Section */}
                
                <div className="top-10 left-100 md:top-20 md:left-20 scale-110 w-full flex justify-center">
                <div className="transition-transform duration-300 hover:scale-110">
                <Head
                  imageSrc="/images/Manas - Vasana Manas.webp"
              
                  title="Web Development Head"
                  name="Vasana Manas"
                  bgColor="bg-[#1D4F7C]"
                  
                />
                </div>
                </div>

                {/* Coordinators Section */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full justify-items-center">
                  {coordinators.map((coordinator, i) => (
                    <Coordinator key={i} {...coordinator} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Ss />
      )}
    </div>
  );
}
