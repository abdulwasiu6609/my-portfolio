"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const navItems = [
    {
      id: "about",
      label: "about",
      href: "/about",
    },
    {
      id: "projects",
      label: "projects",
      href: "/projects",
    },
    {
      id: "blogs",
      label: "blogs",
      href: "/blogs",
    },
    {
      id: "resume",
      label: "resume",
      href: "/resume",
    },
    {
      id: "contact",
      label: "contact",
      href: "/contact",
    },
  ];

  const [showMenu, setShowMenu] = useState(true);
  //   const pathname = usePathname();
  const [isActive, setIsActive] = useState("about");

  // Check screen size on href mount
  useEffect(() => {
    const checkScreenSize = () => {
      setShowMenu(window.innerWidth >= 768); // Adjust the breakpoint as needed
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <nav className="flex flex-col md:flex-row  gap-y-10 justify-between p-6 text-white bg-blue-dark w-full relative">
      <SocialIcons />

      <div
        className={`flex flex-col md:flex-row md:items-center md:justify-center gap-5 items-start justify-start ${showMenu ? "block" : "hidden"}`}
      >
        {navItems.map((item) => (
          <button
            onClick={() => setIsActive(item.label)}
            key={item.id}
            className={`${isActive === item.label ? "opacity-100 font-semibold" : ""} opacity-70 hover:opacity-100 hover:font-semibold`}
          >
            <span
              className={` ${isActive === item.label ? "border-white border-b-4" : "border-transparent"}  hover:border-b-4 border-white md:pb-[29px] w-full`}
            >
              <Link href={item.href}>{item.label.toUpperCase()}</Link>
            </span>
          </button>
        ))}
      </div>

      <button
        className="absolute top-0 right-0 p-6 md:hidden cursor-pointer "
        onClick={() => setShowMenu(!showMenu)}
      >
        <AiOutlineMenu size={40} />
      </button>
    </nav>
  );
}
