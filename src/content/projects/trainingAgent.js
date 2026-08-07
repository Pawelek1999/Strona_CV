import { projectVisuals } from './projectVisuals'

const trainingAgent = {
  slug: 'training-agent',
  status: 'comingSoon',
  image: null,
  visualClass: projectVisuals.trainingAgent,
  tags: ['AI', 'Automation', 'Training'],
  content: {
    pl: {
      title: 'Training Agent',
      shortDescription: 'Projekt w przygotowaniu. Szczegoly i finalna prezentacja pojawia sie wkrotce.',
      description:
        'Ta sekcja jest przygotowana jako miejsce na pelny opis projektu, zakres prac, wykorzystane technologie oraz najwazniejsze decyzje projektowe. Materialy zostana uzupelnione po dopracowaniu projektu.',
      alt: 'Abstrakcyjna grafika agenta treningowego',
    },
    en: {
      title: 'Training Agent',
      shortDescription: 'Project in progress. Details and the final presentation will appear soon.',
      description:
        'This section is prepared for a full project description, scope of work, technologies used, and key design decisions. Materials will be completed after the project is polished.',
      alt: 'Abstract graphic for a training agent project',
    },
  },
}

export default trainingAgent
