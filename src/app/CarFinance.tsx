'use client';
import CarFinance from "./Images/CarFinance.png"
import Image from 'next/image';

export default function CarFinancing() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
       
        <div className="bg-gray-100 rounded-xl shadow-inner flex items-center justify-center text-gray-400 text-lg">
         
          
          <Image
            src={CarFinance} 
            alt="CarFinance"
            height={1000}
            width={1000}
            className="mx-auto"
          />

        </div>

        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Car Financing
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Dealer Loans
          </h3>

          <p className="text-gray-600 mb-6">
            OneLot’s working capital loans allows car dealer to buy more cars and capitalize on car purchase opportunities you would otherwise have missed. We transfer the money to your account within 6 hours.
          </p>

          <ul className="space-y-4 border-t border-gray-200 pt-6 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✔️</span>
              <p className="text-gray-700 font-medium">
                Interest as low as 1.5% per month with daily calculation of interest
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✔️</span>
              <p className="text-gray-700 font-medium">
                Financing up to 70% of the vehicle purchase
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-600 mt-1">✔️</span>
              <p className="text-gray-700 font-medium">
                Financing period up to 90 days with flexible repayment schedule at any point
              </p>
            </li>
          </ul>

          <p className="text-gray-600 mb-6">
            Use OneLot’s financing solution today, grow the number of cars in your lot and increase your profits.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-purple-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-800 transition"
          >
            View Loans
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
