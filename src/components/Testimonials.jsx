import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "The platform completely transformed how we handle our client interactions. The efficiency gains have been remarkable, and our team productivity has increased significantly.",
    author: "Sarah Chen",
    role: "CTO @ TechFlow",
    avatar: "https://imgs.search.brave.com/bOqFMnk0DiUua3syN5ahog2IFLjesQZCbXfDT8kHcd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3M1LmFwcGxlaW5z/aWRlci5jb20vZ2Fs/bGVyeS81NDAxNS0x/MDg4MDgtU2lyaS1p/Y29uLXhsLmpwZw",
    gradientColor: "from-purple-500 to-blue-500"
  },
  {
    id: 2,
    text: "Implementation was smooth and the support team was exceptional. We've seen a 40% increase in customer satisfaction since adopting this solution.",
    author: "Michael Rodriguez",
    role: "Director @ InnovateCorp",
    avatar: "https://imgs.search.brave.com/bOqFMnk0DiUua3syN5ahog2IFLjesQZCbXfDT8kHcd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3M1LmFwcGxlaW5z/aWRlci5jb20vZ2Fs/bGVyeS81NDAxNS0x/MDg4MDgtU2lyaS1p/Y29uLXhsLmpwZw",
    gradientColor: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    text: "A game-changing tool that has streamlined our workflow. The intuitive interface and powerful features make it an essential part of our daily operations.",
    author: "Amanda Foster",
    role: "CEO @ Nexus Systems",
    avatar: "https://imgs.search.brave.com/bOqFMnk0DiUua3syN5ahog2IFLjesQZCbXfDT8kHcd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3M1LmFwcGxlaW5z/aWRlci5jb20vZ2Fs/bGVyeS81NDAxNS0x/MDg4MDgtU2lyaS1p/Y29uLXhsLmpwZw",
    gradientColor: "from-cyan-500 to-purple-500"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !mouseOver) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, mouseOver]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id='testimonials' className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 -left-10 w-96 h-96 bg-gradient-to-r ${testimonials[currentSlide].gradientColor} rounded-full filter blur-3xl opacity-20 animate-pulse`} />
        <div className={`absolute bottom-1/4 -right-10 w-96 h-96 bg-gradient-to-l ${testimonials[currentSlide].gradientColor} rounded-full filter blur-3xl opacity-20 animate-pulse`} />
      </div>

      <div 
        className="relative w-full max-w-4xl mx-auto px-4 py-16"
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            3400+ Users
          </h2>
          <h3 className="text-3xl font-semibold mb-2 text-gray-300">
            Trusted by Teams Worldwide
          </h3>
          <p className="text-gray-400">Real experiences from our valued customers</p>
        </div>

        {/* Testimonial Card */}
        <div className="relative backdrop-blur-lg bg-gray-900/50 rounded-2xl p-8 mb-8 border border-gray-800 shadow-2xl transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10">
          <div className="absolute top-4 left-4 text-gray-600">
            <Quote size={40} />
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentSlide].gradientColor} rounded-full blur-lg opacity-50`} />
              <img
                src={testimonials[currentSlide].avatar}
                alt={testimonials[currentSlide].author}
                className="relative w-20 h-20 rounded-full border-2 border-white/20 object-cover transition-transform duration-500 transform hover:scale-110"
              />
            </div>
            
            <blockquote className="text-white text-xl text-center mb-6 max-w-2xl leading-relaxed">
              "{testimonials[currentSlide].text}"
            </blockquote>
            
            <div className="text-center">
              <div className="text-white font-semibold text-lg">
                {testimonials[currentSlide].author}
              </div>
              <div className={`bg-gradient-to-r ${testimonials[currentSlide].gradientColor} bg-clip-text text-transparent font-medium`}>
                {testimonials[currentSlide].role}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? `bg-gradient-to-r ${testimonials[currentSlide].gradientColor} scale-125` : 'bg-gray-600 hover:bg-gray-500'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Autoplay Toggle */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-all duration-300 
              ${isAutoPlaying ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`}
          >
            {isAutoPlaying ? 'Auto-Playing' : 'Paused'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;