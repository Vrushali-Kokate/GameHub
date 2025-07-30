import React, { useState, useEffect } from 'react';
import { Play, RotateCcw } from 'lucide-react'; // For play and reset icons

function App({ setSelectedGame, setGameMode }) {
  // Game choices
  const choices = ['rock', 'paper', 'scissors'];
  const choiceEmojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️',
  };

  // State for game logic
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(''); // 'win', 'lose', 'draw'
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false); // To show initial start screen

  // Function to determine the winner
  const determineWinner = (user, computer) => {
    if (user === computer) {
      return 'draw';
    }
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return 'win';
    }
    return 'lose';
  };

  // Handle user's choice
  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomComputerChoice);

    const gameResult = determineWinner(choice, randomComputerChoice);
    setResult(gameResult);

    if (gameResult === 'win') {
      setUserScore(userScore + 1);
    } else if (gameResult === 'lose') {
      setComputerScore(computerScore + 1);
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
    setUserScore(0);
    setComputerScore(0);
    setGameStarted(true); // Keep game started after reset
  };

  // Effect to start the game when the component mounts
  useEffect(() => {
    // If you want it to start immediately without a "Start Game" button,
    // you can call setGameStarted(true) here.
    // For now, it waits for the user to click "Start Game".
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-100 to-blue-100 min-h-screen rounded-lg shadow-lg w-full max-w-lg mx-auto font-inter relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-wide">
        Rock Paper Scissors
      </h2>
      <p className="text-xl text-gray-700 mb-6 text-center">
        Choose your move and beat the computer!
      </p>

      {!gameStarted ? (
        // Initial screen to start the game
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl text-gray-700 mb-8">Ready to play?</p>
          <button
            onClick={() => setGameStarted(true)}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 flex items-center justify-center"
          >
            Start Game <Play className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      ) : (
        <>
          {/* Scoreboard */}
          <div className="flex justify-around w-full max-w-xs mb-8 text-2xl font-semibold text-gray-800">
            <span>You: {userScore}</span>
            <span>Computer: {computerScore}</span>
          </div>

          {/* Player choices */}
          <div className="flex justify-center gap-6 mb-8">
            {choices.map((choice) => (
              <button
                key={choice}
                onClick={() => handleUserChoice(choice)}
                className={`
                  w-28 h-28 flex items-center justify-center text-5xl rounded-full shadow-lg
                  transition-all duration-200 transform
                  ${userChoice === choice ? 'scale-110 ring-4 ring-blue-400' : 'hover:scale-105'}
                  bg-white hover:bg-gray-100
                `}
                title={choice.charAt(0).toUpperCase() + choice.slice(1)} // Tooltip
              >
                {choiceEmojis[choice]}
              </button>
            ))}
          </div>

          {/* Display choices and result */}
          {userChoice && computerChoice && (
            <div className="text-center mb-8">
              <p className="text-xl text-gray-700 mb-2">
                You chose: <span className="font-bold text-3xl">{choiceEmojis[userChoice]}</span>
              </p>
              <p className="text-xl text-gray-700 mb-4">
                Computer chose: <span className="font-bold text-3xl">{choiceEmojis[computerChoice]}</span>
              </p>
              {result === 'win' && (
                <p className="text-4xl font-extrabold text-green-600 animate-pulse">You Win! 🎉</p>
              )}
              {result === 'lose' && (
                <p className="text-4xl font-extrabold text-red-600 animate-pulse">You Lose! 😔</p>
              )}
              {result === 'draw' && (
                <p className="text-4xl font-extrabold text-yellow-600 animate-pulse">It's a Draw! 🤝</p>
              )}
            </div>
          )}

          {/* Reset Game Button */}
          <button
            onClick={resetGame}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 flex items-center justify-center"
          >
            Reset Game <RotateCcw className="inline-block ml-2 w-5 h-5" />
          </button>
        </>
      )}

      {/* Back to Mode Selection Button */}
      <button
        onClick={() => {
          if (setSelectedGame) setSelectedGame(null);
          if (setGameMode) setGameMode(null);
          console.log("Back button clicked");
        }}
        className="mt-8 px-8 py-3 bg-gray-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        Back to Mode Selection
      </button>
    </div>
  );
}

export default App;