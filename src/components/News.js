import React from 'react'
import News1 from '../assets/News1.png'
import News2 from '../assets/News2.png'
import News3 from '../assets/News3.png'
import Bg from '../assets/NBackground.png'
const News = () => {
    return (
        <div className=' bg-no-repeat bg-cover'style={{ backgroundImage: `url(${Bg})` }}>
            <div className='text-center pt-32'>
                <p className='font-semibold text-2xl text-purple-500'> Lastest News</p>
                <p className='font-extrabold text-6xl'> Block & Articles</p>
            </div>
            <div className='flex mt-12 px-36 justify-between pb-32'>
                <div className='w-[362px] space-y-2 px-4 pt-4 pb-6 bg-white rounded-3xl'>
                    <img src={News1} />
                    <div className='flex gap-20'> 
                        <p className='font-normal text-base text-purple-500'> By David William</p>
                        <p className=' font-normal text-base'> Mar 8,2023</p>
                    </div>
                    <p className='font-bold text-2xl'>Quis autem vea eum iure reprehenderit</p>
                    <p className='font-normal text-lg'> Dolor repellendus temporibus autem quibusdam officiis debitis rerum nece aibus minima veniam.</p>
                    <p className='font-bold text-sm text-yellow-500'> Read more</p>
                </div>
                <div className='w-[362px] space-y-2 px-4 pt-4 pb-6 bg-white rounded-3xl'>
                    <img src={News2} />
                    <div className='flex gap-20'> 
                        <p className='font-normal text-base text-purple-500'> By David William</p>
                        <p className=' font-normal text-base'> Mar 8,2023</p>
                    </div>
                    <p className='font-bold text-2xl'>Quis autem vea eum iure reprehenderit</p>
                    <p className='font-normal text-lg'> Dolor repellendus temporibus autem quibusdam officiis debitis rerum nece aibus minima veniam.</p>
                    <p className='font-bold text-sm text-yellow-500'> Read more</p>
                </div>
                <div className='w-[362px] space-y-2 px-4 pt-4 pb-6 bg-white rounded-3xl'>
                    <img src={News3} />
                    <div className='flex gap-20'> 
                        <p className='font-normal text-base text-purple-500'> By David William</p>
                        <p className=' font-normal text-base'> Mar 8,2023</p>
                    </div>
                    <p className='font-bold text-2xl'>Quis autem vea eum iure reprehenderit</p>
                    <p className='font-normal text-lg'> Dolor repellendus temporibus autem quibusdam officiis debitis rerum nece aibus minima veniam.</p>
                    <p className='font-bold text-sm text-yellow-500'> Read more</p>
                </div>
            </div>
        </div>
    )
}

export default News