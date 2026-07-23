/**
 * Single source of truth for personal info and links.
 * Update values here — every component reads from this file.
 */

/**
 * Prefix for static assets (e.g. /resume.pdf) when the site is served from a
 * sub-path such as a GitHub Pages project site (username.github.io/repo).
 * The deploy workflow sets NEXT_PUBLIC_BASE_PATH automatically; locally it is
 * empty. next/link and next/image handle basePath themselves — this is only
 * needed for plain <a href> asset links.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Origin of the deployed site. Used as Next's `metadataBase`, which resolves
 * file-based metadata (opengraph-image.png) — those already carry `basePath`,
 * so the origin must NOT include it or the URL would repeat the sub-path.
 */
export const siteOrigin = "https://the-alphawolf.github.io";

/**
 * Full canonical URL of the deployed site, used for the canonical link,
 * og:url, sitemap and robots. Hardcoded to production on purpose — it must
 * not follow the local basePath, or a local build would write dev URLs into
 * the sitemap.
 */
export const siteUrl = `${siteOrigin}/portfolio`;

export const site = {
  name: "Arijit Paul",
  location: "Kolkata, West Bengal",
  // Short identity line shown under the name in the hero
  tagline:
    "Electronics & Telecommunication Engineer | 5G/Wireless Research | ML Enthusiast",
  email: "arijit.01paul@gmail.com",
  phone: "+91-9123600332",
  phoneHref: "tel:+919123600332",
  github: "https://github.com/The-AlphaWolf",
  linkedin: "https://www.linkedin.com/in/arijit-paul-ju/",
  // Served from public/resume.pdf — replace that file to update the resume.
  resumeHref: `${basePath}/resume.pdf`,
  /**
   * CONTACT FORM (Formspree) — https://formspree.io
   * 1. Sign up (free tier is fine) and create a new form.
   * 2. Copy the form's endpoint, e.g. https://formspree.io/f/abcdwxyz
   * 3. Paste it below. Submissions will arrive in your email inbox.
   */
  formspreeEndpoint: "https://formspree.io/f/xgojpknw",
};

/** Terminal lines "typed out" in the hero terminal window. */
export const heroTerminal = [
  { command: "whoami", output: "arijit — ETCE undergrad @ Jadavpur University" },
  { command: "current --focus", output: "5G · RIS beamforming · applied ML" },
  { command: "status", output: "open to internships & research roles" },
];

/** About section — rendered as the output of `$ cat about.md`. */
export const aboutParagraphs = [
  "I'm a final-year Electronics & Telecommunication Engineering undergrad at Jadavpur University (Class of 2027), with a 94%+ record in both board exams and a habit of chasing problems across the stack — from RF link budgets to REST APIs.",
  "My experience spans enterprise networking at Accenture and 5G research at IIT Guwahati, where I worked on joint active/passive beamforming for RIS-aided integrated sensing and communication systems.",
  "On the applied ML side, I've built CNN-powered computer-vision apps, time-series demand forecasting dashboards, and reinforcement-learning models that tune beamforming in simulated wireless networks.",
  "I'm currently looking for internship and full-time opportunities at the intersection of wireless systems and machine learning.",
];

export const extracurriculars = [
  { org: "AstroSci Club", role: "Head of Administration" },
  { org: "Maths Society", role: "Vice-President" },
];
