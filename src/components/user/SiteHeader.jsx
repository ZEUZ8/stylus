import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className=
        "fixed inset-x-0 top-0 z-50 transition-all duration-500"
    //     scrolled
    //       ? "border-b border-border/70 bg-background/85 backdrop-blur-xl shadow-soft"
    //       : "border-b border-transparent bg-transparent",
    //   )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-5 sm:h-20 sm:px-8">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2.5 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          aria-label="Stylus home"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-gradient text-sm font-extrabold text-primary-foreground">
            S
          </span>
          <span className="truncate text-lg font-extrabold tracking-tight">
            <img src="/public/logo.png" alt="stylus_logo" />
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <button asChild size="lg" className="hidden rounded-full sm:inline-flex">
            <a href="#demo">Book Demo</a>
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-background/70 text-foreground transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button asChild size="lg" className="mt-3 w-full rounded-full">
            <a href="#demo" onClick={() => setOpen(false)}>
              Book Demo
            </a>
          </button>
        </nav>
      ) : null}
    </header>
  );
}