import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 via-black to-blue-900 flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-10 max-w-2xl w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 text-center drop-shadow">About Code Buddy</h1>
        <p className="text-lg md:text-xl text-gray-800 text-center font-medium">
          Code Buddy is your companion on the journey to mastering programming. We provide interactive challenges, progress tracking, and a supportive community to help you grow as a coder. Whether you're a beginner or looking to sharpen your skills, Code Buddy is here for you.
        </p>
      </div>
    </div>
  );
};

export default About;
