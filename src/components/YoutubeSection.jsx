import YouTubeIcon from "../../public/YoutubeSvg";
function YoutubeSection() {
  return (
    <div className="w-full flex flex-col items-center ">
        <div className="col-span-2 mt-5 ">
            <h1 className="text-3xl bg-white inline px-8 py-6 border rounded-full font-bold font-[playfair] shadow-lg">
                Explore Us on{" "}
                <YouTubeIcon className="inline w-10 h-12 text-red-600 mx-2" />
                <span className="text-red-600">YouTube</span>
            </h1>
            <p className="mt-5 text-lg font-[cursive] italic font-semibold">
                ...Where Our Ideas Come Onto The Stage <span className="text-2xl">🌟</span>
            </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-10 mt-10">
            <iframe
                className="w-[75%] min-h-[300px] h-auto rounded-xl mx-auto"
                src="https://www.youtube.com/embed/MHAtQIVv4ps?si=FQjhbkNNuvvxMhnS"
                title="YouTube video player"    
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <iframe
                className="w-[75%] min-h-[300px] h-auto rounded-xl mx-auto"
                src="https://www.youtube.com/embed/0P2BzfzMn1o?si=_FytuXxO_u56EPC4"
                title="YouTube video player"    
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>

        <div className="text-center mt-10">
            <h2 className="text-lg font-semibold text-gray-600 font-playfair">
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
