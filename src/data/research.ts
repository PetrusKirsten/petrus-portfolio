export type PublicationType = "article" | "conference" | "abstract" | "poster" | "report"

export type Publication = {
  title: string
  type: PublicationType
  year: number
  venue?: string
  summary: string
  link?: string
}

export type ResearchProject = {
  title: string
  summary: string
  tools: string[]
  notes?: string[]
  link?: string
}

export const researchOverview = {
  title: "Research and scientific work",
  intro:
    "My scientific background is a central part of how I approach technical work. Research trained me to investigate problems carefully, structure analysis, interpret results critically, and communicate findings with clarity.",
  bridge:
    "In practice, this often means using programming — especially Python — to process experimental data, automate workflows, generate visualizations, and support scientific interpretation.",
}

export const publications: Publication[] = [
  {
    title: "Add your publication title here",
    type: "article",
    year: 2025,
    venue: "Journal / Conference / Venue",
    summary: "Short description of the work, its context, and why it matters.",
    link: "",
  },
  {
    title: "Add another publication, abstract, or conference work here",
    type: "conference",
    year: 2024,
    venue: "Conference name",
    summary: "Short description of your contribution and the scientific context.",
    link: "",
  },
]

export const scientificAnalysisProjects: ResearchProject[] = [
  {
    title: "Raman analysis workflows",
    summary:
      "Scientific data processing and interpretation using Python for spectroscopy-related analysis and visualization.",
    tools: ["Python", "Pandas", "Matplotlib"],
    notes: [
      "Data cleaning and preprocessing",
      "Technical visualization",
      "Support for interpretation of experimental results",
    ],
  },
  {
    title: "Rheological and experimental plotting workflows",
    summary:
      "Analysis and plotting routines built to support rheological and experimental data interpretation.",
    tools: ["Python", "Matplotlib"],
    notes: ["Custom plotting for experiments", "Support for technical and scientific reporting"],
  },
  {
    title: "Research-oriented computational analysis",
    summary:
      "Use of programming to structure analysis pipelines, automate repetitive tasks, and improve clarity in scientific workflows.",
    tools: ["Python"],
    notes: ["Automation of analysis steps", "Better reproducibility and consistency"],
  },
]
