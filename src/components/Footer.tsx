import { site } from "@/data/site";

const quickLinks = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

/** Footer — copyright, quick nav, and social icon links. */
export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
        <p className="text-sm text-muted">
          <span aria-hidden="true" className="text-accent">
            arijit@portfolio:~$&nbsp;
          </span>
          © {new Date().getFullYear()} {site.name}
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm text-muted hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-2">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted hover:text-accent"
            >
              {/* GitHub */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.13v3.16c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted hover:text-accent"
            >
              {/* LinkedIn */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              aria-label={`Email ${site.name}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted hover:text-accent"
            >
              {/* Email */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7L22 7" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
