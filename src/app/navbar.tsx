'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react'; 
import Logo from "./Images/Logo.png"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          
          <div className="flex items-center space-x-12">
           
            <div className="flex items-center space-x-2">
              <Image
                src={Logo}
                alt="OneLot Logo"
                width={100}
                height={100}
              />
              
            </div>

           
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#" className="text-purple-700">Home</a>
              <div className="flex items-center space-x-1 text-black cursor-pointer">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <a href="#" className="text-black">About</a>
              <a href="#" className="text-black">Contact</a>
            </div>
          </div>

         
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-black">Log In</a>
            <button className="rounded-md bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800 transition">
              Inquire now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
