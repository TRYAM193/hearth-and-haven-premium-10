import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      alert('Please fill in all fields.');
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Assuming success for prototype
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    alert('Your message has been sent!');
  };

  return (
    <section id="contact" className="py-20 bg-hearth-charcoal text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-hearth-emerald via-yellow-200 to-hearth-gold">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div className="bg-hearth-charcoal/60 backdrop-blur-lg border border-hearth-charcoal/80 rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-hearth-gold mb-4">Our Office</h3>
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-hearth-emerald mr-4 mt-1" />
                <p className="text-gray-300">123 Luxury Lane, Suite 400<br/>Elite City, CA 90210</p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-hearth-emerald mr-4" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-hearth-emerald mr-4" />
                <p className="text-gray-300">info@hearthhaven.com</p>
              </div>
            </div>

            <div className="bg-hearth-charcoal/60 backdrop-blur-lg border border-hearth-charcoal/80 rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-hearth-gold mb-4">Working Hours</h3>
              <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-300">Sunday: Closed</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-hearth-charcoal/60 backdrop-blur-lg border border-hearth-charcoal/80 rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-hearth-gold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-hearth-charcoal/50 border border-hearth-charcoal/70 text-white placeholder-gray-500 focus:outline-none focus:border-hearth-gold transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-hearth-charcoal/50 border border-hearth-charcoal/70 text-white placeholder-gray-500 focus:outline-none focus:border-hearth-gold transition-colors duration-300"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-hearth-charcoal/50 border border-hearth-charcoal/70 text-white placeholder-gray-500 focus:outline-none focus:border-hearth-gold transition-colors duration-300"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full relative px-6 py-3 rounded-lg bg-hearth-gold text-hearth-charcoal font-semibold hover:bg-hearth-gold/90 transition-all duration-300 shadow-hearth-gold/30 hover:shadow-2xl hover:shadow-hearth-gold/50 flex items-center justify-center"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 text-hearth-charcoal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                )}
                <span className={status === 'submitting' ? 'opacity-0' : 'opacity-100'}>Send Message</span>
                <Send className={`ml-2 h-5 w-5 ${status === 'submitting' ? 'opacity-0' : 'opacity-100'}`} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
