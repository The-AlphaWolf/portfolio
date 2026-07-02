import Section from "./Section";
import { posts } from "@/data/posts";

/**
 * Writing / notes section.
 * The cards below are PLACEHOLDERS — edit src/data/posts.ts to plug in
 * real posts (title, date, excerpt, and the real link in `href`).
 */
export default function Blog() {
  return (
    <Section id="writing" command="ls writing/" title="Writing">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="flex flex-col rounded-lg border border-edge bg-surface p-5 transition-colors hover:border-accent-dim"
          >
            <p className="text-xs text-muted">{post.date}</p>
            <h3 className="mt-2 font-bold leading-snug">{post.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <a
              href={post.href}
              className="mt-4 inline-flex min-h-11 items-center text-sm text-accent hover:underline"
            >
              Read more <span aria-hidden="true">&nbsp;→</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
