import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const offices = [
    {
      region: 'United States',
      locations: ['East Coast', 'West Coast']
    },
    {
      region: 'India',
      locations: ['Ahmedabad', 'Jaipur']
    },
    {
      region: 'Canada',
      locations: ['Toronto']
    },
    {
      region: 'Australia',
      locations: ['Sydney', 'Melbourne']
    }
  ];

  const expectations = [
    'A prompt response from a MAKS Solutions specialist',
    'Personalized guidance based on your needs',
    'Clear next steps and actionable insights'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-lg p-6 sm:p-8 lg:p-12 hover:border-blue-500/50 transition-all">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Let's Start the Conversation
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            Whether you're looking for top talent, exploring career opportunities, or simply have a question, we're here to help.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-slate-900/60">
        {/* <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          Contact Form
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">Contact MAKS Solutions</h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
              Connect with our team to learn how we can support your business or career goals.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div>
                <label className="block text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm sm:text-base placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm sm:text-base placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm sm:text-base placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2.5 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm sm:text-base placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {submitted && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-green-300 font-semibold text-sm sm:text-base">Thank you! Your message has been sent successfully.</p>
                </div>
              )}
            </form>
          </div> */}

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="max-w-sm mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">What to Expect</h3>
              <div className="space-y-3 sm:space-y-4">
                {expectations.map((exp, index) => (
                  <div key={index} className="group flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <p className="text-sm sm:text-base lg:text-lg text-slate-300 group-hover:text-green-300 transition-colors">{exp}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='pt-12 max-w-sm mx-auto bg-slate-900/60'>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">Get in Touch</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:border-blue-500/80 hover:bg-slate-800/80 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 duration-300">
                  <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-slate-400 text-xs sm:text-sm">Email</p>
                    <p className="text-white font-semibold text-sm sm:text-base">makssolutionsorg@gmail.com</p>
                  </div>
                </div>
                <div className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:border-green-500/80 hover:bg-slate-800/80 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/10 duration-300">
                  <Phone className="w-6 h-6 text-green-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-slate-400 text-xs sm:text-sm">Phone</p>
                    <p className="text-white font-semibold text-sm sm:text-base">+918460135272</p>
                  </div>
                </div>
                <div className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:border-red-500/80 hover:bg-slate-800/80 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/10 duration-300">
                  <MapPin className="w-6 h-6 text-red-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-slate-400 text-xs sm:text-sm">Location</p>
                    <p className="text-white font-semibold text-sm sm:text-base">Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      </section>

      {/* Global Offices */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 text-center">Visit One of Our Global Offices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8">
            {offices.map((office, index) => (
              <div key={index} className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 hover:border-blue-500/80 hover:bg-slate-800/80 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2 group-hover:text-blue-300 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  {office.region}
                </h3>
                <ul className="space-y-2">
                  {office.locations.map((location, locIndex) => (
                    <li key={locIndex} className="text-sm sm:text-base text-slate-300 group-hover:text-slate-200 transition-colors">• {location}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-slate-900/60">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-lg p-6 sm:p-8 lg:p-12 hover:border-blue-500/50 transition-all">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Let's Build Success Together</h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            One connection at a time. Our team is ready to support your journey toward exceptional talent and career growth.
          </p>
        </div>
      </section>
    </div>
  );
};
