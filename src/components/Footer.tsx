const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <p className="font-display text-lg text-foreground mb-4">Tramontina</p>
            <p className="font-body text-xs text-muted-foreground leading-relaxed font-light">
              Over 100 years of craftsmanship, innovation, and passion for creating exceptional cookware.
            </p>
          </div>
          {[
            { title: "Shop", links: ["Dutch Ovens", "Skillets", "Casseroles", "Sets"] },
            { title: "Support", links: ["Care Guide", "Warranty", "FAQ", "Contact"] },
            { title: "Company", links: ["About", "Sustainability", "Press", "Careers"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-foreground mb-4">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-muted-foreground tracking-wide">
            © 2026 Tramontina. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" className="font-body text-[10px] text-muted-foreground hover:text-foreground transition-colors tracking-wide">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
