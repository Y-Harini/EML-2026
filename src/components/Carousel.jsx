"use client";
import React, { useRef, useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/images/home/carousel/img1.JPG",
  "/images/home/carousel/img2.png",
  "/images/home/carousel/img3.JPG",
  "/images/home/carousel/img4.jpg",
  "/images/home/carousel/img5.png",
  "/images/home/carousel/img6.jpg",
  "/images/home/carousel/img7.jpg",
  "/images/home/carousel/img8.jpg",
];

const AUTOPLAY_INTERVAL = 3000;

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayRef = useRef(null);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (isPlaying && emblaApi) {
      autoplayRef.current = setInterval(() => {
        emblaApi.scrollNext();
      }, AUTOPLAY_INTERVAL);
    }
  }, [emblaApi, isPlaying]);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const nextSlide = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const prevSlide = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      startAutoplay();

      emblaApi.on("select", () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });

      emblaApi.on("pointerDown", stopAutoplay);
      emblaApi.on("pointerUp", startAutoplay);
    }

    return () => stopAutoplay();
  }, [emblaApi, startAutoplay]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [isPlaying, startAutoplay]);

  return (
    <div className="relative w-screen md:w-[90vw] lg:w-[80vw] mx-auto h-[50vh] md:h-[70vh] lg:h-[80vh]">
      {/* Embla Carousel */}
      <div
        className="overflow-hidden w-screen md:w-[90vw] lg:w-[80vw] mx-auto h-[50vh] md:h-[70vh] lg:h-[80vh]"
        ref={emblaRef}
      >
        <div className="flex relative">
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-none w-screen md:w-[90vw] lg:w-[80vw] mx-auto h-[50vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${img})` }}
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
            >
              <div className="absolute inset-0 bg-[#FFFFFF] opacity-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition duration-300 ${
              activeIndex === index
                ? "bg-black scale-125"
                : "bg-gray-400"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
