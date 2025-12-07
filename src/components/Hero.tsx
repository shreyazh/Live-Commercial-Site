import { Briefcase, Code, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fadeIn">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 text-sm font-medium">Empowering Businesses Worldwide</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            MAKS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Solutions</span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-300 font-light mb-8 max-w-3xl mx-auto">
            IT and Staffing Solutions
          </p>

          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-cyan-400 font-medium mb-12">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <span className="italic">"Efforts make Things Possible"</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
              <a href="mailto:makssolutionsorg@gmail.com" className="hover:text-cyan-400 transition-colors">
                  Learn More</a>
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            {/* <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
              Learn More
            </button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <Code className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold text-lg mb-2">Custom Software</h3>
              <p className="text-slate-400 text-sm">Tailored solutions for your business</p>
            </div>

            <div className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold text-lg mb-2">IT Staffing</h3>
              <p className="text-slate-400 text-sm">Expert talent for your projects</p>
            </div>

            <div className="group p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <Briefcase className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold text-lg mb-2">Global Reach</h3>
              <p className="text-slate-400 text-sm">Serving companies worldwide</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full p-1">
          <div className="w-1.5 h-3 bg-slate-500 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
