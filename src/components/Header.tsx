import React from 'react';
import '../styles/Header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <nav className="top-bar" aria-label="Main Navigation">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#trainings">Trainings</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
   
        </ul>
      </nav>
    </header>
  );
};

export default Header;
