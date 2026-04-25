export type PublicationType = "article" | "conference" | "abstract" | "poster" | "report"

export type Publication = {
  title: string
  type: PublicationType
  year: number
  venue?: string
  summary: string
  contribution?: string
  link?: string
  image?: string
}

export type ResearchProject = {
  title: string
  summary: string
  tools: string[]
  notes?: string[]
  contribution?: string
  link?: string
  image?: string
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
    title:
      "MarLe: Markerless estimation of head pose for navigated transcranial magnetic stimulation",
    type: "article",
    year: 2023,
    venue: "Physical and Engineering Sciences in Medicine",
    summary:
      "Open-access scientific paper presenting MarLe, a Python-based markerless head tracking approach for navigated transcranial magnetic stimulation using computer vision and low-cost cameras.",
    contribution:
      "Contributed to a research project connecting biomedical instrumentation, neuronavigation, computer vision, Python-based software, and experimental validation.",
    link: "https://link.springer.com/article/10.1007/s13246-023-01263-2",
    image: "",
  },
  {
    title: "Recent Advances on Starch-Based Biomaterials: A Review",
    type: "article",
    year: 2026,
    venue: "ACS Polymers Au",
    summary:
      "Review article on starch-based biomaterials, covering recent advances, applications, and perspectives in polymer-based systems for biomedical and technological contexts.",
    contribution:
      "Contributed to conceptualization, formal analysis, investigation, visualization, and original draft writing, connecting scientific literature analysis with technical synthesis and communication.",
    link: "https://pubs.acs.org/doi/10.1021/acspolymersau.5c00188",
    image: "",
  },
  {
    title:
      "Development of application-oriented protocols for rheological and mechanical characterization of injectable biopolymer hydrogels",
    type: "poster",
    year: 2025,
    venue: "XIII Latin American Congress on Artificial Organs and Biomaterials (COLAOB 2025)",
    summary:
      "Poster presentation focused on application-oriented protocols for rheological and mechanical characterization of injectable biopolymer hydrogels.",
    contribution:
      "Presented work related to experimental characterization of biomaterials, combining rheological and mechanical analysis with application-driven interpretation.",
    link: "",
    image: "",
  },
  {
    title:
      "Biomaterials based on carrageenan: a comprehensive study on the influence of this natural sulfated polysaccharide on bone biomineralization",
    type: "poster",
    year: 2023,
    venue: "XI Symposium on Instrumentation and Medical Imaging (SIIM 2023)",
    summary:
      "Poster presentation on carrageenan-based biomaterials and their influence on bone biomineralization.",
    contribution:
      "Presented scientific work connecting natural polymer-based biomaterials, mineralized tissue applications, and experimental interpretation.",
    link: "",
    image: "",
  },
  {
    title:
      "Biomaterials based on carrageenan: a comprehensive study on the influence of this natural sulfated polysaccharide on bone biomineralization",
    type: "poster",
    year: 2023,
    venue:
      "5th International Conference on Matrix Vesicles: From Biochemistry to Clinic (ICMV 2023)",
    summary:
      "Poster presentation on carrageenan-based biomaterials in the context of bone biomineralization and matrix vesicle-related scientific discussions.",
    contribution:
      "Presented research involving polymer-based biomaterials, biomineralization, and scientific communication in an international conference context.",
    link: "",
    image: "",
  },
  {
    title: "Bioactive three-dimensional scaffolds inspired by bone extracellular matrix",
    type: "poster",
    year: 2023,
    venue: "XXI B-MRS Meeting",
    summary:
      "Poster presentation on bioactive three-dimensional scaffolds inspired by the bone extracellular matrix.",
    contribution:
      "Presented research related to biomaterials design, scaffold development, and mineralized tissue regeneration strategies.",
    link: "",
    image: "",
  },
  {
    title: "Mapping of the motor cortex through robotic transcranial magnetic stimulation",
    type: "poster",
    year: 2022,
    venue: "30th SIICUSP",
    summary:
      "Scientific initiation work on robotic transcranial magnetic stimulation applied to motor cortex mapping.",
    contribution:
      "Presented undergraduate research involving biomedical systems, transcranial magnetic stimulation, automation, and experimental mapping workflows.",
    link: "",
    image: "",
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
    contribution:
      "Built analysis and plotting workflows to improve clarity and consistency in spectroscopy-related data interpretation.",
    link: "",
    image: "",
  },
  {
    title: "Rheological and experimental plotting workflows",
    summary:
      "Analysis and plotting routines built to support rheological and experimental data interpretation.",
    tools: ["Python", "Matplotlib"],
    notes: ["Custom plotting for experiments", "Support for technical and scientific reporting"],
    contribution:
      "Developed computational routines to structure plots and improve the communication of experimental results.",
    link: "",
    image: "",
  },
  {
    title: "Research-oriented computational analysis",
    summary:
      "Use of programming to structure analysis pipelines, automate repetitive tasks, and improve clarity in scientific workflows.",
    tools: ["Python"],
    notes: ["Automation of analysis steps", "Better reproducibility and consistency"],
    contribution:
      "Applied programming as a practical research tool for automation, analysis, and visualization in scientific workflows.",
    link: "",
    image: "",
  },
]
