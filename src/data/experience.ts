/** Experience timeline entries, newest first (rendered git-log style). */
export interface ExperienceEntry {
  /** Fake short hash for the git-log aesthetic */
  hash: string;
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    hash: "f4a2c91",
    role: "Custom Associate Software Engineering Intern",
    org: "Accenture",
    period: "May 2026 – Jul 2026",
    bullets: [
      "Assisted in delivering enterprise networking initiatives, applying networking and software engineering concepts to real-world business use cases in a global consulting environment.",
      "Partnered with project leads, mentors, and peers to analyze requirements, document findings, and support project execution.",
      "Completed structured Enterprise Networks training and applied it to project discussions, technical documentation, and solution analysis.",
    ],
  },
  {
    hash: "b7e0d38",
    role: "Summer Research Intern",
    org: "Indian Institute of Technology, Guwahati",
    period: "May 2025 – Jul 2025",
    bullets: [
      "Developed and implemented real-time use cases on a 5G testbed, gaining hands-on experience with advanced wireless technologies.",
      "Conducted research on joint active and passive beamforming design for RIS-aided integrated sensing and communication systems.",
    ],
  },
];
