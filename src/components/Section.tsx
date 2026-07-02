import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Shared section wrapper: anchor id for nav scroll-spy + a heading styled
 * like a terminal command, e.g.  $ cat about.md
 * scroll-mt offsets the sticky nav when jumping to #anchors.
 */
export default function Section({
  id,
  command,
  title,
  children,
}: {
  id: string;
  /** The fake CLI command shown as the heading, without the `$ ` prompt. */
  command: string;
  /** Accessible name for the section (screen readers skip the CLI styling). */
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={title}
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-14 sm:px-6 sm:py-18"
    >
      <Reveal>
        <h2 className="mb-8 text-lg font-bold sm:text-xl">
          <span aria-hidden="true" className="mr-2 text-accent">
            $
          </span>
          {command}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}
