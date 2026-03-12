import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      {/* Back to top */}
      <div className="text-center py-6 border-b border-border">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-body text-sm text-foreground hover:text-muted-foreground transition-colors"
        >
          Back to top
        </button>
      </div>

      {/* Row 1: 4 columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Address */}
          <div>
            <p className="font-body font-semibold text-sm text-foreground mb-4 tracking-[0.05em] uppercase">Tramontina</p>
            <div className="font-body text-xs text-muted-foreground leading-relaxed font-light space-y-0.5">
              <p>ABR Emerald, 9th floor</p>
              <p>Street 16, MIDC, Andheri E</p>
              <p>Mumbai, Maharashtra</p>
              <p>400093</p>
            </div>
            <p className="font-body text-xs text-muted-foreground mt-4 font-light">help.tindia@tramontina.com</p>
            <p className="font-body text-xs text-muted-foreground mt-1 font-light">1800 210 1022</p>
            <div className="flex gap-4 mt-5">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="text-foreground hover:text-muted-foreground transition-colors">
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="font-body text-sm font-semibold text-foreground mb-4">Products</p>
            <ul className="space-y-2.5">
              {["Cookware", "Knives", "Kitchen Tools", "Product Catalog 2025"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors font-light">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Tramontina */}
          <div>
            <p className="font-body text-sm font-semibold text-foreground mb-4">About Tramontina</p>
            <ul className="space-y-2.5">
              {["About Us", "FAQ", "Warranty Page", "Whistleblower Channel"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors font-light">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service & Support */}
          <div>
            <p className="font-body text-sm font-semibold text-foreground mb-4">Service & Support</p>
            <ul className="space-y-2.5">
              {["Contact Us", "Privacy Policy", "Product Registration Policy", "Return Policy", "Shipping Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors font-light">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2: Cookie + Copyright */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors font-light">
            Cookie Preferences
          </a>
          <p className="font-body text-xs text-muted-foreground">© 2026 Tramontina India.</p>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground tracking-wide">
            © 2026 Tramontina India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
