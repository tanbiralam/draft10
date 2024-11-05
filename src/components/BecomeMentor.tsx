import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BecomeMentor() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Become A Mentor With <span className="text-blue-500">AcceleratorX</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Share your expertise with us and impact students globally. We offer
            the tools to help you teach what excites you.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            Apply Here <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}