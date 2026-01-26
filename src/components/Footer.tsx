import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (path: string, sectionId?: string) => {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const targetPath = sectionId ? `${path}#${sectionId}` : path;

      // If we're already on the target page
      if (location.pathname === path) {
        if (sectionId) {
          // Scroll to specific section
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Account for fixed header
            window.scrollBy(0, -80);
            // Update URL hash
            window.history.replaceState(null, '', targetPath);
          } else {
            // If section not found, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else {
          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        // Navigate to new page with hash if needed
        navigate(targetPath);
        // ScrollToTop component will handle the scrolling
      }
    };
  };

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              MAKS <span className="text-cyan-400">Solutions</span>
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering businesses worldwide with innovative IT and staffing solutions.
            </p>
            <p className="text-cyan-400 italic font-medium">
              "Efforts make Things Possible"
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  onClick={handleLinkClick('/about')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/for-companies"
                  onClick={handleLinkClick('/for-companies')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  For Companies
                </a>
              </li>
              <li>
                <a
                  href="/for-candidates"
                  onClick={handleLinkClick('/for-candidates')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  For Candidates
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/for-companies#services"
                  onClick={handleLinkClick('/for-companies', 'services')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/resources#news-insights"
                  onClick={handleLinkClick('/resources', 'news-insights')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  News & Insights
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  onClick={handleLinkClick('/resources')}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:makssolutionsorg@gmail.com" className="hover:text-cyan-400 transition-colors">
                  makssolutionsorg@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span><a
                        href="tel:+918460135272" className="hover:text-cyan-400 transition-colors"
                      >
                        +91 8460135272
                      </a></span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Rajasthan, India</span>
              </li>
            </ul>

            {/* <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>*/}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 MAKS Solutions. All rights reserved.
          </p>
          {/* <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Cookie Policy</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}