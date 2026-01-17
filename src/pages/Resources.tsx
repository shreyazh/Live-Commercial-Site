import React, { useState } from 'react';
import { Bell, Share2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Resources: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const featuredContent = [
    {
      type: 'Featured News',
      title: 'Celebrating 40 Years of MAKS Solutions: A Legacy of Connecting People and Opportunities',
      description: 'Four decades of building careers, empowering businesses, and creating meaningful connections across industries.',
      readTime: '5 min read'
    },
    {
      type: 'Featured Blog',
      title: 'Why MAKS Solutions Is a Trusted Employment Agency in Charlotte, North Carolina',
      description: 'Discover what sets MAKS Solutions apart and why businesses and professionals continue to choose us as their staffing partner.',
      readTime: '8 min read'
    },
    {
      type: 'Recent Press Release',
      title: 'MAKS Solutions Unveils New Brand Identity in Celebration of 40 Years of Excellence',
      description: 'Marking 40 years as a Total Talent Solutions Provider with a refreshed brand and a forward-looking vision.',
      readTime: '4 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Stay Informed and Inspired
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
            Explore the latest MAKS Solutions news, expert insights, and industry perspectives shaping the future of recruitment and career development.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-y border-purple-500/20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 sm:p-6 lg:p-8 hover:border-purple-500/50 transition-all">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <Bell className="w-8 h-8 text-purple-400 flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Subscribe to Our Newsletter</h2>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-5 sm:mb-6 leading-relaxed">
              Stay up to date with hiring trends, career advice, company updates, and thought leadership delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2.5 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm sm:text-base placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2.5 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-green-400 font-semibold text-sm sm:text-base">✓ Thank you for subscribing!</p>
            )}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12">MAKS Solutions News & Expert Perspectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredContent.map((item, index) => (
              <div key={index} className="group bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-purple-500/80 hover:bg-slate-800/80 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 duration-300 flex flex-col cursor-pointer">
                <div className="p-5 sm:p-6 lg:p-8 h-full flex flex-col">
                  <span className="inline-block w-fit px-3 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-purple-300 text-xs sm:text-sm font-semibold mb-4">
                    {item.type}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 mb-4 flex-grow leading-relaxed group-hover:text-slate-200 transition-colors">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-slate-400 text-xs sm:text-sm">{item.readTime}</span>
                    <ExternalLink className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-600/20 to-emerald-600/10 border border-green-500/30 rounded-lg p-6 sm:p-8 lg:p-12 text-center hover:border-green-500/50 transition-all">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Share2 className="w-10 h-10 sm:w-12 lg:w-14 text-green-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Know Someone Amazing?</h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
            Refer a skilled professional or a business in need of talent. Together, we'll help them take the next step toward success.
          </p>
          <Link to="/contact" className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 text-sm sm:text-base">
            Make a Referral
          </Link>
        </div>
      </section>
    </div>
  );
};
