import React from 'react';
import { Link } from 'react-router-dom';
import goril from '../images/gorilla.jpeg';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-2 px-1 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold ml-7">
        <img src={goril} alt="Logo" className="w-16 bg-transparent" />
      </Link>
      <div className="flex gap-4 mr-7">
        <Link to="/contact" className="text-lg hover:text-gray-300">
          Contact
        </Link>
        <Link to="/calculators" className="text-lg hover:text-gray-300">
          Calculators
        </Link>
        <Link to="/exercices" className="text-lg hover:text-gray-300">
          Exercices
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
