'use client';
import Image from 'next/image';
import DealerShip from "./Images/DealerShip.png"

export default function DealershipManagement() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dealership Management System
          </h2>

          <p className="text-gray-600 mb-6">
            OneLot’s digital platform has been built with the single goal to help used car dealers operate their business more efficiently.
          </p>

          <ul className="space-y-6 border-t border-gray-200 pt-6 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✔️</span>
              <div>
                <span className="font-semibold text-gray-800">Inventory Management:</span>{' '}
                <span className="text-gray-700">
                  Track all details about your cars and sales in one place – from car details to buyers. All you need to know in one place.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✔️</span>
              <div>
                <span className="font-semibold text-gray-800">Marketing Tools:</span>{' '}
                <span className="text-gray-700">
                  Promote your cars across all the different platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages and Instagram with a single click of a button.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✔️</span>
              <div>
                <span className="font-semibold text-gray-800">Market Insights (Coming Soon):</span>{' '}
                <span className="text-gray-700">
                  Get insights on prices and volumes for all cars in the market. We provide you all the data by combining from various sources with a single click of a button.
                </span>
              </div>
            </li>
          </ul>

          <p className="text-gray-600 mb-6">
            Sign-up OneLot’s dealer platform today, and your cars will sell easier.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-800 transition"
          >
            Explore now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        
        <div className="w-full  bg-gray-100 rounded-xl shadow-inner flex items-center justify-center text-gray-400 text-lg">
        <Image
            src={DealerShip}
            alt="OneLot Platform UI"
            width={2000}
            height={1200}
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
