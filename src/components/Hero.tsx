import React from 'react';
import { Search, Star, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop')`, // High-quality luxury real estate image
      }}>
      <div className="absolute inset-0 bg-hearth-charcoal opacity-70"></div> {/* Dark overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-hearth-emerald via-yellow-200 to-hearth-gold">
          Find Your <span className="block md:inline">Dream Haven</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl">
          Experience unparalleled luxury and comfort with Hearth & Haven, your partner in exclusive real estate.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-md bg-hearth-charcoal/70 backdrop-blur-lg rounded-full p-2 flex items-center border border-hearth-charcoal/80 shadow-lg">
          <Search className="text-hearth-gold mx-3" size={20} />
          <input
            type="text"
            placeholder="Search by location, property type, or price..."
            className="flex-grow bg-transparent text-white placeholder-gray-400 outline-none px-2 py-2"
          />
          <button className="bg-hearth-gold text-hearth-charcoal px-6 py-3 rounded-full font-semibold hover:bg-hearth-gold/90 transition-all duration-300">
            Search
          </button>
        </div>

        {/* Trust Badges */}
        <div className="absolute bottom-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center text-gray-200 bg-hearth-charcoal/70 backdrop-blur-lg px-4 py-2 rounded-full border border-hearth-charcoal/80 shadow-md">
            <Star className="text-hearth-gold mr-2" size={18} />
            <span>5-Star Rated</span>
          </div>
          <div className="flex items-center text-gray-200 bg-hearth-charcoal/70 backdrop-blur-lg px-4 py-2 rounded-full border border-hearth-charcoal/80 shadow-md">
            <ShieldCheck className="text-hearth-gold mr-2" size={18} />
            <span>Verified Properties</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
