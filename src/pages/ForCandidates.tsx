import React from 'react';
import { Lightbulb, FileText, Briefcase, CheckCircle, Users, Award, Target, Headphones } from 'lucide-react';

export const ForCandidates: React.FC = () => {
  const steps = [
    {
      title: 'Personalized Career Consultation',
      description: 'Your story matters. We take the time to understand your skills, ambitions, and career vision so we can align you with opportunities that truly fit.',
      icon: Lightbulb
    },
    {
      title: 'Skill Optimization & Preparation',
      description: 'Stand out with confidence. We help refine your resume, strengthen your professional brand, and prepare you for interviews through personalized coaching and feedback.',
      icon: FileText
    },
    {
      title: 'Opportunity Matching',
      description: 'You deserve more than just another job. With access to exclusive roles across top organizations, we connect you with positions that align with your expertise and long-term career goals.',
      icon: Briefcase
    },
    {
      title: 'Placement & Continued Growth',
      description: 'Our support doesn’t stop once you’re hired. We stay connected, offering career guidance, future opportunities, and ongoing professional development as your career evolves.',
      icon: CheckCircle
    }
  ];

  const whyChooseUs = [
    {
      title: 'Candidate-First Approach',
      description: 'We prioritize your career goals, not just job placements.',
      icon: Users
    },
    {
      title: 'Proven Industry Expertise',
      description: 'Our recruiters understand market trends and what top employers are looking for.',
      icon: Award
    },
    {
      title: 'Right Role, Right Time',
      description: 'We focus on long-term alignment, not quick fixes.',
      icon: Target
    },
    {
      title: 'End-to-End Support',
      description: 'From consultation to placement and beyond, we’re with you at every stage.',
      icon: Headphones
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

      {/* Hero Section */}
      <section className="pt-10 pb-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-10 lg:py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Your Career, Guided Every Step of the Way
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
            At MAKS Solutions, your career is more than a job search. It's a journey. Our candidate-first approach ensures you receive personalized guidance, access to meaningful opportunities, and ongoing support to help you achieve your professional goals.
          </p>
        </div>
      </section>

      {/* 4-Step Hiring Process */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-slate-900/60">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 text-center">
            Our 4-Step Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon; return (<div key={index} className="group">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 sm:p-6 lg:p-8 hover:border-green-500/80 transition-all hover:bg-slate-800/80 h-full transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/10 duration-300">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600/30 to-green-400/10 border border-green-500/30 flex items-center justify-center flex-shrink-0 group-hover:from-green-600/50 group-hover:to-green-400/20 transition-all">
                      <Icon className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">{step.title}</h3>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>);
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 text-center">
            Why Choose MAKS Solutions?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center hover:border-green-500/70 transition-all">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-green-600/10 to-emerald-600/10 border-y border-green-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your New Journey?
          </h2>
          <p className="text-slate-300 mb-8">
            Speak directly with our career consultants and take the next step toward your future.
          </p>

          <a
            href="tel:+918460135272"
            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
          >
            Start Your Journey Today
          </a>
        </div>
      </section>

    </div>
  );
};
