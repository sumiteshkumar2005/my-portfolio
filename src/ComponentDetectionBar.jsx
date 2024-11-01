import React, { useState, useEffect } from 'react';

const ComponentDetectionBar = ({ components }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate segments based on number of components
  const generateComponentSegments = () => {
    const totalHeight = 300; // Total height of the bar
    const maxComponents = 10; // Max visible components
    const componentCount = Math.min(components.length, maxComponents);
    
    return Array.from({ length: componentCount }, (_, index) => {
      const height = totalHeight / maxComponents;
      
      return (
        <div 
          key={index} 
          className="absolute w-full"
          style={{
            bottom: `${index * height}px`,
            height: `${height}px`,
            opacity: 0.2
          }}
        />
      );
    });
  };

  return (
    <div 
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white"
      style={{ 
        width: '4px', 
        height: '300px', 
        borderRadius: '20px',
        backgroundColor: 'gray',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)'
      }}
    >
      {/* Scroll Progress with Blue, Pink, and Violet Gradient */}
      <div 
        className="absolute left-0 rounded-full transition-all duration-200 ease-out"
        style={{
          height: `${scrollProgress}%`,
          width: '100%',
          background: '#4c1d95',
          borderRadius: '20px'
        }}
      />

      {/* Component Segments */}
      <div className="absolute w-full h-full">
        {generateComponentSegments()}
      </div>
    </div>
  );
};

export default ComponentDetectionBar;