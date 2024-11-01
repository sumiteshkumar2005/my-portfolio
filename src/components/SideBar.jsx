import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className='fixed left-0 top-1/2 h-48 w-6 md:h-72 md:w-12 shadow-lg flex flex-col items-center rounded-r-full z-10 bg-transparent border-r-2 border-purple-500 backdrop-blur-sm transform -translate-y-1/2'>
      <div className='flex flex-col mt-4 md:mt-10 space-y-8 mr-0 md:mr-2'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-600 transition-all duration-300'>
          {/* Smaller icon size for mobile, larger for medium screens and above */}
          <FaFacebookF size={12} className="md:size-[24px]" />
        </a>
        <a href="https://www.instagram.com/sumitesh._?igsh=cXE0bXVodXJ3aHhu" target="_blank" rel="noopener noreferrer" className='text-white hover:text-pink-600/90 transition-all duration-300'>
          <FaInstagram size={12} className="md:size-[24px]" />
        </a>
        <a href="https://pin.it/43Bszc9Cw" target="_blank" rel="noopener noreferrer" className='text-white hover:text-red-700 transition-all duration-300'>
          <FaPinterestP size={12} className="md:size-[24px]" />
        </a>
        <a href="https://www.youtube.com/@GadgetCouture" target="_blank" rel="noopener noreferrer" className='text-white hover:text-red-500 transition-all duration-300'>
          <FaYoutube size={12} className="md:size-[24px]" />
        </a>
      </div>
    </div>
  );
}

export default SideBar;