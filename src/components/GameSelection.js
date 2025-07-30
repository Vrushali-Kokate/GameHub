import React from 'react';
import { ChevronRight } from 'lucide-react';

function GameSelection({ setSelectedGame }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-50 to-pink-50 min-h-screen rounded-lg shadow-lg w-full">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-10 tracking-tight leading-tight text-center">
        Choose Your Adventure!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Game Card: Tic Tac Toe */}
        <div
          className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center"
          onClick={() => setSelectedGame('TicTacToe')}
        >
          <img
            src="https://placehold.co/150x150/E0F2F7/2C3E50?text=TicTacToe"
            alt="Tic Tac Toe"
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-blue-400"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Tic Tac Toe</h3>
          <p className="text-gray-600 text-center mb-4">Classic 3-in-a-row fun!</p>
          <button className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Play Now <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Game Card: Memory Game */}
        <div
          className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center"
          onClick={() => setSelectedGame('MemoryGame')}
        >
          <img
            src="https://placehold.co/150x150/FFF3E0/E65100?text=Memory"
            alt="Memory Game"
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-orange-400"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Memory Game</h3>
          <p className="text-gray-600 text-center mb-4">Test your memory skills!</p>
          <button className="flex items-center px-6 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition duration-300">
            Play Now <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Game Card: Whack-a-Mole */}
        <div
          className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center"
          onClick={() => setSelectedGame('WhackAMoleGame')}
        >
          <img
            src="https://placehold.co/150x150/D1FAE5/065F46?text=WhackAMole"
            alt="Whack-a-Mole"
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-green-400"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Whack-a-Mole</h3>
          <p className="text-gray-600 text-center mb-4">Hit the moles before they hide!</p>
          <button className="flex items-center px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition duration-300">
            Play Now <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Game Card: Puzzle Game */}
        <div
          className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center"
          onClick={() => setSelectedGame('PuzzleGame')}
        >
          <img
            src="https://placehold.co/150x150/E0F7FA/00838F?text=Puzzle"
            alt="Puzzle Game"
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-teal-400"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Puzzle Game</h3>
          <p className="text-gray-600 text-center mb-4">Challenging puzzles for your brain!</p>
          <button className="flex items-center px-6 py-2 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition duration-300">
            Play Now <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Quizgame */}
           <div
          className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center"
          onClick={() => setSelectedGame('QuizGame')}
        >
          <img
            src="https://placehold.co/150x150/E0F2F7/2C3E50?text=Quiz"
            alt="Quiz Game"
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-blue-400"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Quiz Game</h3>
          <p className="text-gray-600 text-center mb-4">Ready to challenge yourself?</p>
          <button className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Play Now <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Quiz-end */}

        {/* Game Card: RockPaper Game */}
        <div
          className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center"
          onClick={() => setSelectedGame('RockPaperScissors')}
        >
          <img
            src="https://placehold.co/150x150/FFF3E0/E65100?text=RockPaperScissors"
            alt="RockPaperScissors"
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-orange-400"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">RockPaperScissors</h3>
          <p className="text-gray-600 text-center mb-4">Choose your move and beat the computer!</p>
          <button className="flex items-center px-6 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition duration-300">
            Play Now <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Game Card: Hangman Game */}
        <div
          className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center"
          onClick={() => setSelectedGame('Hangman')}
        >
          <img
            src="https://placehold.co/150x150/D1FAE5/065F46?text=Hangman"
            alt="Hangman"
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-green-400"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Hangman</h3>
          <p className="text-gray-600 text-center mb-4">Guess the word before the hangman is complete!</p>
          <button className="flex items-center px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition duration-300">
            Play Now <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>



        {/* Game Card: Chess (Coming Soon) */}
        <div
          className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col items-center opacity-70"
          onClick={() => setSelectedGame('ChessComingSoon')}
        >
          <img
            src="https://placehold.co/150x150/E8EAF6/3F51B5?text=Chess"
            alt="Chess"
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-indigo-400"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Chess</h3>
          <p className="text-gray-600 text-center mb-4">A strategic classic. (Coming Soon!)</p>
          <button className="flex items-center px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold cursor-not-allowed">
            Coming Soon <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameSelection;