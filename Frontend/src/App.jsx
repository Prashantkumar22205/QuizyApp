import React from 'react'
import {Routes,Route, Outlet} from 'react-router-dom'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import Quizes from './pages/Quizes'
import Result from './pages/Result'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateQuiz from './pages/Createquiz'

const App = () => {

   const attempts = [
    {
      id: "1",
      quizTitle: "React Basics Quiz",
      score: 8,
      total: 10,
      takenAt: "2025-11-25T14:30:00",
    },
    {
      id: "2",
      quizTitle: "JavaScript Fundamentals",
      score: 6,
      total: 10,
      takenAt: "2025-11-26T10:15:00",
    }
  ];

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />}  />
        <Route path="/quizes" element={<Quizes/>} />
        <Route path="/result" element={<Result attempts={attempts} />} />
        <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/create" element={<CreateQuiz/>} />
       
       
      </Routes>
     
    </div>
  )
}

export default App
