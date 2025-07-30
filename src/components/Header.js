import React from 'react';
import { Gamepad, Home, Info, Mail, Trophy } from 'lucide-react';

function Header({ setCurrentPage, currentPage }) {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-800 text-white p-4 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight mb-3 sm:mb-0">
          <Gamepad className="inline-block mr-3 w-8 h-8" />
          GameZone
        </h1>
        <nav>
          <ul className="flex space-x-4 sm:space-x-6">
            <li>
              <button
                onClick={() => setCurrentPage('home')}
                className={`flex items-center text-lg font-medium px-3 py-2 rounded-lg transition duration-300 ${currentPage === 'home' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'}`}
              >
                <Home className="mr-2 w-5 h-5" /> Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('games')}
                className={`flex items-center text-lg font-medium px-3 py-2 rounded-lg transition duration-300 ${currentPage === 'games' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'}`}
              >
                <Trophy className="mr-2 w-5 h-5" /> Games
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('about')}
                className={`flex items-center text-lg font-medium px-3 py-2 rounded-lg transition duration-300 ${currentPage === 'about' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'}`}
              >
                <Info className="mr-2 w-5 h-5" /> About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage('contact')}
                className={`flex items-center text-lg font-medium px-3 py-2 rounded-lg transition duration-300 ${currentPage === 'contact' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'}`}
              >
                <Mail className="mr-2 w-5 h-5" /> Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;