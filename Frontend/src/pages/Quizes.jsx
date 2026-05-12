import React from 'react'
import Quizzcard from '../component/Quizzcard'

const Quizes = () => {
  return (
    <div className='h-[78vh] w-[85vw] absolute left-[85px] top-[114px] bg-purple-200 rounded-[10px] shadow-lg shadow-purple-500/50 inset-shadow-sm  inset-shadow-purple-500/50 '>
      <h1 className='text-4xl text-purple-500 font-bold px-8 py-7  '>Schuled Quizes</h1>
      <div className='flex flex-col gap-y-5 h-[63vh] w-[85vw] overflow-auto' id='right'>
     <Quizzcard/>
     <Quizzcard/>
     <Quizzcard/>
     <Quizzcard/>
     <Quizzcard/>
     <Quizzcard/>
     <Quizzcard/>
     
     </div>
    </div>
  )
}

export default Quizes
