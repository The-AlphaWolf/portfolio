/** Skill groups rendered as `$ skills --list` output with tag chips. */
export interface SkillGroup {
  /** Flag-style label for the terminal aesthetic, e.g. `--languages` */
  flag: string;
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    flag: "--languages",
    label: "Languages",
    items: [
      "Python",
      "C++",
      "MATLAB",
      "TypeScript",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    flag: "--tools",
    label: "Developer Tools",
    items: [
      "Git & GitHub",
      "VS Code",
      "Docker",
      "Vitest",
      "NetSim",
      "MATLAB",
      "Multisim",
      "Simulink",
      "Arduino",
      "Raspberry Pi",
    ],
  },
  {
    flag: "--frameworks",
    label: "Technologies / Frameworks",
    items: [
      "React",
      "Next.js",
      "Flask",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Streamlit",
      "MediaPipe",
      "Machine Learning",
      "Computer Vision",
      "IoT",
      "Embedded Systems",
      "Network Models",
    ],
  },
];
