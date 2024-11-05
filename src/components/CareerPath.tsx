import React from 'react';
import { GraduationCap, Code, Users, Briefcase } from 'lucide-react';

export default function CareerPath() {
  const features = [
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-500" />,
      title: "Live Learning from Industry Experts",
      subtitle: "Industry Experts",
      description: "Cohort-based, interactive classroom"
    },
    {
      icon: <Code className="h-12 w-12 text-blue-500" />,
      title: "Learning by Doing, experimenting",
      subtitle: "Doing, experimenting",
      description: "Every week real products breakdown, case study"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      title: "Build Your Dream Product",
      subtitle: "Dream Product",
      description: "Build an actual product MVP"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-blue-500" />,
      title: "Career counselling and Placement Support",
      subtitle: "Placement Support",
      description: "Get personalized guidance and job placement assistance"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transform Your Career Path With <span className="text-blue-500">AcceleratorX</span>
          </h2>
          <p className="text-xl text-gray-400">
            Focus on real-world products, hands-on learning experience and building a growing, supportive community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}