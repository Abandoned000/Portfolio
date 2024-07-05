import React from 'react'
import Tennis from '../assets/Tennis.png'
import Travelling from '../assets/Travelling.jpg'
import Basketball from '../assets/Basketball.png'
import Workout from '../assets/Workout.jpg'
import Bg from '../assets/PBackground.png'

const Prefereances = () => {
    return (
        <div className='flex  py-32  bg-no-repeat bg-cover flex-col-reverse md:flex-row  justify-between' style={{ backgroundImage: `url(${Bg})` }}>
            <div className='flex gap-8 flex-col md:flex-row md:px-36 px-5'>
                <div className=' space-y-8 '>
                    <img className='w-full h-96 md:h-60 md:w-[264px] aspect-square rounded-3xl' alt='img'src={Tennis} />
                    <img className='w-full h-96 md:h-60 md:w-[264px] aspect-square rounded-3xl' alt='img'src={Travelling} />
                </div>
                <div className=' space-y-8'>
                    <img className='w-full h-96 md:h-60 md:w-[264px] aspect-square rounded-3xl' alt='img'src={Basketball} />
                    <img className='w-full h-96 md:h-60 md:w-[264px] aspect-square rounded-3xl' alt='img'src={Workout} />
                </div>
            </div>
            <div className=' space-y-6 md:w-[528px] md:text-left text-center md:px-0 px-5'>
                <div className='space-y-2 '>
                    <p className='font-semibold text-2xl text-purple-500'> My Preferences </p>
                    <p className='font-extrabold text-3xl md:text-5xl'> Tennis, Basketball, Traveling, Workout </p>
                </div>
                <div className='space-y-3'>
                    <p className='font-normal text-base md:text-xl text-gray-600'> Tennis is a sport that has been a part of my life for many years. I enjoy improving myself through out every tennis course and competition. </p>
                    <p className='font-normal text-base md:text-xl text-gray-600'> Basketball is another sport that I'm passionate about. It also help me relieve stress, develop teamwork and communication skills, and boost my confidence.</p>
                    <p className='font-normal text-base md:text-xl text-gray-600'> For me, traveling is a fascinating way to expand my horizons. I always enjoy experiencing different culture when travel to another places.</p>
                    <p className='font-normal text-base md:text-xl text-gray-600'> Working out is a huge mark of my life. It improves my mental-health and my physics.</p>
                </div>
            </div>
        </div>
    )
}

export default Prefereances