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
      cardTitle: 'Od walidacji do własnych aplikacji',
      imageAlt: 'Portret Jakuba Pawełka',
      text: `Jestem Inżynierem ds. Walidacji Oprogramowania z ponad trzyletnim doświadczeniem w testowaniu funkcjonalnym i walidacji systemów Smart Home w Somfy Group. Odpowiadam za opracowywanie modułów testowych, scenariuszy i przypadków testowych dla napędów, pilotów i aplikacji SmartHome, a także za określanie planów walidacji zgodnych ze specyfikacją — co przekłada się na wyższą jakość produktu wykrywaną jeszcze przed wdrożeniem. Ściśle współpracuję z laboratorium mechanicznym, działem testów EMC oraz zespołami deweloperskimi, prowadząc spotkania projektowe i przeglądy, co pozwoliło mi dogłębnie poznać cykl życia produktu i procesy deweloperskie.

Aktywnie optymalizuję procesy testowe poprzez automatyzację, zaprojektowałem i wdrożyłem rozwiązanie automatyzujące test EMC (integracja software-hardware w Python/FastAPI + React), skracając czas jego wykonania z ok. 4 godzin do 30 minut, bez konieczności stałej obecności pracownika przy stanowisku. Wdrażam też rozwiązania oparte na AI usprawniające codzienną pracę zespołu.

Równolegle rozwijam się w kierunku tworzenia oprogramowania, realizując własne projekty. Obecnie pracuję nad aplikacją mobilną dla instalatorów firmy fotowoltaicznej, która pozwoli monitorować czas pracy, tworzyć raporty z montażu oraz podpisywać protokół odbioru — cyfryzując proces dotychczas oparty na dokumentacji papierowej. Dzięki tym projektom pogłębiam wiedzę z zakresu projektowania systemów, dobrych praktyk programistycznych i pracy z nowoczesnym stosem technologicznym.

Prywatnie stawiam na aktywność fizyczną — trenuję brazylijskie Ju-Jitsu i obecnie przygotowuję się do maratonu.`,
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
            'Zaprojektowanie i wdrożenie modułów testowych oraz przypadków testowych, zwiększając pokrycie testowe napędów, pilotów i aplikacji SmartHome',
            'Wprowadzenie automatyzacji testów do działu EMC i walidacji, usprawniając dotychczasowe procesy testowe',
            'Wykonywanie testów funkcjonalnych i systemowych urządzeń embedded w środowisku Smart Home',
            'Opracowanie planów walidacji zgodnych ze specyfikacją i standardami, ograniczając liczbę błędów wykrywanych po wdrożeniu',
            'Prowadzenie spotkań projektowych i udział w przeglądach, wspierając współpracę między zespołem testowym a deweloperskim',
            'Realizacja zadań w ramach delegacji zagranicznych, reprezentując zespół walidacji w kontaktach międzynarodowych',
          ],
        },
        {
          period: '2023-04 - 2025-04',
          role: 'Junior Software Validation Engineer - Somfy Poland',
          responsibilities: [
            'Testowanie funkcjonalne i walidacja systemów Smart Home, zapewniając zgodność produktu ze specyfikacją przed wdrożeniem',
            'Współpraca z laboratorium mechanicznym oraz działem testów EMC przy weryfikacji urządzeń',
          ],
        },
        {
          period: '2022-07 - 2023-04',
          role: 'Stażysta w dziale walidacji oprogramowania - Somfy Poland',
          responsibilities: [
            'Wdrożenie się w procesy testowe i walidacyjne w środowisku korporacyjnym i międzynarodowym, zdobywając podstawy wiedzy o cyklu życia produktu',
          ],
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
          title: 'Jakość / Testowanie',
          items: ['ISTQB 4.0', 'Manualne testowanie', 'Testy API', 'Automatyzacja testów (Python, Pytest)', 'Jira', 'Polarion', 'Git / GitHub'],
        },
        {
          title: 'Programowanie – Backend',
          items: ['Python', 'FastAPI', 'Uvicorn', 'Pydantic', 'SQLAlchemy 2.0', 'Alembic', 'SQLite', 'REST API', 'Architektura warstwowa (router-service-repository)'],
        },
        {
          title: 'Programowanie – Frontend',
          items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'React Router', 'HTML / CSS'],
        },
        {
          title: 'AI / LLM / RAG',
          items: ['Prompt engineering', 'LLM workflows (lokalne i chmurowe modele)', 'Architektura RAG', 'Agentic approach', 'Claude Code / AI-assisted development'],
        },
        {
          title: 'DevOps / Dokumentacja',
          items: ['Linux', 'Docker / Docker Compose', 'GitHub Actions (CI/CD)', 'Docusaurus', 'Zarządzanie konfiguracją (ENV)'],
        },
        {
          title: 'Smart Home i Hardware',
          items: ['Protokół KNX', 'ETS6', 'Kwalifikacja SEP G1', 'Podstawy automatyki i elektroniki (embedded systems)', 'Podstawy instalacji elektrycznych'],
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
      cardTitle: 'From validation to building my own applications',
      imageAlt: 'Portrait of Jakub Pawełek',
      text: `I am a Software Validation Engineer with over three years of experience in functional testing and validation of Smart Home systems at Somfy Group. I am responsible for preparing test modules, scenarios, and test cases for drives, remote controls, and SmartHome applications, as well as defining validation plans aligned with specifications, which helps improve product quality before deployment. I work closely with the mechanical laboratory, EMC testing department, and development teams, leading project meetings and reviews, which has given me a deep understanding of the product life cycle and development processes.

I actively optimize testing processes through automation. I designed and implemented a solution that automates an EMC test, combining software and hardware integration in Python/FastAPI + React, reducing execution time from around 4 hours to 30 minutes without requiring constant employee presence at the test station. I also implement AI-based solutions that improve the team's daily work.

In parallel, I am growing toward software development by building my own projects. I am currently working on a mobile application for installers at a photovoltaic company, which will make it possible to monitor working time, create installation reports, and sign acceptance protocols, digitizing a process that has so far relied on paper documentation. Through these projects, I deepen my knowledge of system design, good programming practices, and working with a modern technology stack.

Privately, I focus on physical activity. I train Brazilian Jiu-Jitsu and am currently preparing for a marathon.`,
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
            'Designed and implemented test modules and test cases, increasing test coverage for drives, remote controls, and SmartHome applications',
            'Introduced test automation to the EMC and validation departments, improving existing testing processes',
            'Performed functional and system testing of embedded devices in a Smart Home environment',
            'Prepared validation plans aligned with specifications and standards, reducing the number of defects detected after deployment',
            'Led project meetings and participated in reviews, supporting cooperation between testing and development teams',
            'Carried out tasks during international business trips, representing the validation team in global cooperation',
          ],
        },
        {
          period: '2023-04 - 2025-04',
          role: 'Junior Software Validation Engineer - Somfy Poland',
          responsibilities: [
            'Performed functional testing and validation of Smart Home systems, ensuring product compliance with specifications before deployment',
            'Cooperated with the mechanical laboratory and EMC testing department during device verification',
          ],
        },
        {
          period: '2022-07 - 2023-04',
          role: 'Software Validation Intern - Somfy Poland',
          responsibilities: [
            'Learned testing and validation processes in a corporate and international environment, building foundational knowledge of the product life cycle',
          ],
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
          title: 'Quality / Testing',
          items: ['ISTQB 4.0', 'Manual testing', 'API testing', 'Test automation (Python, Pytest)', 'Jira', 'Polarion', 'Git / GitHub'],
        },
        {
          title: 'Programming – Backend',
          items: ['Python', 'FastAPI', 'Uvicorn', 'Pydantic', 'SQLAlchemy 2.0', 'Alembic', 'SQLite', 'REST API', 'Layered architecture (router-service-repository)'],
        },
        {
          title: 'Programming – Frontend',
          items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'React Router', 'HTML / CSS'],
        },
        {
          title: 'AI / LLM / RAG',
          items: ['Prompt engineering', 'LLM workflows (local & cloud models)', 'RAG architecture', 'Agentic approach', 'Claude Code / AI-assisted development'],
        },
        {
          title: 'DevOps / Documentation',
          items: ['Linux', 'Docker / Docker Compose', 'GitHub Actions (CI/CD)', 'Docusaurus', 'Configuration management (ENV)'],
        },
        {
          title: 'Smart Home & Hardware',
          items: ['KNX protocol', 'ETS6', 'SEP G1 qualification', 'Automation & electronics basics (embedded systems)', 'Basic electrical installations'],
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
