import React from 'react';

const features = [
  {
    title: "Interactive Coding Challenges",
    desc: "Solve real-world problems and get instant feedback.",
  },
  {
    title: "Progress Tracking",
    desc: "See your growth and unlock new levels as you learn.",
  },
  {
    title: "Community Support",
    desc: "Join a vibrant community of learners and mentors.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 via-black to-blue-900 flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-12 text-center drop-shadow">Features</h1>
      <div className="grid gap-8 md:grid-cols-3 w-full max-w-6xl">
        {features.map((f) => (
          <div key={f.title} className="bg-white/90 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">{f.title}</h2>
            <p className="text-lg text-gray-700 text-center">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
