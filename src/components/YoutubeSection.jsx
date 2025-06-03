import AnimatedWave from "./WaveAnimation"; 
import YouTubeIcon from '../../public/YoutubeSvg'

function YoutubeSection(){
    return(
        <>
            <div className="w-full mt-[150px] grid grid-cols-1 md:grid-cols-2 auto-rows-min gap-10 p-4">                 

                <div className="col-span-1 md:col-span-2 text-center">
                    <h1 className="text-3xl font-bold font-playfair">
                        Explore Us on 
                        <YouTubeIcon className="inline w-10 h-12 text-red-600 mx-2"/>
                        Youtube
                    </h1>
                    <p className="mt-2 text-lg font-[cursive] italic font-semibold un">
                        ...Where Our Ideas Come Onto The Stage <span className="text-2xl">🌟</span>
                    </p>
                </div>

                <div className="w-[80%] mx-auto">                
                    <iframe 
                        src="https://www.youtube.com/embed/ToWwRrv5W94?si=Pj8ojZV0uobT7_hv"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="EML Club YouTube Video"
                        className="w-full aspect-video rounded-2xl"
                    />
                </div>

                <div className="w-[80%] mx-auto">
                    <iframe 
                        src="https://www.youtube.com/embed/ToWwRrv5W94?si=Pj8ojZV0uobT7_hv"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="EML Club YouTube Video"
                        className="w-full aspect-video rounded-2xl"
                    />
                </div>

                <div className="col-span-1 md:col-span-2 text-center">
                    <h1 className="text-lg font-semibold text-gray-600 font-playfair">
                        Follow Us On{' '}
                        <a
                            href="https://www.youtube.com/@EMLIITHyderabad" // replace with your actual channel URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 underline hover:text-red-700 transition duration-200"
                        >
                            Youtube
                        </a>{' '}
                        to Get More Updates and Beautiful Moments from EML..!!
                    </h1>
                </div>
            </div>
        </>
    )
}

export default YoutubeSection;
