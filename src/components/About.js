import React from 'react'
import Picture2 from '../assets/cat2.png'
import Facebook from '../assets/Fb.png'
import Github from '../assets/Github.png'
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
                    <p className='font-normal text-xl min-w-96 '> I was born and raised up in a southern city of Vietnam my whole childhood. After graduating from middle school, I moved to the US for further education. Currently, I'm focusing on Computer Science major at Cambridge Arts, Technology & Science Academy in Boston, Massachusetts.</p>
                </div>
                <div className='text-xl space-y-4'>
                    <p> Date of Birth <span className='font-bold'> 12th June, 2008</span></p>
                    <p> Phone <span className='font-bold'> (+84) 03391206</span></p>
                    <p> Email <span className='font-bold'> lhanhkhoa1206@gmail.com </span></p>
                    <p> Address <span className='font-bold'> Ho Chi Minh, Vietnam</span></p>
                </div>
                <div className='flex gap-8 justify-center md:justify-start'>
                    <a href="https://www.facebook.com/profile.php?id=100075867833213&locale=vi_VN"><img className='h-8' src= {Facebook}/> </a>
                    <a href="https://github.com/Abandoned000"><img className='h-8' src= {Github}/> </a>
                    <a href="https://www.instagram.com/jlhakhoa08/"><img className='h-8' src= {IG}/></a>
                </div>
            </div>
        </div>
    )
}

export default About