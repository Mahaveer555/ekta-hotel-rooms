import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Restaurant from './pages/Restaurant';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F8F3E8] text-[#202526] antialiased selection:bg-[#C69A45] selection:text-[#07383B]">
        {/* Site Preloader Screen */}
        <Preloader />

        {/* Scroll restoration helper */}
        <ScrollToTop />

        {/* Global Responsive Sticky Header */}
        <Navbar />

        {/* Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Floating Action Buttons (WhatsApp & Call) */}
        <FloatingButtons />

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
