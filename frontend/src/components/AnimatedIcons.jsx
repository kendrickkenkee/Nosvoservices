import React from 'react';

const AnimatedIcons = ({ icon: Icon, className = "", variant = "default", size = "w-8 h-8" }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case '3d':
        return `${size} transform-gpu transition-all duration-500 hover:scale-110 hover:rotate-12 drop-shadow-lg hover:drop-shadow-2xl animate-float-gentle`;
      case 'glow':
        return `${size} transform-gpu transition-all duration-300 hover:scale-105 animate-pulse-soft filter hover:drop-shadow-glow`;
      case 'bounce':
        return `${size} transform-gpu transition-all duration-300 hover:scale-110 animate-bounce-soft hover:animate-bounce`;
      case 'rotate':
        return `${size} transform-gpu transition-all duration-500 hover:scale-110 hover:rotate-180 animate-spin-slow`;
      case 'premium':
        return `${size} transform-gpu transition-all duration-700 hover:scale-125 hover:rotate-6 drop-shadow-xl hover:drop-shadow-2xl animate-float-premium filter hover:brightness-110`;
      default:
        return `${size} transform-gpu transition-all duration-300 hover:scale-105`;
    }
  };

  return (
    <div className={`inline-block ${getVariantClasses()} ${className}`}>
      <Icon className="w-full h-full" />
    </div>
  );
};

export default AnimatedIcons;