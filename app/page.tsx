'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PropertiesGrid from '../components/PropertiesGrid';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white">
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
