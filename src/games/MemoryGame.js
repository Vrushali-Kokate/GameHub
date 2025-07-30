// import React, { useState, useEffect } from 'react';
// import { Play } from 'lucide-react';

// const generateCards = () => {
//   const cardValues = Array.from({ length: 8 }, (_, i) => i + 1); // Create pairs of numbers 1-8
//   const cards = [...cardValues, ...cardValues]; // Duplicate for pairs
//   return cards.sort(() => Math.random() - 0.5); // Shuffle cards
// };

// function MemoryGame({ setSelectedGame, setGameMode }) {
//   const [cards, setCards] = useState([]);
//   const [flippedCards, setFlippedCards] = useState([]);
//   const [matchedCards, setMatchedCards] = useState([]);
//   const [isGameActive, setIsGameActive] = useState(false);

//   useEffect(() => {
//     if (isGameActive) {
//       setCards(generateCards());
//     }
//   }, [isGameActive]);

//   const handleCardClick = (index) => {
//     if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
//       setFlippedCards((prev) => [...prev, index]);

//       if (flippedCards.length === 1) {
//         const firstCardIndex = flippedCards[0];
//         const secondCardValue = cards[index];
//         const firstCardValue = cards[firstCardIndex];

//         if (firstCardValue === secondCardValue) {
//           setMatchedCards((prev) => [...prev, firstCardIndex, index]);
//         }

//         setTimeout(() => {
//           setFlippedCards([]);
//         }, 1000);
//       }
//     }
//   };

//   const startNewGame = () => {
//     setIsGameActive(true);
//     setFlippedCards([]);
//     setMatchedCards([]);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-yellow-100 to-orange-100 min-h-screen rounded-lg shadow-lg w-full max-w-lg mx-auto">
//       <h2 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-wide">Memory Game</h2>
//       <p className="text-xl text-gray-700 mb-8">
//         Match pairs of cards in this classic memory challenge!
//       </p>
//       <div className="grid grid-cols-4 gap-4 bg-white p-6 rounded-xl shadow-xl">
//         {cards.map((value, idx) => (
//           <div
//             key={idx}
//             onClick={() => handleCardClick(idx)}
//             className={`w-24 h-24 rounded-lg flex items-center justify-center text-3xl font-bold text-indigo-700 shadow-md cursor-pointer transition-all duration-200 ${
//               flippedCards.includes(idx) || matchedCards.includes(idx) ? 'bg-indigo-300' : 'bg-indigo-200'
//             }`}
//           >
//             {flippedCards.includes(idx) || matchedCards.includes(idx) ? value : '?'}
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={startNewGame}
//         className="mt-10 px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
//       >
//         Start New Game <Play className="inline-block ml-2 w-5 h-5" />
//       </button>
//       <button
//         onClick={() => { setSelectedGame(null); setGameMode(null); }}
//         className="mt-4 px-8 py-3 bg-gray-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
//       >
//         Back to Mode Selection
//       </button>
//     </div>
//   );
// }

// export default MemoryGame;


import React, { useState, useEffect } from 'react';
import { Play, RotateCcw } from 'lucide-react'; // Added RotateCcw for reset button

// Main App component that contains the Memory Game logic
// It now accepts setSelectedGame and setGameMode as props to enable navigation
function App({ setSelectedGame, setGameMode }) {
  // State for game logic
  const [cards, setCards] = useState([]); // Array of card objects { id, value, isFlipped, isMatched }
  const [flippedCards, setFlippedCards] = useState([]); // Stores indices of currently flipped cards
  const [matchedCards, setMatchedCards] = useState([]); // Stores indices of matched cards
  const [turns, setTurns] = useState(0); // Number of turns taken
  const [gameOver, setGameOver] = useState(false); // Game over state
  const [canFlip, setCanFlip] = useState(true); // Prevents flipping more than two cards at once

  // Emojis for card values - these will be the images/symbols on the cards
  const cardEmojis = ['🍎', '🍌', '🍇', '🍓', '🍍', '🥝', '🥭', '🍒'];

  // Function to initialize or reset the game
  const initializeGame = () => {
    // Create pairs of emojis and shuffle them
    const shuffledCards = [...cardEmojis, ...cardEmojis] // Duplicate the emojis to create pairs
      .sort(() => Math.random() - 0.5) // Shuffle the array randomly
      .map((emoji, index) => ({
        id: index, // Unique ID for each card instance (important for React keys)
        value: emoji, // The emoji displayed on the card
        isFlipped: false, // Tracks if the card is currently face-up
        isMatched: false, // Tracks if the card has been successfully matched
      }));

    setCards(shuffledCards); // Set the shuffled cards to state
    setFlippedCards([]); // Clear any previously flipped cards
    setMatchedCards([]); // Clear any previously matched cards
    setTurns(0); // Reset turn count
    setGameOver(false); // Reset game over state
    setCanFlip(true); // Allow cards to be flipped
  };

  // useEffect hook to initialize the game when the component mounts
  useEffect(() => {
    initializeGame();
  }, []); // The empty dependency array ensures this runs only once on mount

  // useEffect hook to handle logic when two cards are flipped
  useEffect(() => {
    if (flippedCards.length === 2) {
      setCanFlip(false); // Temporarily disable flipping to prevent more than two cards being flipped
      const [firstIndex, secondIndex] = flippedCards; // Get the indices of the two flipped cards

      // Check if the values of the two flipped cards match
      if (cards[firstIndex].value === cards[secondIndex].value) {
        // If cards match:
        setMatchedCards((prev) => [...prev, firstIndex, secondIndex]); // Add them to the matched cards array
        setCards((prevCards) =>
          prevCards.map((card, index) =>
            index === firstIndex || index === secondIndex
              ? { ...card, isMatched: true } // Mark matched cards as 'isMatched'
              : card
          )
        );
        setFlippedCards([]); // Clear the flipped cards array
        setCanFlip(true); // Re-enable flipping
      } else {
        // If cards do not match:
        // Flip them back after a short delay (1 second) so the user can see them
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, index) =>
              index === firstIndex || index === secondIndex
                ? { ...card, isFlipped: false } // Flip them back face-down
                : card
            )
          );
          setFlippedCards([]); // Clear the flipped cards array
          setCanFlip(true); // Re-enable flipping
        }, 1000); // 1-second delay
      }
      setTurns((prev) => prev + 1); // Increment the turn counter after each pair of flips
    }
  }, [flippedCards, cards]); // This effect runs whenever `flippedCards` or `cards` state changes

  // useEffect hook to check if the game is over (all cards matched)
  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      setGameOver(true); // Set game over to true if all cards are matched
    }
  }, [matchedCards, cards]); // This effect runs whenever `matchedCards` or `cards` state changes

  // Function to handle a card being clicked
  const handleCardClick = (index) => {
    // Prevent clicking if:
    // - The game is already over
    // - Flipping is temporarily disabled (e.g., waiting for a match check)
    // - The card is already face-up
    // - The card is already matched
    if (gameOver || !canFlip || cards[index].isFlipped || cards[index].isMatched) {
      return;
    }

    // Flip the clicked card face-up
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, isFlipped: true } : card
      )
    );

    // Add the index of the newly flipped card to the `flippedCards` array
    setFlippedCards((prev) => [...prev, index]);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-yellow-100 to-orange-100 min-h-screen rounded-lg shadow-lg w-full max-w-lg mx-auto font-inter relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-wide">Memory Game</h2>
      <p className="text-xl text-gray-700 mb-6 text-center">
        Match pairs of cards in this classic memory challenge!
      </p>

      {/* Display the current number of turns */}
      <div className="text-2xl font-semibold text-gray-800 mb-6">Turns: {turns}</div>

      {/* Game Over Overlay - Appears when all cards are matched */}
      {gameOver && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 rounded-lg">
          <div className="bg-white p-8 rounded-xl shadow-2xl text-center">
            <h3 className="text-5xl font-extrabold text-green-600 mb-4 animate-bounce">🎉 You Won! 🎉</h3>
            <p className="text-2xl text-gray-800 mb-6">It took you {turns} turns.</p>
            <button
              onClick={initializeGame} // Button to play again
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center mx-auto"
            >
              Play Again <RotateCcw className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Grid for the memory game cards */}
      <div className="grid grid-cols-4 gap-4 bg-white p-6 rounded-xl shadow-xl border-4 border-yellow-300">
        {cards.map((card, index) => (
          <div
            key={card.id} // Unique key for each card in the list
            className={`
              w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-24 lg:h-24
              bg-indigo-200 rounded-lg flex items-center justify-center
              text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-700
              shadow-md cursor-pointer transition-all duration-300 transform
              ${card.isFlipped || card.isMatched ? 'bg-indigo-400 scale-105' : 'hover:bg-indigo-300'}
              ${card.isMatched ? 'opacity-50 pointer-events-none' : ''}
            `}
            onClick={() => handleCardClick(index)} // Attach click handler to each card
          >
            {/* Display emoji if flipped or matched, otherwise display '?' */}
            {card.isFlipped || card.isMatched ? card.value : '?'}
          </div>
        ))}
      </div>

      {/* Button to start a new game manually */}
      <button
        onClick={initializeGame}
        className="mt-10 px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 flex items-center justify-center"
      >
        Start New Game <Play className="inline-block ml-2 w-5 h-5" />
      </button>

      {/* Button to go back to mode selection */}
      <button
        onClick={() => {
          // These functions would be passed as props from a parent component
          // that manages the overall game selection or modes.
          if (setSelectedGame) setSelectedGame(null);
          if (setGameMode) setGameMode(null);
          console.log("Back button clicked");
        }}
        className="mt-4 px-8 py-3 bg-gray-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        Back to Mode Selection
      </button>
    </div>
  );
}

export default App; // Export App as the default component
