import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/ExperienceSection';
import Training from './components/TrainingSection';
import ProjectSection from "./components/ProjectSection";
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './styles/card.scss';
import './styles/colors.scss';
import './styles/project-card.scss';


const App: React.FC = () => {
  return (
    <div className="App">
   
      <Header />
      <main>
        <Hero />
        <Experience />
        <Training />
        <ProjectSection/>
        <Certificates />
      </main>
      <Footer />
    </div>
  );
};

export default App;
