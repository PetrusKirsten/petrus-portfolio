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
      "A personal finance app built to manage accounts, credit cards, installments, and monthly spending with clearer analytical control.",
    description:
      "FinDash is a Streamlit-based personal finance application created to organize my own financial life and shared household expenses. It supports user management, bank accounts, credit cards, automated installments, monthly views, and couple-oriented expense tracking.",
    year: 2026,
    category: "featured",
    tags: ["data", "dashboard", "viz", "fullstack"],
    tech: ["Python", "Streamlit"],
    highlights: [
      "Built around a real personal and household finance use case",
      "Includes account management, credit card tracking, and automated installment handling",
      "Focused on practical visualization and month-by-month financial monitoring",
    ],
    featured: true,
    status: "ongoing",
    links: [{ label: "GitHub", href: "https://github.com/PetrusKirsten/FinDash" }],
  },
  {
    id: "hindmarsh-rose-simulation",
    title: "Hindmarsh-Rose Simulation",
    shortDescription:
      "A computational physics project replicating and exploring the Hindmarsh-Rose neuronal dynamics model through simulation.",
    description:
      "A scientific computing project developed for a Computational Physics course, focused on reproducing a published study involving the Hindmarsh-Rose neuronal model. The project combines modeling, simulation, and interpretation of nonlinear dynamical behavior.",
    year: 2025,
    category: "featured",
    tags: ["simulation", "scientific-computing", "data", "research", "viz"],
    tech: ["Python"],
    highlights: [
      "Developed as a computational physics project grounded in scientific literature",
      "Combines mathematical modeling, simulation, and interpretation",
      "Well aligned with my scientific and technical profile",
    ],
    featured: true,
    status: "completed",
    links: [{ label: "GitHub", href: "https://github.com/PetrusKirsten/simulacao-neuronal-HR" }],
  },
  {
    id: "paleodex-api",
    title: "PaleoDex API",
    shortDescription:
      "A REST API for managing dinosaur fossil data, including specimens, museums, and taxonomic information.",
    description:
      "PaleoDex API is a backend project built with FastAPI for managing dinosaur fossil-related data such as specimens, museums, and taxonomic classifications. Although it started from a backend training context, I adapted the original idea into a domain that reflects my own interests and gave it a more personal direction.",
    year: 2026,
    category: "featured",
    tags: ["api", "backend", "data", "fullstack"],
    tech: ["Python", "FastAPI", "SQLAlchemy", "Pydantic"],
    highlights: [
      "REST API with structured domain modeling for fossils, museums, and taxa",
      "One of my first backend projects with a more intentional and personal theme",
      "Good entry point into API design using FastAPI ecosystem tools",
    ],
    featured: true,
    status: "completed",
    links: [{ label: "GitHub", href: "https://github.com/PetrusKirsten/PaleoDex_API" }],
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
