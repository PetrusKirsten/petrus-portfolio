export type ProjectTag =
  | "data"
  | "ml"
  | "cv"
  | "eletronica"
  | "arduino"
  | "fullstack"
  | "infra"
  | "research"
  | "saude"
  | "cli"
  | "viz" // visualização

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
  tags: ProjectTag[]
  tech: string[]
  image?: string // path em /public/images/
  links?: ProjectLink[]
  highlights?: string[] // bullets de impacto/resultado
}

export const ALL_TAGS: { key: ProjectTag; label: string }[] = [
  { key: "data", label: "Data" },
  { key: "ml", label: "ML" },
  { key: "cv", label: "Visão" },
  { key: "eletronica", label: "Eletrônica" },
  { key: "arduino", label: "Arduino" },
  { key: "fullstack", label: "Full‑stack" },
  { key: "infra", label: "Infra" },
  { key: "research", label: "Pesquisa" },
  { key: "saude", label: "Saúde" },
  { key: "cli", label: "CLI" },
  { key: "viz", label: "Visualização" },
]

export const projects: Project[] = [
  {
    id: "espectroscopia-hyper",
    title: "Pipeline de Espectroscopia Hiperespectral",
    shortDescription:
      "Pré‑processamento, redução de dimensionalidade e clustering para espectros biomédicos.",
    year: 2024,
    tags: ["data", "ml", "saude", "research"],
    tech: ["Python", "numpy", "scikit-learn", "matplotlib", "pandas"],
    image: "/images/proj-espectroscopia.jpg",
    links: [{ label: "GitHub", href: "https://github.com/seuusuario/espectroscopia" }],
    highlights: [
      "Normalização + remoção de baseline por AsLS",
      "PCA/UMAP para visualização e K-Means/HDBSCAN para clusterização",
      "Relatórios automáticos em Markdown/HTML",
    ],
  },
  {
    id: "microscopia-cv",
    title: "Visão Computacional em Microscopia",
    shortDescription: "Segmentação e extração de features morfológicas em lâminas.",
    year: 2023,
    tags: ["cv", "ml", "saude", "data"],
    tech: ["Python", "OpenCV", "scikit-image", "PyTorch"],
    image: "/images/proj-microscopia.jpg",
    links: [{ label: "GitHub", href: "https://github.com/seuusuario/microscopia-cv" }],
    highlights: [
      "Pipeline reproducível com configs YAML",
      "Métricas de segmentação (IoU, Dice) e tracking simples",
    ],
  },
  {
    id: "neuronavegacao",
    title: "Neuronavegação (protótipo)",
    shortDescription: "Registro 2D‑3D e visualização interativa para planejamento cirúrgico.",
    year: 2022,
    tags: ["cv", "saude", "research", "viz"],
    tech: ["C++", "Qt", "VTK", "ITK"],
    image: "/images/proj-neuronavegacao.jpg",
    links: [{ label: "Demo", href: "https://seusite/demo-neuronavegacao" }],
    highlights: ["Registro rígido ICP", "Renderização de volume com VTK"],
  },
  {
    id: "automacao-arduino",
    title: "Automação de bancada com Arduino",
    shortDescription: "Controle de motores/atuadores e aquisição de dados em experimento.",
    year: 2021,
    tags: ["eletronica", "arduino", "data", "cli"],
    tech: ["Arduino", "C++", "Python", "PySerial"],
    image: "/images/proj-arduino.jpg",
    links: [{ label: "GitHub", href: "https://github.com/seuusuario/automacao-arduino" }],
    highlights: ["Driver serial robusto + protocolo simples", "CLI para calibração e coleta"],
  },
  {
    id: "portfolio-fullstack",
    title: "Este Portfólio (Full‑stack)",
    shortDescription: "Next.js + App Router, SSG/ISR, dark mode e i18n planejado.",
    year: 2025,
    tags: ["fullstack", "infra", "viz"],
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    image: "/images/proj-portfolio.jpg",
    links: [{ label: "Repositório", href: "https://github.com/seuusuario/portfolio" }],
    highlights: ["CI (Actions) + Previews (Vercel)", "SEO com Metadata API"],
  },
]
