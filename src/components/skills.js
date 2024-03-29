import Link from "next/link";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaDatabase, FaUserGroup } from "react-icons/fa6";
import { MdOutlineEngineering } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FiDatabase, FiUsers } from "react-icons/fi";

import SkillCard from "./skillCard";

export default function Skills() {
  const skillItems = {
    frontend: [
      "HTML/CSS/SASS/LESS",
      "JavaScript/TypeScript",
      "React/Redux/Next.js",
      "Vue/Angular",
      "Tailwind/Bootstrap/JQuery",
      "React Native",
    ],
    backend: [
      "Python/Django/Flask",
      "Ruby/Rails",
      "Node.js/Express",
      "PHP/Laravel",
      "MySQL/MangoDB",
      "Java/Spring",
    ],
    userExperience: [
      "User-Centered Design",
      "Empathy/User Research",
      "Persona/User Journey",
      "Wireframing/Prototyping",
      "Responsive Design",
      "Usability Testing",
    ],
    ITSupport: [
      "Technical Troubleshooting",
      "Customer Service",
      "System Administration",
      "Documentation/ Ticketing",
      "Problem Analysis/Resolution",
    ],
    Other: [
      "Version Control/Git",
      "DevOps",
      "Unit Testing",
      "Sketch/Balsamiq",
      "Wordpress/Shopify",
    ],
  };

  return (
    <section className="bg-whiteBg p-6 flex flex-col justify-center items-center">
      <div className="skill-overview text-center md:max-w-3xl">
        <h1 className="text-3xl font-semibold text-gray-600 py-4">
          Skills Overview
        </h1>
        <p className="text-lg tracking-wide text-gray-600 ">
          As an emerging developer launching into my career, I am excited to
          share my enthusiasm for crafting compelling web applications. While my
          professional journey is just beginning, I am eager to showcase my
          evolving technical skill sets and the tools I am diving into. Curious
          to learn more about my early experiences?{" "}
          <Link href="/resume" className="underline text-blue-dark">
            Check out my online resume.
          </Link>{" "}
        </p>
      </div>
      <div className="skill-cards flex flex-wrap justify-center items-start gap-10 ">
        <SkillCard
          title={"Frontend"}
          icon={
            <LiaLaptopCodeSolid size={60} className=" text-white font-thin" />
          }
          skills={skillItems.frontend}
        />
        <SkillCard
          title={"Backend"}
          icon={<FiDatabase size={60} className=" text-white font-thin" />}
          skills={skillItems.backend}
        />
        <SkillCard
          title={"User Experience"}
          icon={<FiUsers size={60} className=" text-white font-thin" />}
          skills={skillItems.userExperience}
        />
        <SkillCard
          title={"IT Support"}
          icon={
            <MdOutlineEngineering size={60} className=" text-white font-thin" />
          }
          skills={skillItems.ITSupport}
        />
        <SkillCard
          title={"Other"}
          icon={
            <GiArtificialIntelligence
              size={60}
              className=" text-white font-thin"
            />
          }
          skills={skillItems.Other}
        />
      </div>
    </section>
  );
}
