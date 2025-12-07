import { MapPin, TrendingUp, Award, Target } from 'lucide-react';

export function Focus() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Primary Focus</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Leading the Way in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                US Recruitment
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Our first focus is delivering exceptional IT recruitment services across the United States.
              We connect top-tier talent with innovative companies, building teams that drive success.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Nationwide Coverage</h4>
                  <p className="text-slate-400 text-sm">Comprehensive recruitment services across all US states</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Specialized Expertise</h4>
                  <p className="text-slate-400 text-sm">Focus on IT and technology sector recruitment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-700">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full filter blur-2xl opacity-50"></div>

              <div className="space-y-6 relative z-10">
                <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                  <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-slate-400">Successful Placements</div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                    <Award className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                    <div className="text-slate-400 text-sm">Satisfaction Rate</div>
                  </div>

                  <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                    <Target className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-slate-400 text-sm">Support Available</div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl border border-blue-500/30">
                  <p className="text-white text-center font-medium italic">
                    "Building teams that transform businesses"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
