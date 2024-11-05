import React from 'react';
import { Users, Award, BookOpen, MessageSquare } from 'lucide-react';

export default function PlacementCounsel() {
  const stats = [
    { label: "Upto 48 LPA", description: "Highest Package" },
    { label: "Approx. 120%", description: "Average Hike" }
  ];

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Interview Preparations",
      description: "Gain invaluable insights from industry experts"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professional Branding",
      description: "Boost your personal brand on your resume and LinkedIn"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Career Counselling",
      description: "Utilize our career services to define your growth path"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Effective Communications",
      description: "Develop strong communication skills to ace interviews"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Access Premier <span className="text-blue-500">Placement Counsel</span>
          </h2>
        </div>

        <div className="flex justify-center gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-800 p-6 rounded-xl">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">{stat.label}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}