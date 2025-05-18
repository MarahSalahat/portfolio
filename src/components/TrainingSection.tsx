
import React from "react";
import { training } from "../data/trainings";  
import TrainingCard from "./ui/TrainingCard";
import '../styles/trainings.scss';

const TrainingSection = () => {
  return (
    <section className="trainings-section" id="trainings">
      <h2 className="trainings-title">Trainings</h2>
      <div className="trainings-grid">
        {training.map((item, idx) => (
          <TrainingCard key={idx} training={item} /> 
        ))}
      </div>
    </section>
  );
};

export default TrainingSection;
