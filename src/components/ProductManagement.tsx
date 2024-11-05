import React from 'react';
import { Code, Users, Target, BarChart, Layers, Rocket, Search, Send, Map, Users2 } from 'lucide-react';

export default function ProductManagement() {
  const aspects = [
    { title: "Risk Management", icon: <Target className="w-5 h-5" /> },
    { title: "Market Research", icon: <Search className="w-5 h-5" /> },
    { title: "Performance Tracking", icon: <BarChart className="w-5 h-5" /> },
    { title: "Product Strategy", icon: <Map className="w-5 h-5" /> },
    { title: "Product Lifecycle", icon: <Layers className="w-5 h-5" /> },
    { title: "Product Development", icon: <Code className="w-5 h-5" /> },
    { title: "Customer Insight", icon: <Users className="w-5 h-5" /> },
    { title: "Product Launch", icon: <Rocket className="w-5 h-5" /> },
    { title: "Roadmap Planning", icon: <Send className="w-5 h-5" /> },
    { title: "Stakeholder Management", icon: <Users2 className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Master Every Facet Of <span className="text-blue-500">Product Management</span>
            </h2>
            <p className="text-xl text-gray-400">
              Our comprehensive curriculum covers all essential aspects of modern product management, preparing you for real-world challenges.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View Full Curriculum
            </button>
          </div>
          
          <div className="relative aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Center circle */}
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center z-10 animate-pulse">
                <Rocket className="w-12 h-12 text-white" />
              </div>
              
              {/* Orbiting elements */}
              {aspects.map((aspect, index) => {
                const angle = (index * 360) / aspects.length;
                const orbitRadius = 140;
                const delay = index * 0.2;
                
                return (
                  <div
                    key={index}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-${orbitRadius}px)`,
                      animation: `orbit 20s linear infinite, fadeIn 0.5s ease-out forwards ${delay}s`,
                      opacity: 0
                    }}
                  >
                    <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex items-center gap-3 hover:bg-gray-700 transition-colors absolute -translate-x-1/2 whitespace-nowrap"
                         style={{ transform: `rotate(-${angle}deg)` }}>
                      <span className="text-blue-500">{aspect.icon}</span>
                      <span className="font-medium">{aspect.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}