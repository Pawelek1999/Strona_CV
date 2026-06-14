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

export const projects = [
  {
    slug: 'portfolio',
    image: null,
    visualClass: projectVisuals.portfolio,
    tags: ['React', 'Tailwind CSS', 'Portfolio'],
    content: {
      pl: {
        title: 'Portfolio osobiste',
        shortDescription: 'Responsywna strona portfolio z trybem dark mode, językami PL/EN i modularnymi sekcjami.',
        description:
          'Projekt skupiony na czytelnej prezentacji doświadczenia, edukacji, umiejętności i projektów. Strona korzysta z komponentowej struktury, trybu jasnego i ciemnego oraz przełączania języka PL/EN.',
        alt: 'Abstrakcyjna grafika projektu portfolio osobistego',
      },
      en: {
        title: 'Personal portfolio',
        shortDescription: 'A responsive portfolio website with dark mode, PL/EN language support, and modular sections.',
        description:
          'A project focused on clearly presenting experience, education, skills, and projects. The page uses a component-based structure, light and dark mode, and PL/EN language switching.',
        alt: 'Abstract graphic for a personal portfolio project',
      },
    },
  },
  {
    slug: 'smart-home-validation',
    image: null,
    visualClass: projectVisuals.smartHome,
    tags: ['Smart Home', 'Validation', 'Testing'],
    content: {
      pl: {
        title: 'Walidacja Smart Home',
        shortDescription: 'Doświadczenie w testowaniu i walidacji rozwiązań automatyki domowej.',
        description:
          'Obszar obejmuje przygotowywanie scenariuszy testowych, analizę wymagań oraz walidację funkcjonalną urządzeń i aplikacji Smart Home.',
        alt: 'Abstrakcyjna grafika projektu walidacji Smart Home',
      },
      en: {
        title: 'Smart Home validation',
        shortDescription: 'Hands-on experience testing and validating home automation solutions.',
        description:
          'This area covers preparing test scenarios, analyzing requirements, and performing functional validation of Smart Home devices and applications.',
        alt: 'Abstract graphic for a Smart Home validation project',
      },
    },
  },
  {
    slug: 'learning-lab',
    image: null,
    visualClass: projectVisuals.learningLab,
    tags: ['Frontend', 'AI', 'Learning'],
    content: {
      pl: {
        title: 'Laboratorium nauki',
        shortDescription: 'Miejsce na projekty frontendowe, eksperymenty z AI oraz własne narzędzia.',
        description:
          'Przestrzeń do rozwijania umiejętności programistycznych, testowania pomysłów, pracy z narzędziami AI i budowania małych aplikacji pomocniczych.',
        alt: 'Abstrakcyjna grafika laboratorium nauki',
      },
      en: {
        title: 'Learning lab',
        shortDescription: 'A space for frontend projects, AI experiments, and personal tools.',
        description:
          'A space for developing programming skills, testing ideas, working with AI tools, and building small utility applications.',
        alt: 'Abstract graphic for a learning lab project',
      },
    },
  },
  {
    slug: 'dashboard-qa',
    image: null,
    visualClass: projectVisuals.qaDashboard,
    tags: ['QA', 'Dashboard', 'Reporting'],
    content: {
      pl: {
        title: 'Dashboard QA',
        shortDescription: 'Panel do monitorowania jakości, testów i statusów walidacji.',
        description:
          'Koncepcja panelu zbierającego informacje o statusach testów, wynikach walidacji, ryzykach i postępie prac jakościowych w jednym czytelnym widoku.',
        alt: 'Abstrakcyjna grafika dashboardu QA',
      },
      en: {
        title: 'QA Dashboard',
        shortDescription: 'A panel for monitoring quality, tests, and validation statuses.',
        description:
          'A concept for a panel that collects test statuses, validation results, risks, and quality progress in one readable view.',
        alt: 'Abstract graphic for a QA dashboard project',
      },
    },
  },
  {
    slug: 'test-automation',
    image: null,
    visualClass: projectVisuals.testAutomation,
    tags: ['Automation', 'Testing', 'Reports'],
    content: {
      pl: {
        title: 'Automatyzacja testów',
        shortDescription: 'Przykładowy projekt automatyzacji scenariuszy testowych i raportowania wyników.',
        description:
          'Przykładowy projekt pokazujący podejście do automatyzacji powtarzalnych scenariuszy, generowania raportów i usprawniania procesu kontroli jakości.',
        alt: 'Abstrakcyjna grafika automatyzacji testów',
      },
      en: {
        title: 'Test automation',
        shortDescription: 'A sample project for automating test scenarios and reporting results.',
        description:
          'A sample project showing an approach to automating repeatable scenarios, generating reports, and improving the quality control process.',
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
      tags: project.tags ?? [],
      title: localizedProject.title,
      shortDescription: localizedProject.shortDescription,
      description: localizedProject.description,
      alt: localizedProject.alt,
    }
  })

export const getProjectBySlug = (slug, language = 'pl') => getProjects(language).find((project) => project.slug === slug)
