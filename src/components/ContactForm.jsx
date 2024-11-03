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
      // Configure EmailJS with your service ID, template ID, and public key
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'      // Replace with your EmailJS public key
      );

      setSubmitStatus({
        success: true,
        error: false,
        message: 'Email sent successfully!'
      });
      
      // Reset form after successful submission
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
    
    // Construct WhatsApp message
    const message = encodeURIComponent(`Name: ${formData.name}\nMessage: ${formData.message}`);
    
    // Replace with your WhatsApp number (including country code)
    const phoneNumber = '+919014347729'; // Example: replace with actual number
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous status
    setSubmitStatus({
      success: false,
      error: false,
      message: ''
    });

    // Call different submit handlers based on active tab
    if (activeTab === 'email') {
      handleEmailSubmit(e);
    } else if (activeTab === 'whatsapp') {
      handleWhatsAppSubmit(e);
    }
  };

  // Rest of the component remains the same as in the original code
  // ... (getLottieAnimation, return statement, helper functions)
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
    <div id='contact' className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {['lets-connect', 'email', 'whatsapp'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab
                  ? getTabActiveStyle(tab)
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {getTabIcon(tab)}
              {getTabLabel(tab)}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="backdrop-blur-xl bg-black/30 rounded-2xl p-8 border border-gray-800 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Lottie Animation */}
            <div className="flex items-center justify-center">
              <Lottie
                className="w-96 h-96"
                animationData={getLottieAnimation(activeTab)}
                loop
                autoplay
              />
            </div>

            {/* Right Column - Content/Form */}
            <div>
              {activeTab === 'lets-connect' && (
                <div className="space-y-6 p-6 text-center">
                  <div className="space-y-4 relative">
                    <h3 className="text-blue-400 text-sm font-medium tracking-wider uppercase">
                      Connect with Me
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                      Let's Create Together
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work. matter for lets talk.
                    </p>
                  </div>
                </div>
              )}

              {activeTab !== 'lets-connect' && (
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div>
                    <input
                      type={activeTab === 'email' ? 'email' : 'text'}
                      name={activeTab === 'email' ? 'email' : 'name'}
                      placeholder={activeTab === 'email' ? 'Email address' : 'Your Name'}
                      value={activeTab === 'email' ? formData.email : formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium py-3 px-4 flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 relative"
                  >
                    {activeTab === 'whatsapp' ? <FaWhatsapp size={18} /> : <Send size={18} />}
                    {activeTab === 'whatsapp' ? 'Open WhatsApp' : 'Submit'}
                  </button>
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
    case 'email': return <Mail size={18} />;
    case 'whatsapp': return <FaWhatsapp size={18} />;
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

export default ContactForm;