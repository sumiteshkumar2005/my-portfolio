import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ value, duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const targetValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const counter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * targetValue);

      if (progress < 1) {
        setCount(currentCount);
        countRef.current = requestAnimationFrame(counter);
      } else {
        setCount(targetValue);
      }
    };

    countRef.current = requestAnimationFrame(counter);
    return () => cancelAnimationFrame(countRef.current);
  }, [targetValue, duration, isVisible]);

  return <>{count.toLocaleString()}{value.includes('+') ? '+' : ''}</>;
};

const StatsSection = () => {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const refCurrent = statsRef.current; // Copy the ref value to a local variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) { // Use the local variable in the cleanup function
        observer.unobserve(refCurrent);
      }
    };
  }, []);

  const stats = [
    {
      value: "3400+",
      label: "Users Worldwide",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      value: "46000+",
      label: "Projects Delivered",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      value: "99",
      label: "Client Satisfaction Rate",
      suffix: "%",
      color: "from-pink-500/20 to-blue-500/20"
    }
  ];

  return (
    <div ref={statsRef} id="stats" className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Enhanced lighting effects */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute right-1/4 bottom-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div className="space-y-6 relative">
            {/* Glow behind text */}
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl" />
            
            <h1 className="text-6xl font-light text-white leading-tight relative">
              Numbers are
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                telling our story
              </span>
            </h1>
            <p className="text-gray-400 max-w-lg relative text-lg">
              Transforming creative visions into reality through innovative content creation and cutting-edge motion graphics.
            </p>
          </div>

          {/* Right stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Card glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                
                {/* Card content */}
                <div className="bg-[#0A0F1C]/50 backdrop-blur-xl p-8 rounded-lg border border-gray-800/50 relative hover:border-gray-700/50 transition-colors duration-300">
                  <div className="flex items-baseline gap-1">
                    <h2 className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                      <AnimatedNumber value={stat.value} isVisible={isVisible} />
                      {stat.suffix}
                    </h2>
                  </div>
                  <p className="text-gray-400 text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
