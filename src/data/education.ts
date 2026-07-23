/** Education entries, newest first. */
export interface EducationEntry {
  school: string;
  credential: string;
  detail: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    school: "Jadavpur University",
    credential: "B.Tech — Electronics and Telecommunication Engineering",
    detail: "Final Year — 7th Semester",
    period: "2023 – 2027",
  },
  {
    school: "The Newtown School",
    credential: "Senior Secondary (XII) — Science, CBSE",
    detail: "Percentage: 94.6%",
    period: "2023",
  },
  {
    school: "The Newtown School",
    credential: "Secondary (X) — CBSE",
    detail: "Percentage: 94.44%",
    period: "2021",
  },
];
