import  { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ui/ProjectCard";
import '../styles/project-card.scss';
import '../styles/project-section.scss';

const filters = ["All", "AI", "Frontend", "ML", "Healthcare", "Dashboard", "Cultural"];

const ProjectSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedFilter));

  return (
    <section className="project" id="projects">
      <h2 className="title">My Projects</h2>

      {/* Filters */}
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={selectedFilter === filter ? "active" : ""}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Slider */}
      <div className="project-slider">
        {filteredProjects.map((project, index) => (
          <div key={index} className="snap-start">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
