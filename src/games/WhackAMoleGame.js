import React, { useState, useEffect } from 'react';
import { Hammer } from 'lucide-react';

const NUM_MOLES = 9; // Number of moles
const MOLE_APPEAR_TIME = 1000; // Time in milliseconds for a mole to appear
const GAME_DURATION = 30000; // Game duration in milliseconds

function WhackAMoleGame({ setSelectedGame }) {
  const [moles, setMoles] = useState(Array(NUM_MOLES).fill(false)); // Track mole visibility
  const [score, setScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [timer, setTimer] = useState(GAME_DURATION);

  useEffect(() => {
    let moleInterval;
    if (isGameActive) {
      moleInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * NUM_MOLES);
        setMoles((prevMoles) => {
          const newMoles = Array(NUM_MOLES).fill(false);
          newMoles[randomIndex] = true; // Show a mole at a random position
          return newMoles;
        });
      }, MOLE_APPEAR_TIME);

      const gameTimer = setTimeout(() => {
        setIsGameActive(false);
        clearInterval(moleInterval);
      }, GAME_DURATION);

      return () => {
        clearInterval(moleInterval);
        clearTimeout(gameTimer);
      };
    }
  }, [isGameActive]);

  const handleMoleClick = (index) => {
    if (moles[index]) {
      setScore(score + 1);
      setMoles((prevMoles) => {
        const newMoles = [...prevMoles];
        newMoles[index] = false; // Hide the mole after it is whacked
        return newMoles;
      });
    }
  };

  const startGame = () => {
    setScore(0);
    setIsGameActive(true);
    setTimer(GAME_DURATION);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-lime-100 to-green-100 min-h-screen rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-wide">Whack-a-Mole</h2>
      <p className="text-xl text-gray-700 mb-8">
        Test your reflexes! Whack the moles as they pop up.
      </p>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {moles.map((isVisible, index) => (
          <div
            key={index}
            onClick={() => handleMoleClick(index)}
            className={`w-24 h-24 flex items-center justify-center rounded-lg shadow-md cursor-pointer transition-all duration-200 ${
              isVisible ? 'bg-green-600' : 'bg-green-300'
            }`}
          >
            {isVisible && <Hammer className="w-12 h-12 text-white" />}
          </div>
        ))}
      </div>
      <p className="text-2xl font-semibold text-gray-600 mb-4">Score: {score}</p>
      <p className="text-lg text-gray-600 mb-4">{isGameActive ? `Time Left: ${(timer / 1000).toFixed(0)}s` : 'Game Over!'}</p>
      {!isGameActive && (
        <button
          onClick={startGame}
          className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Start Game
        </button>
      )}
      <button
        onClick={() => setSelectedGame(null)} // Go back to game selection
        className="mt-4 px-8 py-3 bg-gray-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        Back to Game Selection
      </button>
    </div>
  );
}

export default WhackAMoleGame;
