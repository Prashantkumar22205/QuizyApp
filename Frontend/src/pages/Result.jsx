import React from 'react'

const Result = ({ attempts}) => {
  return (
     <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Your Quiz Results</h1>

      {(!attempts || attempts.length === 0) && (
        <p className="text-gray-600">No quiz attempts yet.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {attempts &&
          attempts.map((attempt) => (
            <div
              key={attempt.id}
              className="bg-white shadow-md border border-gray-200 rounded-xl p-5 flex flex-col justify-between"
            >
              {/* Quiz Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {attempt.quizTitle}
              </h2>

              {/* Score */}
              <p className="text-lg font-medium text-blue-600 mb-1">
                Score: {attempt.score} / {attempt.total}
              </p>

              {/* Date */}
              <p className="text-sm text-gray-500 mb-4">
                Taken on: {new Date(attempt.takenAt).toLocaleString()}
              </p>

              {/* View Button */}
              <button
               
                className="self-start px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition active:scale-95"
              >
                View Result
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Result
