'use client';
import Image from 'next/image';
import T1 from './Images/T1.png'

export default function Testimonial() {
  return (
    <section className="bg-gray-50 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Testimonials</h2>

       
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src={T1}
            alt="OneLot Platform UI"
            width={40000}
            height={8000}
            className="rounded-xl shadow-lg mx-auto"
          />
          </div>
        </div>

        <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
          “The service of OneLot is top notch, they act fast and can provide dealers with the funds
          they need, when they need it.”
        </p>

        <p className="text-base font-semibold text-gray-800">Mark Vergel de Dios</p>
        <p className="text-sm text-gray-500 mb-6">Owner, MVD Auto Works</p>

        
        <div className="flex justify-center gap-6 text-gray-600 text-2xl">
          <button className="hover:text-gray-900 transition">&larr;</button>
          <button className="hover:text-gray-900 transition">&rarr;</button>
        </div>
      </div>
    </section>
  );
}
