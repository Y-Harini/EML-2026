"use client";

import { useState, useEffect } from "react";
import Animation from "../../../components/animation";
import Menu from "../../../components/menu25-26";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";
import Navbar from "../../../components/Navbar";
import Ss from "../ss/page";

const coordinators = [
  { imageSrc: "/images/Karanam Sushan.webp",title: "Coordinator",name: "Karanam Sushan" },
  { imageSrc: "/images/Merwyn Kumar.webp",title: "Coordinator",name: "Merwyn Kumar" },
  { imageSrc: "/images/Prabhat Anand.jpg",title: "Coordinator",name: "Prabhat Anand" },
  { imageSrc: "/images/Sheshadri Rathan.webp",title: "Coordinator",name: "Sheshadri Rathan" },
  { imageSrc: "/images/Yash Mohan.webp",title: "Coordinator",name: "Yash Mohan" },
  { imageSrc: "/images/Nandini Agrawal.webp",title: "Coordinator",name: "Nandini Agrawal" },
  { imageSrc: "/images/Sandip Subhrajit.webp",title: "Coordinator",name: "Sandip Subhrajit" },
  { imageSrc: "/images/Rahul Porika.jpg",title: "Coordinator",name: "Rahul Porika" },
];

export default function SpeakerCurator() {
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
          <div className="hidden md:block w-full">
            <Animation />
          </div>

          <div className="flex flex-col">
            <Navbar />
            <div className="flex flex-row">
              <Menu />

              <div className="flex flex-col justify-start items-center w-full gap-10 mt-[70px] ml-[350px]">
                <Head
                  imageSrc="/images/Kavailya.webp"
                  title="Speaker Curator Head"
                  name="Kaivalya Mase"
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
