import React from 'react'
import Logo from '../assets/ava.jpg'

const Header = () => {
    return (
        <div className='bg-white fixed top-0 left-0 right-0 py-5 px-36 shadow-md'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <img className='h-7 rounded-full'alt='img'src={Logo} />
                    <p className='font-bold'> Lai Huynh Anh Khoa</p>
                </div>
                <div className='bg-yellow-500 py-3 px-6 rounded-xl'>
                    <p className='font-bold text-white'> Let's talk</p>
                </div>

            </div>
        </div>
    )
}

export default Header