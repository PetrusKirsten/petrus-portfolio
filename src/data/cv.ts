export type Certification = {
  name: string
  issuer: string
  year?: number
  hours?: string
  link?: string
  badgeImage?: string
}

export type EducationItem = {
  title: string
  institution: string
  details: string
  badgeImage?: string
}

export const cvData = {
  summary:
    "I am a physicist, researcher, and developer working at the intersection of science, data, and software. With a background in Medical Physics and a PhD in progress in Physics Applied to Medicine and Biology at USP, I bring scientific rigor, analytical depth, and technical curiosity to the development of computational tools, data-driven systems, and real-world applications. My work is driven by the goal of turning complex problems into clear, practical, and meaningful solutions.",

  education: [
    {
      title: "PhD candidate in Applied Physics to Medicine and Biology",
      institution:
        "School of Philosophy, Sciences and Letters at Ribeirão Preto (FFCLRP), University of São Paulo (USP)",
      details:
        "Research focused on polymer-based biomaterials for the repair and regeneration of mineralized tissues, including injectable hydrogels, bioinks for 3D-printed scaffolds, and films/membranes. I also completed a research internship at CentraleSupélec (France), expanding the international and interdisciplinary dimension of my thesis work.",
      badgeImage: "/cv/phd_famb_usp.png",
    },
    {
      title: "Bachelor in Medical Physics",
      institution:
        "School of Philosophy, Sciences and Letters at Ribeirão Preto (FFCLRP), University of São Paulo (USP)",
      details:
        "Strong academic training in physics applied to medicine and biology, with undergraduate research experience in transcranial magnetic stimulation, neuronavigation, biomedical systems, and experimental automation. During this period, I developed computational tools, worked with data analysis and technical documentation, and combined scientific research with applied programming and hardware-based experimentation.",
      badgeImage: "/cv/grad_df_usp.png",
    },
    {
      title: "Bachelor in Data Science (in progress)",
      institution: "Virtual University of the State of São Paulo (UNIVESP)",
      details:
        "Formal training in data-oriented methods, analytical thinking, and applied computing, reinforcing my transition toward technology, software development, and real-world problem-solving. This program complements my scientific background with a stronger foundation in data science, systems, and modern technical workflows.",
      badgeImage: "/cv/univesp.png",
    },
  ] as EducationItem[],

  technicalSkills: {
    languages: ["Python", "TypeScript", "SQL", "C++"],
    frameworks: ["Streamlit", "FastAPI", "Next.js", "React"],
    dataAndScience: ["Pandas", "NumPy", "Matplotlib", "Scientific Computing", "Data Visualization"],
    tools: ["Git", "GitHub", "Jupyter", "SQLAlchemy", "Pydantic"],
  },

  featuredCertifications: [
    {
      name: "Bootcamp | Back-End with Python",
      issuer: "DIO",
      year: 2025,
      hours: "58 h",
      link: "/certificates/bootcamp_santander_backend_python.pdf",
      badgeImage: "/cv/python_backend.webp",
    },
    {
      name: "Bootcamp | C/C++ Developer",
      issuer: "DIO",
      year: 2026,
      hours: "42 h",
      link: "/certificates/bootcamp_c-cpp.pdf",
      badgeImage: "/cv/c_cpp.webp",
    },
    {
      name: "Bootcamp | Python Fundamentals",
      issuer: "DIO",
      year: 2025,
      hours: "26 h",
      link: "/certificates/bootcamp_python_fundamentals.pdf",
      badgeImage: "/cv/python.webp",
    },
    {
      name: "Test-Driven Development with Python",
      issuer: "DIO",
      year: 2025,
      hours: "8 h",
      link: "/certificates/testes_python.pdf",
      badgeImage: "/cv/python.webp",
    },
  ] as Certification[],

  additionalTraining: [
    {
      name: "Database Integration with Python",
      issuer: "DIO",
      year: 2025,
      link: "/certificates/integracao_banco_dados_python.pdf",
      badgeImage: "/cv/python.webp",
    },
    {
      name: "Data Structures in Python",
      issuer: "DIO",
      year: 2025,
      link: "/certificates/estrutura_dados_python.pdf",
      badgeImage: "/cv/python.webp",
    },
    {
      name: "FastAPI + TDD",
      issuer: "DIO",
      year: 2025,
      link: "/certificates/fastapi_tdd.pdf",
      badgeImage: "/cv/python.webp",
    },
    {
      name: "Introduction to NoSQL and MongoDB",
      issuer: "DIO ",
      year: 2025,
      link: "/certificates/intro_mongodb_nosql.pdf",
      badgeImage: "/cv/mongodb.png",
    },
    {
      name: "Introduction to SQL",
      issuer: "DIO",
      year: 2025,
      link: "/certificates/intro_sql.pdf",
      badgeImage: "/cv/sql.webp",
    },
    {
      name: "API Development with Python and Docker",
      issuer: "DIO",
      year: 2025,
      link: "/certificates/api_python_docker.pdf",
      badgeImage: "/cv/python.webp",
    },
    {
      name: "Hardware and Arduino Programming",
      issuer: "DIO",
      year: 2026,
      link: "/certificates/prog_hardware_arduino.pdf",
      badgeImage: "/cv/python.webp",
    },
    {
      name: "Applied Plotting, Charting and Data Representation in Python",
      issuer: "Coursera | University of Michigan",
      year: 2023,
      link: "/certificates/coursera_applied_plotting.pdf",
      badgeImage: "/cv/python.webp",
    },
  ] as Certification[],

  selectedBackground: [
    "Scientific research experience with computational support through Python",
    "Applied use of programming for data processing, visualization, and workflow automation",
    "Strong bridge between scientific reasoning and software development",
  ],

  cvDownloadLink: "",
}
