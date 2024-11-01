import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Portfolio = () => {
  const borderVariants = {
    animate: {
      background: [
        'linear-gradient(90deg, blue, violet)',
      ],
      backgroundPosition: ['0% 50%', '100% 50%'],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div id='about' className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center py-12 sm:py-16 md:py-20">
      {/* Background lighting effects - Adjusted for mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[50px] sm:blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[50px] sm:blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[50px] sm:blur-[100px] animate-pulse delay-500" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-24">
          {/* Video Section */}
          <div className="w-full lg:w-3/4">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-lg aspect-video">
              <iframe
                src="https://www.youtube.com/embed/uFaX547j5O0?si=QdNEBtmRtGFy0_C_"
                title="YouTube video player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-white space-y-6 mt-8 lg:mt-0">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Creative Video Editor
            </motion.h2>

            <motion.p 
              className="text-gray-400 text-base sm:text-lg text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              With over 5 years of experience in video editing and post-production, 
              I specialize in creating compelling visual narratives that captivate 
              audiences. My work combines technical expertise with creative storytelling 
              to deliver outstanding results for every project.
            </motion.p>

            <motion.div
              className="space-y-4 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Expert in Adobe Premiere Pro & After Effects</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Advanced color grading and motion graphics</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                <span>Professional sound design and mixing</span>
              </div>
            </motion.div>

            {/* Download CV Button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="/assets/Sumitesh_cv.pdf"
                download
                className="inline-block w-full sm:w-auto"
              >
                <motion.button
                  className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-black backdrop-blur-lg text-white font-semibold flex items-center justify-center gap-3 hover:bg-gray-900/60 transition-colors overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3 relative z-10">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    Download CV
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5"
                    variants={borderVariants}
                    animate="animate"
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  />
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;