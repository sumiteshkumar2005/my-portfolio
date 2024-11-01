import React, { useState, useEffect } from 'react';
import Header from './Header';
import About from './About';
import Hero from './Hero';
import Contact from './ContactForm';
import Services from './Services';
import StatsSection from './StatsSection';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import SideBar from './SideBar';
import LoadingAnimation from './LoadingAnimation';
import Footer from './Footer';

const PageWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure minimum display time for loading animation
    const minLoadingTime = 2000; // 2 seconds minimum loading time
    const startTime = Date.now();

    // Create a promise that resolves when all images are loaded
    const loadImages = () => {
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve; // Handle error case as well
        });
      });
      return Promise.all(imagePromises);
    };

    // Handle page loading
    Promise.all([
      loadImages(),
      new Promise(resolve => {
        const timeLeft = minLoadingTime - (Date.now() - startTime);
        setTimeout(resolve, Math.max(0, timeLeft));
      })
    ]).then(() => {
      // Add a slight delay before hiding loading screen for smoother transition
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="animate-fadeIn">
          {/* <Header /> */}
          <SideBar />
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <StatsSection />
          <Contact />
          <FAQ />
          <Footer />
        </div>
      )}
    </>
  );
};

export default PageWrapper;