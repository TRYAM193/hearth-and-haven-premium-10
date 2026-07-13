import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hearth-charcoal text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="col-span-full md:col-span-1">
            <a href="#" className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-hearth-emerald to-hearth-gold mb-4 block">
              Hearth & Haven
            </a>
            <p className="text-sm leading-relaxed">Your journey to a dream home starts here. Discover exclusive luxury properties with unparalleled service.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-hearth-gold font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-hearth-gold transition-colors duration-300">Home</a></li>
              <li><a href="#properties" className="hover:text-hearth-gold transition-colors duration-300">Properties</a></li>
              <li><a href="#neighborhoods" className="hover:text-hearth-gold transition-colors duration-300">Neighborhoods</a></li>
              <li><a href="#about" className="hover:text-hearth-gold transition-colors duration-300">About Us</a></li>
              <li><a href="#contact" className="hover:text-hearth-gold transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-hearth-gold font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-hearth-gold transition-colors duration-300">Buy a Property</a></li>
              <li><a href="#" className="hover:text-hearth-gold transition-colors duration-300">Sell your Property</a></li>
              <li><a href="#" className="hover:text-hearth-gold transition-colors duration-300">Property Management</a></li>
              <li><a href="#" className="hover:text-hearth-gold transition-colors duration-300">Consultation</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-hearth-gold font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay up to date with our latest listings and news.</p>
            <div className="flex rounded-full overflow-hidden border border-hearth-charcoal/80 shadow-md">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-hearth-charcoal/50 text-white placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-hearth-gold text-hearth-charcoal px-5 py-2 font-semibold hover:bg-hearth-gold/90 transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-hearth-gold transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hearth-gold transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hearth-gold transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hearth-gold transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-hearth-charcoal/80 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Hearth & Haven. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
