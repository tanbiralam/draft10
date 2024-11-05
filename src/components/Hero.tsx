import React from 'react';
import { ArrowRight, Rocket, Users, Target } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in">
              Accelerate Your Startup Journey
            </h1>
            <p className="text-xl text-gray-200 animate-fade-in-delay">
              Join AcceleratorX to transform your innovative ideas into successful ventures. Get access to world-class mentors, resources, and funding opportunities.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                Explore Programs <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="hidden md:grid grid-cols-2 gap-6 animate-fade-in-delay-3">
            <StatCard
              icon={<Rocket className="h-8 w-8" />}
              title="500+"
              description="Startups Accelerated"
            />
            <StatCard
              icon={<Users className="h-8 w-8" />}
              title="200+"
              description="Expert Mentors"
            />
            <StatCard
              icon={<Target className="h-8 w-8" />}
              title="$50M+"
              description="Funding Raised"
            />
            <StatCard
              icon={<Users className="h-8 w-8" />}
              title="95%"
              description="Success Rate"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const StatCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
    <div className="text-white mb-4">{icon}</div>
    <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-200">{description}</p>
  </div>
);