"use client";

import React, { useState } from "react";
import ProjectData from "@/database/projectData";
import ProjectCard from "@/components/projectCard";

function App() {
  const [formData, setFormData] = useState({
    image: "",
    client: "",
    summary: "",
    title: "",
    technologies: [],
    sourceCode: "",
    liveProject: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const technologiesArray = formData.technologies
      .split(",")
      .map((tech) => tech.trim());
    const newData = { ...formData, technologies: technologiesArray };
    ProjectData.push(newData);
    console.log("New project added:", newData);
    setFormData({
      image: "",
      client: "",
      summary: "",
      title: "",
      technologies: [],
      sourceCode: "",
      liveProject: "",
    });
  };

  return (
    <div>
      <h1>Add New Project</h1>
      <form onSubmit={handleSubmit}>
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
        />
        <br />
        <label>Client:</label>
        <input
          type="text"
          name="client"
          value={formData.client}
          onChange={handleInputChange}
        />
        <br />
        <label>Summary:</label>
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleInputChange}
        />
        <br />
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <br />
        <label>Technologies (comma-separated):</label>
        <input
          type="text"
          name="technologies"
          value={formData.technologies}
          onChange={handleInputChange}
        />
        <br />
        <label>Source Code:</label>
        <input
          type="text"
          name="sourceCode"
          value={formData.sourceCode}
          onChange={handleInputChange}
        />
        <br />
        <label>Live Project:</label>
        <input
          type="text"
          name="liveProject"
          value={formData.liveProject}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Add Project</button>
      </form>
      <section className="project-cards flex  flex-col md:flex-row flex-wrap  gap-10 justify-center items-start px-10 mb-15">
        {ProjectData.map((project, index) => (
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
    </div>
  );
}

export default App;
