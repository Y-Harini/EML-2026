"use client"; // Needed for client-side rendering

import { useState, useEffect } from "react";
import Menu from "../../../components/menu25-26";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";
import Animation from "../../../components/animation";
import Navbar from "../../../components/Navbar";
import Ss from "../ss/page";

const coordinators = [
  {
    imageSrc: "/images/Thumma Tejaswi.webp",
    title: "Coordinator",
    name: "Thumma Tejaswi",
  },
  {
    imageSrc: "/images/Devarakonda Guna Vaishnavi.webp",
    title: "Coordinator",
    name: "Guna Vaishnavi",
  },
  {
    imageSrc: "/images/Sai Kiran.webp",
    title: "Coordinator",
    name: "Sai Kiran",
  },
  {
    imageSrc: "/images/Akshay Kadam.webp",
    title: "Coordinator",
    name: "Akshay Kadam",
  },
  {
    imageSrc: "/images/Md Sameer.webp",
    title: "Coordinator",
    name: "Md Sameer",
  },
  {
    imageSrc: "/images/Geedi Harsha Vardhan.webp",
    title: "Coordinator",
    name: "Geedi Harsha Vardhan",
  },
  {
    imageSrc: "/images/Ambati Siva Gouri Saranya.webp",
    title: "Coordinator",
    name: "Gouri Saranya",
  },
  {
    imageSrc: "/images/Mokshith Kumar Reddy.webp",
    title: "Coordinator",
    name: "Mokshith Kumar Reddy",
  },
  {
    imageSrc: "/images/Shinde Harsh Vijay.jpg",
    title: "Coordinator",
    name: "Shinde Harsh Vijay",
  },
];

export default function LogisticsAndHospitality() {
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
          {/* Animation*/}
          <div className="hidden md:block w-full">
            <Animation />
          </div>

          <div className="flex flex-col relative z-10 w-full">
            <Navbar />
            <div className="flex flex-row w-full">
              <Menu />

              {/* Head + Coordinators Section */}
              <div className="flex flex-col justify-start items-center w-full gap-12 mt-[70px] ml-[350px]">
                {/* Head Section */}
                <div className="flex flex-row gap-6 items-center justify-center flex-wrap">
                  <Head
                    imageSrc="/images/Akkala Sai Nihal.webp"
                    title="Logistics &Hospi Head"
                    name="Akkala Sai Nihal"
                    bgColor="bg-[#1D4F7C]"
                  />

                  <Head
                    imageSrc="/images/Kodadala Jagadeesh.webp"
                    title="Logistics &Hospi Head"
                    name="Kodadala Jagadeesh"
                    bgColor="bg-[#1D4F7C]"
                  />
                </div>

                {/* Coordinators Section */}
                <div className="w-full px-4">
                  <div className="flex flex-wrap justify-center gap-6">
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
