import InstaLogo from "../../public/InstaLogo";
function InstagramSection() {
  return (
        <div>
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold font-playfair inline-block px-8 py-4 bg-white border rounded-full shadow-lg">
                    Inspiring Moments on our{" "}
                    <InstaLogo className="inline-block w-7 h-7" />
                    <span className="text-pink-600"> Instagram</span>
                </h1>
                <p className="mt-4 text-lg italic text-gray-600 font-semibold">
                    ...Where Every Frame Tells a Story 🎉
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10 ">
                <iframe
                    src="https://www.instagram.com/p/DGk2cG6TzUs/embed"
                    className="w-[85%] h-[650px] p-5 rounded-md border border-gray-300 mx-auto"
                    allowTransparency={true}
                ></iframe>
                <iframe
                    src="https://www.instagram.com/p/C_nte5AIXVk/embed"
                    className="w-[85%] h-[650px] p-5 rounded-md border border-gray-300 mx-auto"
                    allowTransparency={true}
                ></iframe>
                <iframe
                    src="https://www.instagram.com/reel/DK65ym_op9Z/embed"
                    className="w-[85%] h-[650px] p-5 rounded-md border border-gray-300 mx-auto"
                    allowTransparency={true}
                ></iframe>
            </div>

            <div className="text-center mt-10">
                <a
                    href="https://www.instagram.com/eml_iith/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 text-lg underline hover:text-pink-700 transition"
                >
                    Explore More on Instagram →
                </a>
            </div>
        </div>
  );
}

export default InstagramSection;
