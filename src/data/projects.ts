export type ProjectCategory = "featured" | "research" | "coursework" | "experimental"

export type ProjectTag =
  | "data"
  | "ml"
  | "simulation"
  | "api"
  | "dashboard"
  | "scientific-computing"
  | "research"
  | "health"
  | "fullstack"
  | "backend"
  | "testing"
  | "viz"

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  id: string
  title: string
  shortDescription: string
  description?: string
  year?: number
  category: ProjectCategory
  tags: ProjectTag[]
  tech: string[]
  image?: string
  links?: ProjectLink[]
  highlights?: string[]
  featured?: boolean
  status?: "completed" | "ongoing" | "evolving" | "study"
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  featured: "Featured Projects",
  research: "Scientific / Research Work",
  coursework: "Coursework / Practice",
  experimental: "Experimental / Ongoing",
}

export const ALL_TAGS: { key: ProjectTag; label: string }[] = [
  { key: "data", label: "Data" },
  { key: "ml", label: "Machine Learning" },
  { key: "simulation", label: "Simulation" },
  { key: "api", label: "API" },
  { key: "dashboard", label: "Dashboard" },
  { key: "scientific-computing", label: "Scientific Computing" },
  { key: "research", label: "Research" },
  { key: "health", label: "Health" },
  { key: "fullstack", label: "Full-stack" },
  { key: "backend", label: "Backend" },
  { key: "testing", label: "Testing" },
  { key: "viz", label: "Visualization" },
]

export const projects: Project[] = [
  {
    id: "findash",
    title: "FinDash",
    shortDescription:
      "A personal finance dashboard focused on analytical control, data visibility, and meaningful visualization.",
    description:
      "A data-oriented application built to organize financial information, improve visibility over transactions, and support decision-making through structured dashboards.",
    year: 2026,
    category: "featured",
    tags: ["data", "dashboard", "viz", "fullstack"],
    tech: ["Python", "Streamlit", "Pandas"],
    highlights: [
      "Transaction tracking and financial organization workflows",
      "Dashboard-oriented visualization and analytical summaries",
      "Built around a real personal use case",
    ],
    featured: true,
    status: "ongoing",
  },
  {
    id: "hindmarsh-rose-simulation",
    title: "Hindmarsh-Rose Simulation",
    shortDescription:
      "Scientific computing project exploring nonlinear neuronal dynamics through simulation and modeling.",
    description:
      "A scientific computing and modeling project focused on simulating the Hindmarsh-Rose system and studying dynamical behavior through computational experimentation.",
    year: 2025,
    category: "featured",
    tags: ["simulation", "scientific-computing", "data", "research", "viz"],
    tech: ["Python", "NumPy", "SciPy", "Matplotlib"],
    highlights: [
      "Mathematical modeling and numerical simulation",
      "Scientific analysis of nonlinear behavior",
      "Strong connection between theory, code, and interpretation",
    ],
    featured: true,
    status: "completed",
  },
  {
    id: "paleodex-api",
    title: "PaleoDex API",
    shortDescription:
      "An API project designed to evolve into a richer data and dashboard-oriented application.",
    description:
      "A backend-first project structured around domain data organization and service design, with future plans for analytical and visualization layers.",
    year: 2026,
    category: "featured",
    tags: ["api", "backend", "data", "fullstack"],
    tech: ["Python", "FastAPI", "SQL", "PostgreSQL"],
    highlights: [
      "API design and structured data modeling",
      "Foundation for future analysis and dashboard features",
      "Built as an evolving project rather than a one-off exercise",
    ],
    featured: true,
    status: "evolving",
  },
  {
    id: "webcam-for-ntms",
    title: "webcam_for_nTMS",
    shortDescription:
      "A technical support project connected to neuroscience and research workflows.",
    year: 2025,
    category: "research",
    tags: ["research", "health", "data"],
    tech: ["Python"],
    highlights: [
      "Research-oriented technical workflow",
      "Supports scientific and applied experimentation",
    ],
    status: "completed",
  },
  {
    id: "automated-motor-mapping",
    title: "automated motor mapping",
    shortDescription:
      "A research-related project aimed at structuring and automating technical analysis workflows.",
    year: 2025,
    category: "research",
    tags: ["research", "health", "data", "viz"],
    tech: ["Python"],
    highlights: [
      "Automation within a scientific/medical context",
      "Bridges technical implementation and research application",
    ],
    status: "ongoing",
  },
  {
    id: "raman-analysis",
    title: "RamanAnalysis",
    shortDescription:
      "A scientific data analysis workflow related to spectroscopy and technical interpretation.",
    year: 2024,
    category: "research",
    tags: ["research", "data", "scientific-computing", "viz"],
    tech: ["Python", "Pandas", "Matplotlib"],
    highlights: [
      "Scientific data processing and interpretation",
      "Strong analytical and domain-oriented component",
    ],
    status: "completed",
  },
  {
    id: "rheometer-plotting",
    title: "Rheometer-Plotting",
    shortDescription: "A plotting and analysis utility built around rheological experimental data.",
    year: 2024,
    category: "research",
    tags: ["research", "data", "viz"],
    tech: ["Python", "Matplotlib"],
    highlights: [
      "Focused on technical visualization",
      "Supports experimental and analytical workflows",
    ],
    status: "completed",
  },
  {
    id: "dio-backend-python",
    title: "dio-backend-python",
    shortDescription:
      "Backend practice repository developed as part of structured coursework and training.",
    year: 2025,
    category: "coursework",
    tags: ["backend", "api"],
    tech: ["Python"],
    highlights: ["Structured learning repository", "Used to strengthen backend fundamentals"],
    status: "study",
  },
  {
    id: "dio-formacao-cpp",
    title: "dio-formacao-cpp",
    shortDescription:
      "C++ training repository created to reinforce language fundamentals and practice.",
    year: 2025,
    category: "coursework",
    tags: ["scientific-computing"],
    tech: ["C++"],
    highlights: ["Language-focused practice", "Part of a broader technical learning path"],
    status: "study",
  },
  {
    id: "azure-ai-sentiment-analysis",
    title: "azure-ai-sentiment-analysis",
    shortDescription:
      "A small applied exercise exploring sentiment analysis with Azure AI services.",
    year: 2025,
    category: "coursework",
    tags: ["ml", "api"],
    tech: ["Azure AI"],
    highlights: ["Service-based experimentation", "Practice-oriented repository"],
    status: "study",
  },
  {
    id: "store-tdd-api",
    title: "store-tdd-api",
    shortDescription: "A backend practice project with emphasis on testing and API development.",
    year: 2025,
    category: "coursework",
    tags: ["backend", "testing", "api"],
    tech: ["Python", "Testing"],
    highlights: ["TDD-oriented backend practice", "Focused on API and testing workflow"],
    status: "study",
  },
  {
    id: "rheoinformatics-biopolymers",
    title: "Rheoinformatics-Biopolymers",
    shortDescription:
      "An exploratory project at the intersection of rheology, data, and computational analysis.",
    year: 2026,
    category: "experimental",
    tags: ["research", "data", "scientific-computing"],
    tech: ["Python"],
    highlights: [
      "Exploratory and evolving direction",
      "Potentially strong bridge between research and data products",
    ],
    status: "ongoing",
  },
]
