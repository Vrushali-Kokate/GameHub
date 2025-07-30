import React from 'react';
import { Gamepad, Users, Info, Trophy, ChevronRight } from 'lucide-react';

function HomePage({ setCurrentPage }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen rounded-lg shadow-lg text-center w-full max-w-6xl mx-auto">
      <h2 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        Welcome to <span className="text-blue-700">GameZone</span>
      </h2>
      <p className="text-2xl text-gray-700 mb-10 max-w-3xl">
        Your ultimate destination for classic and exciting online games. Play solo or team up with friends!
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => setCurrentPage('games')}
          className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Explore Games <ChevronRight className="inline-block ml-3 w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentPage('about')}
          className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-700 text-white font-bold text-xl rounded-full shadow-lg hover:from-purple-700 hover:to-pink-800 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Learn More <Info className="inline-block ml-3 w-6 h-6" />
        </button>
      </div>

      <div className="mt-16 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center">
          <Gamepad className="w-16 h-16 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Diverse Game Library</h3>
          <p className="text-gray-600 text-center">From classics to new challenges, find your next favorite game.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center">
          <Users className="w-16 h-16 text-purple-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Solo & Team Play</h3>
          <p className="text-gray-600 text-center">Challenge yourself or team up with friends for endless fun.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center">
          <Trophy className="w-16 h-16 text-pink-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Leaderboards & Achievements</h3>
          <p className="text-gray-600 text-center">Compete with others and earn your place at the top.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;