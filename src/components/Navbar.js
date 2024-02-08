import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import SocialIcons from "./SocialIcons";
import About from "@/app/About/page";
import Projects from "@/app/Projects/page";
import Blogs from "@/app/Blogs/page";
import Resume from "@/app/Resume/page";
import Contact from "@/app/Contact/page";

export default function Header() {
    const navItems = [
        {
            id: "about",
            label: "about",
            component: <About />,
        },
        {
            id: "projects",
            label: "projects",
            component: <Projects />,
        },
        {
            id: "blogs",
            label: "blogs",
            component: <Blogs />,
        },
        {
            id: "resume",
            label: "resume",
            component: <Resume />,
        },
        {
            id: "contact",
            label: "contact",
            component: <Contact />,
        },
    ];

    const [showMenu, setShowMenu] = useState(true);

    // Check screen size on component mount
    useEffect(() => {
        const checkScreenSize = () => {
            setShowMenu(window.innerWidth >= 768); // Adjust the breakpoint as needed
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <nav className="flex flex-col md:flex-row  gap-y-10 justify-between p-6 text-white bg-blue-dark w-full relative">
            <SocialIcons />

            <div className={`flex flex-col md:flex-row md:items-center md:justify-center gap-5 items-start justify-start ${showMenu ? 'block' : 'hidden'}`}>
                {navItems.map((item) => (
                    <button key={item.id} className="opacity-70 hover:opacity-100 hover:font-semibold active:font-semibold focus:font-semibold">
                        <span className="hover:border-b-4 border-white md:pb-[29px] w-full ">
                            <Link href={item.component}>{item.label.toUpperCase()}</Link>
                        </span>
                    </button>
                ))}
            </div>

            <button
                className="absolute top-0 right-0 p-6 md:hidden cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
            >
                <AiOutlineMenu size={40} />
            </button>
        </nav>
    );
};
