import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-900/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-blue-900/30 rounded-full blur-[100px] animate-pulse delay-300"></div>
      </div>
      
      {/* Loading animation container */}
      <div className="relative flex flex-col items-center">
        {/* Animated text */}
        <div className="text-4xl font-bold mb-8">
          <span className="inline-block animate-slideUp opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">S</span>
          <span className="inline-block animate-slideUp opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">U</span>
          <span className="inline-block animate-slideUp opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">M</span>
          <span className="inline-block animate-slideUp opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">I</span>
          <span className="inline-block animate-slideUp opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">T</span>
          <span className="inline-block animate-slideUp opacity-0 [animation-delay:0.7s] [animation-fill-mode:forwards]">E</span>
          <span className="inline-block animate-slideUp opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]">S</span>
          <span className="inline-block animate-slideUp opacity-0 [animation-delay:0.9s] [animation-fill-mode:forwards]">H</span>
        </div>
        
        {/* Loading bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-loadingBar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;