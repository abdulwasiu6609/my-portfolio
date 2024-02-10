"use client";

import React, { useState } from "react";
import ProjectData from "@/database/projectData";

const AddProjectForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    image: "",
    client: "",
    summary: "",
    title: "",
    technologies: "",
    sourceCode: "",
    liveProject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      ...formData,
      technologies: formData.technologies.split(",").map((tech) => tech.trim()),
    };
    // Create a copy of ProjectData and add the new project
    const updatedProjectData = [...ProjectData, newProject];
    onAdd(updatedProjectData); // Pass the updated ProjectData to the parent component
    // Reset form data after adding the project
    setFormData({
      image: "",
      client: "",
      summary: "",
      title: "",
      technologies: "",
      sourceCode: "",
      liveProject: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <label>
        Client:
        <input
          type="text"
          name="client"
          value={formData.client}
          onChange={handleChange}
        />
      </label>
      <label>
        Summary:
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Technologies (comma separated):
        <input
          type="text"
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
        />
      </label>
      <label>
        Source Code URL:
        <input
          type="text"
          name="sourceCode"
          value={formData.sourceCode}
          onChange={handleChange}
        />
      </label>
      <label>
        Live Project URL:
        <input
          type="text"
          name="liveProject"
          value={formData.liveProject}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProjectForm;
