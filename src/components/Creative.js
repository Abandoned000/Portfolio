import React from 'react'
import Art1 from '../assets/Art1.png'
import Art2 from '../assets/Art2.png'
import Bg from '../assets/CBackground.png'
const Creative = () => {
    return (
        <div className='px-5' >
            <div className='text-center pt-32 space-y-2'>
                <p className='font-semibold text-2xl'> Creative Works</p>
                <p className='font-extrabold text-5xl'> Art Portfolio </p>
            </div>
            <div className='flex text-center mt-12 justify-around flex-col md:flex-row'>
                <div className='space-y-4'>
                    <img src={Art1} />
                    <p className='font-normal text-xl'> 20/11/2023</p>
                    <p className='font-bold text-3xl'> The Captain’s Hat</p>
                    <p className='font-normal text-lg'> Lorem ipsum dolor sit amet consectetur. Odio massa auctor nisl</p>
                </div>
                <div className='space-y-4'>
                    <img src={Art2} />
                    <p className='font-normal text-xl'> 20/11/2023</p>
                    <p className='font-bold text-3xl'> The Captain’s Hat</p>
                    <p className='font-normal text-lg'> Lorem ipsum dolor sit amet consectetur. Odio massa auctor nisl</p>
                </div>
            </div>
            <div className='text-center mt-12 mb-32 px-64'>
                <p className='font-bold text-xl text-purple-500'> Feel free to get in touch with me if you have any questions, want to collaborate, or just want to chat about our shared interests.
                    I'm always open to new connections and opportunities!</p>
            </div>
        </div>
    )
}

export default Creative
