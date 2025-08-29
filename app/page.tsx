import { Facebook, Instagram, Twitter } from '@deemlol/next-icons'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className='mx-auto my-5 w-full max-w-7xl'>
        <div className='flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between'>
          <div>
            <img src="/img/logo.svg" alt="" />
          </div>
          <div className='flex flex-col items-center gap-2 md:flex-row md:gap-5'>
            <ul className='flex flex-col items-center gap-2 md:flex-row md:gap-5 text-black'>
              <li>Home</li>
              <li>Recipes</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>About us</li>
            </ul>
          </div>
          <div className='flex items-center gap-5'>
            <Facebook size={24} color="black" />
            <Twitter size={24} color="black" />
            <Instagram size={24} color="black" />
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between mx-auto my-5 w-full max-w-7xl relative'>
          <img src="/img/hotimg.svg" alt="" />
          <img src="/img/foodimg.svg" alt="" />
        </div>
        <div className='absolute left-[670px] top-[100px]'>
          <img src="/img/bagimg.svg" alt="" />

        </div>
      </div>
    </>
  )
}

export default HomePage