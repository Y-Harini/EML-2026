"use client";

import React, { useState, useEffect } from "react";
import SpeakerCard from "../../components/SpeakerCard";
import MobileSpeakerList from "../../components/MobileSpeakerList";
import speakers from "../../../public/speakers.json";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion"; 
import "./Speakers.css";

const Speakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const heights = [
    "h-[100px]", "h-[80px]", "h-[60px]", "h-[90px]",
    "h-[70px]", "h-[80px]", "h-[60px]", "h-[90px]",
    "h-[60px]", "h-[80px]", "h-[60px]", "h-[70px]",
    "h-[100px]", "h-[60px]", "h-[90px]", "h-[70px]",
  ];
  const colors = [
    "bg-[#1D4F7C]", "bg-[#DBDCDE]", "bg-[#DF231D]", "bg-[#5373A6]",
    "bg-[#E1E5E8]", "bg-[#DF231D]", "bg-[#E1E5E8]", "bg-[#5373A6]",
    "bg-[#ACC8E2]", "bg-[#E1E5E8]", "bg-[#DF231D]", "bg-[#E1E5E8]",
    "bg-[#1D4F7C]", "bg-[#D9D9D9]", "bg-[#DF231D]", "bg-[#1D4F7C]",
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % speakers.length);
      setBgIndex((prevBgIndex) => (prevBgIndex + 1) % 6);
    }, 10000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleSpeakerClick = (index) => {
    setCurrentIndex(index);
    setBgIndex(index % 6);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white font-[lora]">
      <Navbar />

      {/* Background Waves */}
      <div className="hidden laptop:block">
        <div className="absolute left-0 top-[65px] flex">
          {[...Array(14)].map((_, i) => (
            <div
              key={`top-left-${i}`}
              className={`animate-wave-top ${heights[i]} ${colors[i]} w-[50px] rounded-b-[150px]`}
              style={{
                animationDelay: `${i * 0.2}s`,
                marginLeft: i === 0 ? "0" : "20px",
              }}
            />
          ))}
        </div>
        <div className="flex">
          {[...Array(14)].map((_, i) => (
            <div
              key={`bottom-right-${i}`}
              className={`absolute animate-wave-bottom bottom-0 right-0 ${heights[i]} ${colors[i]} w-[50px] rounded-t-[100px]`}
              style={{
                animationDelay: `${i * 0.2}s`,
                marginRight: i === 0 ? "0" : `${i * 70}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center my-[40px]">
        <div
          className="w-full flex flex-col items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <SpeakerCard speaker={speakers[currentIndex]} bgIndex={bgIndex} />
        </div>

        {/* Grid of Speakers */}
        <div className="w-full mt-10 px-5 laptop:px-20">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#0C223F]">All Speakers</h2>
          <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5 gap-6">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                className="group perspective"
                onClick={() => handleSpeakerClick(index)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative w-full h-[300px] transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                  
                  {/* Front Side */}
                  <div className={`absolute w-full h-full rounded-xl overflow-hidden shadow-md backface-hidden ${colors[index % colors.length]}`}>
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className="w-full h-[240px] object-cover rounded-t-xl"
                    />
                    <div className="p-2 text-center">
                      <span className="font-semibold text-sm text-[#0C223F]">{speaker.name}</span>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-md bg-white p-4 text-center transform rotate-y-180 backface-hidden overflow-y-auto">
                    <h3 className="font-bold text-[#0C223F] mb-2">{speaker.name}</h3>
                    <p className="text-sm text-gray-600">{speaker.description || "No description available."}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="laptop:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="fixed top-10 right-10 bg-[#0C223F] text-white p-2 rounded-full z-50 mt-10"
          >
            {isMobileMenuOpen ? "Close" : "Speakers Menu"}
          </button>
          <MobileSpeakerList
            speakers={speakers}
            currentIndex={currentIndex}
            setCurrentIndex={handleSpeakerClick}
            isOpen={isMobileMenuOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Speakers;