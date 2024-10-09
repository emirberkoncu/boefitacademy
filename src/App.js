import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Calculators from './components/Calculators';
import Exercices from './components/Exercices';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/exercices" element={<Exercices />} />
      </Routes>
    </Router>
  );
}

export default App;
