import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [error, setError] = useState("");

  const [questions, setQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      correctAnswer: ""
    },
  ]);

   const navigate = useNavigate();
  // Handlers
  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

 const handleCorrectAnswer = (qIndex, index) => {
  const updated = [...questions];
  updated[qIndex].correctAnswer = index;
  setQuestions(updated);
};

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };

  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  // Validation
  const validateForm = () => {
    if (!title || !timeLimit || !startTime || !endTime) {
      return "All fields are required";
    }

    if (new Date(endTime) <= new Date(startTime)) {
      return "End time must be greater than start time";
    }

    for (let q of questions) {
      if (!q.question) return "All questions must be filled";
      if (q.options.some((opt) => !opt))
        return "All options must be filled";
      if (!q.correctAnswer)
        return "Select correct answer for each question";
    }

    return "";
  };

  // Submit
  const handleSubmit = async(e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    console.log(questions)

  
    

    try{
        const res = await axios.post("http://localhost:3000/api/quiz/create",{
         title,
         timeLimit: Number(timeLimit),
         startTime,
        endTime,
        questions,
    },
     {
     withCredentials: true, // ✅ MUST
    }
    );
        console.log("create successfully")
        navigate("/")

    }catch(err){
         console.log(err.response?.data || err.message);
        //   alert(err.response?.data );
    }
    // 🔥 API Call
    // fetch("/api/quiz/create", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(quizData),
    // });
  };

  return (
    <div className="min-h-screen bg-purple-500 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-purple-600 mb-6">
          Create Quiz
        </h1>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <input
            type="text"
            placeholder="Quiz Title"
            className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-purple-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Time Limit */}
          <input
            type="number"
            placeholder="Time Limit (minutes)"
            className="w-full p-3 border rounded-lg mb-4"
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
          />

          {/* Start Time */}
          <label className="block mb-1 font-medium">Start Time</label>
          <input
            type="datetime-local"
            className="w-full p-3 border rounded-lg mb-4"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />

          {/* End Time */}
          <label className="block mb-1 font-medium">End Time</label>
          <input
            type="datetime-local"
            className="w-full p-3 border rounded-lg mb-6"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />

          {/* Questions */}
          {questions.map((q, qIndex) => (
            <div
              key={qIndex}
              className="mb-6 p-4 border rounded-lg bg-purple-50"
            >
              <div className="flex justify-between mb-2">
                <h2 className="font-semibold">
                  Question {qIndex + 1}
                </h2>
                {questions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeQuestion(qIndex)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Question */}
              <input
                type="text"
                placeholder="Enter question"
                className="w-full p-2 border rounded mb-3"
                value={q.question}
                onChange={(e) =>
                  handleQuestionChange(qIndex, e.target.value)
                }
              />

              {/* Options + Radio */}
              {q.options.map((opt, oIndex) => (
               <div key={oIndex} className="flex items-center mb-2">
                <input
                 type="radio"
                 name={`correct-${qIndex}`}
                 className="mr-2"
                 checked={q.correctAnswer === oIndex}
                 onChange={() => handleCorrectAnswer(qIndex, oIndex)}
                />
                 <input
                 type="text"
                  placeholder={`Option ${oIndex + 1}`}
                  className="w-full p-2 border rounded"
                  value={opt}
                   onChange={(e) =>
                  handleOptionChange(qIndex, oIndex, e.target.value)
             }
            />
              </div>
           ))}
            </div>
          ))}

          {/* Add Question */}
          <button
            type="button"
            onClick={addQuestion}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-purple-700"
          >
            + Add Question
          </button>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600"
          >
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateQuiz;