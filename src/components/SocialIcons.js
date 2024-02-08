import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithubAlt, FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa6";


export default function SocialIcons() {
    const socialIcons = [
        {
            name: "twitter",
            icons: <FaTwitter />,
            link: "https://twitter.com/AdebayoWaasi"
        },
        {
            name: "facebook",
            icons: <FaFacebookF />,
            link: "https://web.facebook.com/profile.php?id=100051364722600"
        },
        {
            name: "linkedin",
            icons: <FaLinkedinIn />,
            link: "www.linkedin.com/in/abdulwasiu6609"
        },
        {
            name: "github",
            icons: <FaGithubAlt />,
            link: "https://github.com/abdulwasiu6609"
        },
        {
            name: "stackoverflow",
            icons: <FaStackOverflow />,
            link: "https://stackoverflow.com/users/22942382/abdul"
        },
    ]
    return (

        <div className=" flex gap-5">
            {socialIcons.map((item) => (

                <button key={item.name} className="hover:bg-blue-darker focus:bg-blue-darker duration-1000 size-10 rounded-full flex justify-center items-center"><Link href={item.link}>{item.icons}</Link></button>
            ))}
        </div>

    )
}