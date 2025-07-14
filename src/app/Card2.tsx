'use client';

import Image from 'next/image';

export default function BusinessFeatures() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
       
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to grow your business
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            OneLot is your trusted lending and financing partner, exclusively tailored for used car dealership. We also offer digital tools for streamlined operations and growth of your dealership.
          </p>
          <a href="#" className="text-purple-700 font-medium hover:underline inline-flex items-center gap-1">
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        
        <div className="space-y-10">
          
          <div className="flex items-start gap-4">
            <div className="bg-cyan-100 p-2 rounded-full">
            <span className="text-black">$</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Dealer Loans</h3>
              <a href="#" className="text-cyan-500 font-medium block hover:underline">
                Accelerate your growth with tailored loan solutions
              </a>
              <p className="text-gray-600 mt-1">
                Get comprehensive car financing solutions, unlock the potential of your dealership and take it to new heights.
              </p>
            </div>
          </div>

          
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-2 rounded-full">
            <span className="text-black">📢</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Dealership Management System</h3>
              <a href="#" className="text-purple-600 font-medium block hover:underline">
                Enhance Efficiency and Sales with free digital tools for car dealerships
              </a>
              <p className="text-gray-600 mt-1">
                OneLot offers a suite of powerful digital tools designed to optimize your dealership's operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
