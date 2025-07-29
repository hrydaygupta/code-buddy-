import { useParams } from "react-router-dom";
import { useState } from "react";

const challengesData = {
  level1: ["What is a variable?", "Write a function to add two numbers."],
  level2: ["Explain closures.", "Write a function to reverse a string."],
  level3: ["What is a promise?", "Write a function to fetch data from an API."],
  level4: ["Explain event delegation.", "Write a debounce function."],
  level5: ["What is memoization?", "Write a memoization utility."],
};

export default function Challenges() {
  const { levelId } = useParams();
  const challenges = challengesData[levelId as keyof typeof challengesData] || [];
  const [selectedChallenge, setSelectedChallenge] = useState(challenges[0]);
  const [code, setCode] = useState("// Start coding here");
  const [output, setOutput] = useState("");

  const handleRun = () => {
    setOutput("(Dummy output) Code executed!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 via-black to-blue-900 flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-10 text-center drop-shadow">
        Challenges
      </h1>
      <div className="bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-3xl mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <label className="block text-lg font-bold text-blue-900 mb-2">
              Select Challenge:
            </label>
            <select
              className="w-full p-3 rounded-xl border-2 border-blue-900 bg-gray-100 text-lg mb-4"
              value={selectedChallenge}
              onChange={(e) => setSelectedChallenge(e.target.value)}
            >
              {challenges.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <div className="bg-blue-50 rounded-xl p-4 text-blue-900 font-medium mb-4 min-h-[60px]">
              {selectedChallenge}
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-lg font-bold text-blue-900 mb-2">
              Your Code:
            </label>
            <textarea
              className="w-full h-40 p-4 border-2 border-blue-900 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400 text-lg font-mono mb-4 resize-y transition"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              onClick={handleRun}
              className="w-full bg-gradient-to-r from-blue-900 to-red-900 hover:from-red-900 hover:to-blue-900 text-white text-xl font-bold py-3 rounded-xl shadow-lg transition-all duration-200 mb-4"
            >
              Run Code
            </button>
            {output && (
              <div className="bg-green-100 text-green-800 rounded-xl p-4 text-center font-semibold">
                {output}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
