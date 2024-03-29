"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import CTASection from "@/components/ctaSection";
import Intro from "@/components/intro";
import Skills from "@/components/skills";
import ProjectData from "@/database/projectData";
import ProjectCard from "@/components/projectCard";

export default function About() {
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    generateRandomProjects(); // Initial generation on component mount

    const intervalId = setInterval(
      () => {
        generateRandomProjects(); // Generate random projects every 1 hour
      },
      1 * 60 * 60 * 1000,
    ); // 1 hour in milliseconds

    return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
  }, []);

  const generateRandomProjects = () => {
    const totalProjects = ProjectData.length;
    const randomIndices = [];
    while (randomIndices.length < 3) {
      const randomIndex = Math.floor(Math.random() * totalProjects);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    const randomProjects = randomIndices.map((index) => ProjectData[index]);
    setRandomProjects(randomProjects);
  };

  return (
    <div className=" text-white w-[100%]">
      <Intro />
      <Skills />
      <section className="liveProjects p-6 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-center text-gray-600 pb-6">
          Live Projects
        </h1>
        <div className="randomProjects flex flex-wrap justify-center items-center gap-10 ">
          {randomProjects.map((project, index) => (
            <ProjectCard
              key={index}
              client={project.client}
              summary={project.summary}
              imageSrc={project.image}
              title={project.title}
              technologies={project.technologies}
              sourceCode={project.sourceCode}
              liveProject={project.liveProject}
            />
          ))}

          <Link
            className="text-white w-[100%] sm:w-fit  text-center bg-blue-light px-4 py-2 rounded-lg hover:bg-blue-dark mt-6 -mb-4 "
            href="/projects"
          >
            View all projects
          </Link>
        </div>

      </section>
      <CTASection className="text-white" />
    </div>
  );
}
