"use client"; // Needed for client-side rendering

import { useState, useEffect } from "react";
import Animation from "../../../components/animation";
import Menu from "../../../components/menu25-26";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";
import Navbar from "../../../components/Navbar";
import Ss from "../ss/page"; // Importing the small-screen version

const coordinators = [
  { imageSrc: "/images/Aryan Dake.webp", title: "Coordinator", name: "Aryan Dake"},
  { imageSrc: "/images/Kripalu Vipul Sonar.webp",title: "Coordinator", name: "Kripalu Vipul Sonar" },
  { imageSrc: "/images/Shresth Kumar.webp",title: "Coordinator", name: "Shresth Kumar" },
  { imageSrc: "/images/Aila Vaishnavi.jpg",title: "Coordinator", name: "Aila Vaishnavi" },
  { imageSrc: "/images/Krish.webp", title: "Coordinator",name: "Krish" },
  { imageSrc: "/images/Akshat Semwal.webp",title: "Coordinator", name: "Akshat Semwal" },
  { imageSrc: "/images/Shan Meshram.webp", title: "Coordinator",name: "Shan Meshram " }
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

              <div className="flex flex-col justify-start items-center w-full gap-10 mt-[70px] ml-[350px]">
                {/* Head Section */}
                <Head
                  imageSrc="/images/Aashi Ranjan.webp"
                  title="Collaboration and PR Head"
                  name="Aashi Ranjan"
                  bgColor="bg-[#1D4F7C]"
                />

                {/* Coordinators Section */}
<div className="w-full px-4">
  <div className="flex flex-wrap justify-center gap-10">
    {coordinators.map((coordinator, i) => (
      <div key={i} className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:w-[18%]">
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
