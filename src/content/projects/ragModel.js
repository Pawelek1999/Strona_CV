import ragDashboard from '../../assets/images/projects/RAG/dane RAG.png'

const ragModel = {
  slug: 'rag-model',
  status: null,
  image: ragDashboard,
  imageFit: 'contain',
  gallery: [ragDashboard],
  tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'LangChain', 'ChromaDB', 'Ollama', 'Docker'],
  links: {
    github: 'https://github.com/Pawelek1999/RAG_model',
  },
  content: {
    pl: {
      title: 'RAG Model',
      shortDescription:
        'Lokalna aplikacja RAG do zadawania pytan po wlasnych dokumentach, z FastAPI, Reactem, ChromaDB i lokalnym LLM przez Ollama.',
      description:
        'RAG Model to full-stackowa aplikacja do inteligentnego przeszukiwania dokumentow w jezyku naturalnym. System przyjmuje pliki DOCX, PDF, TXT, MD i XLSX, dzieli ich tresc na chunki, tworzy embeddingi i zapisuje je w ChromaDB. Uzytkownik moze potem zadawac pytania w panelu czatu, a odpowiedz generowana jest lokalnie przez Ollama na podstawie odnalezionych zrodel, bez wysylania danych do chmury. Projekt zawiera hybrydowy retrieval laczacy wyszukiwanie semantyczne i slowo-kluczowe, reranking wynikow oraz warstwe Fact Processing, ktora przygotowuje kontekst w trybach raw, structured lub hybrid. Szczegolnie waznym elementem jest obsluga dokumentow testowych i arkuszy Excel, gdzie aplikacja potrafi lepiej mapowac informacje o testach, krokach i powiazanych danych niz standardowe przeszukiwanie surowego tekstu.',
      alt: 'Panel aplikacji RAG z uploadem dokumentow, lista plikow i czatem',
      galleryAlt: ['Panel aplikacji RAG z dokumentami, statusem API i czatem do zadawania pytan'],
    },
    en: {
      title: 'RAG Model',
      shortDescription:
        'A local RAG application for asking questions over private documents, built with FastAPI, React, ChromaDB, and Ollama.',
      description:
        'RAG Model is a full-stack application for querying private documents with natural language. The system accepts DOCX, PDF, TXT, MD, and XLSX files, splits their content into chunks, creates embeddings, and stores them in ChromaDB. The user can then ask questions in a chat panel, while the answer is generated locally through Ollama using retrieved sources, without sending data to the cloud. The project includes hybrid retrieval that combines semantic and keyword search, result reranking, and a Fact Processing layer that prepares context in raw, structured, or hybrid modes. A key part of the project is support for test documentation and Excel sheets, where the app can map information about tests, steps, and related data more precisely than a standard raw-text RAG flow.',
      alt: 'RAG application panel with document upload, file list, and chat',
      galleryAlt: ['RAG application panel with documents, API status, and chat for asking questions'],
    },
  },
}

export default ragModel
