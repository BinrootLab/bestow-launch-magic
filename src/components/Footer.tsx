import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-brand-navy/20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Row 1: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Address */}
          <div>
            <p className="font-body font-semibold text-sm text-white mb-4 tracking-[0.05em] uppercase">Tramontina</p>
            <div className="font-body text-xs text-white/70 leading-relaxed font-light space-y-0.5">
              <p>ABR Emerald, 9th floor</p>
              <p>Street 16, MIDC, Andheri E</p>
              <p>Mumbai, Maharashtra</p>
              <p>400093</p>
            </div>
            <p className="font-body text-xs text-white/70 mt-4 font-light">help.tindia@tramontina.com</p>
            <p className="font-body text-xs text-white/70 mt-1 font-light">1800 210 1022</p>
            <div className="flex gap-4 mt-5">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="text-white/80 hover:text-white transition-colors">
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="font-body text-sm font-semibold text-white mb-4">Products</p>
            <ul className="space-y-2.5">
              {["Cookware", "Knives", "Kitchen Tools", "Product Catalog 2025"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-xs text-white/70 hover:text-white transition-colors font-light">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Tramontina */}
          <div>
            <p className="font-body text-sm font-semibold text-white mb-4">About Tramontina</p>
            <ul className="space-y-2.5">
              {["About Us", "FAQ", "Warranty Page", "Whistleblower Channel"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-xs text-white/70 hover:text-white transition-colors font-light">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service & Support */}
          <div>
            <p className="font-body text-sm font-semibold text-white mb-4">Service & Support</p>
            <ul className="space-y-2.5">
              {["Contact Us", "Privacy Policy", "Product Registration Policy", "Return Policy", "Shipping Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-xs text-white/70 hover:text-white transition-colors font-light">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2: Cookie + Copyright */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <a href="#" className="font-body text-xs text-white/60 hover:text-white transition-colors font-light">
            Cookie Preferences
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;