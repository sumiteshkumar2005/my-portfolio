import React from 'react';
import { motion } from 'framer-motion';
import { Video, Edit, Film, Music, Camera, Lightbulb } from 'lucide-react';

const Services = () => {
  const skills = [
    {
      title: "Video Editing",
      description: "Professional video editing and post-production",
      icon: <Video className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-blue-600"
    },
    {
      title: "Creatives",
      description: "Designing compelling visuals from thumbnails to posters.",
      icon: <Edit className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-purple-600"
    },
    {
      title: "Motion Graphics",
      description: "Creative motion graphics and animations",
      icon: <Film className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-indigo-600"
    },
    {
      title: "Poster Designing",
      description: "Professional poster designing",
      icon: <Music className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-violet-600"
    },
    {
      title: "Cinematography",
      description: "Skilled camera work and composition",
      icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Creative Direction",
      description: "Innovative storytelling and concept development",
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "bg-purple-500"
    }
  ];

  return (
    <div id='services' className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center py-16 px-4">
      {/* Background lighting effects - made responsive */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[50px] sm:blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2 w-[60%] sm:w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[50px] sm:blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[50px] sm:blur-[100px] animate-pulse delay-500" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">What I Do?</h1>
          <p className="text-blue-400 text-base sm:text-lg md:text-xl">Drag to explore my video editing expertise</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 max-w-5xl mx-auto px-2 sm:px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className={`p-4 sm:p-6 rounded-xl bg-gray-900/50  ${skill.color.replace('bg-')} backdrop-blur-lg`}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.7}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 0 30px ${skill.color.includes('blue') ? '#2563eb' : '#7c3aed'}`,
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
                transition: {
                  y: {
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.2
                  }
                }
              }}
            >
              <motion.div 
                className="flex items-center space-x-3 sm:space-x-4"
                whileHover={{
                  color: skill.color.includes('blue') ? '#60a5fa' : '#a78bfa'
                }}
              >
                <div className={`p-2 sm:p-3 rounded-lg ${skill.color} bg-opacity-10`}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-0.5 sm:mb-1">{skill.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{skill.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;