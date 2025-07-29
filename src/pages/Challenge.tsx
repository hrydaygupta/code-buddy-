import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const dummyQuestions = [
  { id: 1, question: "Write a function to add two numbers." },
  { id: 2, question: "Write a loop to print numbers 1 to 5." },
];

export default function ChallengePage() {
  const { levelId } = useParams();
  const [current, setCurrent] = useState(0);

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-28 px-4 bg-gradient-to-br from-black via-red-900 to-blue-900 text-white flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">Level {levelId}</h2>
        <div className="w-full max-w-2xl bg-gray-900 p-6 rounded-lg shadow-lg">
          <p className="text-xl mb-4">{dummyQuestions[current]?.question}</p>
          <textarea
            className="w-full h-40 p-3 bg-gray-800 text-white rounded"
            placeholder="Write your code here..."
          />
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => setCurrent((prev) => Math.min(prev + 1, dummyQuestions.length - 1))}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
