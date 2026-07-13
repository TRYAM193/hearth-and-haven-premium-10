import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertiesGrid from './components/PropertiesGrid';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-hearth-charcoal text-white">
      <Navbar />
      <main>
        <Hero />
        <PropertiesGrid />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
