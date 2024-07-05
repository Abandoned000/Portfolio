import React from 'react'
import P1 from '../assets/School.jpg'
import P2 from '../assets/Friends.jpg'
import Bg from '../assets/CBackground.png'
const Creative = () => {
    return (
        <div className='px-5' >
            <div className='text-center pt-32 space-y-2'>
                <p className='font-extrabold text-5xl'> LIFE</p>
                <p className='font-extrabold text-5xl'>  Memories </p>
            </div>
            <div className='flex text-center mt-12 justify-around flex-col md:flex-row '>
                <div className='space-y-4 w-full md:w-1/2'>
                    <div className='justify-center flex'>
                        <img className='h-[600px] w-96' alt='img' src={P1} />
                    </div>
                    <p className='font-normal text-xl'> 20/11/2023</p>
                    <p className='font-bold text-3xl'> The Captain’s Hat</p>
                    <p className='font-normal text-lg'> Lorem ipsum dolor sit amet consectetur. Odio massa auctor nisl</p>
                </div>
                <div className='space-y-4 w-full md:w-1/2 md:mt-0 mt-10'>
                    <div className='justify-center flex'>
                        <img className='h-[600px] w-96 ' alt='img' src={P2} />
                    </div>
                    <p className='font-normal text-xl'> 19/03/2023</p>
                    <p className='font-bold text-3xl'> Supportive Group</p>
                    <p className='font-normal text-lg '> This is me, two of my friends, and my teacher. They give me the most inspirations and motivations on my journey </p>
                </div>
            </div>
            <div className='text-center mt-12 mb-32 px-5 md:px-64 '>
                <p className='font-bold text-xl text-purple-500'> Feel free to get in touch with me if you have any questions, want to collaborate, or just want to chat about our shared interests.
                    I'm always open to new connections and opportunities!</p>
            </div>
        </div>
    )
}

export default Creative
