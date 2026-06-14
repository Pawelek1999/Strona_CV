export const siteContent = {
  pl: {
    nav: [
      { label: 'Start', href: '#home' },
      { label: 'O mnie', href: '#about' },
      { label: 'Doświadczenie', href: '#experience' },
      { label: 'Edukacja', href: '#education' },
      { label: 'Umiejętności', href: '#skills' },
      { label: 'Projekty', href: '#projects' },
      { label: 'Kontakt', href: '#contact' },
    ],
    hero: {
      prefix: 'Cześć, jestem',
      highlight: 'Jakub!',
      headline: 'Koduję, testuję, trenuję. Tworzę technologię z pasją.',
      description:
        'Fascynuje mnie programowanie, elektronika i inteligentne rozwiązania Smart Home. Nieustannie śledzę trendy w AI, a w przerwach od ekranu... ładuję baterie w ruchu. Wejdź głębiej, aby poznać moje projekty, technologiczne eksperymenty i sportowe pasje!',
      cta: 'Skontaktuj się ze mną',
      projectsCta: 'Sprawdź moje projekty!',
      imageAlt: 'Ilustracja Jakuba Pawełka z laptopem',
      sidePanels: [
        {
          side: 'left',
          title: 'Sport i styl życia',
          items: [
            { icon: '🏃', label: 'Bieganie' },
            { icon: '🥋', label: 'Jiu-Jitsu' },
            { icon: '📜', label: 'Historia' },
          ],
        },
        {
          side: 'right',
          title: 'Technologia',
          items: [
            { icon: '💻', label: 'Programowanie' },
            { icon: '🔌', label: 'Elektronika' },
            { icon: '🏠', label: 'Smart Home' },
          ],
        },
      ],
    },
    about: {
      eyebrow: 'Profil',
      title: 'O mnie',
      cardTitle: 'Kilka słów o mnie',
      imageAlt: 'Portret Jakuba Pawełka',
      text: `Jestem Inżynierem ds. Walidacji Oprogramowania z ponad dwuletnim doświadczeniem w testowaniu funkcjonalnym oraz walidacji systemów. Dotychczas pracowałem przy weryfikacji systemów Smart Home dla automatyki domowej, co pozwoliło mi zdobyć praktyczną wiedzę z zakresu jakości oprogramowania, cyklu życia produktu oraz procesów deweloperskich.

Obecnie rozwijam się w kierunku tworzenia oprogramowania, realizując własne projekty i pogłębiając wiedzę z zakresu projektowania, implementacji oraz dobrych praktyk programistycznych.`,
    },
    experience: {
      title: 'Doświadczenie',
      columns: {
        period: 'Okres',
        role: 'Stanowisko',
      },
      rows: [
        {
          period: '2025-04 - obecnie',
          role: 'Software Validation Engineer - Somfy Poland',
          responsibilities: [
            'Opracowanie modułów testowych, scenariuszy i przypadków testowych',
            'Wykonanie testów funkcjonalnych, modułowych oraz systemowych dla urządzeń Smart Home',
            'Analiza wymagań oraz przygotowanie planów walidacji zgodnie ze specyfikacją',
            'Wykonanie testów funkcjonalnych, modułowych oraz systemowych dla napędów pilotów, aplikacji SmartHome',
            'Prowadzenie spotkań z zespołem projektowym, udział w przeglądach',
            'Określenie i opracowanie planów walidacji zgodnie ze specyfikacją i standardami, analiza wymagań'
          ],
        },
        {
          period: '2023-04 - 2025-04',
          role: 'Junior Software Validation Engineer - Somfy Poland',
          responsibilities: [],
        },
        {
          period: '2022-07 - 2023-04',
          role: 'Stażysta w dziale walidacji oprogramowania - Somfy Poland',
          responsibilities: [],
        },
      ],
    },
    education: {
      eyebrow: 'Background',
      title: 'Edukacja',
      description:
        'Moja sciezka edukacyjna laczy solidne podstawy techniczne z rozwojem w kierunku automatyki, robotyki i inzynierii.',
      labels: {
        degree: 'Stopień',
        institution: 'Instytucja',
        period: 'Okres',
      },
      items: [
        {
          title: 'Technikum',
          image: 'zsl',
          imageAlt: 'Logo Zespołu Szkół Łączności',
          entries: [
            {
              period: '2015-09 - 2019-05',
              degree: 'Technik elektronik',
              institution: 'Zespół Szkół Łączności im. Obrońców Poczty Polskiej, Kraków',
            },
          ],
        },
        {
          title: 'Studia inzynierskie',
          image: 'politechnika',
          imageAlt: 'Logo politechniki',
          entries: [
            {
              period: '2019-05 - 2023-02',
              degree: 'Automatyka i Robotyka, Inżynier',
              institution: 'Politechnika Krakowska im. Tadeusza Kościuszki, Kraków',
            },
          ],
        },
        {
          title: 'Studia magisterskie',
          image: 'politechnika',
          imageAlt: 'Logo politechniki',
          entries: [
            {
              period: '2023-02 - 2024-09',
              degree: 'Automatyka i Robotyka, Magister Inżynier',
              institution: 'Politechnika Krakowska im. Tadeusza Kościuszki, Kraków',
            },
          ],
        },
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Umiejętności',
      categories: [
        {
          title: 'Jakość',
          items: ['ISTQB 4.0', 'Manual testing', 'Software validation', 'Functional testing', 'API testing', 'Jira'],
        },
        {
          title: 'Programowanie',
          items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'React', 'HTML / CSS', 'Tailwind CSS'],
        },
        {
          title: 'AI',
          items: ['Prompt engineering', 'LLM workflows', 'Agentic approach', 'AI-assisted automation'],
        },
        {
          title: 'Smart Home i Hardware',
          items: ['Smart Home', 'KNX / ETS 6', 'Embedded systems basics', 'Hardware validation'],
        },
      ],
    },
    projects: {
      eyebrow: 'Praca',
      title: 'Projekty',
      backLabel: 'Wróć do projektów',
      previousLabel: 'Poprzednie projekty',
      nextLabel: 'Następne projekty',
      notFoundTitle: 'Projekt nie został znaleziony',
      notFoundText: 'Wróć do listy projektów i wybierz jedną z dostępnych pozycji.',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Kontakt',
      heading: 'Masz pytanie albo propozycję współpracy?',
      text: 'Najłatwiej złapać mnie przez LinkedIn albo GitHub. Chętnie porozmawiam o walidacji oprogramowania, testach, projektach frontendowych i rozwoju w kierunku tworzenia aplikacji.',
      emailNote: 'jakub.pawelek99@gmail.com',
      links: {
        github: {
          label: 'GitHub',
          description: 'Zobacz moje projekty i aktywność w kodzie.',
        },
        linkedin: {
          label: 'LinkedIn',
          description: 'Napisz do mnie lub sprawdź mój profil zawodowy.',
        },
      },
    },
    footer: {
      copyright: '© 2026 Jakub Pawełek',
      stack: 'React + Tailwind CSS',
    },
  },
  en: {
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Education', href: '#education' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      prefix: 'Hello, I am',
      highlight: 'Jakub!',
      headline: 'I code, test, train. I create technology with passion.',
      description:
        'Programming, electronics, and intelligent Smart Home solutions fascinate me. I constantly follow AI trends, and when I step away from the screen, I recharge through movement. Dive deeper to discover my projects, technology experiments, and sports passions.',
      cta: 'Contact me',
      projectsCta: 'Check my projects!',
      imageAlt: 'Illustration of Jakub Pawełek with a laptop',
      sidePanels: [
        {
          side: 'left',
          title: 'Sport & Lifestyle',
          items: [
            { icon: '🏃', label: 'Running' },
            { icon: '🥋', label: 'Jiu-Jitsu' },
            { icon: '📜', label: 'History' },
          ],
        },
        {
          side: 'right',
          title: 'Tech',
          items: [
            { icon: '💻', label: 'Programming' },
            { icon: '🔌', label: 'Electronics' },
            { icon: '🏠', label: 'Smart Home' },
          ],
        },
      ],
    },
    about: {
      eyebrow: 'Profile',
      title: 'About Me',
      cardTitle: 'A few words about me',
      imageAlt: 'Portrait of Jakub Pawełek',
      text: `I am a Software Validation Engineer with over two years of experience in functional testing and system validation. I have worked on verifying Smart Home systems for home automation, which helped me build practical knowledge of software quality, product life cycles, and development processes.

I am currently growing toward software development by building my own projects and deepening my knowledge of design, implementation, and good programming practices.`,
    },
    experience: {
      title: 'Experience',
      columns: {
        period: 'Period',
        role: 'Role',
      },
      rows: [
        {
          period: '2025-04 - present',
          role: 'Software Validation Engineer - Somfy Poland',
          responsibilities: [
            'Preparing test modules, scenarios, and test cases',
            'Performing functional, module, and system tests for Smart Home devices',
            'Analyzing requirements and preparing validation plans according to specifications',
            'Performing functional, module, and system tests for drives, remote controls, and Smart Home applications',
            'Facilitating meetings with the project team and participating in reviews',
            'Defining and preparing validation plans according to specifications, standards, and requirements analysis',
          ],
        },
        {
          period: '2023-04 - 2025-04',
          role: 'Junior Software Validation Engineer - Somfy Poland',
          responsibilities: [],
        },
        {
          period: '2022-07 - 2023-04',
          role: 'Software Validation Intern - Somfy Poland',
          responsibilities: [],
        },
      ],
    },
    education: {
      eyebrow: 'Background',
      title: 'Education',
      description:
        'My education path combines technical foundations with growth toward automation, robotics, and engineering practice.',
      labels: {
        degree: 'Degree',
        institution: 'Institution',
        period: 'Period',
      },
      items: [
        {
          title: 'Technical School',
          image: 'zsl',
          imageAlt: 'Zespol Szkol Lacznosci logo',
          entries: [
            {
              period: '2015-09 - 2019-05',
              degree: 'Electronics Technician',
              institution: 'Zespol Szkol Lacznosci im. Obroncow Poczty Polskiej, Krakow',
            },
          ],
        },
        {
          title: 'Engineering Studies',
          image: 'politechnika',
          imageAlt: 'Polytechnic logo',
          entries: [
            {
              period: '2019-05 - 2023-02',
              degree: 'Automation and Robotics, Engineer',
              institution: 'Tadeusz Kosciuszko Cracow University of Technology, Krakow',
            },
          ],
        },
        {
          title: 'Master Studies',
          image: 'politechnika',
          imageAlt: 'Polytechnic logo',
          entries: [
            {
              period: '2023-02 - 2024-09',
              degree: 'Automation and Robotics, Master of Engineering',
              institution: 'Tadeusz Kosciuszko Cracow University of Technology, Krakow',
            },
          ],
        },
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Skills',
      categories: [
        {
          title: 'Quality',
          items: ['ISTQB 4.0', 'Manual testing', 'Software validation', 'Functional testing', 'API testing', 'Jira'],
        },
        {
          title: 'Programming',
          items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'React', 'HTML / CSS', 'Tailwind CSS'],
        },
        {
          title: 'AI',
          items: ['Prompt engineering', 'LLM workflows', 'Agentic approach', 'AI-assisted automation'],
        },
        {
          title: 'Smart Home & Hardware',
          items: ['Smart Home', 'KNX / ETS 6', 'Embedded systems basics', 'Hardware validation'],
        },
      ],
    },
    projects: {
      eyebrow: 'Work',
      title: 'Projects',
      backLabel: 'Back to projects',
      previousLabel: 'Previous projects',
      nextLabel: 'Next projects',
      notFoundTitle: 'Project not found',
      notFoundText: 'Go back to the project list and choose one of the available items.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contact',
      heading: 'Have a question or a collaboration idea?',
      text: 'The easiest way to reach me is through LinkedIn or GitHub. I am happy to talk about software validation, testing, frontend projects, and growing toward application development.',
      emailNote: 'jakub.pawelek99@gmail.com',
      links: {
        github: {
          label: 'GitHub',
          description: 'See my projects and coding activity.',
        },
        linkedin: {
          label: 'LinkedIn',
          description: 'Message me or check my professional profile.',
        },
      },
    },
    footer: {
      copyright: '© 2026 Jakub Pawełek',
      stack: 'React + Tailwind CSS',
    },
  },
}
