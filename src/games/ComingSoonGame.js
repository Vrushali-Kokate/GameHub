import React from 'react';
import { Gamepad } from 'lucide-react';

function ComingSoonGame({ gameName, setSelectedGame }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-wide">{gameName}</h2>
      <p className="text-xl text-gray-700 mb-8">
        This game is currently under development. Stay tuned for exciting updates!
      </p>
      <Gamepad className="w-24 h-24 text-gray-500 animate-bounce" />
      <button
        onClick={() => setSelectedGame(null)}
        className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Back to Game Selection
      </button>
    </div>
  );
}

export default ComingSoonGame;