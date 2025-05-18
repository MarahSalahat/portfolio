import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../../data/projects";

interface ProjectProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      )}
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      {project.video && (
        <video className="project-video" controls>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {project.features && (
        <ul className="project-features">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      )}

      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.netlify && (
          <a href={project.netlify} target="_blank" rel="noopener noreferrer">
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
