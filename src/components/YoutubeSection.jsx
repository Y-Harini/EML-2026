import YouTubeIcon from "../../public/YoutubeSvg";
function YoutubeSection() {
  return (
    <div className="w-full flex flex-col items-center ">
        <div className="mt-[80px] md:mt-5 text-center">
            <h1 className="text-lg md:text-3xl md:bg-white inline px-4 md:px-8 py-6 md:border md:rounded-full font-bold font-[merriweather] md:shadow-lg">
                Explore Us on{" "}
                <YouTubeIcon className="inline w-8 md:w-10 h-12 text-red-600 mx-2" />
                <span className="text-red-600">YouTube</span>
            </h1>
            <p className="md:mt-5 text-xs md:text-lg font-[cursive] italic font-semibold">
                ...Where Our Ideas Come Onto The Stage <span className="md:text-2xl">🌟</span>
            </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 md:px-10 mt-10">
            <iframe
                className="md:w-[75%] md:min-h-[300px] h-[250px] rounded-xl mx-auto"
                src="https://www.youtube.com/embed/MHAtQIVv4ps?si=FQjhbkNNuvvxMhnS"
                title="YouTube video player"    
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <iframe
                className="hidden md:block md:w-[75%] md:min-h-[300px] h-auto rounded-xl mx-auto"
                src="https://www.youtube.com/embed/0P2BzfzMn1o?si=_FytuXxO_u56EPC4"
                title="YouTube video player"    
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>

        <div className="text-center mt-10 px-2 md:px-0">
            <h2 className="md:text-lg font-semibold text-gray-600 font-playfair">
                Follow us on{" "}
                <a
                    href="https://www.youtube.com/@EMLIITHyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 underline hover:text-red-700 transition duration-200"
                >
                    YouTube
                </a>{" "}
                    to get more updates and beautiful moments from EML..!!
            </h2>
      </div>
    </div>
  );
}

export default YoutubeSection;
