import InstaLogo from "../../public/InstaLogo";

function InstagramSection() {      

    const posts = [
        "https://www.instagram.com/p/DGk2cG6TzUs/embed",
        "https://www.instagram.com/p/C_nte5AIXVk/embed",
        "https://www.instagram.com/reel/DK65ym_op9Z/embed",
    ];

  return (
        <div>
            <div className="text-center mb-10 mt-[80px] md:mt-0 ">
                <h1 className="text-md font-bold font-[merriweather] md:text-3xl inline-block px-4 md:px-8 py-4 md:bg-white md:border md:rounded-full md:shadow-lg">
                    Inspiring Moments on our{" "}
                    <InstaLogo className="inline-block w-7 h-7" />
                    <span className="text-pink-600"> Instagram</span>
                </h1>
                <p className="text-sm md:text-lg md:mt-4 text-lg italic text-gray-600 font-semibold">
                    ...Where Every Frame Tells a Story 🎉
                </p>
            </div>

            {/* Grid for medium+ screens */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:px-10">
                {posts.map((src, idx) => (
                    <iframe
                        key={idx}
                        src={src}
                        className="w-[80%] aspect-[3/5] rounded-md border border-gray-300 mx-auto"
                        allowTransparency={true}
                        style={{ objectFit: "cover" }}
                    ></iframe>
                ))}
            </div>

            {/* Carousel for small screens */}
            <div className="md:hidden w-[90%] mx-auto">
                <div  className={`aspect-[3/5] }`}>
                    <iframe
                        src={"https://www.instagram.com/p/DGk2cG6TzUs/embed"}
                        className="w-[95%] h-full mx-auto rounded-md border border-gray-300"
                        style={{ objectFit: "cover" }}
                    ></iframe>
                </div>
            </div>

            <div className="text-center mt-5 md:mt-10">
                <a
                    href="https://www.instagram.com/eml_iith/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 md:text-lg underline hover:text-pink-700 transition"
                >
                    Explore More on Instagram →
                </a>
            </div>
        </div>
  );
}

export default InstagramSection;
