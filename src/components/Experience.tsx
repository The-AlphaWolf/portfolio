import Section from "./Section";
import { experience } from "@/data/experience";

/** Experience — vertical timeline styled like `git log` output. */
export default function Experience() {
  return (
    <Section id="experience" command="git log --experience" title="Experience">
      <ol className="relative ml-2 space-y-12 border-l border-edge pl-6 sm:pl-8">
        {experience.map((entry) => (
          <li key={entry.hash} className="relative">
            {/* Timeline node */}
            <span
              aria-hidden="true"
              className="absolute top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-terminal -left-[calc(1.5rem+7px)] sm:-left-[calc(2rem+7px)]"
            />
            <p className="text-xs">
              <span className="text-accent">commit {entry.hash}</span>
              <span className="text-muted"> · {entry.period}</span>
            </p>
            <h3 className="mt-2 font-bold">{entry.role}</h3>
            <p className="text-sm text-muted">@ {entry.org}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {entry.bullets.map((bullet) => (
                <li key={bullet.slice(0, 32)} className="flex gap-2">
                  <span aria-hidden="true" className="shrink-0 text-accent">
                    -
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
