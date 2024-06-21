import React from 'react'
import Picture2 from '../assets/img2.png'
import Facebook from '../assets/Fb.png'
import Link from '../assets/Linkein.png'
import IG from '../assets/IG.png'
import bg from '../assets/Aboutbg.png'
const About = () => {
    return (
        <div className='flex justify-between px-36 items-center gap-24 bg-no-repeat bg-cover py-16 md:pt-24' style={{ backgroundImage: `url(${bg})` }} >
            <div className='w-1/3 hidden md:block'>
                <img className='w-[480px]' src={Picture2} />
            </div>
            <div className='space-y-12 md:w-2/3 text-center md:text-left w-full'>
                <div className='space-y-4 '>
                    <p className='font-extrabold text-5xl text-purple-700'> About <span className='text-yellow-400'>Me</span></p>
                    <p className='font-normal text-xl min-w-96 '> I was born and raised up in a southern city of Vietnam my whole childhood. After graduating from middle school, I moved to the US for further education. Right now, I am a high school student at Villanova Preparatory School in Ojai, California.</p>
                </div>
                <div className='text-xl space-y-4'>
                    <p> Date of Birth <span className='font-bold'> 18th July, 2006</span></p>
                    <p> Phone <span className='font-bold'> (+84) 345622456</span></p>
                    <p> Email <span className='font-bold'> emaildemo@gmail.com</span></p>
                    <p> Address <span className='font-bold'> Hanoi, Vietnam</span></p>
                </div>
                <div className='flex gap-8 justify-center md:justify-start'>
                    <img src= {Facebook}/>
                    <img src= {Link}/>
                    <img src= {IG}/>
                </div>
            </div>
        </div>
    )
}

export default About