import React from 'react';
import { Droplets, Sparkles, Circle } from 'lucide-react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating Water Drops */}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`water-${i}`}
          className="absolute text-blue-400/20 animate-float-slow"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 2) * 30}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i * 0.5}s`
          }}
        >
          <Droplets className="w-8 h-8" />
        </div>
      ))}
      
      {/* Floating Sparkles */}
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute text-yellow-400/25 animate-sparkle"
          style={{
            right: `${5 + i * 20}%`,
            top: `${15 + i * 25}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${3 + i * 0.3}s`
          }}
        >
          <Sparkles className="w-6 h-6" />
        </div>
      ))}
      
      {/* Floating Bubbles */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`bubble-${i}`}
          className="absolute animate-bubble-slow opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        >
          <div 
            className="rounded-full bg-gradient-to-br from-blue-300 to-blue-500 backdrop-blur-sm border border-white/20"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`
            }}
          >
            <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;