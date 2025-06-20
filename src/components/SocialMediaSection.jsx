// SocialMediaSection.jsx
import React, { useState, useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import InstagramSection from "./InstagramSection";
import YoutubeSection from "./YoutubeSection";

function SocialMediaSection() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderInstanceRef, slider] = useKeenSlider({
        initial: 0,
        loop: false,
        drag: true,
        renderMode: "performance",
        defaultAnimation: {
            duration: 1000,
            easing: (t) => t, 
        },
        slides: {
            origin: "center",
            perView: 1,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

  
    const goToSlide = (index) => {
        if (slider) {
            slider.current?.moveToIdx(index);
        }
    };

  return (
    <div className="w-full mt-[150px] py-10 bg-gray-50">


        <div ref={sliderInstanceRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <InstagramSection />
            </div>
            <div className="keen-slider__slide number-slide2">
                <YoutubeSection />
            </div>
        </div>

        <div className="flex justify-center mt-6 gap-6 md:text-2xl">
            <button
                onClick={() => goToSlide(0)}
                className={`${currentSlide === 0 ? "text-pink-500 p-2 border-pink-500 border-2 rounded-full" : "text-gray-400"}`}
            >
                <FaInstagram className="w-6 h-6 md:w-10 md:h-10" />
            </button>
            <button
                onClick={() => goToSlide(1)}
                className={`${currentSlide === 1 ? "text-red-600 p-2 border-pink-500 border-2 rounded-full" : "text-gray-400"}`}
            >
                <FaYoutube className="w-6 h-6 md:w-10 md:h-10" />
            </button>
        </div>
    </div>
  );
}

export default SocialMediaSection;
