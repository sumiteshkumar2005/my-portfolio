import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import hero from '../assets/hero-removed.png';

const taglines = [
  "Video Editor",
  "Photographer",
  "Film Maker"
];

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeEffect = () => {
      const currentText = taglines[currentIndex];
      
      if (!isDeleting) {
        setCurrentTagline(currentText.substring(0, currentTagline.length + 1));
        
        if (currentTagline === currentText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentTagline(currentText.substring(0, currentTagline.length - 1));
        
        if (currentTagline === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    };

    const timeout = setTimeout(typeEffect, isDeleting ? 50 : 150);
    return () => clearTimeout(timeout);
  }, [currentTagline, currentIndex, isDeleting]);

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black px-4">
      {/* Background light effects - Adjusted for better mobile appearance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-900/30 rounded-full blur-[50px] sm:blur-[100px] animate-pulse"></div>
        <div className="absolute -top-20 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-900/30 rounded-full blur-[60px] sm:blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 -left-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-violet-900/30 rounded-full blur-[65px] sm:blur-[130px] animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-900/30 rounded-full blur-[50px] sm:blur-[100px] animate-pulse delay-300"></div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered content container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Large text with animated gradient color */}
        <div className="absolute pointer-events-none select-none top-0 mt-20 sm:mt-32 md:mt-[350px] w-full text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[9rem] font-bold tracking-tighter break-words sm:whitespace-nowrap">
            <span className="animate-gradient-text bg-gradient-to-r from-blue-600 via-pink-900 to-violet-900 text-transparent bg-clip-text bg-[length:200%_auto]">
              SUMITESH KUMAR
            </span>
          </h1>

          {/* Custom typewriter effect for taglines - Adjusted positioning */}
          <div className="relative z-10 text-center mt-4 sm:mt-6 sm:ml-0 md:ml-[400px] lg:ml-[900px]">
            <div className="inline-block min-h-[2em]">
              <span className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300">
                {currentTagline}
              </span>
              <span className="animate-pulse ml-1 text-gray-300 text-xl sm:text-2xl md:text-3xl">|</span>
            </div>
          </div>
        </div>

        {/* Centered image */}
        <div className="relative z-10  md:w-full md:max-w-[1600px] mx-auto px-4 mt-16 sm:mt-24 md:mt-0">
          <img
            src={hero}
            alt="Profile"
            className="md:w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Bottom left content - Responsive positioning and text size */}
      <div className="absolute bottom-20 sm:bottom-12 left-4 sm:left-12 z-10">
        <p className="text-gray-600 font-medium text-sm sm:text-base ml-28">Frame-Refine-Impress</p>
        <p className="text-gray-800 font-bold text-center sm:text-sm">"Each frame crafted with precision, <br /> Every edit made to elevate-Creating visuals that resonate."</p>
      </div>

      {/* Bottom right content - Responsive positioning and text size */}
      <div className="absolute hidden md:block bottom-20 sm:bottom-12 right-4 sm:right-12 z-10 text-right">
        <p className="text-gray-600 font-medium text-sm sm:text-base">BASED IN</p>
        <p className="text-gray-800 font-bold text-base sm:text-lg">INDIA</p>
      </div>

      {/* Animated scroll icon - Adjusted position for mobile */}
      <button 
        onClick={handleScrollClick}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-gray-400 hover:text-gray-200 transition-colors cursor-pointer animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="sm:w-8 sm:h-8 animate-pulse" />
      </button>

      {/* Gradient animation styles */}
      <style jsx>{`
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          animation: gradient-text 6s linear infinite;
          background-size: 200% auto;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;