import React from 'react';
import { Mail } from 'lucide-react';

function AboutUsPage({ setCurrentPage }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen rounded-lg shadow-lg text-center w-full max-w-4xl mx-auto">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-tight leading-tight">
        About <span className="text-purple-700">GameZone</span>
      </h2>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl">
        GameZone is a passion project developed for our college curriculum, aiming to create a vibrant and engaging online gaming platform. Our goal is to provide a seamless and enjoyable experience for gamers of all levels.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To build an accessible and fun environment where users can discover, play, and connect through a variety of engaging games. We focus on user experience, performance, and a clean, intuitive interface.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Technology Stack</h3>
          <ul className="list-disc list-inside text-gray-600 text-left">
            <li>React for dynamic and responsive user interfaces.</li>
            <li>Tailwind CSS for efficient and beautiful styling.</li>
            <li>Modern JavaScript for interactive game logic.</li>
            <li>Lucide React for scalable and professional icons.</li>
          </ul>
        </div>
      </div>
      <button
        onClick={() => setCurrentPage('contact')}
        className="mt-12 px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-700 text-white font-bold text-lg rounded-full shadow-lg hover:from-teal-700 hover:to-cyan-800 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300"
      >
        Contact Us <Mail className="inline-block ml-2 w-5 h-5" />
      </button>
    </div>
  );
}

export default AboutUsPage;