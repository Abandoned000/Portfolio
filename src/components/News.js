import React from 'react'
import News1 from '../assets/News1.png'
import News2 from '../assets/News2.png'
import News3 from '../assets/News3.png'
import Bg from '../assets/NBackground.png'
import Slider from "react-slick";

const NewCard = (props) => {
    return (
        <div className='flex-1 space-y-2 p-6 bg-white rounded-3xl m-4 md:max-w-96 md:mx-auto min-h-[448px]'>
            <img src={props.img} className='w-full' />
            <div className='flex justify-between'>
                <p className='font-normal text-base text-purple-500'> {props.name}</p>
                <p className=' font-normal text-base'> Mar 8,2023</p>
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
                <p className='font-semibold text-2xl text-purple-500'>Latest News</p>
                <p className='font-extrabold text-6xl'>Block & Articles</p>
            </div>
            <div className='py-24 md:px-12'>
                <Slider {...settings}>
                    <NewCard img={News1} name="By Jerry" title="Why am I programming?" content="I was forced to"/>
                    <NewCard img={News2} name="By John" title=" Why should we read books?" content="To get smarter"/>
                    <NewCard img={News3} name="By Pluto" title=" Why should we discuss in class?" content="Not to be weird"/>
                    <NewCard img={News1} name="By Khoa" title=" Hello?" content="Hi"/>
                </Slider>
            </div>
        </div>
    )
}

export default News