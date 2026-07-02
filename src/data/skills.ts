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
    items: ["MATLAB", "Python", "C++", "HTML", "CSS"],
  },
  {
    flag: "--tools",
    label: "Developer Tools",
    items: [
      "NetSim",
      "MATLAB",
      "Multisim",
      "Simulink",
      "VS Code",
      "Arduino",
      "Raspberry Pi",
    ],
  },
  {
    flag: "--frameworks",
    label: "Technologies / Frameworks",
    items: [
      "GitHub",
      "IoT",
      "Embedded Systems",
      "Network Models",
      "Machine Learning",
    ],
  },
];
