"use client";

import { useState, useEffect } from "react";
import Animation from "../../../components/animation"; //done
import Menu from "../../../components/menu25-26";
import Head from "../../../components/head"; //done
import Navbar from "../../../components/Navbar"; //done
import Ss from "../ss/page"; // Small screen version
import Coordinator from "../../../components/coordinator";

const coordinators = [
  {
    imageSrc: "/images/Rishitha.webp",
    title: "Coordinator",
    name: "Rishitha Rajapu",
  },
  {
    imageSrc: "/images/Harini.webp",
    title: "Coordinator",
    name: "Harini Yoligi",
  },
  {
    imageSrc: "/images/Dinesh.webp",
    title: "Coordinator",
    name: "Dinesh Reddy",
  },
  {
    imageSrc: "/images/Abhinav.webp",
    title: "Coordinator",
    name: "Abhinav Reddy",
  },
  {
    imageSrc: "/images/Dhanaji.webp",
    title: "Coordinator",
    name: "Om Dhanaji Khot",
  },
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

              <div className="flex flex-col justify-start items-center w-full gap-10 mt-[70px] ml-[350px]">
                {/* Head Section */}
                <Head
                  imageSrc="/images/Manas - Vasana Manas.webp"
                  title="Web development Head"
                  name="Vasana Manas"
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
