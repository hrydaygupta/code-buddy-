import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full py-6 bg-black bg-opacity-90 text-white flex justify-center space-x-12 text-lg font-semibold fixed top-0 z-50">
      <Link to="/login" className="hover:text-red-400 transition">Login</Link>
      <Link to="/signup" className="hover:text-red-400 transition">Sign Up</Link>
      <Link to="/levels" className="hover:text-red-400 transition">Levels</Link>
    </nav>
  );
};

export default Navbar;

