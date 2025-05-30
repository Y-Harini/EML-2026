import Animation from "../../../components/animation";
import Menu from "../../../components/menu24-25";
import Overall from "../../../components/Overall24-25";
import Teambutton from "../../../components/team-button";
import Navbar from "../../../components/Navbar";
import Head from "../../../components/head";
import Coordinator from "../../../components/coordinator";

const coordinators = [
  {
    imageSrc: "/images/Parthib Ghosh.webp",
    title: "Coordinator",
    name: "Parthib Ghosh",
    rollNo: "co22btech11007",
  },
  {
    imageSrc: "/images/Sachin Dev.webp",
    title: "Coordinator",
    name: "Sachin Dev",
    rollNo: "bt23mtech11007",
  },
  {
    imageSrc: "/images/Kankariya Aditya.webp",
    title: "Coordinator",
    name: "Kankariya Aditya",
    rollNo: "bt23btech11011",
  },
  {
    imageSrc: "/images/Ashutosh Shivaraj.webp",
    title: "Coordinator",
    name: "Ashuthosh Shivaraj",
    rollNo: "me23btech11011",
  },
  {
    imageSrc: "/images/Harshita Bansal.webp",
    title: "Coordinator",
    name: "Harshita Bansal",
    rollNo: "bt24mtech11015",
  },
  {
    imageSrc: "/images/Aastha.webp",
    title: "Coordinator",
    name: "Aastha",
    rollNo: "co23btech11001",
  },
  {
    imageSrc: "/images/Somani Ankita.webp",
    title: "Coordinator",
    name: "Ankita Somani",
    rollNo: "bm23btech11022",
  },
  {
    imageSrc: "/images/Aryan Raj.webp",
    title: "Coordinator",
    name: "Aryan Raj",
    rollNo: "bt23btech11004",
  },
  {
    imageSrc: "/images/Renuka Sonawane.webp",
    title: "Coordinator",
    name: "Renuka Sonawane",
    rollNo: "mp24mscst14006",
  },
  {
    imageSrc: "/images/Shreya Sridhar.webp",
    title: "Coordinator",
    name: "Shreya Sridhar",
    rollNo: "ic22btech11015",
  },
  {
    imageSrc: "/images/Om Ajay Godse.webp",
    title: "Coordinator",
    name: "Om Godse",
    rollNo: "me23btech11045",
  },
  {
    imageSrc: "/images/Sanjay M.webp",
    title: "Coordinator",
    name: "Sanjay M",
    rollNo: "ic23btech11018",
  },
  {
    imageSrc: "/images/Kodadala Jagadeesh.webp",
    title: "Coordinator",
    name: "K Jagadeesh",
    rollNo: "ai23btech11012",
  },
  {
    imageSrc: "/images/Nikita Tuwani.webp",
    title: "Coordinator",
    name: "Nikita Tuwani",
    rollNo: "cy24mscst11016",
  },
  {
    imageSrc: "/images/Akkala Sai Nihal.webp",
    title: "Coordinator",
    name: "Akkala Sai Nihal",
    rollNo: "bm24btech11003",
  },
  {
    imageSrc: "/images/Kotala Manisha.webp",
    title: "Coordinator",
    name: "Kotala Manisha",
    rollNo: "ms23btech11013",
  },
  {
    imageSrc: "/images/Sujan Rada.webp",
    title: "Coordinator",
    name: "Sujan Rada",
    rollNo: "ee23btech11219",
  },
  {
    imageSrc: "/images/Poludasu Srivastav.webp",
    title: "Coordinator",
    name: "Poludasu Srivastav",
    rollNo: "bt23btech11019",
  },
  {
    imageSrc: "/images/Kharatmol Harshitha.webp",
    title: "Coordinator",
    name: "K Harshitha",
    rollNo: "bm23btech11011",
  },
  {
    imageSrc: "/images/Krishna Kumar.webp",
    title: "Coordinator",
    name: "Krishna Kumar",
    rollNo: "em23mtech11006",
  },
  {
    imageSrc: "/images/Namagiri Tejasri.webp",
    title: "Coordinator",
    name: "Namagiri Tejasri",
    rollNo: "ep23btech11018",
  },
  {
    imageSrc: "/images/Bhavitha.webp",
    title: "Coordinator",
    name: "Kakkirala Bhavitha",
    rollNo: "co22btech11005",
  },
  {
    imageSrc: "/images/Vasana Manas.webp",
    title: "Coordinator",
    name: "Vasana Manas",
    rollNo: "ee23btech11062",
  },
];

const TeamPage = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <Navbar />
      <Teambutton text="Team 2024-2025" backgroundColor="bg-[#0c223f]" />
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

      <Teambutton text="Design and PR" backgroundColor="bg-[#0c223f]" />
      <div className="flex flex-col mt-4 items-center">
        <Head
          imageSrc="/images/Aditya.webp"
          title="Design and PR Head"
          name="Aditya Barwaye"
          rollNo="co22btech11002"
          bgColor="bg-[#1D4F7C]"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-7 sm:grid-cols-3 mt-7">
          {coordinators.slice(0, 4).map((coordinator, i) => (
            <Coordinator key={i} {...coordinator} />
          ))}
        </div>
      </div>

      <Teambutton text="Speaker Curator" backgroundColor="bg-[#0c223f]" />
      <div className="flex flex-col mt-4 items-center">
        <Head
          imageSrc="/images/Soumik Roy.webp"
          title="Speaker Curator Head"
          name="Soumik Roy"
          rollNo="bt23mtech11010"
          bgColor="bg-[#1D4F7C]"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-7 sm:grid-cols-3 mt-7">
          {coordinators.slice(4, 11).map((coordinator, i) => (
            <Coordinator key={i} {...coordinator} />
          ))}
        </div>
      </div>

      <Teambutton text="Logistics & Hospi" backgroundColor="bg-[#0c223f]" />
      <div className="flex flex-col mt-4 items-center">
        <Head
          imageSrc="/images/Jilhewar Nahoosh Manoj.webp"
          title="Logistics and Hospitality Head"
          name="Jilhewar Nahoosh Manoj"
          rollNo="ce22btech11025"
          bgColor="bg-[#1D4F7C]"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-7 sm:grid-cols-3 mt-7">
          {coordinators.slice(11, 19).map((coordinator, i) => (
            <Coordinator key={i} {...coordinator} />
          ))}
        </div>
      </div>

      <Teambutton text="Web-Development" backgroundColor="bg-[#0c223f]" />
      <div className="flex flex-col mt-4 items-center">
        <Head
          imageSrc="/images/Beaula Mahima V.webp"
          title="Web Development Head"
          name="Beaula Mahima V"
          rollNo="ma21btech11002"
          bgColor="bg-[#1D4F7C]"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-7 sm:grid-cols-3 mt-7">
          {coordinators.slice(19, 23).map((coordinator, i) => (
            <Coordinator key={i} {...coordinator} />
          ))}
        </div>
      </div>

      <Teambutton text="Multimedia" backgroundColor="bg-[#0c223f]" />
      <div className="md:w-2/3 flex justify-center items-start mb-5 mt-3">
        <Head
          imageSrc="/images/Rajnil Malviya.webp"
          title="Multimedia Coordinator"
          name="Rajnil Malviya"
          rollNo="ee23btech11051"
          bgColor="bg-[#B0C4DE]"
          textColor="text-[#1E456E]"
        />
      </div>
    </div>
  );
};

export default TeamPage;
