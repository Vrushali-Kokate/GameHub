import React from 'react';

function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen rounded-lg shadow-lg text-center w-full max-w-3xl mx-auto">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-tight leading-tight">
        Get in Touch
      </h2>
      <p className="text-xl text-gray-700 mb-8 max-w-xl">
        We'd love to hear from you! Whether you have feedback, suggestions, or just want to say hello, feel free to reach out.
      </p>
      <div className="bg-white p-8 rounded-xl shadow-xl w-full">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 text-left mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 text-left mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 text-left mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-green-700 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-700 hover:to-green-800 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;