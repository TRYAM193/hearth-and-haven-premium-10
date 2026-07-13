import React, { useState } from 'react';
import { Bed, Bath, Maximize2, MapPin } from 'lucide-react';

interface Property {
  id: number;
  type: 'Villa' | 'Apartment' | 'House';
  image: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  tag: string;
}

const allProperties: Property[] = [
  {
    id: 1,
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-15686051142-2e22c36696b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY1NDZ8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjB2aWxsYXxlbnwwfHx8fDE3MDY2ODk2NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
    price: '$2,500,000',
    location: 'Beverly Hills, CA',
    beds: 5,
    baths: 6,
    sqft: 7500,
    tag: 'For Sale',
  },
  {
    id: 2,
    type: 'Apartment',
    image: 'https://source.unsplash.com/random/800x600/?luxury-apartment',
    price: '$1,200,000',
    location: 'New York, NY',
    beds: 3,
    baths: 3,
    sqft: 2200,
    tag: 'New Listing',
  },
  {
    id: 3,
    type: 'House',
    image: 'https://source.unsplash.com/random/800x600/?modern-house',
    price: '$1,800,000',
    location: 'Miami, FL',
    beds: 4,
    baths: 4,
    sqft: 4000,
    tag: 'Reduced Price',
  },
  {
    id: 4,
    type: 'Villa',
    image: 'https://source.unsplash.com/random/800x600/?luxury-villa-interior',
    price: '$3,100,000',
    location: 'Malibu, CA',
    beds: 6,
    baths: 7,
    sqft: 9000,
    tag: 'Featured',
  },
  {
    id: 5,
    type: 'Apartment',
    image: 'https://source.unsplash.com/random/800x600/?city-penthouse',
    price: '$950,000',
    location: 'Chicago, IL',
    beds: 2,
    baths: 2,
    sqft: 1800,
    tag: 'For Sale',
  },
];

const PropertiesGrid: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Villa' | 'Apartment' | 'House'>('All');

  const filteredProperties = allProperties.filter((property) => {
    if (filter === 'All') return true;
    return property.type === filter;
  });

  return (
    <section id="properties" className="py-20 bg-hearth-charcoal text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-hearth-emerald via-yellow-200 to-hearth-gold">
          Explore Our Exclusive Listings
        </h2>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-6 mb-12">
          <button
            onClick={() => setFilter('All')}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 
                       ${filter === 'All' ? 'bg-hearth-gold text-hearth-charcoal shadow-lg' : 'bg-hearth-charcoal/60 text-gray-200 border border-hearth-gold/30 hover:border-hearth-gold hover:text-hearth-gold'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('Villa')}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 
                       ${filter === 'Villa' ? 'bg-hearth-gold text-hearth-charcoal shadow-lg' : 'bg-hearth-charcoal/60 text-gray-200 border border-hearth-gold/30 hover:border-hearth-gold hover:text-hearth-gold'}`}
          >
            Villas
          </button>
          <button
            onClick={() => setFilter('Apartment')}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 
                       ${filter === 'Apartment' ? 'bg-hearth-gold text-hearth-charcoal shadow-lg' : 'bg-hearth-charcoal/60 text-gray-200 border border-hearth-gold/30 hover:border-hearth-gold hover:text-hearth-gold'}`}
          >
            Apartments
          </button>
          <button
            onClick={() => setFilter('House')}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 
                       ${filter === 'House' ? 'bg-hearth-gold text-hearth-charcoal shadow-lg' : 'bg-hearth-charcoal/60 text-gray-200 border border-hearth-gold/30 hover:border-hearth-gold hover:text-hearth-gold'}`}
          >
            Houses
          </button>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="relative bg-hearth-charcoal/60 backdrop-blur-lg border border-hearth-charcoal/80 rounded-xl overflow-hidden shadow-xl
                     transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_50px_-12px_rgba(211,162,55,0.25)] hover:border-hearth-gold/50"
            >
              <img src={property.image} alt={property.location} className="w-full h-56 object-cover" />
              <div className="absolute top-4 left-4 bg-hearth-gold/80 text-hearth-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                {property.tag}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-hearth-gold mb-2">{property.price}</h3>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className="h-5 w-5 mr-2 text-hearth-emerald" />
                  <span>{property.location}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400 text-sm border-t border-b border-hearth-charcoal/50 py-3">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1 text-hearth-emerald" /> {property.beds} Beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1 text-hearth-emerald" /> {property.baths} Baths
                  </div>
                  <div className="flex items-center">
                    <Maximize2 className="h-4 w-4 mr-1 text-hearth-emerald" /> {property.sqft} Sqft
                  </div>
                </div>
                <button className="mt-5 w-full bg-hearth-emerald text-white py-3 rounded-lg font-semibold hover:bg-hearth-emerald/90 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesGrid;
