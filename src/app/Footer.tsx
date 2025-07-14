"use client";
import Logo from './Images/Logo.png'
import Image from "next/image";
import Link from "next/link";
import { Facebook } from "lucide-react";
import {Instagram} from 'lucide-react'

export default function GetStartedSection() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800 font-sans">
      
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get started today</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market.
        </p>
        <button className="mt-6 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded">
          Inquire now
        </button>
      </main>

  
      <footer className="border-t border-gray-200 text-sm px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <Image
              src={Logo} 
              alt="OneLot Logo"
              width={100}
              height={100}
              className="rounded-md"
            />
            
          </div>

       
          <nav className="flex gap-6 text-gray-600">
            <Link href="#" className="hover:text-black">Home</Link>
            <Link href="#" className="hover:text-black">Features</Link>
            <Link href="#" className="hover:text-black">About</Link>
            <Link href="#" className="hover:text-black">Contact</Link>
          </nav>

          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <span>ENG</span>
              <Image
                src=""
                alt="English"
                width={16}
                height={16}
              />
            </div>
            <div className="flex gap-3">
              <Link href="#" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gray-600 hover:text-black" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-black" />
              </Link>
            </div>
          </div>
        </div>

        
        <div className="mt-4 text-center md:text-left text-gray-500 space-y-1">
          <p>© 2023 OneLot Technologies Incorporated Pte. Ltd. All rights reserved.</p>
          <p>© 2023 OneLot Financing Corporation All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
