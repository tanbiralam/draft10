import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import ApplicationForm from './ApplicationForm';

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Management Accelerator Program</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master Product Management with insights from industry experts from top brands
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-4 rounded-full">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Next Cohort Starting Soon</h3>
                  <p className="text-gray-600">Limited seats available</p>
                </div>
              </div>
              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold">
                20% OFF
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-4">Program Highlights</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    Live Interactive Sessions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    Real-world Case Studies
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    1:1 Mentorship
                  </li>
                  <li className="flex items-center text-gray-700">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    Placement Support
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Program Details</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600">Duration</p>
                    <p className="font-semibold">12 Weeks</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Price</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">₹47,200</span>
                      <span className="text-gray-500 line-through">₹59,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => window.openApplicationForm()}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight className="h-5 w-5" />
              </button>
              <button className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Download Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}