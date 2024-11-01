import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PageWrapper from './components/PageWrapper';
import Blog from './pages/Blog';
import PortfolioPage from './pages/PortfolioPage';
import Gallary from './pages/Gallary';
import ComponentDetectionBar from './ComponentDetectionBar'; // Import the new component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // State to track detected components
  const [detectedComponents, setDetectedComponents] = useState([
    { id: 1, name: 'Header' },
    { id: 2, name: 'PageWrapper' },
    { id: 3, name: 'Routes' },
    // You can dynamically update this list as needed
  ]);

  return (
    <Router>
      {/* Add ComponentDetectionBar */}
      <ComponentDetectionBar components={detectedComponents} />

      {/* Common components like Header and SideBar */}
      <Header />

      {/* Defining routes for different pages */}
      <Routes>
        {/* Home page route displaying all sections */}
        <Route path="/sumitesh-portfolio" element={<PageWrapper />}/>    
        {/* Route for portfolio page */}
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/gallary' element={<Gallary />}/>
      </Routes>
    </Router>
  );
}

export default App;