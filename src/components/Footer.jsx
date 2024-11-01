import React from 'react';

const StylishDarkFooter = () => {
  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden">
      {/* Subtle Lighting Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-4 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Kammela Sumitesh Kumar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default StylishDarkFooter;