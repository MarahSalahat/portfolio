
import React from "react";
import { experience } from "../data/experience";  
import ExperienceCard from "./ui/ExperienceCard";
import '../styles/experience.scss';


const ExperienceSection = () => {
  return (
  <section className="experience-section" id="experience">
  <h2 className="section-title">Experience</h2>
  <div className="experience-flex">
    {experience.map((item, idx) => (
      <ExperienceCard key={idx} experience={item} />
    ))}
  </div>
</section>

  );
};

export default ExperienceSection;
