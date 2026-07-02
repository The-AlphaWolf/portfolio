import Section from "./Section";
import { site } from "@/data/site";

const inputClass =
  "min-h-11 w-full rounded-md border border-edge bg-surface px-3 py-2 text-fg placeholder:text-muted/60 focus:border-accent focus:outline-none";

/**
 * Contact — Formspree-powered form (no backend needed) + direct contact info.
 *
 * FORMSPREE SETUP:
 * 1. Create a free form at https://formspree.io
 * 2. Put its endpoint in `formspreeEndpoint` in src/data/site.ts
 *    (looks like https://formspree.io/f/abcdwxyz)
 * Submissions then arrive in your email inbox. Until configured, the form
 * posts to a placeholder URL and will not deliver.
 */
export default function Contact() {
  return (
    <Section id="contact" command="contact --send" title="Contact">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Form */}
        <form action={site.formspreeEndpoint} method="POST" className="space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-sm text-muted">
              <span aria-hidden="true" className="text-accent">
                ${" "}
              </span>
              name
            </span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Ada Lovelace"
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm text-muted">
              <span aria-hidden="true" className="text-accent">
                ${" "}
              </span>
              email
            </span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="ada@example.com"
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm text-muted">
              <span aria-hidden="true" className="text-accent">
                ${" "}
              </span>
              message
            </span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Hi Arijit, ..."
              className={inputClass}
            />
          </label>

          <button
            type="submit"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-6 font-semibold text-terminal transition-colors hover:bg-accent-dim sm:w-auto"
          >
            $ send message
          </button>
        </form>

        {/* Direct contact info */}
        <div>
          <p className="text-sm text-muted">
            Prefer a direct channel? Reach me here:
          </p>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center gap-3 hover:text-accent"
              >
                <span aria-hidden="true" className="text-accent">
                  @
                </span>
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex min-h-11 items-center gap-3 hover:text-accent"
              >
                <span aria-hidden="true" className="text-accent">
                  ☎
                </span>
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-3 hover:text-accent"
              >
                <span aria-hidden="true" className="text-accent">
                  ↗
                </span>
                github.com/The-AlphaWolf
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-3 hover:text-accent"
              >
                <span aria-hidden="true" className="text-accent">
                  ↗
                </span>
                linkedin.com/in/arijit-paul-ju
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
