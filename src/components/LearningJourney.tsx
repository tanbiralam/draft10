import React from 'react';
import { BookOpen, Wrench, FileText, Rocket, Users } from 'lucide-react';

export default function LearningJourney() {
  const steps = [
    {
      number: ".1",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "Master Concepts, Expert Guidance"
    },
    {
      number: ".2",
      icon: <Wrench className="h-6 w-6 text-white" />,
      title: "Hands-On Industry Experience"
    },
    {
      number: ".3",
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Learning Enhanced by Case Studies"
    },
    {
      number: ".4",
      icon: <Rocket className="h-6 w-6 text-white" />,
      title: "Build Your Dream Product"
    },
    {
      number: ".5",
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Ace Interviews with Expert Guidance and Mock Sessions"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Journey Where Students Unlock Their <span className="text-blue-500">Full Potential</span>
          </h2>
          <p className="text-xl text-gray-400">
            Focus on real-world products, hands-on learning experience and building a growing, supportive community.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300">
              <span className="text-4xl font-bold text-blue-500">{step.number}</span>
              <div className="bg-blue-600 p-3 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}