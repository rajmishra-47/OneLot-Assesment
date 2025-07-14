import React from 'react';
import Image from 'next/image';
import FirstScreen from './Images/FirstScreen.png'
import Regulated from './Images/Regulated.png'

export default function Card() {
  return (
    <section className="bg-white px-4 py-16 text-center">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-center">
        
        
        <h1 className="text-3xl sm:text-4xl  font-extrabold text-gray-900 leading-tight">
          Grow your dealership with working capital loans and<br className="hidden sm:inline" />
          digital tools from <span className="text-black">OneLot</span>
        </h1>

       
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          We enable dealers to buy more cars through our working capital loan solutions and sell cars more efficiently through our Dealership Management System with its inventory management, marketing solutions and market insights
        </p>

      
        <a
          href="#"
          className="mt-8 inline-block rounded-md bg-purple-700 px-6 py-3 text-sm font-medium text-white hover:bg-purple-800 transition"
        >
          Inquire now
        </a>


        <div className="mt-12 w-full max-w-6xl">
          <Image
            src={FirstScreen}
            alt="OneLot Platform UI"
            width={2000}
            height={1200}
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>

        
        <div className="mt-16">
          <p className="text-sm text-gray-500 mb-2">Regulated by</p>
          <Image
            src={Regulated} 
            alt="Securities and Exchange Commission"
            width={300}
            height={500}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
