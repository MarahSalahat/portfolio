import React from "react";
import { training, type Training } from "../../data/trainings"; 

interface TrainingProps {
  training: Training;
}

const TrainingCard: React.FC<TrainingProps> = ({ training }) => {
  return (
    <div className="card">
      <h3 className="card-title">{training.title}</h3>
      <p className="card-subtitle">{training.company}</p>
      <p className="card-description">{training.description}</p>
      <p className="card-footer">{training.date}</p>
    </div>
  );
};

export default TrainingCard;
