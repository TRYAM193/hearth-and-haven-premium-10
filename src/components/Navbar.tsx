
import React, { useState } from 'react';
import { Home, LayoutGrid, Users, Mail, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Properties', icon: LayoutGrid, href: '#properties' },
    { name: 'Testimonials', icon: Users, href: '#testimonials' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center bg-hearth-charcoal/60 backdrop-blur-lg border border-hearth-charcoal/80 rounded-full px-6 py-3 shadow-lg">
        {/* Logo */}
        <a href="#" className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-hearth-emerald to-hearth-gold">
          Hearth & Haven
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-hearth-gold transition-colors duration-300 flex items-center group"
            >
              <link.icon className="mr-2 h-5 w-5 group-hover:stroke-hearth-gold transition-colors duration-300" />
              {link.name}
            </a>
          ))}
          <button className="relative px-6 py-2 rounded-full bg-hearth-gold text-hearth-charcoal font-semibold hover:bg-hearth-gold/90 transition-all duration-300 shadow-hearth-gold/30 hover:shadow-2xl hover:shadow-hearth-gold/50">
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-200 focus:outline-none">
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 mx-4 bg-hearth-charcoal/90 backdrop-blur-lg border border-hearth-charcoal/80 rounded-lg shadow-lg py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-5 py-3 text-gray-200 hover:bg-hearth-gold hover:text-hearth-charcoal transition-colors duration-300 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <link.icon className="mr-3 h-5 w-5" />
              {link.name}
            </a>
          ))}
          <div className="px-5 py-3">
            <button className="w-full px-6 py-2 rounded-full bg-hearth-gold text-hearth-charcoal font-semibold hover:bg-hearth-gold/90 transition-all duration-300 shadow-hearth-gold/30 hover:shadow-2xl hover:shadow-hearth-gold/50">
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
