import React from 'react'

const Contact = () => {
    return (
        <div className='flex px-36 gap-16'>
            <div className='space-y-6 w-[524px] py-44'>
                <div className='space-y-2 '>
                    <p className='font-semibold text-xl text-purple-500'> Contact us</p>
                    <p className='font-extrabold text-5xl'> Have any Thought Find here.</p>
                </div>
                <div className='font-normal text-xl space-y-3'>
                    <p> Phone <span className='font-bold text-xl'> (+84) 345622456 </span></p>
                    <p>Email <span className='font-bold text-xl'> emaildemo@gmail.com</span></p>
                    <p> Address <span className='font-bold text-xl'> Hanoi, Vietnam </span></p>
                </div>
            </div>
            <div className='space-y-4 mt-32 mb-52'>
                <div className='flex gap-6'>
                    <div className='w-1/2'>
                        <p className='font-normal text-lg'>Name</p>
                        <input placeholder='Name' className='w-full focus: outline-none focus:border-transparent rounded-lg bg-lighter px-3 py-4' />
                    </div>
                    <div className='w-1/2'>
                        <p className='font-normal text-lg'>Email</p>
                        <input placeholder='Email' className=' w-full focus: outline-none focus:border-transparent rounded-lg bg-lighter px-3 py-4' />
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='w-1/2'>
                        <p className='font-normal text-lg'>Phone</p>
                        <input placeholder='Phone' className=' w-full focus: outline-none focus:border-transparent rounded-lg bg-lighter px-3 py-4' />
                    </div>
                    <div className='w-1/2'>
                        <p className='font-normal text-lg'>Subject</p>
                        <input placeholder='Subject' className=' w-full focus: outline-none focus:border-transparent rounded-lg bg-lighter px-3 py-4' />
                    </div>
                </div>
                <div>
                    <p className='font-normal text-lg'>Message</p>
                    <textarea placeholder='Message' className='w-full focus: outline-none focus:border-transparent rounded-lg bg-lighter px-3 py-4' ></textarea>
                </div>
                <p className='bg-yellow-400 rounded-xl font-bold text-base text-white text-center py-3 px-60'> Send Now!</p>
            </div>
        </div>
    )
}

export default Contact