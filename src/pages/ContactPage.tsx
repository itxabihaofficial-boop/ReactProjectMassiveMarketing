import React from 'react';
import { ArrowUpRight, Linkedin, Facebook, Instagram, Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

// --- SECTION 1: HERO BANNER ---
const ContactHero = () => {
  return (
    // UPDATED: 
    // 1. Changed min-h-[50vh] to min-h-[30vh] (Made it much shorter on mobile)
    // 2. Changed py-20 to py-12 (Reduced padding on mobile)
    <section className="relative w-full min-h-[30vh] md:min-h-[70vh] py-12 md:py-32 px-6 flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 via-white to-white overflow-hidden">
      
      <div className="relative z-10 text-center">
      
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-6">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-medium">
          Want to connect with one of our team members?
        </p>
      </div>
    </section>
  );
};

// --- SECTION 2: FORM SECTION ---
const ContactFormSection = () => {
  return (
    <section className="w-full pt-10 md:pt-20 bg-white px-4 md:px-8 pb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <div className="bg-[#bf1e2e] text-white rounded-[30px] md:rounded-[40px] p-6 md:p-10 min-h-[50px] flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            {/* UPDATED: Added 'text-center md:text-left' to parent div */}
            <div className="space-y-8 md:space-y-12 relative z-10 text-center md:text-left">
              <div>
                {/* UPDATED: Added 'justify-center md:justify-start' to center icon+text on mobile */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center justify-center md:justify-start gap-2">Email Us</h3>
                <a href="mailto:info@soulutionbox.com" className="text-base md:text-lg font-medium opacity-90 hover:opacity-100 underline decoration-white/30 underline-offset-4 transition-all">
                  info@soulutionbox.com
                </a>
              </div>
              <div>
                {/* UPDATED: Added 'justify-center md:justify-start' */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center justify-center md:justify-start gap-2 hover:opacity-100 ">Follow Us</h3>
                <div className="text-base md:text-lg font-medium opacity-90 flex flex-col gap-3">
                  
                  {/* UPDATED: Added 'justify-center md:justify-start' to all <a> tags below */}
                  <a href='https://www.linkedin.com/company/soulutionbox/' target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:translate-x-2 transition-all">
                      <Linkedin className="w-5 h-5" /> LinkedIn
                  </a>
                  
                  <a href='https://www.facebook.com/share/g/16gvqpNXQf/?mibextid=wwXIfr' target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:translate-x-2 transition-all">
                      <Facebook className="w-5 h-5" /> Facebook
                  </a>
                  
                  <a href='https://www.instagram.com/soulutionbox?igsh=MXJmbmVwYmhhMnppdg==' target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:translate-x-2 transition-all">
                      <Instagram className="w-5 h-5" /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 pl-0 lg:pl-10 pt-10 lg:pt-0">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <input type="text" placeholder="First Name*" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e97e3a] focus:ring-4 focus:ring-[#e97e3a]/10 transition-all bg-white text-gray-800 placeholder-gray-500" />
              </div>
              <div className="space-y-2">
                <input type="text" placeholder="Last Name*" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e97e3a] focus:ring-4 focus:ring-[#e97e3a]/10 transition-all bg-white text-gray-800 placeholder-gray-500" />
              </div>
            </div>
            <input type="email" placeholder="Email Address*" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e97e3a] focus:ring-4 focus:ring-[#e97e3a]/10 transition-all bg-white text-gray-800 placeholder-gray-500" />
            <input type="tel" placeholder="Telephone*" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e97e3a] focus:ring-4 focus:ring-[#e97e3a]/10 transition-all bg-white text-gray-800 placeholder-gray-500" />
            <select className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e97e3a] focus:ring-4 focus:ring-[#e97e3a]/10 transition-all bg-white text-gray-500 cursor-pointer appearance-none">
              <option value="" disabled selected>What is your role...</option>
              <option value="founder">Founder</option>
              <option value="investor">Investor</option>
              <option value="advisor">Advisor</option>
            </select>
            <input type="text" placeholder="Subject*" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e97e3a] focus:ring-4 focus:ring-[#e97e3a]/10 transition-all bg-white text-gray-800 placeholder-gray-500" />
            <textarea rows={6} placeholder="Message*" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e97e3a] focus:ring-4 focus:ring-[#e97e3a]/10 transition-all bg-white text-gray-800 placeholder-gray-500 resize-none"></textarea>
            <div className="flex justify-start pt-4">
              <button className="bg-[#e97e3a] hover:bg-[#d66d2a] text-white font-bold text-lg py-4 px-16 rounded-full transition-transform hover:scale-105 shadow-lg shadow-orange-400/20">
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

// --- SECTION 3: CTA CONTAINER ---
const CTAContainer = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate("/"); 
    setTimeout(() => {
      const element = document.getElementById("services-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="w-full bg-[#bf1e2e] py-16 md:py-32 relative overflow-hidden flex items-center justify-center border-b border-white/10">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-400 rounded-full mix-blend-screen filter blur-[100px] opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-400 rounded-full mix-blend-screen filter blur-[100px] opacity-40 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 md:mb-12 leading-tight tracking-tight">
          Get issues sorted fast with 25+ years of hands‑on <br className="hidden md:block"/>
          experience. Same‑day slots often available.
        </h2>
        
        <button 
          onClick={handleServicesClick}
          className="bg-[#e97e3a] hover:bg-[#d66d2a] text-white font-bold text-sm md:text-lg py-4 px-8 md:py-5 md:px-10 rounded-xl inline-flex items-center gap-3 transition-all hover:scale-105 hover:shadow-xl shadow-orange-900/20"
        >
          View Our Services
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---
const ContactPage = () => {
  return (
    <div className="w-full bg-white min-h-screen font-sans">
      <ContactHero />
      <ContactFormSection />
      <CTAContainer />
    </div>
  );
};

export default ContactPage;