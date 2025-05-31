"use client";

import { useState, useEffect } from 'react';
import Animation from "../../../components/animation";
import Menu from "../../../components/menu25-26";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";
import Navbar from "../../../components/Navbar";
import Ss from "../ss/page"

const coordinators = [
  { imageSrc: "/images/Karanam Sushan.webp", name: "Karanam Sushan"},
  { imageSrc: "/images/Merwyn Kumar.webp", name: "Merwyn Kumar" },
  { imageSrc: "/images/Prabhat Anand.webp", name: "Prabhat Anand"},
  { imageSrc: "/images/Sheshadri Rathan.webp", name: "Sheshadri Rathan" },
  { imageSrc: "/images/Yash Mohan.webp", name: "Yash Mohan" },
  { imageSrc: "/images/Nandini Agrawal.webp", name: "Nandini Agrawal" },
  { imageSrc: "/images/Sandip Subhrajit.webp", name: "Sandip Subhrajit" },
  { imageSrc: "/images/Rahul purika.webp", name: "Rahul Purika" }
];

export default function SpeakerCurator() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
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

              <div className="flex flex-col justify-start items-start w-full max-w-5xl gap-10 mt-[70px] ml-[350px]">
                <Head 
                  imageSrc="/images/Kaivalya Mase.webp" 
                  title="Speaker Curator Head" 
                  name="Kaivalya Mase" 
                  rollNo="ME23BTECH11036" 
                  bgColor="bg-[#1D4F7C]"
                />

                <div className="flex flex-col mt-[-2px]">
                  <div className="grid grid-cols-4 gap-4">
                    {coordinators.slice(0, 4).map((coordinator, i) => (
                      <Coordinator key={i} {...coordinator} />
                    ))}
                  </div>

                  <div className="grid grid-cols-4 gap-4 mt-5">
                    {coordinators.slice(4).map((coordinator, i) => (
                      <Coordinator key={i + 4} {...coordinator} />
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
