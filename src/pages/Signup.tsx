import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import Navbar from "../components/Navbar";

export default function Signup() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (!error) navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-900 to-blue-900 text-white pt-20">
        <form onSubmit={handleSignup} className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
          <input
            type="email"
            className="w-full mb-4 p-3 rounded bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold transition"
          >
            Send Magic Link
          </button>
        </form>
      </div>
    </>
  );
}
