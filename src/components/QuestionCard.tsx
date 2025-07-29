type QuestionCardProps = {
  question: string;
  onNext: () => void;
};

const QuestionCard = ({ question, onNext }: QuestionCardProps) => {
  return (
    <div className="bg-gradient-to-br from-red-900 via-black to-blue-900 p-1 rounded-2xl shadow-2xl max-w-2xl mx-auto my-12">
      <div className="bg-white/90 rounded-2xl p-8">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-blue-900 tracking-wide text-center drop-shadow">
          Question
        </h2>
        <p className="mb-6 text-lg text-gray-800 text-center font-medium">
          {question}
        </p>
        <textarea
          className="w-full h-40 p-4 border-2 border-blue-900 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400 text-lg font-mono mb-6 resize-y transition"
          placeholder="Write your code here..."
        ></textarea>
        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-blue-900 to-red-900 hover:from-red-900 hover:to-blue-900 text-white text-xl font-bold py-3 rounded-xl shadow-lg transition-all duration-200"
        >
          Submit & Next
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
