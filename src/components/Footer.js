import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 p-6 text-center mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} GameZone. All rights reserved.</p>
        <p className="text-sm mt-2">Designed with passion for gamers.</p>
      </div>
    </footer>
  );
}

export default Footer;