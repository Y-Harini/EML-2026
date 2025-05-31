"use client"; // Needed for client-side rendering

import { useState, useEffect } from "react";
import Animation from "../../../components/animation";
import Menu from "../../../components/menu25-26";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";
import Navbar from "../../../components/Navbar";
import Ss from "../ss/page"; // Importing the small-screen version

const coordinators = [
  { imageSrc: "/images/Aryan Dake.webp", name: "Aryan Dake"},
  { imageSrc: "/images/Kripalu Vipul Sonar.webp", name: "Kripalu Vipul Sonar" },
  { imageSrc: "/images/Shresth Kumar.webp", name: "Shresth Kumar" },
  { imageSrc: "/images/Aila Vaishnavi.webp", name: "Aila Vaishnavi" },
  { imageSrc: "/images/Krish.webp", name: "Krish" },
  { imageSrc: "/images/Akshat Semwal.webp", name: "Akshat Semwal" }
  
];

export default function Collaborationpr() {
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

              <div className="flex flex-col justify-start items-center md:items-start w-full max-w-5xl gap-10 mt-[70px] md:ml-[350px] px-4">
                {/* Head Section */}
                <Head
                  imageSrc="/images/Aashi Ranjan.webp"
                  title="Collaboration and PR Head"
                  name="Aashi Ranjan"
                  rollNo="bt23btech11001"
                  bgColor="bg-[#1D4F7C]"
                />

                {/* Coordinators Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
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
