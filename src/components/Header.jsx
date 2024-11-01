import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Circle, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleScroll = (e, targetId) => {
    e.preventDefault();

    const scrollToSection = () => {
      const element = document.querySelector(targetId);
      if (element) {
        const offset = element.offsetTop - 80;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
        setIsOpen(false);
      }
    };

    if (location.pathname !== '/my-portfolio') {
      navigate('/my-portfolio', { state: { scrollTo: targetId } });
    } else {
      scrollToSection();
    }
  };

  useEffect(() => {
    if (location.pathname === '/my-portfolio' && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const element = document.querySelector(targetId);
      if (element) {
        const offset = element.offsetTop - 80;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
      // Clear the state to prevent scrolling on subsequent renders
      navigate('/my-portfolio', { replace: true, state: {} });
    }
  }, [location, navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) && 
        buttonRef.current && 
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const MenuItem = ({ href, children, isLink = false }) => {
    const content = (
      <div className="group block mx-2 px-4 py-2.5 text-white/90 rounded-xl transition-all duration-300 
        hover:bg-white/10 hover:text-white 
        hover:shadow-lg hover:shadow-pink-500/10"
      >
        <div className="flex items-center justify-between">
          <span>{children}</span>
          <ArrowRight 
            className="w-0 h-0 opacity-0 transform translate-x-2 
              group-hover:w-4 group-hover:h-4 group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-300 ease-out"
          />
        </div>
      </div>
    );

    if (isLink) {
      return <Link to={href}>{content}</Link>;
    }

    return (
      <a 
        href={href} 
        onClick={(e) => handleScroll(e, href)}
      >
        {content}
      </a>
    );
  };

  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 w-full h-16 md:h-20 z-50">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-xl md:text-2xl font-bold tracking-wider transition-all duration-300 hover:text-blue-200">
            <Link to="/my-portfolio">SK</Link>
          </div>

          {/* Desktop and Mobile Contact Button */}
          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="group relative inline-flex items-center 
                w-24 md:w-32 h-8 md:h-10 
                text-xs md:text-sm font-medium
                bg-transparent
                backdrop-blur-sm
                border 
                border-gray-800/30
                rounded-full
                hover:bg-gradient-to-r hover:from-pink-900 hover:via-purple-900 hover:to-violet-900
                group-hover:opacity-70
                transition-all duration-300
                hover:shadow-lg 
                hover:shadow-purple-900/20
                overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-500/70 opacity-40 transition-opacity duration-300" />
              <div className="flex items-center justify-center w-full">
                <div className="relative overflow-hidden h-4 md:h-5 w-16 md:w-20">
                  <div className="flex flex-col transition-transform duration-500 ease-in-out transform group-hover:-translate-y-1/2">
                    <div className="h-4 md:h-5 flex items-center justify-center">
                      <span className="text-white whitespace-nowrap text-xs md:text-sm">LET'S TALK</span>
                    </div>
                    <div className="h-4 md:h-5 flex items-center justify-center">
                      <span className="text-white whitespace-nowrap text-xs md:text-sm">LET'S TALK</span>
                    </div>
                  </div>
                </div>
                <Circle 
                  className="ml-1 w-1 h-1 md:w-1.5 md:h-1.5 transition-all text-white duration-300 opacity-60 group-hover:w-2 group-hover:h-2 md:group-hover:w-3 md:group-hover:h-3 group-hover:opacity-40" 
                  fill="currentColor"
                />
              </div>
            </a>

            {/* Menu Toggle Button */}
            <div className="relative">
              <button 
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className={`group p-2 text-blue-300 rounded-full 
                  transition-all duration-300 
                  flex items-center 
                  ${isOpen ? 'bg-white/10' : ''}`}
              >
                {/* Mobile Menu Icon */}
                <span className="md:hidden">
                  {isOpen ? (
                    <X size={24} className="transition-all duration-300" />
                  ) : (
                    <Menu size={24} className="transition-all duration-300" />
                  )}
                </span>

                {/* Desktop Menu Button */}
                <div className="hidden md:inline-flex items-center px-6 py-2 text-sm font-medium text-black bg-white rounded-full">
                  <span className="mr-2">{isOpen ? 'CLOSE' : 'MENU'}</span>
                  <Circle 
                    className="w-1.5 h-1.5 transition-all duration-300 opacity-60 group-hover:w-3 group-hover:h-3 group-hover:opacity-40" 
                    fill="currentColor"
                  />
                </div>
              </button>

              {/* Dropdown Menu */}
              <div 
                ref={menuRef}
                className={`absolute right-0 mt-4 w-48 
                  bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-violet-500/20
                  backdrop-blur-sm
                  rounded-2xl 
                  shadow-2xl
                  shadow-purple-900/30
                  border border-white/10
                  transition-all duration-300 
                  transform origin-top-right
                  overflow-hidden
                  z-50
                  ${isOpen 
                    ? 'scale-100 opacity-100 pointer-events-auto' 
                    : 'scale-95 opacity-0 pointer-events-none'}`}
              >
                <div className="relative py-2">
                  <MenuItem href="#about">About</MenuItem>
                  <MenuItem href="#services">Services</MenuItem>
                  <MenuItem isLink href="/portfolio">Portfolio</MenuItem>
                  <MenuItem href="#testimonials">Testimonials</MenuItem>
                  <MenuItem isLink href="/gallary">Gallary</MenuItem>
                  <MenuItem isLink href="/blog">Blog</MenuItem>
                  <MenuItem href="#contact">Contact</MenuItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}