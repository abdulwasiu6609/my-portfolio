"use client";
import React, { useState } from "react";
import Link from "next/link";
export default function ProjectCard(props) {
  const {
    client,
    summary,
    imageSrc,
    title,
    technologies,
    sourceCode,
    liveProject,
  } = props;
  return (
    <div className="project-card w-[400px]  md:w-[300px] shadow-lg ">
      <div className="project-image w-full h-[350px] md:h-[250px] group relative">
        <img className="w-full h-full object-content" src={imageSrc} />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0)]  flex justify-center items-center ">
          <h1 className="text-5xl md:text-3xl font-semibold text-center align-middle">
            {client}
          </h1>
        </div>
        <div className="image-overlay bg-[rgba(65,164,245,0.9)] absolute top-0 left-0 w-full h-full p-10 md:p-4  hidden group-hover:block ]">
          <h2 className="text-3xl md:text-2xl md:px-5 md:pt-1 font-semibold">
            Client: <span className="text-2xl">{client}</span>
          </h2>
          <p className="text-xl md:px-5 md:mt-1 h-[200px] mt-1  text-ellipsis overflow-hidden">
            {summary}
          </p>
          <div className="flex justify-center mt-2 md:gap-3  gap-5">
            <Link
              href={sourceCode}
              className="px-3 py-2 md:text-[16px]   bg-blue-darker rounded-lg text-xl hover:bg-blue-dark text-white"
            >
              Source Code
            </Link>
            <Link
              href={liveProject}
              className="px-3 py-2 md:text-[16px]  bg-blue-darker rounded-lg text-xl hover:bg-blue-dark text-white"
            >
              Live Project
            </Link>
          </div>
        </div>
      </div>
      <div className="project-details p-5 flex flex-col gap-5 mt-5 md:mt-0">
        <h2 className="text-2xl font-semibold text-center text-gray-600">
          {title}
        </h2>
        <ul className="technologies flex flex-wrap gap-3 justify-center mb-4">
          {technologies.map((technology, index) => (
            <li
              key={index}
              className="text-xl font-semibold bg-gray-600 text-white px-3 py-1 rounded-full"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
