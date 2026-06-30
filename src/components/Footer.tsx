import { Shield, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setView: (view: string) => void;
}

export default function Footer({ setView }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    setView(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-800 font-sans relative overflow-hidden">
      {/* Decorative vector grid accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-12 mb-8">
          {/* Company Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
              <div className="w-10 h-10 rounded overflow-hidden shadow-md flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 border border-slate-700/50 bg-slate-950">
                <img 
                  src="/src/assets/images/rsds_favicon_1782852524771.jpg" 
                  alt="RSDS Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display font-bold text-lg leading-none uppercase tracking-tight group-hover:text-orange-accent transition-colors">RSDS NDT</span>
                <span className="text-slate-400 text-[10px] uppercase font-semibold tracking-wider">Training & Consultants</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Industrial-grade NDT inspections, certified welding validations, and classroom/hands-on courses built on safety, precision, and regulatory trust.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-orange-accent hover:text-white text-gray-400 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-orange-accent hover:text-white text-gray-400 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-orange-accent hover:text-white text-gray-400 transition-colors"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-accent font-display">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-400">
              <li><button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => handleNavClick('training')} className="hover:text-white transition-colors">Training</button></li>
              <li><button onClick={() => handleNavClick('industries')} className="hover:text-white transition-colors">Industries</button></li>
              <li><button onClick={() => handleNavClick('certifications')} className="hover:text-white transition-colors">Certifications</button></li>
              <li><button onClick={() => handleNavClick('gallery')} className="hover:text-white transition-colors">Gallery</button></li>
              <li><button onClick={() => handleNavClick('faq')} className="hover:text-white transition-colors">FAQ</button></li>
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-accent font-display">NDT Inspections</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">Ultrasonic Testing (UT)</button></li>
              <li><button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">Visual Testing (VT)</button></li>
              <li><button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">Magnetic Particle (MT)</button></li>
              <li><button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">Liquid Penetrant (PT)</button></li>
              <li><button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">Radiographic Testing (RT)</button></li>
              <li><button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">ASNT Level III Consulting</button></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-accent font-display">Contact Us</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-accent shrink-0 mt-0.5" />
                <span>Mississippi (MS), USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-accent shrink-0" />
                <a href="tel:4092720514" className="hover:text-white transition-colors">(409) 272-0514</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-accent shrink-0" />
                <a href="mailto:samuelverrett80@gmail.com" className="hover:text-white transition-colors">samuelverrett80@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Center Aligned Footer Text / Copyright & Mandatory Credit */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-[11px] text-slate-500 border-t border-slate-800">
          <p className="text-center md:text-left">
            &copy; {currentYear} RSDS NDT TRAINING AND CONSULTANTS. All Rights Reserved.
          </p>
          <div className="flex gap-4 opacity-60 font-bold uppercase tracking-widest">
            <span>ASNT</span>
            <span>AWS</span>
            <span>API</span>
          </div>
          <div className="text-center md:text-right">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noreferrer" className="text-orange-accent font-bold hover:underline">iWebNext</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
