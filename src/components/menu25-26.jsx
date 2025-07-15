"use client";

import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { name: "Faculty", path: "/team25-26/faculty" },
  { name: "Overall Head", path: "/team25-26" },
  { name: "Design", path: "/team25-26/design" },
  { name: "Content and Speaker Curator", path: "/team25-26/speaker-curator" },
  { name: "Logistics and Hospitality", path: "/team25-26/logistics-hospitality" },
  { name: "Web Development", path: "/team25-26/web-development" },
  { name: "Multimedia", path: "/team25-26/multimedia" },
  {name: "Collaboration and PR", path: "/team25-26/collaboration-pr" },
];

const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
<div
  className="hidden md:flex flex-col items-center absolute top-[140px] left-[60px] 
  w-[280px] min-h-[480px] bg-[#AB1D1E] rounded-[40px] py-6 px-4 space-y-4"
>

      {menuItems.map(({ name, path }, index) => {
        const isActive = pathname === path;

        return (
          <button
            key={index}
            onClick={() => router.push(path)}
            className={`w-[220px] py-2.5 text-lg font-semibold rounded-full transition-all duration-300 
              ${
                isActive
                  ? "bg-[#E63946] text-white"
                  : "bg-gray-300 text-red-700 hover:bg-gray-400"
              }
            `}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Menu;
