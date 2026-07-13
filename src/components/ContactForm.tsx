import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-gold drop-shadow-lg">
          Contact Us
        </h2>
        <form className="bg-gray-800 p-10 rounded-xl shadow-lg border border-emerald-green">
          <div className="mb-6">
            <label htmlFor="name" className="block text-emerald-green text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition duration-300"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-emerald-green text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition duration-300"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-emerald-green text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition duration-300"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gold text-gray-900 hover:bg-opacity-90 transition duration-300 py-4 px-6 rounded-lg text-xl font-semibold shadow-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
