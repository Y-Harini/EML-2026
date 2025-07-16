"use client"; // Needed for client-side rendering

import { useState, useEffect } from "react";
import Animation from "../../../components/animation";
import Menu from "../../../components/menu25-26";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";
import Navbar from "../../../components/Navbar";
import Ss from "../ss/page"; // Importing the small-screen version

const coordinators = [
  {
    imageSrc: "/images/Anveshchandra Bavikadi.webp",
    name: "Anveshchandra",
    title: "Coordinator",
  },
  {
    imageSrc: "/images/Araveeti Sai Tejeswar Reddy(1).jpg",
    name: "Sai Tejeswar Reddy",
    title: "Coordinator",
  },
  {
    imageSrc: "/images/Charugundla Anju Bhargavi.webp",
    name: "Anju Bhargavi",
    title: "Coordinator",
  },
  {
    imageSrc: "/images/Gajjarapu Satyanarayana.webp",
    name: "Satyanarayana",
    title: "Coordinator",
  },
  { imageSrc: "/images/no_image.webp", name: "Darshan", title: "Coordinator" },
  { imageSrc: "/images/Pranathi.webp", name: "Pranathi", title: "Coordinator" },
];

export default function Multimedia() {
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

              <div className="flex flex-col justify-start items-center w-full gap-10 mt-[70px] ml-[350px]">
                {/* Head Section */}
                <Head
                  imageSrc="/images/Rajnil Malviya(2).webp"
                  title="Multimedia Head"
                  name="Rajnil Malviya"
                  bgColor="bg-[#1D4F7C]"
                />

                {/* Coordinators Section */}
                <div className="w-full px-4">
                  <div className="flex flex-wrap justify-center gap-10">
                    {coordinators.map((coordinator, i) => (
                      <div
                        key={i}
                        className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[18%]"
                      >
                        <Coordinator {...coordinator} />
                      </div>
                    ))}
                  </div>
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
