import React from 'react';
import { Tilt } from 'react-tilt';

const FAQ = () => {
  const faqData = [
    {
      question: 'What can I expect in the Project Discussion Session?',
      answer: "In our project discussion, we'll align on your vision, content, style, timeline, and budget, ensuring a smooth workflow and delivering a high-quality video tailored to your needs."
    },
    {
      question: 'I have some very unusual needs and requirements',
      answer: "I welcome any unusual needs or requirements beyond my portfolio or previous work. Book a project discussion session, and I'd love to hear your unique ideas and explore how we can bring them to life!"
    },
    {
      question: 'Can you offer a Free Edit or Sample?',
      answer: "Unfortunately, I can't offer free edits or samples. However, you can check my portfolio and previous works to see the quality and style of my edits."
    },
    {
      question: 'How can I get support?',
      answer: 'You can get support through our official support channels, including email and live chat.'
    },
    {
      question: 'How to Contact you?',
      answer: 'You can send a request for a project discussion to sumiteshkumar1709@gmail.com, or feel free to reach out through my social media channels for further communication.'
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Background Effects - Adjusted for better mobile display */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 left-1/4 w-36 md:w-72 h-36 md:h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Frequently Asked Questions
          </h2>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {faqData.map((faq, index) => (
              <Tilt 
                key={index} 
                className="group bg-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 md:p-6 hover:border-gray-500 transition-colors duration-300"
                options={{ 
                  scale: 1.05, 
                  speed: 300,
                  max: window.innerWidth < 768 ? 0 : 15 // Disable tilt on mobile
                }}
              >
                <div className="h-full flex flex-col">
                  <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 flex-grow">
                    {faq.answer}
                  </p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;