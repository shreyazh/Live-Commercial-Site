import { Globe, Zap, Shield, Rocket } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Global Software Development',
      description: 'We create customized software solutions for companies all over the world, tailored to meet unique business requirements and drive digital transformation.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Fast-track your projects with our agile development methodology, ensuring quick turnaround times without compromising quality.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built with security-first principles, our solutions protect your data and maintain compliance with industry standards.',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Future-proof your business with scalable architecture that grows with your needs and adapts to changing markets.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Customized Software for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Every Business
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Empowering companies worldwide with innovative technology solutions that drive growth and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>

              {/* <div className="mt-6 flex items-center text-cyan-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
