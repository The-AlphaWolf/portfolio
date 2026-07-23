"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];

/**
 * Sticky top nav with scroll-spy (IntersectionObserver) and a hamburger
 * menu below the md breakpoint. All tap targets are ≥44px tall.
 */
export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // Highlight the nav link of the section currently crossing the upper
  // third of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    for (const { id } of navLinks) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `inline-flex min-h-11 items-center px-2 text-xs transition-colors lg:px-2.5 lg:text-sm ${
      active === id
        ? "text-accent underline decoration-2 underline-offset-8"
        : "text-muted hover:text-fg"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-terminal/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6"
      >
        {/* Brand — scrolls back to the hero */}
        <a
          href="#top"
          className="inline-flex min-h-11 items-center text-sm font-bold"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent">arijit@portfolio</span>
          <span className="text-muted">:~$</span>
          <span aria-hidden="true" className="cursor-blink ml-1 text-accent">
            ▊
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={linkClass(id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-edge text-fg hover:border-accent hover:text-accent md:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu — stacked links, closes on selection */}
      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-edge px-4 pb-3 pt-1 md:hidden"
        >
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? "true" : undefined}
                className={`flex min-h-11 items-center gap-2 text-sm ${
                  active === id ? "text-accent" : "text-muted"
                }`}
              >
                <span aria-hidden="true" className="text-accent">
                  &gt;
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
