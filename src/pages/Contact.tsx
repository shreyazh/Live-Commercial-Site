import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Contact</span> Us
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
            Let's Start the Conversation
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for top talent, exploring career opportunities, or simply have a question, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
                  Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Maks Solutions</span>
                </h2>
                <p className="text-slate-400 text-lg">
                  Connect with our team to learn how we can support your business or career goals.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-slate-300 font-medium mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="talent">Looking for Talent</option>
                    <option value="career">Career Opportunities</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">What to Expect</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                  Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Response</span>
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700">
                    <MessageSquare className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">A prompt response</h3>
                      <p className="text-slate-400 text-sm">from a Maks Solutions specialist</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700">
                    <MessageSquare className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Personalized guidance</h3>
                      <p className="text-slate-400 text-sm">based on your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700">
                    <MessageSquare className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Clear next steps</h3>
                      <p className="text-slate-400 text-sm">and actionable insights</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:info@makssolutions.org"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        info@makssolutions.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <a
                        href="tel:+918460135272"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        +91 8460135272
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-slate-400">
                        Rajastan, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <p className="text-slate-400 text-center italic">
                    Let's build success together - one connection at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
