import TypingTerminal from "./TypingTerminal";
import { basePath, heroTerminal, site } from "@/data/site";
import Image from "next/image";

/** Hero — name, tagline, CTA buttons, photo placeholder, typing terminal. */
export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="mx-auto w-full max-w-5xl px-4 pb-14 pt-14 sm:px-6 sm:pt-20"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
        {/* Intro text + CTAs */}
        <div>
          <p className="mb-3 text-sm text-muted">
            <span aria-hidden="true" className="text-accent">
              ~/
            </span>
            {site.location}
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {site.name}
            <span aria-hidden="true" className="cursor-blink text-accent">
              ▍
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.resumeHref}
              download
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 font-semibold text-terminal transition-colors hover:bg-accent-dim"
            >
              <span aria-hidden="true">↓</span> Download Resume
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-md border border-edge px-5 transition-colors hover:border-accent hover:text-accent"
            >
              GitHub <span aria-hidden="true">&nbsp;↗</span>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-md border border-edge px-5 transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn <span aria-hidden="true">&nbsp;↗</span>
            </a>
          </div>
        </div>

        {/* Photo + animated terminal. To change the photo, replace
            public/arijit.jpg. basePath is prepended manually below —
            next/image's automatic basePath rewrite doesn't apply here
            because images.unoptimized is required for static export. */}
        <div className="flex flex-col items-center gap-6 lg:items-end">
          <Image
            src={`${basePath}/arijit.jpg`}
            alt="Portrait of Arijit Paul"
            width={176}
            height={176}
            priority
            className="h-44 w-44 rounded-lg border-2 border-edge object-cover"
          />

          <div className="w-full max-w-md">
            <TypingTerminal lines={heroTerminal} />
          </div>
        </div>
      </div>
    </section>
  );
}
