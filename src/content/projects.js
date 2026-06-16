// Jak dodać nowy projekt:
// 1. Dodaj obrazek do folderu z grafikami projektów albo użyj visualClass jako placeholdera.
// 2. Dodaj nowy obiekt do tablicy projects.
// 3. Uzupełnij slug, image, alt, title, shortDescription, description i opcjonalnie tags.
// 4. Nowy projekt pojawi się automatycznie w karuzeli, navbarze i pod adresem /projects/[slug].

const projectVisuals = {
  portfolio:
    'bg-[radial-gradient(circle_at_24%_28%,rgba(34,211,238,0.34),transparent_34%),radial-gradient(circle_at_78%_36%,rgba(59,130,246,0.22),transparent_32%),linear-gradient(135deg,rgba(8,13,42,0.96),rgba(15,23,42,0.98))]',
  smartHome:
    'bg-[radial-gradient(circle_at_32%_24%,rgba(45,212,191,0.28),transparent_34%),radial-gradient(circle_at_72%_66%,rgba(34,211,238,0.2),transparent_30%),linear-gradient(135deg,rgba(8,13,42,0.96),rgba(15,23,42,0.98))]',
  learningLab:
    'bg-[radial-gradient(circle_at_30%_30%,rgba(125,211,252,0.27),transparent_34%),radial-gradient(circle_at_70%_24%,rgba(34,211,238,0.18),transparent_30%),linear-gradient(135deg,rgba(8,13,42,0.96),rgba(15,23,42,0.98))]',
  qaDashboard:
    'bg-[radial-gradient(circle_at_26%_26%,rgba(34,211,238,0.28),transparent_32%),radial-gradient(circle_at_78%_72%,rgba(20,184,166,0.2),transparent_30%),linear-gradient(135deg,rgba(8,13,42,0.96),rgba(15,23,42,0.98))]',
  testAutomation:
    'bg-[radial-gradient(circle_at_28%_28%,rgba(56,189,248,0.3),transparent_32%),radial-gradient(circle_at_74%_64%,rgba(34,211,238,0.18),transparent_32%),linear-gradient(135deg,rgba(8,13,42,0.96),rgba(15,23,42,0.98))]',
}

const projectStatusLabels = {
  en: {
    comingSoon: 'Coming soon',
  },
  pl: {
    comingSoon: 'Coming soon',
  },
}

export const projects = [
  {
    slug: 'portfolio',
    status: 'comingSoon',
    image: null,
    visualClass: projectVisuals.portfolio,
    tags: ['React', 'Tailwind CSS', 'Portfolio'],
    content: {
      pl: {
        title: 'Weather App',
        shortDescription: 'Projekt w przygotowaniu. Szczegóły i finalna prezentacja pojawią się wkrótce.',
        description:
          'Ta sekcja jest przygotowana jako miejsce na pełny opis projektu, zakres prac, wykorzystane technologie oraz najważniejsze decyzje projektowe. Materiały zostaną uzupełnione po dopracowaniu projektu.',
        alt: 'Abstrakcyjna grafika projektu portfolio osobistego',
      },
      en: {
        title: 'Weather App',
        shortDescription: 'Project in progress. Details and the final presentation will appear soon.',
        description:
          'This section is prepared for a full project description, scope of work, technologies used, and key design decisions. Materials will be completed after the project is polished.',
        alt: 'Abstract graphic for a personal portfolio project',
      },
    },
  },
  {
    slug: 'smart-home-validation',
    status: 'comingSoon',
    image: null,
    visualClass: projectVisuals.smartHome,
    tags: ['Smart Home', 'Validation', 'Testing'],
    content: {
      pl: {
        title: 'CV Creator',
        shortDescription: 'Projekt w przygotowaniu. Szczegóły i finalna prezentacja pojawią się wkrótce.',
        description:
          'Ta sekcja jest przygotowana jako miejsce na pełny opis projektu, zakres prac, wykorzystane technologie oraz najważniejsze decyzje projektowe. Materiały zostaną uzupełnione po dopracowaniu projektu.',
        alt: 'Abstrakcyjna grafika projektu walidacji Smart Home',
      },
      en: {
        title: 'CV Creator',
        shortDescription: 'Project in progress. Details and the final presentation will appear soon.',
        description:
          'This section is prepared for a full project description, scope of work, technologies used, and key design decisions. Materials will be completed after the project is polished.',
        alt: 'Abstract graphic for a Smart Home validation project',
      },
    },
  },
  {
    slug: 'learning-lab',
    status: 'comingSoon',
    image: null,
    visualClass: projectVisuals.learningLab,
    tags: ['Frontend', 'AI', 'Learning'],
    content: {
      pl: {
        title: 'Smart Room',
        shortDescription: 'Projekt w przygotowaniu. Szczegóły i finalna prezentacja pojawią się wkrótce.',
        description:
          'Ta sekcja jest przygotowana jako miejsce na pełny opis projektu, zakres prac, wykorzystane technologie oraz najważniejsze decyzje projektowe. Materiały zostaną uzupełnione po dopracowaniu projektu.',
        alt: 'Abstrakcyjna grafika laboratorium nauki',
      },
      en: {
        title: 'Smart Room',
        shortDescription: 'Project in progress. Details and the final presentation will appear soon.',
        description:
          'This section is prepared for a full project description, scope of work, technologies used, and key design decisions. Materials will be completed after the project is polished.',
        alt: 'Abstract graphic for a learning lab project',
      },
    },
  },
  {
    slug: 'dashboard-qa',
    status: 'comingSoon',
    image: null,
    visualClass: projectVisuals.qaDashboard,
    tags: ['QA', 'Dashboard', 'Reporting'],
    content: {
      pl: {
        title: 'Camera System',
        shortDescription: 'Projekt w przygotowaniu. Szczegóły i finalna prezentacja pojawią się wkrótce.',
        description:
          'Ta sekcja jest przygotowana jako miejsce na pełny opis projektu, zakres prac, wykorzystane technologie oraz najważniejsze decyzje projektowe. Materiały zostaną uzupełnione po dopracowaniu projektu.',
        alt: 'Abstrakcyjna grafika dashboardu QA',
      },
      en: {
        title: 'Camera System',
        shortDescription: 'Project in progress. Details and the final presentation will appear soon.',
        description:
          'This section is prepared for a full project description, scope of work, technologies used, and key design decisions. Materials will be completed after the project is polished.',
        alt: 'Abstract graphic for a QA dashboard project',
      },
    },
  },
  {
    slug: 'test-automation',
    status: 'comingSoon',
    image: null,
    visualClass: projectVisuals.testAutomation,
    tags: ['Automation', 'Testing', 'Reports'],
    content: {
      pl: {
        title: 'Trening Agent',
        shortDescription: 'Projekt w przygotowaniu. Szczegóły i finalna prezentacja pojawią się wkrótce.',
        description:
          'Ta sekcja jest przygotowana jako miejsce na pełny opis projektu, zakres prac, wykorzystane technologie oraz najważniejsze decyzje projektowe. Materiały zostaną uzupełnione po dopracowaniu projektu.',
        alt: 'Abstrakcyjna grafika automatyzacji testów',
      },
      en: {
        title: 'Trening Agent',
        shortDescription: 'Project in progress. Details and the final presentation will appear soon.',
        description:
          'This section is prepared for a full project description, scope of work, technologies used, and key design decisions. Materials will be completed after the project is polished.',
        alt: 'Abstract graphic for a test automation project',
      },
    },
  },
]

export const getProjects = (language = 'pl') =>
  projects.map((project) => {
    const localizedProject = project.content[language] ?? project.content.pl

    return {
      slug: project.slug,
      image: project.image,
      visualClass: project.visualClass,
      status: project.status,
      statusLabel: projectStatusLabels[language]?.[project.status] ?? projectStatusLabels.pl[project.status],
      tags: project.tags ?? [],
      title: localizedProject.title,
      shortDescription: localizedProject.shortDescription,
      description: localizedProject.description,
      alt: localizedProject.alt,
    }
  })

export const getProjectBySlug = (slug, language = 'pl') => getProjects(language).find((project) => project.slug === slug)
