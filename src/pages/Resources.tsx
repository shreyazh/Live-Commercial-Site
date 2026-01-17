import React, { useState } from 'react';
import { Bell, Share2, ExternalLink } from 'lucide-react';

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
      <section className="pt-20 px-6 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Stay Informed and Inspired
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Explore the latest MAKS Solutions news, expert insights, and industry perspectives shaping the future of recruitment and career development.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 lg:px-20 py-16 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-y border-purple-500/20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Subscribe to Our Newsletter</h2>
            </div>
            <p className="text-slate-300 text-lg mb-6">
              Stay up to date with hiring trends, career advice, company updates, and thought leadership delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-green-400 font-semibold">✓ Thank you for subscribing!</p>
            )}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">MAKS Solutions News & Expert Perspectives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all group cursor-pointer">
                <div className="p-8 h-full flex flex-col">
                  <span className="inline-block w-fit px-3 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-purple-300 text-sm font-semibold mb-4">
                    {item.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-base mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-slate-400 text-sm">{item.readTime}</span>
                    <ExternalLink className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section className="px-6 lg:px-20 py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-600/20 to-emerald-600/10 border border-green-500/30 rounded-lg p-8 lg:p-12 text-center">
          <div className="flex justify-center mb-6">
            <Share2 className="w-12 h-12 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Know Someone Amazing?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Refer a skilled professional or a business in need of talent. Together, we'll help them take the next step toward success.
          </p>
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all transform hover:scale-105">
            Make a Referral
          </button>
        </div>
      </section>
    </div>
  );
};
