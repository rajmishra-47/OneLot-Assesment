'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How do I apply for a loan?',
    answer: (
      <>
        <p>
          OneLot onboarding is easy and straightforward. We only require a few documents and after a few days,
          you can get your first loan.
        </p>
        <p className="mt-2">
          Check here for the exact requirements{' '}
          <a href="#" className="text-purple-600 underline">See full requirements.</a>
        </p>
      </>
    ),
  },
  {
    question: 'What are the interest rates offered?',
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam.
      </p>
    ),
  },
  {
    question: 'What kind of vehicles can I upload?',
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce nec tellus sed
        augue semper porta.
      </p>
    ),
  },
  {
    question: 'How can I keep track of potential buyers?',
    answer: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique
        senectus et netus et malesuada.
      </p>
    ),
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Frequently asked questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="w-full flex justify-between items-center text-left text-gray-900 font-semibold text-lg"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-gray-400" />
                {faq.question}
              </div>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {openIndex === index && (
              <div className="mt-3 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-purple-600 text-white font-medium px-6 py-3 rounded-md hover:bg-purple-700 transition">
          See all →
        </button>
      </div>
    </section>
  );
}
