import React, { useState, useEffect } from 'react';
import { Bed, Bath, Maximize2, MapPin, X } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  imageUrl: string;
  location: string;
  type: string;
  tag?: string;
}

const PropertiesGrid: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>('All');
  
  // Booking Modal States
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingMsg, setBookingMsg] = useState('');
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('/api/properties');
        if (res.ok) {
          const data = await res.json();
          const processed = data.map((p: any, idx: number) => ({
            ...p,
            tag: p.price > 2000000 ? 'Featured' : idx % 2 === 0 ? 'New Listing' : 'For Sale'
          }));
          setProperties(processed);
        }
      } catch (err) {
        console.error('Failed to load properties:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProperty) return;
    setBookingLoading(true);
    setBookingStatus(null);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: bookingName,
          email: bookingEmail,
          phone: bookingPhone,
          propertyId: selectedProperty.id,
          visitDate: bookingDate,
          message: bookingMsg
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setBookingStatus({ type: 'success', text: 'Viewing scheduled! A Hearth & Haven partner will contact you shortly.' });
        setBookingName('');
        setBookingEmail('');
        setBookingPhone('');
        setBookingDate('');
        setBookingMsg('');
        setTimeout(() => setSelectedProperty(null), 3000);
      } else {
        const errorText = data.errors 
          ? Object.values(data.errors).flat().join(', ') 
          : (data.error || 'Failed to request viewing.');
        setBookingStatus({ type: 'error', text: errorText });
      }
    } catch (err) {
      setBookingStatus({ type: 'error', text: 'Network connection failed. Please try again.' });
    } finally {
      setBookingLoading(false);
    }
  };

  const filteredProperties = properties.filter((property) => {
    if (filter === 'All') return true;
    return property.type.toLowerCase() === filter.toLowerCase();
  });

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="properties" className="py-24 bg-[#0b0f17] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-amber-200 to-amber-400">
          Exclusive Estate Listings
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-md mx-auto">
          Immerse yourself in our curated portfolio of architectural masterpieces.
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-4 mb-16 flex-wrap gap-y-3">
          {['All', 'Villa', 'Apartment', 'House'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer
                         ${filter === type 
                           ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/20' 
                           : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400'}`}
            >
              {type === 'All' ? 'All Properties' : `${type}s`}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></span>
          </div>
        ) : (
          /* Property Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="group relative bg-slate-900/60 backdrop-blur-md border border-slate-900 rounded-2xl overflow-hidden shadow-2xl
                       transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.15)] hover:border-emerald-500/30"
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={property.imageUrl} 
                    alt={property.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-slate-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {property.tag || 'Exclusive'}
                  </div>
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">
                    {property.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-300 group-hover:text-emerald-400 transition-colors duration-300 mb-1">
                    {property.title}
                  </h3>
                  <h4 className="text-2xl font-black text-amber-400 mb-3">
                    {formatPrice(property.price)}
                  </h4>
                  
                  <div className="flex items-center text-slate-400 text-sm mb-5">
                    <MapPin className="h-4 w-4 mr-1 text-emerald-500" />
                    <span>{property.location}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-slate-400 text-xs border-t border-slate-800/80 pt-4 pb-2">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1 text-emerald-500" /> {property.beds} Beds
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1 text-emerald-500" /> {property.baths} Baths
                    </div>
                    <div className="flex items-center">
                      <Maximize2 className="h-4 w-4 mr-1 text-emerald-500" /> {property.area} Sqft
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProperty(property)}
                    className="mt-6 w-full bg-slate-950 border border-slate-800 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all duration-300 py-3 rounded-xl font-bold text-sm tracking-wide cursor-pointer"
                  >
                    Book Private Viewing
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Book Private Viewing Modal Overlay */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl animate-scale-in">
            <button 
              onClick={() => { setSelectedProperty(null); setBookingStatus(null); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-2xl font-extrabold text-amber-400 mb-1">
              Private Viewing Request
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Listing: <span className="text-emerald-400 font-semibold">{selectedProperty.title}</span> ({selectedProperty.location})
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              {bookingStatus && (
                <div className={`p-4 rounded-xl text-xs font-semibold ${
                  bookingStatus.type === 'success' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30' : 'bg-red-950/80 text-red-300 border border-red-500/30'
                }`}>
                  {bookingStatus.text}
                </div>
              )}

              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1 uppercase tracking-wider">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-emerald-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    required
                    value={bookingEmail}
                    onChange={(e) => setBookingEmail(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-emerald-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1 uppercase tracking-wider">Phone</label>
                  <input 
                    type="tel" 
                    required
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-emerald-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1 uppercase tracking-wider">Preferred Date</label>
                <input 
                  type="date" 
                  required
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1 uppercase tracking-wider">Special Requests</label>
                <textarea 
                  rows={3}
                  value={bookingMsg}
                  onChange={(e) => setBookingMsg(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-emerald-500"
                  placeholder="Any custom request for our agents..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={bookingLoading}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 py-3.5 rounded-xl font-bold text-sm tracking-wide hover:opacity-90 active:scale-[0.99] transition-all flex justify-center items-center cursor-pointer"
              >
                {bookingLoading ? (
                  <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  'Confirm Booking Request'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertiesGrid;
