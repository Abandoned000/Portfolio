import React from 'react'
import Picture1 from '../assets/cat1.jpg'
import Bg from '../assets/Background.png'
function Welcome() {
    return (
        <div style={{ backgroundImage: `url(${Bg})` }} className='bg-no-repeat bg-cover py-16'>
            <div className="mt-[88px] flex flex-col-reverse md:flex-row gap-8 justify-between container mx-auto px-36 items-center ">
                <div className='space-y-3 text-center md:text-left'>
                    <p className='font-semibold font-sans text-3xl'>Hello, I Am</p>
                    <p className='text-purple-600 text-4xl md:text-6xl font-extrabold '>Lai Huynh Anh Khoa</p>
                    <p className='font-normal text-2xl'>I'm a student who have huge passion with Computer Science.</p>
                    <button className='bg-yellow-500 text-white rounded-xl py-3 px-5 mt-5'>
                        <p>Contact Me </p>
                    </button>
                </div>
                <div className='overflow-hidden rounded-full p-2 bg-purple-200 shadow-sm'>
                    <img className='h-96 rounded-full'src={Picture1} />
                </div>
            </div>

        </div>
    )
}

export default Welcome