import { AlarmClockCheck, Facebook, Instagram, PlayCircle, Twitter } from '@deemlol/next-icons'
import React from 'react'
import Link from 'next/link'
import { Utensils } from 'lucide-react'
import Categories from './components/Categories'
import Recipes from './components/Recipes'
import Kitchen from './components/Kitchen'
import Out from './components/Out'
import FoodCards from './components/FoodCards'
import Newsletter from './components/Newsletter'

const HomePage = () => {
  return (
    <>
      <div className='mx-auto my-5 w-full max-w-7xl'>
        <div className='flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between'>
          <div>
            <img src="/img/logo.svg" alt="" />
          </div>
          <div className='flex flex-col items-center gap-2 md:flex-row md:gap-5'>
            <ul className='flex flex-col items-center gap-2 md:flex-row md:gap-5 text-black font-medium text-base'>
              <Link href="/dashboard" replace>
                Dashboard
              </Link>
              <Link href="/recipes" replace>
                Recipes
              </Link>
              <Link href="/blog" replace>
                Blog
              </Link>
              <Link href="/contact" replace>
                Contact
              </Link>
              <Link href="/aboutus" replace>
                About us
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} color="black" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} color="black" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} color="black" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col items-center justify-center md:flex-row md:justify-between mx-auto my-5 w-full max-w-7xl relative'>
          <div className='bg-[#E7FAFE] w-[620px] h-[640px]'>
            <div>
              <div className='ml-5'>
                <div className='flex items-center gap-4 bg-white rounded-full w-44 text-center h-8 mt-16 ml-5 justify-center'>
                  <img src="./img/iconuse.svg" alt="" />
                  <p className='text-black font-semibold'>Hot Recipes</p>
                </div>
                <h1 className='text-black text-[64px] font-semibold'>Spicy delicious chicken wings</h1>
                <p className='text-black text-base font-normal'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqut enim ad minim </p>
              </div>
              <div className='flex'>
                <div className='flex items-center gap-3 bg-white rounded-full w-44 text-center h-8 mt-5 ml-5 justify-center'>
                  <AlarmClockCheck size={24} className='text-black' />
                  <p className='text-[#00000099]'>30 Minutes</p>
                </div>
                <div className='flex items-center gap-3 bg-white rounded-full w-44 text-center h-8 mt-5 ml-5 justify-center'>
                  <Utensils size={24} className='text-black' />
                  <p className='text-[#00000099]'>Chicken</p>
                </div>
              </div>
              <div className='flex items-center justify-between mt-30 p-5 '>
                <div className='flex items-center gap-3'>
                  <div>
                    <img src="/img/user.svg" alt="" />
                  </div>
                  <div>
                    <h1 className='text-base font-bold text-[#000000]'>John Smith</h1>
                    <p className='text-sm font-medium text-[#00000099]'>15 March 2022</p>
                  </div>
                </div>
                <div>
                  <button className='w-50 h-15 rounded-full bg-[#000000] flex items-center gap-2 p-8'>
                    <p>View Recipes</p>
                    <PlayCircle size={24} color="#FFFFFF" />
                  </button>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          <img src="/img/foodimg.svg" alt="" />
        </div>
        <div className='absolute left-[670px] top-[120px]'>
          <img src="/img/bagimg.svg" alt="" />
        </div>
      </div>
      <Categories />
      <Recipes />
      <Kitchen />
      <Out />
      <FoodCards />
      <Newsletter />
    </>
  )
}

export default HomePage