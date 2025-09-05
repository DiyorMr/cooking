import React from 'react'

const Kitchen = () => {
    return (
        <div className='flex flex-col items-center justify-center md:flex-row md:justify-between mx-auto my-5 w-full max-w-7xl gap-20'>
            <div>
                <h1 className='text-[48px] font-semibold text-black'>Everyone can be a
                    chef in their own kitchen</h1>
                <p className='text-base font-normal text-[#00000099] my-4'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <button className='rounded-2xl bg-[#000000] text-[#FFFFFF] py-3 px-6 cursor-pointer'>Learn More</button>
            </div>
            <div>
                <img src="img/kitchen.svg" alt="" />
            </div>
        </div>
    )
}

export default Kitchen