import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Lottie from 'lottie-react';
import emailjs from '@emailjs/browser';
import email from './email.json';
import letsConnectAnimation from './lets-connect.json';
import whatsappAnimation from './whatsapp.json';

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState('lets-connect');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus({
        success: true,
        error: false,
        message: 'Email sent successfully!'
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({
        success: false,
        error: true,
        message: 'Failed to send email. Please try again.'
      });
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(`Name: ${formData.name}\nMessage: ${formData.message}`);
    const phoneNumber = '+919014347729';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus({
      success: false,
      error: false,
      message: ''
    });

    if (activeTab === 'email') {
      handleEmailSubmit(e);
    } else if (activeTab === 'whatsapp') {
      handleWhatsAppSubmit(e);
    }
  };

  const getLottieAnimation = (tab) => {
    switch(tab) {
      case 'lets-connect':
        return letsConnectAnimation;
      case 'email':
        return email;
      case 'whatsapp':
        return whatsappAnimation;
      default:
        return null;
    }
  };

  return (
    <div id="contact" className="min-h-screen w-full bg-black flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-4xl mx-auto">
        {/* Responsive Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
          {['lets-connect', 'email', 'whatsapp'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab
                  ? getTabActiveStyle(tab)
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {getTabIcon(tab)}
              <span className="hidden sm:inline">{getTabLabel(tab)}</span>
              <span className="sm:hidden">{getTabMobileLabel(tab)}</span>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="backdrop-blur-xl bg-black/30 rounded-xl p-4 sm:p-8 border border-gray-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Lottie Animation - Hidden on smallest screens */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
                <Lottie
                  animationData={getLottieAnimation(activeTab)}
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>

            {/* Content/Form Section */}
            <div className="w-full">
              {activeTab === 'lets-connect' ? (
                <div className="space-y-4 sm:space-y-6 p-2 sm:p-6 text-center">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-blue-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
                      Connect with Me
                    </h3>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      Let's Create Together
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                      Reach out and let's make it happen ✨. I'm available for full-time or part-time opportunities to push the boundaries of design and deliver exceptional work.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <input
                      type={activeTab === 'email' ? 'email' : 'text'}
                      name={activeTab === 'email' ? 'email' : 'name'}
                      placeholder={activeTab === 'email' ? 'Email address' : 'Your Name'}
                      value={activeTab === 'email' ? formData.email : formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Write your message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium py-2 sm:py-3 px-4 text-sm sm:text-base flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300"
                  >
                    {activeTab === 'whatsapp' ? (
                      <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                    {activeTab === 'whatsapp' ? 'Open WhatsApp' : 'Submit'}
                  </button>

                  {/* Status Messages */}
                  {submitStatus.message && (
                    <div className={`text-center p-2 rounded-lg ${
                      submitStatus.success ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getTabActiveStyle = (tab) => {
  switch(tab) {
    case 'lets-connect': 
      return 'bg-gradient-to-r from-purple-600 to-blue-600 text-white';
    case 'email': 
      return 'bg-gradient-to-r from-green-600 to-teal-600 text-white';
    case 'whatsapp': 
      return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white';
    default: 
      return '';
  }
};

const getTabIcon = (tab) => {
  switch(tab) {
    case 'lets-connect': return null;
    case 'email': return <Mail className="w-4 h-4 sm:w-5 sm:h-5" />;
    case 'whatsapp': return <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />;
    default: return null;
  }
};

const getTabLabel = (tab) => {
  switch(tab) {
    case 'lets-connect': return "Let's Connect";
    case 'email': return 'Email';
    case 'whatsapp': return 'WhatsApp';
    default: return '';
  }
};

const getTabMobileLabel = (tab) => {
  switch(tab) {
    case 'lets-connect': return 'Connect';
    case 'email': return 'Email';
    case 'whatsapp': return 'WhatsApp';
    default: return '';
  }
};

export default ContactForm;