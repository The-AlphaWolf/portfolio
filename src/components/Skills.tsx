import Section from "./Section";
import { skillGroups } from "@/data/skills";

/** Technical skills — grouped tag chips styled like `$ skills --list` output. */
export default function Skills() {
  return (
    <Section id="skills" command="skills --list" title="Technical skills">
      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.flag}>
            <h3 className="text-sm">
              <span aria-hidden="true" className="mr-2 text-accent">
                ❯
              </span>
              <span aria-hidden="true" className="mr-2 text-muted">
                {group.flag}
              </span>
              <span className="font-bold">{group.label}</span>
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded border border-edge bg-surface px-3 py-1.5 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
