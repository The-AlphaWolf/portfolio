import Section from "./Section";
import { education } from "@/data/education";
import { extracurriculars } from "@/data/site";

/** Education history + a small extra-curriculars block. */
export default function Education() {
  return (
    <Section id="education" command="cat education.log" title="Education">
      <ol className="space-y-4">
        {education.map((entry) => (
          <li
            key={`${entry.school}-${entry.period}`}
            className="rounded-lg border border-edge bg-surface p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-bold">{entry.school}</h3>
              <p className="text-xs text-accent-dim">{entry.period}</p>
            </div>
            <p className="mt-1 text-sm">{entry.credential}</p>
            <p className="mt-1 text-sm text-muted">{entry.detail}</p>
          </li>
        ))}
      </ol>

      {/* Extra-curriculars — small sub-block per spec */}
      <div className="mt-10">
        <h3 className="text-sm font-bold">
          <span aria-hidden="true" className="mr-2 text-accent">
            #
          </span>
          extracurriculars
        </h3>
        <ul className="mt-3 space-y-2 text-sm">
          {extracurriculars.map((activity) => (
            <li key={activity.org} className="flex flex-wrap gap-2">
              <span aria-hidden="true" className="text-accent">
                -
              </span>
              <span className="font-semibold">{activity.org}</span>
              <span className="text-muted">— {activity.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
