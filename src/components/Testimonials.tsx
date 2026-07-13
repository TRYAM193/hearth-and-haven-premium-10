import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    title: 'Home Buyer',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait-woman',
    rating: 5,
    feedback: 'Hearth & Haven made our dream home a reality. Their professionalism and attention to detail were outstanding. The process was seamless and enjoyable from start to finish.',
  },
  {
    id: 2,
    name: 'Bob Williams',
    title: 'Real Estate Investor',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait-man',
    rating: 5,
    feedback: 'As an investor, I need a partner who understands the market. Hearth & Haven consistently delivers exceptional opportunities and unparalleled service. Highly recommended!',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    title: 'First-time Homeowner',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait-person',
    rating: 4,
    feedback: 'Navigating the housing market for the first time was daunting, but Hearth & Haven guided us every step of the way. Their patience and expertise were invaluable.',
  },
  {
    id: 4,
    name: 'Diana Miller',
    title: 'Luxury Property Seller',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait-lady',
    rating: 5,
    feedback: 'Selling our luxury villa was a breeze with Hearth & Haven. Their marketing reach and client network are truly impressive. A top-tier experience all around.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-hearth-charcoal text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-hearth-emerald via-yellow-200 to-hearth-gold">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-hearth-charcoal/60 backdrop-blur-lg border border-hearth-charcoal/80 rounded-xl p-8 shadow-xl
                     transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_50px_-12px_rgba(211,162,55,0.25)] hover:border-hearth-gold/50"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-hearth-gold"
                />
                <div>
                  <p className="font-semibold text-lg text-hearth-gold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-hearth-gold' : 'text-gray-600'}`}
                    fill={i < testimonial.rating ? '#D3A237' : 'none'}
                  />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
