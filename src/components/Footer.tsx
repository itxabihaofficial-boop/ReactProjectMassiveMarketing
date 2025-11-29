import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  // Logic to handle navigation to Home -> Scroll to Services
  // Added type annotation for the event: React.MouseEvent<HTMLButtonElement>
  const handleServiceScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/"); 
    setTimeout(() => {
      const element = document.getElementById("services-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#bf1e2e] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Top Section: Custom 5:2:2 Column Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-[5fr_2fr_2fr] gap-12 mb-20">
          
          {/* Column 1: Main Headline */}
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-2xl font-medium leading-snug">
              Simple, sensible IT solutions for small businesses — with security you can trust and backups you can actually restore. Protection first, without the enterprise complexity.
            </h2>
          </div>

          {/* Column 2: Email & Quick Links */}
          <div className="flex flex-col gap-8">
            {/* Email */}
            <div>
              <h4 className="text-red-200 text-sm mb-2">Email</h4>
              <a href="mailto:info@soulutionbox.com" className="text-lg hover:text-red-100 transition-colors">
                info@soulutionbox.com
              </a>
            </div>

            {/* Quick Links - UPDATED */}
            <div>
              <h4 className="text-red-200 text-sm mb-2">Quick Links</h4>
              <ul className="space-y-1 text-lg">
                
                {/* Home Link */}
                <li>
                  <Link to="/" className="hover:text-red-100">
                    Home
                  </Link>
                </li>
                
                {/* Services Link - Converted to Button for Scroll Logic */}
                <li>
                  <button 
                    onClick={handleServiceScroll}
                    className="hover:text-red-100 bg-transparent border-none p-0 cursor-pointer text-left text-lg font-inherit text-white"
                  >
                    Services
                  </button>
                </li>
                
                {/* Contact Us - Updated path to /contact */}
                <li>
                  <Link to="/contact" className="hover:text-red-100">
                    Contact Us
                  </Link>
                </li>

              </ul>
            </div>
          </div>

          {/* Column 3: Contact & Address */}
          <div className="flex flex-col gap-8">
            {/* Contact Number */}
            <div>
              <h4 className="text-red-200 text-sm mb-2">Contact Number</h4>
              <a href="tel:+447815138983" className="text-lg hover:text-red-100">
                +44 7815 138983
              </a>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-red-200 text-sm mb-2">Address</h4>
              <p className="text-lg leading-relaxed">
                121 London Road North (1st floor)<br/>
                Merstham, RH1 3AL United Kingdom
              </p>
            </div>
          </div>

        </div>

        {/* --- Divider --- */}
        <div className="border-t border-red-800/40 mb-8"></div>

        {/* --- Bottom Section --- */}
        <div className="space-y-8 md:space-y-0">
          
          {/* Row: Address (Left) & Socials (Right) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-red-100 gap-6">
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="flex gap-6 font-semibold text-white">
                <a href="https://www.instagram.com/soulutionbox?igsh=MXJmbmVwYmhhMnppdg==" className="hover:opacity-80">Instagram</a>
                <a href="https://www.facebook.com/share/g/16gvqpNXQf/?mibextid=wwXIfr" className="hover:opacity-80">Facebook</a>
                <a href="https://www.linkedin.com/company/soulutionbox/" className="hover:opacity-80">LinkedIn</a>
              </div>
              <span className="opacity-60">Site By Massive Marketing UK</span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;