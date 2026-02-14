import { useEffect, useState } from "react";
import { FaHouse, FaHeart, FaCalendarDays, FaComment  } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const menu = [
    { id: "sampul", label: "Sampul", icon: <FaHouse size={20}/>  },
    { id: "mempelai", label: "Mempelai", icon: <FaHeart size={20}/> },
    { id: "acara", label: "Acara", icon: <FaCalendarDays size={20}/> },
    { id: "ucapan", label: "Ucapan", icon: <FaComment size={20}/> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50">
      <div className="flex justify-around py-3 text-sm font-medium">
        {menu.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex flex-col items-center transition-all duration-300 ${
              active === item.id
                ? "text-amber-500 scale-110"
                : "text-gray-600 hover:text-amber-400 hover:scale-105"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
