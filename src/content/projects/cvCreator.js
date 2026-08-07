import cvCreatorPreview from '../../assets/images/projects/CV_creator/CV-creator.png'
import cvCreatorSaves from '../../assets/images/projects/CV_creator/CV_saves.png'

const cvCreator = {
  slug: 'cv-creator',
  status: null,
  image: cvCreatorPreview,
  imageFit: 'contain',
  gallery: [cvCreatorPreview, cvCreatorSaves],
  tags: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'SQLite', 'PDF export'],
  links: {
    github: 'https://github.com/Pawelek1999/CV_creator',
  },
  content: {
    pl: {
      title: 'CV Creator',
      shortDescription:
        'Aplikacja do tworzenia dopasowanych CV z danych JSON, z podgladem na zywo, zapisem wersji i eksportem do PDF.',
      description:
        'CV Creator powstal jako praktyczne narzedzie do szybkiego przygotowywania CV pod konkretne ogloszenia. Aplikacja pozwala wkleic lub edytowac dane w formacie JSON, od razu zobaczyc gotowy dokument w dwukolumnowym szablonie A4, zapisac kilka wersji CV w backendzie oraz pobrac finalny plik PDF. Projekt laczy frontend w React i TypeScript z backendem FastAPI, baza SQLite oraz warstwa persystencji oparta o SQLAlchemy i Alembic. Najwazniejszym wyzwaniem bylo utrzymanie czytelnego ukladu jednej strony A4, obsluga wielu wersji dokumentu oraz przygotowanie workflow, w ktorym dane wygenerowane z pomoca AI mozna szybko zamienic w profesjonalny dokument.',
      alt: 'Widok aplikacji CV Creator z edytorem JSON i podgladem CV',
      galleryAlt: [
        'Edytor JSON i podglad dokumentu CV w aplikacji CV Creator',
        'Lista zapisanych wersji CV w aplikacji CV Creator',
      ],
    },
    en: {
      title: 'CV Creator',
      shortDescription:
        'A CV builder that turns JSON data into a polished resume with live preview, saved versions, and PDF export.',
      description:
        'CV Creator was built as a practical tool for preparing tailored resumes for specific job postings. The app lets the user paste or edit JSON data, instantly preview the finished A4 document in a two-column layout, save multiple CV versions through the backend, and export the final result to PDF. The project combines a React and TypeScript frontend with a FastAPI backend, SQLite database, and persistence layer based on SQLAlchemy and Alembic. The main challenge was keeping the CV readable on a single A4 page, supporting multiple document versions, and creating a workflow where AI-generated data can quickly become a professional resume.',
      alt: 'CV Creator app screen with JSON editor and CV preview',
      galleryAlt: ['JSON editor and CV preview in CV Creator', 'Saved CV versions list in CV Creator'],
    },
  },
}

export default cvCreator
