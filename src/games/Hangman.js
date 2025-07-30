import React, { useState, useEffect, useCallback } from 'react';
import { Play, RotateCcw } from 'lucide-react'; // For play and reset icons

function App({ setSelectedGame, setGameMode }) {
  // List of words for the game
  const words = ['REACT', 'JAVASCRIPT', 'PROGRAMMING', 'DEVELOPER', 'COMPONENT', 'TAILWIND','RIDDHIMA'];

  // State for game logic
  const [wordToGuess, setWordToGuess] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [gameStarted, setGameStarted] = useState(false); // To show initial start screen

  const maxIncorrectGuesses = 6; // Number of body parts for the hangman

  // Function to pick a new word and reset game state
  const initializeGame = useCallback(() => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWordToGuess(newWord);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameStatus('playing');
    setGameStarted(true);
  }, []); // No dependencies, so it's stable

  // Effect to initialize game on component mount or when game starts
  useEffect(() => {
    if (gameStarted) {
      initializeGame();
    }
  }, [gameStarted, initializeGame]);

  // Check for win/loss conditions
  useEffect(() => {
    if (!gameStarted || gameStatus !== 'playing') return;

    const hasWon = wordToGuess
      .split('')
      .every(letter => guessedLetters.includes(letter));

    if (hasWon) {
      setGameStatus('won');
    } else if (incorrectGuesses >= maxIncorrectGuesses) {
      setGameStatus('lost');
    }
  }, [guessedLetters, incorrectGuesses, wordToGuess, gameStarted, gameStatus]);

  // Handle letter guess
  const handleGuess = (letter) => {
    if (gameStatus !== 'playing' || guessedLetters.includes(letter)) {
      return;
    }

    setGuessedLetters((prev) => [...prev, letter]);

    if (!wordToGuess.includes(letter)) {
      setIncorrectGuesses((prev) => prev + 1);
    }
  };

  // Render the word to guess with underscores for unguessed letters
  const renderWord = () => {
    return wordToGuess.split('').map((letter, index) => (
      <span key={index} className="mx-1 text-5xl font-bold text-gray-900 border-b-4 border-gray-500">
        {guessedLetters.includes(letter) ? letter : '_'}
      </span>
    ));
  };

  // Render the keyboard
  const renderKeyboard = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
      <div className="grid grid-cols-7 sm:grid-cols-8 gap-2 mt-8">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter) || gameStatus !== 'playing'}
            className={`
              w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
              rounded-md font-bold text-lg sm:text-xl
              transition-all duration-200 ease-in-out
              ${guessedLetters.includes(letter)
                ? (wordToGuess.includes(letter) ? 'bg-green-300 text-green-800' : 'bg-red-300 text-red-800')
                : 'bg-indigo-200 text-indigo-800 hover:bg-indigo-300'
              }
              ${gameStatus !== 'playing' || guessedLetters.includes(letter) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            {letter}
          </button>
        ))}
      </div>
    );
  };

  // Render hangman drawing based on incorrect guesses
  const renderHangman = () => {
    // Basic ASCII art for hangman
    const hangmanStages = [
      `
        +---+
        |   |
            |
            |
            |
            |
        =========
      `,
      `
        +---+
        |   |
        O   |
            |
            |
            |
        =========
      `,
      `
        +---+
        |   |
        O   |
        |   |
            |
            |
        =========
      `,
      `
        +---+
        |   |
        O   |
       /|   |
            |
            |
        =========
      `,
      `
        +---+
        |   |
        O   |
       /|\\  |
            |
            |
        =========
      `,
      `
        +---+
        |   |
        O   |
       /|\\  |
       /    |
            |
        =========
      `,
      `
        +---+
        |   |
        O   |
       /|\\  |
       / \\  |
            |
        =========
      `,
    ];
    return (
      <pre className="text-left text-xl font-mono bg-gray-800 text-white p-4 rounded-lg shadow-inner mb-6">
        {hangmanStages[incorrectGuesses]}
      </pre>
    );
  };


  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-100 to-slate-100 min-h-screen rounded-lg shadow-lg w-full max-w-lg mx-auto font-inter relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-wide">
        Hangman
      </h2>
      <p className="text-xl text-gray-700 mb-6 text-center">
        Guess the word before the hangman is complete!
      </p>

      {!gameStarted ? (
        // Initial screen to start the game
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl text-gray-700 mb-8">Ready to test your vocabulary?</p>
          <button
            onClick={initializeGame}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 flex items-center justify-center"
          >
            Start Game <Play className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      ) : (
        <>
          {renderHangman()}

          <div className="flex justify-center mb-6">
            {renderWord()}
          </div>

          <p className="text-lg font-semibold text-gray-700 mb-4">
            Incorrect Guesses: {incorrectGuesses} / {maxIncorrectGuesses}
          </p>

          {gameStatus === 'playing' && renderKeyboard()}

          {gameStatus !== 'playing' && (
            <div className="mt-6 text-center">
              {gameStatus === 'won' && (
                <p className="text-4xl font-extrabold text-green-600 animate-pulse mb-4">
                  🎉 You Won! 🎉
                </p>
              )}
              {gameStatus === 'lost' && (
                <p className="text-4xl font-extrabold text-red-600 animate-pulse mb-4">
                  😔 You Lost! The word was: <span className="text-blue-600">{wordToGuess}</span>
                </p>
              )}
              <button
                onClick={initializeGame}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 flex items-center justify-center mx-auto"
              >
                Play Again <RotateCcw className="inline-block ml-2 w-5 h-5" />
              </button>
            </div>
          )}
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