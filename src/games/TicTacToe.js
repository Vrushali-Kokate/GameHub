import React, { useState } from 'react';
import { Play } from 'lucide-react';

function TicTacToe({ setSelectedGame, setGameMode }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6]          // diagonals
  ];

  const checkWinner = (currentBoard) => {
    for (const [a,b,c] of winPatterns) {
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = turn;
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    } else if (!newBoard.includes(null)) {
      setWinner('draw');
    } else {
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-wide">Tic Tac Toe</h2>
      <div className="grid grid-cols-3 gap-3 mb-6 bg-white p-4 rounded-xl shadow-xl">
        {board.map((cell, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(idx)}
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-gray-50 flex items-center justify-center text-6xl sm:text-7xl md:text-8xl font-bold text-gray-700 rounded-xl shadow-md cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-200 active:scale-95"
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="text-2xl font-semibold text-gray-700 mb-6">
        {!winner && `Player ${turn}'s turn`}
        {winner === 'draw' && "It's a draw!"}
        {winner && winner !== 'draw' && `Player ${winner} wins!`}
      </div>
      <button
        onClick={restartGame}
        className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        Restart Game <Play className="inline-block ml-2 w-5 h-5" />
      </button>
      <button
        onClick={() => { setSelectedGame(null); setGameMode(null); }}
        className="mt-4 px-8 py-3 bg-gray-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        Back to Mode Selection
      </button>
    </div>
  );
}

export default TicTacToe;

