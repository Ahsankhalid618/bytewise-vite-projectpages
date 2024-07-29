// eslint-disable-next-line no-unused-vars
import React from 'react';
import heroPoster from "../assets/hero/hero-poster.svg";

export const HeroSection = () => {
    return (
        <div  className='py-24 px-36 flex justify-between bg-[#F5F7FA]'>
            <div>
                <h1 className='text-[4rem] font-semibold text-[#4D4D4D] leading-[76px]'>Lessons and insights</h1>
                <h1 className='text-[4rem] font-semibold text-[#4CAF4F] leading-[76px]'>from 8 years</h1>
                <p className='font-normal text-[#717171] leading-6'>Where to grow your business as a photographer: site or social media?</p>
                <button className='px-8 py-3 text-white rounded-md bg-[#45d449] mt-8'>Register</button>
            </div>
            <div>
                <img src={heroPoster} alt="" />
            </div>
        </div>
    )
}
