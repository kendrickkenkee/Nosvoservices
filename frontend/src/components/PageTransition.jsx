import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    setIsTransitioning(true);
    
    // Generate random bubbles
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 2,
      size: Math.random() * 30 + 10,
      duration: Math.random() * 3 + 2
    }));
    
    setBubbles(newBubbles);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      setBubbles([]);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {children}
      
      {/* Bubble Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Water/Soap Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 via-blue-300/10 to-transparent animate-pulse"></div>
          
          {/* Bubbles */}
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="absolute rounded-full bg-gradient-to-br from-white/60 to-blue-200/40 backdrop-blur-sm border border-white/30 animate-bubble-float shadow-lg"
              style={{
                left: `${bubble.left}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                animationDelay: `${bubble.animationDelay}s`,
                animationDuration: `${bubble.duration}s`,
                bottom: '-50px'
              }}
            >
              {/* Inner bubble shine */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-white/80 rounded-full"></div>
            </div>
          ))}
          
          {/* Soap Foam Effect */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/30 to-transparent opacity-70 animate-foam-slide"></div>
          
          {/* Water Droplets */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`droplet-${i}`}
              className="absolute w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-droplet-fall opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: `${Math.random() * 1 + 1.5}s`
              }}
            ></div>
          ))}
        </div>
      )}
    </>
  );
};

export default PageTransition;