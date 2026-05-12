import React from 'react'
import { Link } from 'react-router-dom'
const Homepage = () => {
  return (
    
    <div className='h-[50vh] absolute left-[24%] top-[30%] flex items-center  flex-col '>
     <h1 className='text-8xl font-bold outline-purple-500 '>Welcome to <span className='text-purple-500'>Quizy</span></h1>
     
     <h3 className='text-xl text-gray-500 mt-5'>Test What You Know. Learn What You Don’t.</h3>
     <p>Create personalized quizzes or take ready-made challenges—all in one clean, intuitive platform.</p>

     <div className='flex  gap-5  mt-5'>
       <a className='h-10 w-30 bg-purple-700 text-xl text-white rounded hover:bg-purple-500 flex items-center justify-center  active:scale-95' href="">Start Quiz</a>

       <Link className='h-10 w-40 bg-purple-700 text-xl text-white rounded hover:bg-purple-500 flex items-center justify-center   active:scale-95' to="/create">Schedule Quiz</Link>
     </div>
    </div>
    
  )
}

export default Homepage
