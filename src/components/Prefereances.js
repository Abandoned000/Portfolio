import React from 'react'
import Tennis from '../assets/Tennis.png'
import Cooking from '../assets/Cooking.png'
import Badminton from '../assets/Badminton.png'
import Guitar from '../assets/Guitar.png'
import Bg from '../assets/PBackground.png'

const Prefereances = () => {
    return (
        <div className='flex px-36 py-32 gap-16 bg-no-repeat bg-cover flex-col-reverse md:flex-row' style={{ backgroundImage: `url(${Bg})` }}>
            <div className='flex gap-8 flex-col md:flex-row'>
                <div className=' space-y-8'>
                    <img className='w-[264px] aspect-square' src={Tennis} />
                    <img className='w-[264px] aspect-square' src={Cooking} />
                </div>
                <div className=' space-y-8'>
                    <img className='w-[264px] aspect-square' src={Badminton} />
                    <img className='w-[264px] aspect-square' src={Guitar} />
                </div>
            </div>
            <div className=' space-y-6 w-[528px]'>
                <div className='space-y-2 '>
                    <p className='font-semibold text-2xl text-purple-500'> My Preferences </p>
                    <p className='font-extrabold text-5xl'> Tennis, Badminton, Cooking, Guitar </p>
                </div>
                <div className='space-y-3'>
                    <p className='font-normal text-xl text-gray-600'> Tennis is a sport that has been a part of my life for many years. I enjoy the physical challenge it offers and the mental focus it demands. </p>
                    <p className='font-normal text-xl text-gray-600'> Badminton is another sport that I'm passionate about. It's a fast-paced game that requires agility and precision.</p>
                    <p className='font-normal text-xl text-gray-600'> Cooking is my creative outlet. I enjoy trying out new recipes and sharing the food with my other people.</p>
                    <p className='font-normal text-xl text-gray-600'> The guitar has been my musical companion for recent years. I find solace in strumming chords and creating melodies.</p>
                </div>
            </div>
        </div>
    )
}

export default Prefereances