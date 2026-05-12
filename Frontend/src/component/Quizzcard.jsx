import React from 'react'

const Quizzcard = () => {
  return (
    <div className='h-20 w-300 p-5 rounded-[8px] mx-10 bg-transparent  shadow-xl shadow-purple-300 flex items-center justify-between '>
           <h1 className='text-xl font-medium text-'>React basic knowledge test</h1>
           <div className='flex items-center gap-20 '>
           <h2 className='h-10 w-30 flex items-center justify-center rounded  bg-white'>20/11/2025</h2>
           <h2 className='h-10 w-30 flex items-center justify-center rounded  bg-white'>5:00am</h2>
           <a className='h-10 w-30 flex items-center justify-center rounded  bg-purple-400 text-[18px] font-medium active:scale-96' href="">Start</a>
           </div>
      </div>
  )
}

export default Quizzcard
