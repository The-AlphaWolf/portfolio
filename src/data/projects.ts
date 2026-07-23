/** Project cards. `repo` powers the "$ git clone" call-to-action. */
export interface Project {
  title: string;
  period: string;
  bullets: string[];
  tags: string[];
  /** Public GitHub repository for the project. */
  repo: string;
  /**
   * Optional second link rendered next to the repo link — a deployed demo,
   * a download page, whatever the project actually has.
   */
  live?: string;
  /** Link text for `live`. Defaults to "live demo". */
  liveLabel?: string;
}

/** Ordered deliberately — strongest work first, not by date. */
export const projects: Project[] = [
  {
    title: "AI-Enabled Joint Beamforming in Wireless Networks",
    period: "Nov 2025 – Present",
    bullets: [
      "Simulated a RIS-enabled multi-user MIMO beamforming system at 28 GHz in MATLAB.",
      "Analyzed and visualized SNR improvements via charts and heatmaps for optimal RIS deployment.",
      "Reinforcement Learning model to boost signal strength and reduce blackout zones in the propagation model.",
      "Done under the guidance of Prof. Iti Saha Misra.",
    ],
    tags: ["MATLAB", "RIS", "5G", "Reinforcement Learning", "MIMO"],
    repo: "https://github.com/The-AlphaWolf/RIS-SNR-Gain-Comparison",
  },
  {
    title: "CodeNSliceR — 5G Packet-Classifier Puzzle Game",
    period: "Jul 2026",
    bullets: [
      "Terminal puzzle game in the spirit of Human Resource Machine, where the machine is a 5G packet classifier: write assembly with bit-manipulation instructions, decode a 32-bit packet header, and route traffic into eMBB, URLLC, mMTC and V2X slices.",
      "Built the full toolchain in TypeScript — ISA table, assembler, virtual machine with eight registers and sixteen RAM cells, execution trace and a par-based grading system scoring both instruction count and retired cycles.",
      "Fifteen levels from a single-slice emit to a nine-rule production policy with tenant carve-outs, DiffServ trust and admission limits; every reference solution runs in CI as the test that proves the level is solvable at its advertised par.",
      "Real 3GPP semantics throughout — SST, 5QI, DSCP, ARP priority and S-NSSAI structure — with an in-game codex documenting exactly where the game simplifies the specs.",
      "React + Vite front end with a three-pane terminal shell, a custom Monaco language for the assembly, Zustand state and localStorage progress with export/import.",
    ],
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "Monaco Editor",
      "Zustand",
      "Vitest",
      "5G",
      "Compilers",
    ],
    repo: "https://github.com/The-AlphaWolf/CodeNSliceR",
    live: "https://codenslicer.vercel.app",
    liveLabel: "play it",
  },
  {
    title: "FlowSuite — Offline Voice-to-Text & Voice-to-Code Engine",
    period: "Jul 2026",
    bullets: [
      "Local speech engine with three hotkeys: dictate prose, or speak Python/C++ that is turned into real syntax at the cursor in any app.",
      'Spoken-language-to-syntax translation, e.g. "for i in range n" becomes a valid Python for-loop.',
      "Runs fully offline on faster-whisper — no cloud, account, or telemetry — across Windows, macOS and Linux, with optional NVIDIA GPU acceleration.",
      "Ships a doctor.py preflight check that validates mic, clipboard, hotkey and GPU setup per platform.",
    ],
    tags: ["Python", "faster-whisper", "Speech Recognition", "Cross-platform"],
    repo: "https://github.com/The-AlphaWolf/FlowSuite",
    live: "https://github.com/The-AlphaWolf/FlowSuite/releases",
    liveLabel: "download v0.1.0",
  },
  {
    title: "ANTG1 — Browser RPG",
    period: "Jul 2026",
    bullets: [
      "Full-stack browser role-playing game with combat, crafting, trading, exploration, quests, talent trees and vehicle progression.",
      "Next.js 16 + TypeScript app with PostgreSQL via Prisma, NextAuth sessions, and Zod-validated server actions.",
      "Tailwind CSS and shadcn/ui front end; Vitest test suite, Dockerised local stack, and Vercel deployment.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Vitest",
      "Docker",
    ],
    repo: "https://github.com/The-AlphaWolf/GAME-ANTG1",
    live: "https://game-antg1.vercel.app",
  },
  {
    title: "AI-Based Personal Style & Body Analysis System",
    period: "Jan 2026 – Present",
    bullets: [
      "AI-powered web app that analyzes facial structure, skin tone, and body proportions from a single photo to suggest personalized fashion and styling recommendations.",
      "Face shape detection via MediaPipe Face Mesh, skin tone classification via LAB-space k-means, and body proportions via pose estimation.",
      "React frontend integrated with a Flask backend and PostgreSQL for real-time image processing and result storage.",
    ],
    tags: [
      "Python",
      "MediaPipe",
      "Computer Vision",
      "React",
      "Flask",
      "PostgreSQL",
    ],
    repo: "https://github.com/The-AlphaWolf/AI-Driven-body-analysis",
  },
  {
    title: "Smart Restaurant Food Demand Prediction System",
    period: "Sep 2025 – Nov 2025",
    bullets: [
      "ML model predicting daily food demand from historical sales and seasonal trend data.",
      "Regression and time-series forecasting techniques to minimize food wastage.",
      "Interactive Streamlit dashboard for restaurant owners to visualize predictions and inventory insights.",
      "Improved accuracy through feature engineering and hyperparameter tuning.",
    ],
    tags: ["Python", "Machine Learning", "Streamlit", "Time-Series Forecasting"],
    repo: "https://github.com/The-AlphaWolf/Restaurent-management",
  },
];
