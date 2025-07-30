import React, { useState, useEffect } from 'react';
import { Puzzle } from 'lucide-react';

const generatePuzzle = () => {
  const numbers = Array.from({ length: 15 }, (_, i) => i + 1).concat(null); // Create numbers 1-15 and a null for the empty space
  return shuffleArray(numbers);
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const isSolvable = (puzzle) => {
  const inversions = puzzle.reduce((acc, val, idx) => {
    if (val === null) return acc; // Skip the empty tile
    return acc + puzzle.slice(idx + 1).filter(v => v !== null && v < val).length;
  }, 0);
  return inversions % 2 === 0; // A puzzle is solvable if the number of inversions is even
};

function PuzzleGame({ setSelectedGame }) {
  const [puzzle, setPuzzle] = useState([]);
  const [emptyIndex, setEmptyIndex] = useState(null);

  useEffect(() => {
    resetPuzzle();
  }, []);

  const resetPuzzle = () => {
    let newPuzzle;
    do {
      newPuzzle = generatePuzzle();
    } while (!isSolvable(newPuzzle));
    setPuzzle(newPuzzle);
    setEmptyIndex(newPuzzle.indexOf(null));
  };

  const handleTileClick = (index) => {
    const row = Math.floor(index / 4);
    const col = index % 4;
    const emptyRow = Math.floor(emptyIndex / 4);
    const emptyCol = emptyIndex % 4;

    // Check if the clicked tile is adjacent to the empty space
    if ((Math.abs(row - emptyRow) === 1 && col === emptyCol) || (Math.abs(col - emptyCol) === 1 && row === emptyRow)) {
      const newPuzzle = [...puzzle];
      // Swap the clicked tile with the empty space
      [newPuzzle[index], newPuzzle[emptyIndex]] = [newPuzzle[emptyIndex], newPuzzle[index]];
      setPuzzle(newPuzzle);
      setEmptyIndex(index);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-teal-100 to-cyan-100 min-h-screen rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-wide">Puzzle Game</h2>
      <p className="text-xl text-gray-700 mb-8">
        Solve challenging puzzles and sharpen your mind!
      </p>
      <div className="grid grid-cols-4 gap-2">
        {puzzle.map((value, index) => (
          <div
            key={index}
            onClick={() => handleTileClick(index)}
            className={`w-24 h-24 flex items-center justify-center text-3xl font-bold text-white rounded-lg shadow-md cursor-pointer transition-all duration-200 ${
              value === null ? 'bg-transparent' : 'bg-cyan-600'
            }`}
          >
            {value !== null ? value : ''}
          </div>
        ))}
      </div>
      <button
        onClick={resetPuzzle}
        className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Reset Puzzle
      </button>
      <button
        onClick={() => setSelectedGame(null)} // Go back to game selection
        className="mt-4 px-8 py-3 bg-gray-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        Back to Game Selection
      </button>
    </div>
  );
}

export default PuzzleGame;
