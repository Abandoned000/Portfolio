import React from 'react'

import Bg from '../assets/NBackground.png'
import Slider from "react-slick";
import Val from '../assets/val.jpg'
import Lol from '../assets/lol.jpg'
import Gh from '../assets/Gith.png'
import YT from '../assets/YT.jpg'
const NewCard = (props) => {
    return (
        <div className='flex-1 space-y-2 p-6 bg-white rounded-3xl m-4 md:max-w-96 md:mx-auto min-h-[448px]'>
            <a href={props.link}><img alt='img' src={props.img} className='w-full rounded-xl' /></a>
            <div className='flex justify-between'>
                <p className='font-normal text-base text-purple-500'> {props.name}</p>
                <p className=' font-normal text-base'> {props.date}</p>
            </div>
            <p className='font-bold text-2xl'>{props.title}</p>
            <p className='font-normal text-lg'> {props.content}</p>
            <p className='font-bold text-sm text-yellow-500'> Read more</p>
        </div>
    )
}

const News = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        speed:500,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${Bg})` }}>
            <div className='text-center pt-32'>
                <p className='font-semibold text-2xl text-purple-500'>Latest Activities</p>
                <p className='font-extrabold text-6xl'>Recently visited</p>
            </div>
            <div className='py-24 md:px-12'>
                <Slider {...settings}>
                    <NewCard img={Val} name="By Riot" date='02 June 2020' title="Why am I choosing this game" content="Valorant actually train my accuracy and help me to relax in free time" link='https://playvalorant.com/vi-vn/'/>
                    <NewCard img={Lol} name="By Riot" date='27 October 2009' title=" Why am I choosing this game?" content="This game improve my mindset and train my typing speed." link='https://www.leagueoflegends.com/en-us/'/>
                    <NewCard img={Gh} name="By Microsoft" date='April 2008' title=" Why did I visit Github?" content="I recently leaning programming so I choose Github to store my projects" link='https://github.com/'/>
                    <NewCard img={YT} name="By Google" date='15 December 2005' title=" Why am I visit Youtube this much?" content="Youtube is the best partner who helping me in my academic work and relaxing" link='https://www.youtube.com/'/>
                </Slider>
            </div>
        </div>
    )
}

export default News