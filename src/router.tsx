import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import About from '@pages/About';
import Projects from '@pages/Projects';
import Contribute from '@pages/Contribute';
import Contact from '@pages/Contact';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
