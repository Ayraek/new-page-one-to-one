import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import Teachers from './components/Teachers/Teachers';
import Pricing from './components/Pricing/Pricing';
import AboutProgram from './components/AboutProgram/AboutProgram';
import CourseStructure from './components/CourseStructure/CourseStructure';
import LeadForm from './components/LeadForm/LeadForm';
import Concept from "./components/Concept/Concept";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Concept />
      <AboutProgram />
      <CourseStructure />
      <Teachers />
      <Reviews />
      <Pricing />
      <LeadForm />
      <Footer />
    </div>
  );
}

export default App;



