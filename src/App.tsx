import { useState, useEffect, FormEvent } from 'react';
import { 
  Shield, Eye, Activity, Magnet, Droplet, Layers, Zap, ShieldCheck, Flame, 
  MapPin, Phone, Mail, ArrowRight, Check, CheckCircle2, ChevronRight, 
  Star, HelpCircle, Award, UserCheck, Clock, BookOpen, ChevronUp,
  Building, HardHat, Compass, Sparkles, X
} from 'lucide-react';

// Data & Components
import { SERVICES, COURSES, INDUSTRIES, TESTIMONIALS, FAQS, GALLERY_ITEMS } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteForm from './components/QuoteForm';
import RegisterForm from './components/RegisterForm';
import ContactForm from './components/ContactForm';
import ChatBot from './components/ChatBot';

export default function App() {
  const [currentView, setView] = useState('home');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'inspection' | 'training' | 'equipment' | 'field'>('all');
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<any | null>(null);

  // Monitor scroll for Back-to-Top and header state
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  const filteredGallery = galleryFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === galleryFilter);

  // Helper to map icon names to Lucide elements
  const renderServiceIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Eye': return <Eye className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Magnet': return <Magnet className={className} />;
      case 'Droplet': return <Droplet className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Flame': return <Flame className={className} />;
      default: return <Shield className={className} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFB] text-gray-800 font-sans selection:bg-orange-accent selection:text-white">
      {/* Top sticky navigation */}
      <Header currentView={currentView} setView={setView} />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* ================= HOME VIEW ================= */}
        {currentView === 'home' && (
          <div className="animate-fade-in space-y-20">
            
            {/* HERO SECTION */}
            <section id="hero" className="relative bg-slate-900 text-white py-24 sm:py-32 overflow-hidden">
              {/* Background styling elements */}
              <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-transparent"></div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-block bg-orange-accent text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                    Mississippi's Leader in NDT Excellence
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-white uppercase">
                    Professional NDT <span className="text-orange-accent">Inspection</span>, <br />
                    Training & Consulting
                  </h1>
                  <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                    At RSDS NDT, we safeguard your industrial assets, infrastructure, and operations. Leveraging decades of hands-on experience, AWS CWI, and ASNT Level III credentials, we provide safety-focused inspections and industry-leading training programs.
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button 
                      onClick={() => { setView('contact'); window.scrollTo(0,0); }}
                      className="px-6 py-3.5 bg-orange-accent text-white font-bold rounded-lg text-sm hover:bg-orange-hover shadow-lg shadow-orange-accent/20 hover:shadow-orange-accent/30 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
                    >
                      Request a Quote
                    </button>
                    <button 
                      onClick={() => { setView('services'); window.scrollTo(0,0); }}
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold rounded-lg text-sm border border-white/20 transition-all duration-200 cursor-pointer"
                    >
                      View Services
                    </button>
                    <button 
                      onClick={() => { setView('training'); window.scrollTo(0,0); }}
                      className="px-6 py-3.5 text-gray-300 hover:text-white font-semibold text-sm transition-colors flex items-center gap-1.5"
                    >
                      Browse Courses <ArrowRight className="w-4 h-4 text-orange-accent" />
                    </button>
                  </div>
                </div>

                {/* Hero Feature Box */}
                <div className="lg:col-span-5 relative">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl space-y-4 max-w-md mx-auto">
                    <h3 className="text-lg font-bold text-white font-display border-b border-white/10 pb-2">Why Choose RSDS NDT?</h3>
                    <ul className="space-y-3.5 text-sm text-gray-200">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-accent shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block">Certified Level III Expertise</strong>
                          Our programs are overseen by certified ASNT Level III and AWS CWI professionals.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-accent shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block">SNT-TC-1A & NAS410 Compliant</strong>
                          All training courses align strictly with global certification frameworks.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-accent shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block">On-Site Corporate Flexibility</strong>
                          We can conduct custom practical training sessions directly at your facility.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Decorative wave divider */}
              <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg className="relative block w-full h-[30px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z" fill="#FAFAFB"></path>
                </svg>
              </div>
            </section>

            {/* STATISTICS SECTION */}
            <section id="statistics" className="max-w-7xl mx-auto px-4 py-6">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-20 -mt-16">
                <div className="space-y-1">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-primary-navy font-display">15+</span>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Years Field Experience</span>
                </div>
                <div className="space-y-1 border-l border-gray-100">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-orange-accent font-display">100%</span>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Safety & Audit Records</span>
                </div>
                <div className="space-y-1 border-l border-gray-100">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-primary-navy font-display">500+</span>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Certified Students</span>
                </div>
                <div className="space-y-1 border-l border-gray-100">
                  <span className="block text-3xl sm:text-4xl font-extrabold text-orange-accent font-display">24/7</span>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Consulting Response</span>
                </div>
              </div>
            </section>

            {/* FEATURE CARDS SECTION */}
            <section id="features" className="max-w-7xl mx-auto px-4 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-navy font-display">
                  Comprehensive Industrial Solutions
                </h2>
                <div className="w-16 h-1 bg-orange-accent mx-auto"></div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  RSDS NDT Training & Consultants delivers uncompromised inspection reliability, certification instruction, and procedural development.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-orange-accent/30 shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-accent/10 text-orange-accent flex items-center justify-center group-hover:bg-orange-accent group-hover:text-white transition-colors duration-300">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-primary-navy font-display group-hover:text-orange-accent transition-colors">Certified Professionals</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      All inspections and training programs are executed by active AWS CWIs, API specialists, and ASNT Level III consultants.
                    </p>
                  </div>
                  <button onClick={() => setView('about')} className="text-xs font-semibold text-orange-accent hover:text-orange-hover mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Learn More <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-orange-accent/30 shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-accent/10 text-orange-accent flex items-center justify-center group-hover:bg-orange-accent group-hover:text-white transition-colors duration-300">
                      <Building className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-primary-navy font-display group-hover:text-orange-accent transition-colors">Industry Experience</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      With decades serving the petrochemical, pipeline, aerospace, power, and manufacturing sectors, we know your regulatory codes.
                    </p>
                  </div>
                  <button onClick={() => setView('industries')} className="text-xs font-semibold text-orange-accent hover:text-orange-hover mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Learn More <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-orange-accent/30 shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-accent/10 text-orange-accent flex items-center justify-center group-hover:bg-orange-accent group-hover:text-white transition-colors duration-300">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-primary-navy font-display group-hover:text-orange-accent transition-colors">Reliable Inspections</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Our ultrasonic thickness mapping, weld certifications, and liquid penetrant checks are performed with unmatched precision.
                    </p>
                  </div>
                  <button onClick={() => setView('services')} className="text-xs font-semibold text-orange-accent hover:text-orange-hover mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Learn More <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-orange-accent/30 shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-accent/10 text-orange-accent flex items-center justify-center group-hover:bg-orange-accent group-hover:text-white transition-colors duration-300">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-primary-navy font-display group-hover:text-orange-accent transition-colors">Quality Training</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Comprehensive classroom instruction combined with intensive hands-on practical labs preparing students for Level I and II audits.
                    </p>
                  </div>
                  <button onClick={() => setView('training')} className="text-xs font-semibold text-orange-accent hover:text-orange-hover mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Learn More <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </section>

            {/* CORE SERVICES OVERVIEW - QUICK GRID */}
            <section id="services-preview" className="bg-steel-bg py-20">
              <div className="max-w-7xl mx-auto px-4 space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <div className="space-y-3">
                    <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Expert Methodologies</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-navy font-display">Specialized NDT Methods</h2>
                  </div>
                  <button 
                    onClick={() => { setView('services'); window.scrollTo(0,0); }}
                    className="px-5 py-2.5 bg-primary-navy text-white hover:bg-navy-light text-xs font-bold rounded-lg transition-all"
                  >
                    Explore All 8 Services
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVICES.slice(0, 6).map((service) => (
                    <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 group flex flex-col justify-between">
                      <div>
                        <div className="relative h-48 overflow-hidden">
                          <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-4 left-4 w-10 h-10 bg-primary-navy text-orange-accent rounded-lg flex items-center justify-center shadow-lg">
                            {renderServiceIcon(service.iconName, "w-5.5 h-5.5")}
                          </div>
                        </div>
                        <div className="p-6 space-y-2">
                          <h3 className="text-lg font-bold text-primary-navy font-display">{service.title}</h3>
                          <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">{service.shortDescription}</p>
                        </div>
                      </div>
                      <div className="px-6 pb-6 pt-2">
                        <button 
                          onClick={() => { setView('services'); window.scrollTo(0,0); }}
                          className="w-full py-2 bg-gray-50 hover:bg-orange-accent hover:text-white border border-gray-200 hover:border-orange-accent rounded-lg text-xs font-semibold text-primary-navy transition-all flex items-center justify-center gap-1"
                        >
                          Details & Proposal <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CALL TO ACTION ACCENT & NEWSLETTER */}
            <section id="cta-newsletter" className="max-w-5xl mx-auto px-4 py-6">
              <div className="bg-primary-navy rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_10%_90%,rgba(249,115,22,0.1),transparent)] pointer-events-none" />
                
                <div className="space-y-3 text-center md:text-left max-w-xl">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display">Subscribe to RSDS Insights</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Get monthly technical NDT guides, ASME regulatory updates, and early-bird notifications on our Mississippi classroom training schedules.
                  </p>
                </div>

                <div className="w-full md:w-auto shrink-0">
                  {newsletterSuccess ? (
                    <div className="p-4 bg-orange-accent/15 border border-orange-accent/30 rounded-xl text-orange-accent text-sm font-semibold flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      <span>Thank you! You have been subscribed.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full max-w-md">
                      <input 
                        id="newsletter-email"
                        type="email" 
                        required
                        placeholder="your@email.com" 
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/15 focus:outline-none focus:ring-2 focus:ring-orange-accent focus:border-transparent rounded-lg text-xs w-full sm:w-64"
                      />
                      <button 
                        id="newsletter-submit-btn"
                        type="submit"
                        className="px-5 py-3 bg-orange-accent text-white hover:bg-orange-hover font-bold rounded-lg text-xs cursor-pointer transition-colors shrink-0"
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ================= ABOUT US VIEW ================= */}
        {currentView === 'about' && (
          <div className="animate-fade-in py-16 space-y-20">
            <div className="max-w-7xl mx-auto px-4 space-y-12">
              {/* Header Title */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Who We Are</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-navy font-display">Safety, Precision & Professional Integrity</h1>
                <div className="w-16 h-1 bg-orange-accent mx-auto"></div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  RSDS NDT Training & Consultants is the trusted industrial testing and regulatory consulting partner based in Mississippi, serving clients nationwide.
                </p>
              </div>

              {/* Side-by-Side Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary-navy font-display">Our Mission & Values</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our mission is simple: to provide uncompromising industrial diagnostics and top-tier certification instruction that elevates safety, quality, and technical expertise. We operate with strict professional integrity, ensuring that every weld inspected and every technician certified meets the highest regulatory thresholds.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-orange-accent/10 text-orange-accent rounded-lg flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-navy text-sm font-display">Commitment to Safety</h4>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                          In heavy industrial plants, pipeline grids, and aerospace hangars, testing is not a checklist—it is a vital safety shield. We verify joint integrity to eliminate catastrophies.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-orange-accent/10 text-orange-accent rounded-lg flex items-center justify-center shrink-0">
                        <HardHat className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-navy text-sm font-display">Experienced Inspectors & Instructors</h4>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                          Our personnel hold senior AWS CWI, API, and ASNT Level III credentials. We do not just teach NDT from textbooks; we bring decades of real active field solutions into the classroom.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-orange-accent/10 text-orange-accent rounded-lg flex items-center justify-center shrink-0">
                        <Compass className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-navy text-sm font-display">Customer-Focused Service</h4>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                          From scheduling rapid turnaround emergency UT shear-wave scans to designing specialized corporate training around your team's busy hours, we prioritize your operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Image Grid */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80" 
                      alt="Industrial Quality Testing Lab" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-primary-navy p-5 rounded-xl border border-white/5 shadow-xl text-white max-w-xs hidden sm:block">
                    <span className="text-xs font-semibold text-orange-accent uppercase tracking-wider block">Local Presence</span>
                    <p className="text-xs text-gray-300 mt-1">
                      Located in Mississippi (MS), USA, proudly serving Mississippi, Louisiana, Texas, Alabama, and the broader Gulf Coast.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TEAM MOTIVATION HERO SECTION */}
            <section className="bg-primary-navy text-white py-16">
              <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
                <Sparkles className="w-10 h-10 text-orange-accent mx-auto" />
                <h3 className="text-2xl sm:text-3xl font-bold font-display max-w-2xl mx-auto">
                  Overcoming Modern Quality Audits with Complete Compliance
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
                  As manufacturing tolerances tighten and ASME regulatory codes update, NDT methodologies must adapt. RSDS NDT provides continuous support to ensure your quality manuals, procedure documents, and personnel qualification records remain flawlessly green during federal and third-party safety audits.
                </p>
                <div className="pt-2">
                  <button onClick={() => setView('contact')} className="px-5 py-2.5 bg-orange-accent hover:bg-orange-hover text-white text-xs font-bold rounded-md transition-colors shadow-lg">
                    Speak Directly with a CWI Inspector
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================= SERVICES VIEW ================= */}
        {currentView === 'services' && (
          <div className="animate-fade-in py-16 space-y-20">
            <div className="max-w-7xl mx-auto px-4 space-y-12">
              {/* Title Header */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-navy font-display">Specialized Industrial Testing & Inspections</h1>
                <div className="w-16 h-1 bg-orange-accent mx-auto"></div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We provide a complete suite of standard and advanced Non-Destructive Testing (NDT) inspection services, conforming to ASME, AWS, API, and ASNT regulatory codes.
                </p>
              </div>

              {/* Grid of Services with Full Descriptions */}
              <div className="space-y-10">
                {SERVICES.map((service, index) => (
                  <div 
                    key={service.id} 
                    id={`service-card-${service.id}`}
                    className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 hover:border-orange-accent/20 transition-all duration-300 ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Visual/Image */}
                    <div className={`lg:col-span-5 relative h-64 lg:h-auto rounded-xl overflow-hidden min-h-[250px] ${
                      index % 2 === 1 ? 'lg:order-last' : ''
                    }`}>
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-primary-navy text-orange-accent rounded-xl flex items-center justify-center shadow-lg">
                        {renderServiceIcon(service.iconName, "w-6 h-6")}
                      </div>
                    </div>

                    {/* Copy details */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary-navy font-display flex items-center gap-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.fullDescription}</p>
                        
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-orange-accent">Key Benefits & Indicators:</h4>
                          <ul className="space-y-1.5">
                            {service.benefits.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-center gap-2 text-xs text-gray-500">
                                <Check className="w-4 h-4 text-green-500 shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Industries served tags */}
                      <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-bold uppercase text-gray-400 mr-1.5">Industries Served:</span>
                        {service.industries.map((ind, indIdx) => (
                          <span key={indIdx} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full border border-gray-200">
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Embedded Quote Form Anchor */}
              <div id="quote-section" className="pt-10 max-w-4xl mx-auto">
                <div className="bg-orange-accent/5 border border-orange-accent/10 rounded-2xl p-6 sm:p-10 space-y-8">
                  <div className="text-center max-w-2xl mx-auto space-y-2">
                    <h3 className="text-2xl font-bold text-primary-navy font-display">Need an Inspection Bid?</h3>
                    <p className="text-xs text-gray-500">Fill out our rapid response quote request and an NDT Level III inspector will review your structural requirements.</p>
                  </div>
                  <QuoteForm />
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================= TRAINING VIEW ================= */}
        {currentView === 'training' && (
          <div className="animate-fade-in py-16 space-y-20">
            <div className="max-w-7xl mx-auto px-4 space-y-12">
              {/* Title Header */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Level I & II Certification</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-navy font-display">Expert NDT Classroom & Hands-On Training</h1>
                <div className="w-16 h-1 bg-orange-accent mx-auto"></div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We prepare the next generation of industrial inspectors. All courses comply fully with ASNT SNT-TC-1A, ANSI, and NAS410 criteria.
                </p>
              </div>

              {/* Training features grids */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
                  <div className="w-10 h-10 bg-orange-accent/10 text-orange-accent rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="text-base font-bold text-primary-navy font-display">Classroom Instruction</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Rigorous theoretical lectures covering core atomic physics, electromagnetic wave theory, material science, and specific ASME acceptance criteria.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
                  <div className="w-10 h-10 bg-orange-accent/10 text-orange-accent rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="text-base font-bold text-primary-navy font-display">Hands-On Practical Training</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Students spend massive hours calibrating state-of-the-art ultrasonic flaws gauges, setting yokes, and applying penetrants onto realistic flawed specimens.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
                  <div className="w-10 h-10 bg-orange-accent/10 text-orange-accent rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="text-base font-bold text-primary-navy font-display">Employer-Specific Training</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Custom programs engineered to match your corporate Written Practice specifications. We tailor practical exercises around your active manufacturing equipment.
                  </p>
                </div>
              </div>

              {/* Available Courses Catalog */}
              <div className="space-y-6 pt-6">
                <h3 className="text-2xl font-bold text-primary-navy font-display border-b border-gray-200 pb-3">SNT-TC-1A Course Catalog</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {COURSES.map((course) => (
                    <div key={course.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 bg-orange-accent/10 text-orange-accent text-[10px] font-bold uppercase rounded">
                            {course.category} NDT
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                            <Clock className="w-4 h-4 text-orange-accent" /> {course.hours} Class Hours
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-primary-navy font-display">{course.title}</h4>
                        <p className="text-gray-600 text-xs leading-relaxed">{course.description}</p>
                        
                        <div className="space-y-1.5 pt-2">
                          <span className="text-[10px] font-bold uppercase text-gray-400">Included Core Labs:</span>
                          <ul className="space-y-1">
                            {course.benefits.map((b, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 text-xs text-gray-500">
                                <Check className="w-3.5 h-3.5 text-orange-accent mt-0.5 shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Embedded Register Form Anchor */}
              <div id="register-section" className="pt-10 max-w-4xl mx-auto">
                <div className="bg-primary-navy/5 border border-primary-navy/10 rounded-2xl p-6 sm:p-10 space-y-8">
                  <div className="text-center max-w-2xl mx-auto space-y-2">
                    <h3 className="text-2xl font-bold text-primary-navy font-display">Register Students Online</h3>
                    <p className="text-xs text-gray-500">Pre-register candidates for upcoming seats. An instructor will email formal schedules and payment guidelines.</p>
                  </div>
                  <RegisterForm />
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================= INDUSTRIES SERVED VIEW ================= */}
        {currentView === 'industries' && (
          <div className="animate-fade-in py-16 space-y-12">
            <div className="max-w-7xl mx-auto px-4 space-y-12">
              {/* Title Header */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Our Fields</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-navy font-display">Providing Integrity Across Every Sector</h1>
                <div className="w-16 h-1 bg-orange-accent mx-auto"></div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Different sectors operate under entirely unique regulatory codes (ASME, API, AWS D1.1, FAA). We bring specialized expertise matching each vertical.
                </p>
              </div>

              {/* Industries bento grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {INDUSTRIES.map((ind) => (
                  <div key={ind.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 group">
                    <div className="relative h-48 overflow-hidden">
                      <img src={ind.image} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold font-display">{ind.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 text-xs leading-relaxed">{ind.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Extra Industries Checklist List */}
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-md space-y-6">
                <h3 className="text-xl font-bold text-primary-navy font-display">Broad Code & Industry Capability</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    "Refineries", "Oil Pipelines", "Gas Terminals", "Aerospace Turbines", 
                    "Shipyard Welds", "Structural Steel Bridges", "Marine Steel Vessels", 
                    "Hydroelectric Boilers", "Heavy Casting Forgings", "Metal Fabrications"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <Check className="w-4 h-4 text-orange-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= CERTIFICATIONS VIEW ================= */}
        {currentView === 'certifications' && (
          <div className="animate-fade-in py-16 space-y-12">
            <div className="max-w-7xl mx-auto px-4 space-y-12">
              {/* Title Header */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Global Standards</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-navy font-display">Qualified to Lead, Certified to Deliver</h1>
                <div className="w-16 h-1 bg-orange-accent mx-auto"></div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Compliance is our bedrock. All testing practices and classroom protocols are credentialed by the primary international certifying authorities.
                </p>
              </div>

              {/* Beautiful certification cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md text-center space-y-4">
                  <div className="w-16 h-16 bg-orange-accent/10 text-orange-accent rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy font-display">ASNT</h3>
                  <p className="text-xs text-gray-400">American Society for Non-Destructive Testing</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Our Senior level consulting and written practice procedures comply strictly with ASNT SNT-TC-1A, CP-189, and central certification standards.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md text-center space-y-4">
                  <div className="w-16 h-16 bg-orange-accent/10 text-orange-accent rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy font-display">AWS CWI</h3>
                  <p className="text-xs text-gray-400">American Welding Society</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Certified Welding Inspectors (CWI) providing professional weld joint oversight, welder qualification records, and structural weld certification.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md text-center space-y-4">
                  <div className="w-16 h-16 bg-orange-accent/10 text-orange-accent rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy font-display">API Codes</h3>
                  <p className="text-xs text-gray-400">American Petroleum Institute</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Qualified evaluations conforming directly to API 1104 pipeline weld standards, API 510, and API 570 pressure system inspection practices.
                  </p>
                </div>
              </div>

              {/* compliance statement box */}
              <div className="bg-primary-navy text-white rounded-2xl p-8 sm:p-10 border border-white/5 shadow-xl text-center space-y-3">
                <span className="text-orange-accent text-xs font-bold uppercase tracking-wider block">Official Written Practice Certification</span>
                <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  RSDS NDT maintains certified Level III oversight, ensuring our courses qualify students in direct alignment with NAS410 (Aerospace) and ASME Section V (Boilers & Pressure Vessels) guidelines.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= GALLERY VIEW ================= */}
        {currentView === 'gallery' && (
          <div className="animate-fade-in py-16 space-y-12">
            <div className="max-w-7xl mx-auto px-4 space-y-12">
              {/* Title Header */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Visual Portfolio</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-navy font-display">Field Operations & Training Gallery</h1>
                <div className="w-16 h-1 bg-orange-accent mx-auto"></div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Browse photos of our active welding inspectors, ultrasonic testing operations, laboratory equipment, and active student certification classes.
                </p>
              </div>

              {/* Gallery Filter Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { id: 'all', label: 'All Media' },
                  { id: 'inspection', label: 'Inspections' },
                  { id: 'training', label: 'Training Labs' },
                  { id: 'field', label: 'Field Operations' },
                  { id: 'equipment', label: 'NDT Gauges' }
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setGalleryFilter(btn.id as any)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
                      galleryFilter === btn.id 
                        ? 'bg-orange-accent text-white border-orange-accent shadow-md' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-orange-accent'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Grid Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGallery.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => setSelectedGalleryImg(item)}
                    className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md group cursor-pointer hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <span className="text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 border border-white/50 rounded">View Full Size</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <span className="text-[10px] text-orange-accent font-bold uppercase tracking-wider block">{item.category}</span>
                      <h4 className="text-sm font-bold text-primary-navy font-display leading-tight">{item.title}</h4>
                      <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Image Lightbox Modal */}
            {selectedGalleryImg && (
              <div 
                className="fixed inset-0 bg-primary-navy/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
                onClick={() => setSelectedGalleryImg(null)}
              >
                <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
                  <button 
                    onClick={() => setSelectedGalleryImg(null)}
                    className="absolute top-4 right-4 bg-primary-navy/80 hover:bg-orange-accent text-white p-2 rounded-full transition-colors z-10"
                    aria-label="Close Modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="aspect-video w-full overflow-hidden bg-gray-900">
                    <img src={selectedGalleryImg.url} alt={selectedGalleryImg.title} className="w-full h-full object-contain mx-auto" />
                  </div>
                  <div className="p-6 space-y-2 bg-white">
                    <span className="px-2 py-0.5 bg-orange-accent/10 text-orange-accent text-[10px] font-bold uppercase rounded">
                      {selectedGalleryImg.category}
                    </span>
                    <h3 className="text-lg font-bold text-primary-navy font-display">{selectedGalleryImg.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{selectedGalleryImg.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TESTIMONIALS VIEW ================= */}
        {currentView === 'testimonials' && (
          <div className="animate-fade-in py-16 space-y-12">
            <div className="max-w-7xl mx-auto px-4 space-y-12">
              {/* Title Header */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Client Reviews</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-navy font-display">Success Stories from leading firms</h1>
                <div className="w-16 h-1 bg-orange-accent mx-auto"></div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Read authentic feedback from industrial manufacturing managers, petroleum engineers, and refinary corporate staff who trust RSDS NDT.
                </p>
              </div>

              {/* Testimonials List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="bg-white p-8 rounded-xl border border-gray-100 shadow-md space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex gap-0.5 text-orange-accent">
                        {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-accent" />)}
                      </div>
                      <p className="text-gray-600 text-xs italic leading-relaxed">"{t.text}"</p>
                    </div>
                    <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-navy text-white rounded-full flex items-center justify-center font-bold font-display text-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-primary-navy font-display">{t.name}</h4>
                        <p className="text-[10px] text-gray-400">{t.role}, {t.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= FAQ VIEW ================= */}
        {currentView === 'faq' && (
          <div className="animate-fade-in py-16 space-y-12">
            <div className="max-w-4xl mx-auto px-4 space-y-12">
              {/* Title Header */}
              <div className="text-center space-y-3">
                <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider font-display">Common Inquiries</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-navy font-display">Frequently Asked Questions</h1>
                <div className="w-16 h-1 bg-orange-accent mx-auto"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Have questions about NDT certification requirements, course prep schedules, or booking on-site AWS inspections? Find answers below.
                </p>
              </div>

              {/* Accordion List */}
              <div className="space-y-3">
                {FAQS.map((faq) => {
                  const isOpen = activeFaq === faq.id;
                  return (
                    <div key={faq.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                        className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-primary-navy text-sm sm:text-base font-display focus:outline-none hover:text-orange-accent transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <HelpCircle className="w-4.5 h-4.5 text-orange-accent shrink-0" />
                          {faq.question}
                        </span>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90 text-orange-accent' : 'text-gray-400'}`} />
                      </button>
                      
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-50 leading-relaxed animate-fade-in">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================= CONTACT VIEW ================= */}
        {currentView === 'contact' && (
          <div className="animate-fade-in py-16 space-y-16">
            <div className="max-w-7xl mx-auto px-4 space-y-12">
              {/* Title Header */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-orange-accent font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-navy font-display">Connect with an RSDS Consultant</h1>
                <div className="w-16 h-1 bg-orange-accent mx-auto"></div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Call, email, or visit our office. You can also send a secure message directly using the form below.
                </p>
              </div>

              {/* Details & Form Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* Contact details */}
                <div className="lg:col-span-5 bg-white p-8 rounded-xl border border-gray-100 shadow-md flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-primary-navy font-display border-b border-gray-100 pb-3">Corporate Offices</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3 items-start text-xs sm:text-sm">
                        <MapPin className="w-5 h-5 text-orange-accent shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-primary-navy block font-display">Primary Location</strong>
                          <span className="text-gray-500">Mississippi (MS), USA</span>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start text-xs sm:text-sm">
                        <Phone className="w-5 h-5 text-orange-accent shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-primary-navy block font-display">Phone Number</strong>
                          <a href="tel:4092720514" className="text-gray-500 hover:text-orange-accent transition-colors">(409) 272-0514</a>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start text-xs sm:text-sm">
                        <Mail className="w-5 h-5 text-orange-accent shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-primary-navy block font-display">Email Address</strong>
                          <a href="mailto:samuelverrett80@gmail.com" className="text-gray-500 hover:text-orange-accent transition-colors">samuelverrett80@gmail.com</a>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Google Maps placeholder */}
                  <div className="space-y-3">
                    <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Service Coverage Map</span>
                    <div className="h-44 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative flex items-center justify-center p-4">
                      {/* Stylized custom vector map placeholder */}
                      <div className="absolute inset-0 bg-cover bg-center opacity-65 grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80')" }}></div>
                      <div className="relative z-10 text-center space-y-2 bg-primary-navy/90 text-white p-3 rounded-lg border border-white/10 shadow-lg max-w-xs">
                        <span className="text-[10px] font-bold text-orange-accent uppercase block tracking-wider">Serving All Mississippi Cities</span>
                        <p className="text-[9px] text-gray-300 leading-tight">Jackson, Biloxi, Gulfport, Hattiesburg, Meridian & surrounding Gulf regions.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form column */}
                <div className="lg:col-span-7 bg-white p-8 rounded-xl border border-gray-100 shadow-md">
                  <h3 className="text-xl font-bold text-primary-navy font-display border-b border-gray-100 pb-3 mb-4">Send a Secure Inquiry</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Floating AI Chatbot Widget */}
      <ChatBot />

      {/* Footer component */}
      <Footer setView={setView} />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top"
          onClick={handleScrollToTop}
          className="fixed bottom-24 right-6 w-11 h-11 bg-primary-navy/80 hover:bg-orange-accent text-white rounded-full flex items-center justify-center shadow-lg border border-white/5 transition-all hover:scale-105 cursor-pointer z-45"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
