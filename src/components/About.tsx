import Section from "./Section";
import { aboutParagraphs } from "@/data/site";

/** About — styled like the output of `$ cat about.md`. */
export default function About() {
  return (
    <Section id="about" command="cat about.md" title="About me">
      <div className="space-y-4 border-l-2 border-edge pl-4 leading-relaxed sm:pl-6">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
