"use client";
import { AlarmClockCheck, Facebook, Instagram, PlayCircle, Twitter } from '@deemlol/next-icons'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Utensils } from 'lucide-react'
import Categories from './components/Categories'
import Recipes from './components/Recipes'
import Kitchen from './components/Kitchen'
import Out from './components/Out'
import FoodCards from './components/FoodCards'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const images = [
  "/img/foodimg1.svg",
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="mx-auto my-5 w-full max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between">
          {/* Logo */}
          <div>
            <img src="/img/logo.svg" alt="Logo" />
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
            <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-5 text-black font-medium text-base">
              <li><Link href="/dashboard" replace>Dashboard</Link></li>
              <li><Link href="/recipes" replace>Recipes</Link></li>
              <li><Link href="/blog" replace>Blog</Link></li>
              <li><Link href="/contact" replace>Contact</Link></li>
              <li><Link href="/aboutus" replace>About us</Link></li>
            </ul>
          </div>

          {/* Socials */}
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

      {/* Hero */}
      <div className="relative mx-auto my-5 w-full max-w-7xl">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between relative">
          {/* Left */}
          <div className="bg-[#E7FAFE] w-full md:w-[620px] h-auto md:h-[640px] rounded-2xl">
            <div className="ml-5">
              <div className="flex items-center gap-4 bg-white rounded-full w-fit px-4 h-8 mt-8">
                <img src="/img/iconuse.svg" alt="" />
                <p className="text-black font-semibold">Hot Recipes</p>
              </div>

              <h1 className="text-black text-3xl md:text-[64px] font-semibold mt-6">
                Spicy delicious chicken wings
              </h1>
              <p className="text-black text-base font-normal mt-4">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqut enim ad minim
              </p>
            </div>

            {/* Info Tags */}
            <div className="flex flex-wrap gap-3 mt-5 ml-5">
              <div className="flex items-center gap-3 bg-white rounded-full px-4 h-8">
                <AlarmClockCheck size={20} className="text-black" />
                <p className="text-[#00000099]">30 Minutes</p>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-full px-4 h-8">
                <Utensils size={20} className="text-black" />
                <p className="text-[#00000099]">Chicken</p>
              </div>
            </div>

            {/* Author + Button */}
            <div className="flex items-center mt-8 p-5">
              <div className="flex items-center gap-3">
                <img src="/img/user.svg" alt="User" />
                <div>
                  <h1 className="text-base font-bold text-[#000000]">John Smith</h1>
                  <p className="text-sm font-medium text-[#00000099]">15 March 2022</p>
                </div>
              </div>
              <button className="rounded-full bg-[#000000] flex items-center gap-2 px-8 py-3">
                <p className="text-white">View Recipes</p>
                <PlayCircle size={20} color="#FFFFFF" />
              </button>
            </div>
          </div>

          {/* Right Auto-play Image + Tomato (statik) */}
          <div className="relative w-full md:w-[650px] h-[450px] md:h-[640px] flex ">
            {/* Autoplay images */}
            <img
              src="/img/foodimg.svg"
              alt="Food"
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Statik tomato image (ustiga qo‘yiladi) */}
            <img
              src="/img/tomato.svg"
              alt="Tomato"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Bag Image */}
        <div className="absolute md:left-[570px] top-[50px] md:top-[120px]">
          <img src="/img/bagimg.svg" alt="Bag" />
        </div>
      </div>

      {/* Sections */}
      <Categories />
      <Recipes />
      <Kitchen />
      <Out />
      <FoodCards />
      <Newsletter />
      <Footer />
    </>
  )
}

export default HomePage
