const LINKS = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 sm:px-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="grid size-12 place-items-center rounded-xl bg-brand-gradient text-sm font-extrabold text-[#4DA8BB]">
            <img src="/logo.png" alt="stylus_logo" />
          </span>
          {/* <span className="text-lg font-bold  text-[#4DA8BB] tracking-tight">STYLUS</span> */}
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Stylus Tutoring. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
