import React from 'react';
import { Globe, Trophy, Users, Target } from 'lucide-react';

export const About: React.FC = () => {
  const globalPresence = [
    { region: 'United States', locations: 'East Coast, West Coast' },
    { region: 'India', locations: 'Bangalore, Hyderabad' },
    { region: 'Canada', locations: 'Toronto' },
    { region: 'Latin America', locations: 'Mexico City' }
  ];

  const recognition = [
    { stat: '95%', label: 'Client Retention', desc: 'Long-term partnerships built on trust and results' },
    { stat: 'Trusted', label: 'Across Sectors', desc: 'Healthcare, Technology, Retail, Financial Services' },
    { stat: 'Category', label: 'Leadership', desc: 'AI-driven recruiting and global delivery excellence' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ">
      {/* Hero Section */}
      <section className="pt-12 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-lg p-6 sm:p-8 lg:p-12 hover:border-blue-500/50 transition-all">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Bridging Potential and Performance
          </h1>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-blue-500/50 transition-all">
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
              MAKS Solutions connects top-performing professionals with forward-thinking organizations to drive measurable results. Whether you're a business seeking exceptional talent or a professional ready to make an impact, we bridge the gap between potential and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Why MAKS Solutions */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-8">Why MAKS Solutions?</h2>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-blue-500/50 transition-all">
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
              People are the heart of every business. Founded on a passion for meaningful connections, MAKS Solutions has spent decades building trusted partnerships that empower companies and elevate careers. Our success is built on integrity, innovation, and a relentless focus on results.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-8">Company Background</h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
              In market since 2021, MAKS Solutions was created to meet the growing demand for skilled IT professionals and strategic staffing solutions. As technology and workforce needs evolved, so did we by expanding our expertise while staying true to personalized service and long-term partnerships.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
              Our guiding belief remains the same: the right talent in the right role creates lasting impact for businesses and fulfilling careers for professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
            <Globe className="w-8 h-8 sm:w-10 lg:w-12 text-blue-400" />
            Global Presence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8">
            {globalPresence.map((item, index) => (
              <div key={index} className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 hover:border-blue-500/80 hover:bg-slate-800/80 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{item.region}</h3>
                <p className="text-sm sm:text-base text-slate-300 group-hover:text-slate-200 transition-colors">{item.locations}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Impact */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
            <Trophy className="w-8 h-8 sm:w-10 lg:w-12 text-yellow-400" />
            Recognition & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8">
            {recognition.map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-yellow-600/20 to-yellow-400/10 border border-yellow-500/30 rounded-lg p-5 sm:p-6 lg:p-8 text-center hover:border-yellow-500/80 hover:from-yellow-600/30 hover:to-yellow-400/20 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/10 duration-300">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">{item.stat}</h3>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors">{item.label}</h4>
                <p className="text-xs sm:text-sm lg:text-base text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Mission */}
            <div className="group bg-slate-800/50 border border-slate-700 rounded-lg p-5 sm:p-6 lg:p-8 hover:border-red-500/80 hover:bg-slate-800/80 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/10 duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <Target className="w-6 h-6 sm:w-8 text-red-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-red-300 transition-colors">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                We change lives and businesses every day by building long-term relationships, embracing innovation, and delivering excellence in talent solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="group bg-slate-800/50 border border-slate-700 rounded-lg p-5 sm:p-6 lg:p-8 hover:border-blue-500/80 hover:bg-slate-800/80 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <Trophy className="w-6 h-6 sm:w-8 text-blue-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                To be the BEST partner in strengthening our clients' businesses, advancing our candidates' careers, and building stronger communities through exceptional leadership.
              </p>
            </div>

            {/* Values */}
            <div className="group bg-slate-800/50 border border-slate-700 rounded-lg p-5 sm:p-6 lg:p-8 hover:border-green-500/80 hover:bg-slate-800/80 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/10 duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <Users className="w-6 h-6 sm:w-8 text-green-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-green-300 transition-colors">Our Values</h3>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                Our core values guide every decision we make and inspire us to create meaningful impact for our clients, candidates, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
