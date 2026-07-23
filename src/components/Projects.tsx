import Section from "./Section";
import { projects } from "@/data/projects";

/** Projects — detailed cards with tags and a `$ git clone` call-to-action. */
export default function Projects() {
  return (
    <Section id="projects" command="ls projects/" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const repoSlug = project.repo.split("/").pop() ?? "repo";
          return (
            <article
              key={project.title}
              className="flex flex-col rounded-lg border border-edge bg-surface p-5 transition-colors hover:border-accent-dim"
            >
              <p className="text-xs text-muted">{project.period}</p>
              <h3 className="mt-2 font-bold leading-snug">{project.title}</h3>

              <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-muted">
                {project.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 32)} className="flex gap-2">
                    <span aria-hidden="true" className="shrink-0 text-accent">
                      *
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-edge bg-surface-2 px-2 py-1 text-xs"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {/* Repo link, plus a demo/download link when the project has one */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 border-t border-edge pt-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm text-accent hover:underline"
                >
                  <span className="break-all">$ git clone {repoSlug}</span>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-sm text-muted hover:text-accent hover:underline"
                  >
                    {project.liveLabel ?? "live demo"}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
