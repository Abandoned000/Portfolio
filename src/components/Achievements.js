import React from 'react'

const Achievements = () => {
  return (
    <div className=' px-5 space-y-8 '>
      <div className='pt-32 '>
        <div className='text-center'>
          <p className='font-semibold text-2xl text-purple-600'>Achievements</p>
          <p className='font-extrabold text-5xl'>Standard Test Scores </p>
        </div>

      </div>
      <div className='flex gap-8 pb-32 justify-center flex-wrap md:flex-row'>
        <div className='bg-purple-600 text-white px-8 py-6 rounded-xl'> SAT: <span className='font-bold'> 1520/1600</span></div>
        <div className='bg-purple-600 text-white px-8 py-6 rounded-xl'> IELTS: <span className='font-bold'> 7.5/9.0</span></div>
        <div className='bg-purple-600 text-white px-8 py-6 rounded-xl'> AP Calculus BC: <span className='font-bold'> 5</span></div>
        <div className='bg-purple-600 text-white px-8 py-6 rounded-xl'> AP Statistic: <span className='font-bold'> 4 </span></div>
      </div>
    </div>
  )
}

export default Achievements