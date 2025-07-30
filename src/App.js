import React, { useState } from 'react';
// Import all components from their respective files
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import GameSelection from './components/GameSelection';
import GameModeSelection from './components/GameModeSelection';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';

// Import game components
import TicTacToe from './games/TicTacToe';
import MemoryGame from './games/MemoryGame';
import WhackAMoleGame from './games/WhackAMoleGame';
import PuzzleGame from './games/PuzzleGame';
import QuizGame from './games/QuizGame';
import RockPaperScissors from './games/RockPaperScissors';
import Hangman from './games/Hangman';
import ComingSoonGame from './games/ComingSoonGame';


function App() {
  // State to manage the currently selected page (e.g., 'home', 'games', 'about', 'contact')
  const [currentPage, setCurrentPage] = useState('home');
  // State to manage the currently selected game from the games list
  const [selectedGame, setSelectedGame] = useState(null);
  // State to manage solo/team mode for a selected game
  const [gameMode, setGameMode] = useState(null);

  // --- Main Content Rendering Logic ---
  // Renders the appropriate content based on the current page, selected game, and game mode
  const renderMainContent = () => {
    // If a game is selected and a mode is chosen (or it's a 'coming soon' game that doesn't need mode selection)
    if (selectedGame && (gameMode || ['ChessComingSoon', 'WhackAMoleGame', 'PuzzleGame'].includes(selectedGame))) {
      switch (selectedGame) {
        case 'TicTacToe':
          return <TicTacToe setSelectedGame={setSelectedGame} setGameMode={setGameMode} />; // Pass state setters if needed
        case 'MemoryGame':
          return <MemoryGame setSelectedGame={setSelectedGame} setGameMode={setGameMode} />;
        case 'WhackAMoleGame':
          return <WhackAMoleGame setSelectedGame={setSelectedGame} />;
        case 'PuzzleGame':
          return <PuzzleGame setSelectedGame={setSelectedGame} />;
          case 'QuizGame':
          return <QuizGame setSelectedGame={setSelectedGame} />;
          case 'RockPaperScissors':
          return <RockPaperScissors setSelectedGame={setSelectedGame} />;
          case 'Hangman':
          return <Hangman setSelectedGame={setSelectedGame} />;
        case 'ChessComingSoon':
          return <ComingSoonGame gameName="Chess" setSelectedGame={setSelectedGame} />;
        default:
          return <GameSelection setSelectedGame={setSelectedGame} />; // Fallback to game selection
      }
    }
    // If a game is selected but no mode is chosen, and it's not a 'coming soon' game
    else if (selectedGame && !gameMode) {
      return <GameModeSelection setSelectedGame={setSelectedGame} setGameMode={setGameMode} />;
    }
    // If no game is selected, render content based on the current page
    else {
      switch (currentPage) {
        case 'home':
          return <HomePage setCurrentPage={setCurrentPage} />;
        case 'games':
          return <GameSelection setSelectedGame={setSelectedGame} />;
        case 'about':
          return <AboutUsPage setCurrentPage={setCurrentPage} />;
        case 'contact':
          return <ContactPage />;
        default:
          return <HomePage setCurrentPage={setCurrentPage} />; // Default to home page
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-inter">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow flex items-center justify-center p-4">
        {renderMainContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;