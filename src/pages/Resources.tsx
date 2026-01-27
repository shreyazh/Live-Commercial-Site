import { Link } from 'react-router-dom';
import { Mail, FileText, Newspaper, Users, ArrowRight } from 'lucide-react';

export function Resources() {
  const featuredContent = [
    {
      slug: 'celebrating-4-years',
      type: 'News',
      title: 'Celebrating 4 Years of Maks Solutions: A Legacy of Connecting People and Opportunities',
      description: 'Four decades of building careers, empowering businesses, and creating meaningful connections across industries.',
      icon: Newspaper,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      slug: 'trusted-employment-agency-charlotte',
      type: 'Blog',
      title: 'Why Maks Solutions Is a Trusted Employment Agency in Charlotte, North Carolina',
      description: 'Discover what sets Maks Solutions apart and why businesses and professionals continue to choose us as their staffing partner.',
      icon: FileText,
      color: 'from-cyan-500 to-teal-500',
    },
    {
      slug: 'new-brand-identity',
      type: 'Press Release',
      title: 'Maks Solutions Unveils New Brand Identity in Celebration of 4+ Years of Excellence',
      description: 'Marking 4 years as a Total Talent Solutions Provider with a refreshed brand and a forward-looking vision.',
      icon: Newspaper,
      color: 'from-blue-600 to-blue-400',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Resources</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
            Stay Informed and Inspired
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore the latest Maks Solutions news, expert insights, and industry perspectives shaping the future of recruitment and career development.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
                <p className="text-slate-400">Stay up to date with hiring trends, career advice, company updates, and thought leadership delivered straight to your inbox.</p>
              </div>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="news-insights" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Latest Updates</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Maks Solutions News & Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Perspectives</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  {item.type === 'News' ? 'Featured News' : item.type === 'Blog' ? 'Featured Blog' : 'Recent Press Release'}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
                <Link
                  to={`/resources/${item.slug}`}
                  className="inline-flex items-center text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors group"
                >
                  <span className="flex items-center">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Know Someone <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Amazing</span>?
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Refer a skilled professional or a business in need of talent. Together, we'll help them take the next step toward success.
            </p>
            <a
              href="mailto:info@makssolutions.org?subject=Referral Inquiry"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Make a Referral
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
