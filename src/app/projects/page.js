"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/projectCard";
import ProjectData from "@/database/projectData";
import Link from "next/link";
import CTASection from "@/components/ctaSection";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const projectData = ProjectData;
  const filters = [
    "All",
    "HTML/CSS",
    "JavaScript/TypeScript",
    "Angular/React/Vue",
    "Moble/ReactNative",
    "Java",
    "Swing/JavaFx/Spring",
    "Python/Django/Flask",
    "Ruby/Rails",
    "PHP",
  ];
  // Filter projects based on activeFilter
  const filteredProjects =
    activeFilter === "All"
      ? ProjectData
      : ProjectData.filter((project) =>
          project.technologies.some(
            (tech) =>
              tech.toLowerCase().includes(activeFilter.toLowerCase()) ||
              activeFilter
                .toLowerCase()
                .split("/")
                .some((part) => tech.toLowerCase().includes(part.trim())),
          ),
        );

  return (
    <div className="head-section bg-whiteBg text-white ">
      <section className="head-section bg-blue-light p-10 text-center md:text-left md:pl-20 ">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-xl mt-4">
          In-depth Case Studies to show you what I can offer and how I work.
        </p>
      </section>
      <section className="filter-section">
        <ul className="flex flex-wrap justify-center py-10">
          {filters.map((filter, index) => (
            <li
              key={index}
              className={`text-2xl cursor-pointer px-5 py-2 rounded-lg   ${
                activeFilter === filter
                  ? "bg-blue-light text-white"
                  : "text-gray-600 hover:bg-gray-200" // Apply active styles conditionally
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </li>
          ))}
        </ul>
      </section>
      <section className="project-cards flex  flex-col md:flex-row flex-wrap  gap-10 justify-center items-start px-10 mb-15">
        {filteredProjects.map((project, index) => (
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
      </section>
      <CTASection />
    </div>
  );
}
