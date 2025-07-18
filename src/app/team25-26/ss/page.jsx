import Animation from "../../../components/animation";
import Menu from "../../../components/menu25-26";
import Overall from "../../../components/Overall25-26";
import Teambutton from "../../../components/team-button";
import Navbar from "../../../components/Navbar";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";

const coordinators = [
  {
    imageSrc: "/images/Mikkili Joseph Daniel.webp",
    title: "Coordinator",
    name: "Mikkili Joseph Daniel",
  },
  {
    imageSrc: "/images/Chinthapally Purna Nanda Reddy.webp",
    title: "Coordinator",
    name: "Purna Nanda Reddy",
  },
  {
    imageSrc: "/images/Raunak.webp",
    title: "Coordinator",
    name: "Raunak Vernekar",
  },
  {
    imageSrc: "/images/Divyaanjali.webp",
    title: "Coordinator",
    name: "Divyaanjali",
  },
  {
    imageSrc: "/images/Srijan Sharma.webp",
    title: "Coordinator",
    name: "Srijan Sharma",
  },
  {
    imageSrc: "/images/Karanam Sushan.webp",
    title: "Coordinator",
    name: "Karanam Sushan",
  },
  {
    imageSrc: "/images/Merwyn Kumar.webp",
    title: "Coordinator",
    name: "Merwyn Kumar",
  },
  {
    imageSrc: "/images/Prabhat Anand.jpg",
    title: "Coordinator",
    name: "Prabhat Anand",
  },
  {
    imageSrc: "/images/Sheshadri Rathan.webp",
    title: "Coordinator",
    name: "Sheshadri Rathan",
  },
  {
    imageSrc: "/images/Yash Mohan.webp",
    title: "Coordinator",
    name: "Yash Mohan",
  },
  {
    imageSrc: "/images/Nandini Agrawal.webp",
    title: "Coordinator",
    name: "Nandini Agrawal",
  },
  {
    imageSrc: "/images/Sandip Subhrajit.webp",
    title: "Coordinator",
    name: "Sandip Subhrajit",
  },
  {
    imageSrc: "/images/Rahul Porika.jpg",
    title: "Coordinator",
    name: "Rahul porika",
  },
  {
    imageSrc: "/images/Thumma Tejaswi.webp",
    title: "Coordinator",
    name: "Thumma Tejaswi",
  },
  {
    imageSrc: "/images/Devarakonda Guna Vaishnavi.webp",
    title: "Coordinator",
    name: "Guna Vaishnavi",
  },
  {
    imageSrc: "/images/Sai Kiran.webp",
    title: "Coordinator",
    name: "Sai Kiran",
  },
  {
    imageSrc: "/images/Akshay Kadam.webp",
    title: "Coordinator",
    name: "Akshay Kadam",
  },
  {
    imageSrc: "/images/Md Sameer.webp",
    title: "Coordinator",
    name: "Md Sameer",
  },
  {
    imageSrc: "/images/Geedi Harsha Vardhan.webp",
    title: "Coordinator",
    name: "Geedi Harsha Vardhan",
  },
  {
    imageSrc: "/images/Ambati Siva Gouri Saranya.webp",
    title: "Coordinator",
    name: "Siva Gouri Saranya",
  },
  {
    imageSrc: "/images/Mokshith Kumar Reddy.webp",
    title: "Coordinator",
    name: "Mokshith Kumar Reddy",
  },
  {
    imageSrc: "/images/Shinde Harsh Vijay.jpg",
    title: "Coordinator",
    name: "Shinde Harsh Vijay",
  },
  {
    imageSrc: "/images/Rishitha.webp",
    title: "Coordinator",
    name: "Rishitha Rajapu",
  },
  {
    imageSrc: "/images/Yoligi Harini.webp",
    title: "Coordinator",
    name: "Harini Yoligi",
  },
  {
    imageSrc: "/images/Dinesh.webp",
    title: "Coordinator",
    name: "Tavva Dinesh Reddy",
  },
  {
    imageSrc: "/images/Abhinav.webp",
    title: "Coordinator",
    name: "Abhinav Reddy",
  },
  {
    imageSrc: "/images/Dhanaji.webp",
    title: "Coordinator",
    name: "Om Dhanaji Khot",
  },
  {
    imageSrc: "/images/Anveshchandra Bavikadi.webp",
    title: "Coordinator",
    name: "Anveshchandra",
  },
  {
    imageSrc: "/images/Araveeti Sai Tejeswar Reddy(1).jpg",
    title: "Coordinator",
    name: "Sai Tejeswar Reddy",
  },
  {
    imageSrc: "/images/Charugundla Anju Bhargavi.webp",
    title: "Coordinator",
    name: "Anju Bhargavi",
  },
  {
    imageSrc: "/images/Gajjarapu Satyanarayana.webp",
    title: "Coordinator",
    name: "Satyanarayana",
  },
  // {
  //   imageSrc: "/images/no_image.webp",
  //   title: "Coordinator",
  //   name: "Darshan",
  // },
  {
    imageSrc: "/images/pranathi.webp",
    title: "Coordinator",
    name: "Pranathi",
  },
  {
    imageSrc: "/images/Aryan Dake.webp",
    title: "Coordinator",
    name: "Aryan Dake",
  },
  {
    imageSrc: "/images/Kripalu Vipul Sonar.webp",
    title: "Coordinator",
    name: "Kripalu Vipul Sonar",
  },
  {
    imageSrc: "/images/Shresth Kumar.webp",
    title: "Coordinator",
    name: "Shresth Kumar",
  },
  {
    imageSrc: "/images/Aila Vaishnavi.jpg",
    title: "Coordinator",
    name: "Aila Vaishnavi",
  },
  {
    imageSrc: "/images/Krish.webp",
    title: "Coordinator",
    name: "Krish",
  },
  {
    imageSrc: "/images/Akshat Semwal.webp",
    title: "Coordinator",
    name: "Akshat Semwal",
  },
  {
    imageSrc: "/images/Shan Meshram.webp",
    title: "Coordinator",
    name: "Shan Meshram",
  },
  {
    imageSrc: "/images/Saipoorna.webp",
    title: "Coordinator",
    name: "Saipoorna",
  },
];

const TeamPage = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <Navbar />
      <Teambutton text="Team 2025-2026" backgroundColor="bg-[#0c223f]" />
      {/* <Teambutton text="Faculties" backgroundColor="bg-[#0c223f]" /> */}
      <div className="sm:w-1/4 md:w-2/3 flex flex-col justify-center items-center mb-5 mt-3 gap-10">
        <Head
          imageSrc="/images/Faculty_R Prasanth Kumar.webp"
          title="Dean Students"
          name="Prof. Prasanth Kumar R"
          rollNo="Professor"
          bgColor="bg-[#B0C4DE]"
          textColor="text-[#1E456E]"
        />
        <Head
          imageSrc="/images/Faculty_Prakhar Gupta.webp"
          title="FIC Student Activities"
          name="Prof. Prakhar Gupta"
          rollNo="Assistant Professor"
          bgColor="bg-[#B0C4DE]"
          textColor="text-[#1E456E]"
        />
      </div>

      <Teambutton text="Team Lead" backgroundColor="bg-[#0c223f]" />

      <Overall />

      <Teambutton text="Design" backgroundColor="bg-[#0c223f]" />
      <div className="flex flex-col mt-4 items-center">
        <Head
          imageSrc="/images/Ashwath.webp"
          title="Design Head"
          name="Ashwath"
          bgColor="bg-[#1D4F7C]"
        />
        <div className="w-full px-4 mt-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
            {coordinators.slice(0, 5).map((coordinator, i) => (
              <Coordinator key={i} {...coordinator} />
            ))}
          </div>
        </div>
      </div>

      <Teambutton text="Speaker Curator" backgroundColor="bg-[#0c223f]" />
      <div className="flex flex-col mt-4 items-center">
        <Head
          imageSrc="/images/Kaivalya.webp"
          title="Content and Speaker Curator Head"
          name="Kaivalya Mase"
          bgColor="bg-[#1D4F7C]"
        />
        <div className="w-full px-4 mt-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
            {coordinators.slice(5, 13).map((coordinator, i) => (
              <Coordinator key={i} {...coordinator} />
            ))}
          </div>
        </div>
      </div>

      <Teambutton text="Logistics & Hospi" backgroundColor="bg-[#0c223f]" />
      <div className="flex flex-col mt-4 items-center">
        <div className="space-y-12">
          <Head
            imageSrc="/images/Jagadeesh.webp"
            title="Logistics and Hospitality Head"
            name="Kodadala Jagadeesh"
            bgColor="bg-[#1D4F7C]"
          />
          <Head
            imageSrc="/images/Akkala Sai Nihal.webp"
            title="Logistics and Hospitality Head"
            name="Sai Nihal"
            bgColor="bg-[#1D4F7C]"
          />
        </div>
        <div className="w-full px-4 mt-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
            {coordinators.slice(13, 22).map((coordinator, i) => (
              <Coordinator key={i} {...coordinator} />
            ))}
          </div>
        </div>
      </div>

      <Teambutton text="Web Development" backgroundColor="bg-[#0c223f]" />
      <div className="flex flex-col mt-4 items-center">
        <Head
          imageSrc="/images/Manas - Vasana Manas.webp"
          title="Web Development Head"
          name="Manas"
          bgColor="bg-[#1D4F7C]"
        />
        <div className="w-full px-4 mt-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
            {coordinators.slice(22, 27).map((coordinator, i) => (
              <Coordinator key={i} {...coordinator} />
            ))}
          </div>
        </div>
      </div>

      <Teambutton text="Multimedia" backgroundColor="bg-[#0c223f]" />
      <div className="flex flex-col mt-4 items-center">
        <Head
          imageSrc="/images/Rajnil Malviya.webp"
          title="Multimedia Head"
          name="Rajnil Malviya"
          bgColor="bg-[#1D4F7C]"
        />
        <div className="w-full px-4 mt-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
            {coordinators.slice(27, 32).map((coordinator, i) => (
              <Coordinator key={i} {...coordinator} />
            ))}
          </div>
        </div>
      </div>

      <Teambutton text="Collabration and PR" backgroundColor="bg-[#0c223f]" />
      <div className="flex flex-col mt-4 items-center">
        <Head
          imageSrc="/images/Aashi Ranjan.jpg"
          title="Collabration and PR Head"
          name="Aashi Ranjan"
          bgColor="bg-[#1D4F7C]"
        />
        <div className="w-full px-4 mt-10">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
            {coordinators.slice(32, 40).map((coordinator, i) => (
              <Coordinator key={i} {...coordinator} />
            ))}
          </div>
        </div>
      </div>

      {/* Beautiful Team 2024-2025 Button */}
      <div className="mt-6 mb-8 flex justify-center w-full">
        <a
          href="/team24-25"
          className="relative inline-block px-8 py-4 font-semibold text-lg rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-cyan-400 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <span className="relative z-10">Team 2024-2025</span>
          <span className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-300 hover:opacity-10"></span>
        </a>
      </div>
    </div>
  );
};

export default TeamPage;
