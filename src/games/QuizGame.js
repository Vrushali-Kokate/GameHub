import React, { useState, useEffect } from 'react';
import { Play, RotateCcw } from 'lucide-react';

function App({ setSelectedGame, setGameMode }) {
  // Quiz data: questions, options, and correct answers
  const quizQuestions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who painted the Mona Lisa?',
      answerOptions: [
        { answerText: 'Vincent van Gogh', isCorrect: false },
        { answerText: 'Leonardo da Vinci', isCorrect: true },
        { answerText: 'Pablo Picasso', isCorrect: false },
        { answerText: 'Claude Monet', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the largest planet in our solar system?',
      answerOptions: [
        { answerText: 'Earth', isCorrect: false },
        { answerText: 'Mars', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: true },
        { answerText: 'Saturn', isCorrect: false },
      ],
    },
    {
      questionText: 'Which element has the chemical symbol "O"?',
      answerOptions: [
        { answerText: 'Gold', isCorrect: false },
        { answerText: 'Oxygen', isCorrect: true },
        { answerText: 'Osmium', isCorrect: false },
        { answerText: 'Oganesson', isCorrect: false },
      ],
    },
    {
      questionText: 'How many continents are there?',
      answerOptions: [
        { answerText: '5', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
        { answerText: '8', isCorrect: false },
      ],
    },
  ];

  // State for quiz logic
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracks current question
  const [score, setScore] = useState(0); // User's score
  const [showScore, setShowScore] = useState(false); // Controls display of score screen
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null); // Index of the selected answer
  const [feedbackMessage, setFeedbackMessage] = useState(''); // Message for correct/incorrect feedback
  const [quizStarted, setQuizStarted] = useState(false); // To show initial start screen

  // Function to start or restart the quiz
  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswerIndex(null);
    setFeedbackMessage('');
    setQuizStarted(true);
  };

  // Handle answer option click
  const handleAnswerOptionClick = (isCorrect, index) => {
    if (selectedAnswerIndex !== null) return; // Prevent multiple clicks on the same question

    setSelectedAnswerIndex(index);

    if (isCorrect) {
      setScore(score + 1);
      setFeedbackMessage('Correct!');
    } else {
      setFeedbackMessage('Incorrect!');
    }

    // Move to the next question after a short delay
    setTimeout(() => {
      const nextQuestion = currentQuestionIndex + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestionIndex(nextQuestion);
        setSelectedAnswerIndex(null); // Reset selected answer for next question
        setFeedbackMessage(''); // Clear feedback for next question
      } else {
        setShowScore(true); // Show score screen if all questions are answered
      }
    }, 1500); // 1.5 second delay to show feedback
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-100 to-indigo-100 min-h-screen rounded-lg shadow-lg w-full max-w-lg mx-auto font-inter relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-wide">Quiz Game</h2>
      <p className="text-xl text-gray-700 mb-6 text-center">
        Test your knowledge with these fun questions!
      </p>

      {!quizStarted ? (
        // Initial screen to start the quiz
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl text-gray-700 mb-8">Ready to challenge yourself?</p>
          <button
            onClick={startQuiz}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center"
          >
            Start Quiz <Play className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      ) : showScore ? (
        // Score screen
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 rounded-lg">
          <div className="bg-white p-8 rounded-xl shadow-2xl text-center">
            <h3 className="text-5xl font-extrabold text-blue-600 mb-4 animate-bounce">Quiz Completed!</h3>
            <p className="text-3xl text-gray-800 mb-6">
              You scored {score} out of {quizQuestions.length}
            </p>
            <button
              onClick={startQuiz}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center mx-auto"
            >
              Play Again <RotateCcw className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        // Question and answer options
        <div className="w-full">
          <div className="text-xl font-semibold text-gray-800 mb-4">
            Question {currentQuestionIndex + 1}/{quizQuestions.length}
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl border-4 border-purple-300 mb-6">
            <div className="text-2xl font-bold text-gray-900 mb-4">
              {quizQuestions[currentQuestionIndex].questionText}
            </div>
            <div className="grid grid-cols-1 gap-4">
              {quizQuestions[currentQuestionIndex].answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option.isCorrect, index)}
                  className={`
                    w-full px-6 py-3 rounded-lg text-lg font-semibold shadow-md
                    transition-all duration-300 ease-in-out transform hover:scale-105
                    ${selectedAnswerIndex === index
                      ? (option.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                      : 'bg-indigo-200 text-indigo-800 hover:bg-indigo-300'
                    }
                    ${selectedAnswerIndex !== null && !option.isCorrect && selectedAnswerIndex !== index
                      ? 'opacity-50' // Dim incorrect, unselected options after an answer is chosen
                      : ''
                    }
                    ${selectedAnswerIndex !== null ? 'pointer-events-none' : ''}
                  `}
                >
                  {option.answerText}
                </button>
              ))}
            </div>
            {feedbackMessage && (
              <div className={`mt-4 text-center text-xl font-bold ${feedbackMessage === 'Correct!' ? 'text-green-600' : 'text-red-600'}`}>
                {feedbackMessage}
              </div>
            )}
          </div>
        </div>
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