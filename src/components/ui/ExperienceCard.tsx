import React from "react";
import {type Experience } from "../../data/experience"; 

interface ExperienceProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="card">
      <h3 className="card-title">{experience.title}</h3>
      <p className="card-subtitle">{experience.company}</p>
      <p className="card-description">{experience.description}</p>
      <p className="card-footer">{experience.date}</p>
    </div>
  );
};

export default ExperienceCard;
