/** Project cards. `repo` powers the "$ git clone" call-to-action. */
export interface Project {
  title: string;
  period: string;
  bullets: string[];
  tags: string[];
  /** TODO: point each of these at the real repository when available. */
  repo: string;
}

export const projects: Project[] = [
  {
    title: "AI-Based Personal Style & Body Analysis System",
    period: "Jan 2026 – Present",
    bullets: [
      "AI-powered web app that analyzes facial structure, skin tone, and body proportions to suggest personalized fashion and styling recommendations.",
      "CNN-based computer vision models for face shape detection and skin tone classification.",
      "React frontend integrated with a Flask backend for real-time image processing.",
    ],
    tags: ["Python", "CNN", "Computer Vision", "React", "Flask"],
    repo: "https://github.com/The-AlphaWolf",
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
    repo: "https://github.com/The-AlphaWolf",
  },
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
];
