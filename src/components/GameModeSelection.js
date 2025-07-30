import React from 'react';
import { Users, User, ChevronRight } from 'lucide-react';

function GameModeSelection({ setSelectedGame, setGameMode }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-50 to-cyan-50 min-h-screen rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-10 tracking-tight leading-tight text-center">
        Choose Your Game Mode
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Solo Mode Card */}
        <div
          className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center"
          onClick={() => setGameMode('solo')}
        >
          <User className="w-24 h-24 text-green-600 mb-4" />
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Solo Play</h3>
          <p className="text-gray-600 text-center mb-6">Challenge yourself against the AI or play alone.</p>
          <button className="flex items-center px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition duration-300">
            Go Solo <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Team Mode Card */}
        <div
          className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center"
          onClick={() => setGameMode('team')}
        >
          <Users className="w-24 h-24 text-cyan-600 mb-4" />
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Team Play</h3>
          <p className="text-gray-600 text-center mb-6">Join or create a team and compete with friends!</p>
          <button className="flex items-center px-8 py-3 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition duration-300">
            Play with Team <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
      <button
        onClick={() => setSelectedGame(null)} // Go back to game selection
        className="mt-10 px-8 py-3 bg-gray-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        Back to Games
      </button>
    </div>
  );
}

export default GameModeSelection;