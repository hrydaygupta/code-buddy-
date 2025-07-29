import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 via-black to-blue-900 text-white flex flex-col items-center justify-center">
      {/* Navigation */}
      <nav className="absolute top-6 w-full flex justify-center space-x-12 text-xl font-semibold">
        <Link to="/login" className="hover:underline hover:text-red-400 transition">Login</Link>
        <Link to="/signup" className="hover:underline hover:text-red-400 transition">Sign Up</Link>
        <Link to="/levels" className="hover:underline hover:text-red-400 transition">Levels</Link>
      </nav>

      {/* Main Hero Text */}
      <main className="text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide mb-8 max-w-4xl">
          Welcome to Code Buddy
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-300">
          Your journey to mastering code begins here.
        </p>
      </main>
    </div>
  );
}