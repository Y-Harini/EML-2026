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
    imageSrc: "/images/Mikkili Joseph Daniel.webp",
    title: "Coordinator",
    name: "Joseph Daniel",
  },
  {
    imageSrc: "/images/Chinthapally Purna Nanda Reddy.webp",
    title: "Coordinator",
    name: "Purna Nanda Reddy",
  },
  {
    imageSrc: "/images/Raunak.webp",
    title: "Coordinator",
    name: "Raunak Vernekar",
  },
  {
    imageSrc: "/images/Divyaanjali.webp",
    title: "Coordinator",
    name: "Divyaanjali",
  },
  {
    imageSrc: "/images/Srijan Sharma.webp",
    title: "Coordinator",
    name: "Srijan Sharma",
  },
];

export default function Design() {
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
                  imageSrc="/images/Ashwath.webp"
                  title="Design Head"
                  name="Ashwath"
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
