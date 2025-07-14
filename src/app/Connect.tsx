'use client';

import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function StayConnected() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay connected</h2>
        <p className="text-gray-500 text-lg md:text-xl mb-10">
          Follow OneLot on our Facebook and Instagram page and stay up to date with our most recent
          offers, updates and new product features
        </p>

     
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <a
            href="#"
            className="inline-flex items-center border border-gray-300 px-5 py-3 rounded-md text-gray-800 hover:bg-gray-100 transition"
          >
            <FaFacebook className="mr-2 text-xl" />
            Follow us on Facebook
          </a>
          <a
            href="#"
            className="inline-flex items-center border border-gray-300 px-5 py-3 rounded-md text-gray-800 hover:bg-gray-100 transition"
          >
            <FaInstagram className="mr-2 text-xl" />
            Follow us on Instagram
          </a>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className="w-full h-64 bg-gray-200 rounded-lg shadow-sm"
            >
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
