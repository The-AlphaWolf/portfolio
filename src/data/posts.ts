/**
 * Writing / blog posts.
 *
 * PLACEHOLDER CONTENT — replace these with real posts when ready:
 *  - set `href` to the post URL (external link or a new page/route),
 *  - update title, date, and excerpt.
 * The Writing section renders whatever is in this array.
 */
export interface Post {
  title: string;
  date: string;
  excerpt: string;
  href: string;
}

export const posts: Post[] = [
  {
    title: "RIS 101: Why Walls Might Beamform Your Next Call",
    date: "2026-05-14",
    excerpt:
      "A plain-language introduction to reconfigurable intelligent surfaces and why they matter for 6G — from someone who spent a summer simulating them.",
    href: "#", // TODO: link to the real post
  },
  {
    title: "Forecasting Biryani: Lessons from a Demand-Prediction Model",
    date: "2026-03-02",
    excerpt:
      "What building a restaurant demand forecaster taught me about feature engineering, seasonality, and why the dashboard matters as much as the model.",
    href: "#", // TODO: link to the real post
  },
  {
    title: "From Testbed to Textbook: A Summer at IIT Guwahati",
    date: "2025-08-20",
    excerpt:
      "Notes on working with a real 5G testbed — the gap between simulation and hardware, and what research internships actually look like.",
    href: "#", // TODO: link to the real post
  },
];
