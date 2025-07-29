import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import Navbar from "../components/Navbar";

const levels = [1, 2, 3, 4, 5];

const Levels = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        navigate('/login');
      }
    });
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-28 px-4 bg-gradient-to-br from-black via-red-900 to-blue-900 text-white flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-10">Choose a Level</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => navigate(`/challenges/level${level}`)}
              className="w-48 h-24 rounded-lg bg-gray-800 hover:bg-red-700 text-xl font-semibold shadow-lg transition"
            >
              Level {level}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Levels;
