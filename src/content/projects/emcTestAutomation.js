import sensitivityTest from '../../assets/images/projects/Sensitivity_Test/Sensitivity_Test.png'

const emcTestAutomation = {
  slug: 'emc-test-automation-somfy',
  status: null,
  image: sensitivityTest,
  imageFit: 'contain',
  gallery: [sensitivityTest],
  tags: ['Python', 'FastAPI', 'pytest', 'React', 'Vitest', 'Docusaurus'],
  content: {
    pl: {
      title: 'Automatyzacja testów EMC',
      shortDescription:
        'Automatyzacja czasochlonnego testu EMC weryfikujacego odbior sygnalu radiowego przez silnik, integrujaca warstwe software z rzeczywistym sprzetem pomiarowym.',
      description:
        'Projekt automatyzuje recznie wykonywany dotad test EMC, ktory weryfikuje odbior sygnalu radiowego przez silnik od anteny (pilot do silnika) w roznych warunkach i pozycjach. System steruje sprzetem pomiarowym i testowanym — generatorem sygnalu Rohde & Schwarz SMB100A, zasilaczem Chroma, pilotem do silnika, silnikiem z enkoderem oraz dodatkowymi czujnikami zintegrowanymi na kartach analogowo-cyfrowych National Instruments — a takze pozycja anten, mierzac moc odbioru sygnalu w kolejnych ustawionych polozeniach. Kluczowym elementem bylo zaprojektowanie algorytmu automatycznego wykrywania zatrzymania silnika odpornego na warunki brzegowe, rozrozniajacego zatrzymanie w limicie krancowym od zatrzymania wywolanego sygnalem stop z generatora, przy jednoczesnym zachowaniu dokladnosci pomiarowej mimo wahan odczytu pozycji enkodera i krytycznych zaleznosci czasowych integracji software-hardware. Backend napisany w Pythonie z uzyciem FastAPI, testowany przez pytest; frontend w React, testowany w Vitest; dokumentacja projektu prowadzona w Docusaurusie. Efektem jest skrocenie czasu wykonania testu z ok. 4 godzin do 30 minut, przy czym test przebiega w pelni automatycznie i nie wymaga obecnosci pracownika przy stanowisku — realna oszczednosc czasu pracy zespolu EMC.',
      alt: 'Komora bezechowa ze stanowiskiem pomiarowym EMC i anteną pomiarową',
      galleryAlt: ['Stanowisko pomiarowe EMC w komorze bezechowej z anteną i osłonami absorpcyjnymi'],
    },
    en: {
      title: 'EMC Test Automation',
      shortDescription:
        'Automating a time-consuming EMC test that verifies radio signal reception by a motor, integrating the software layer with real measurement hardware.',
      description:
        'The project automates a previously manual EMC test that verifies radio signal reception by a motor from an antenna (motor remote control) under various conditions and positions. The system controls both the measurement and tested equipment — a Rohde & Schwarz SMB100A signal generator, a Chroma power supply, the motor remote control, a motor with an encoder, and additional sensors integrated on National Instruments analog-digital cards — as well as antenna positioning, measuring signal reception power at each configured position. A key part of the project was designing an automatic motor-stop detection algorithm robust to edge conditions, able to distinguish a stop caused by hitting an end limit from one triggered by the generator stop signal, while preserving measurement accuracy despite encoder position reading fluctuations and critical software-hardware timing dependencies. The backend is written in Python with FastAPI and tested with pytest; the frontend is built in React and tested with Vitest; project documentation is maintained in Docusaurus. The result is a reduction in test execution time from around 4 hours to 30 minutes, with the test running fully automatically and requiring no operator presence at the station — a real time saving for the EMC team.',
      alt: 'Anechoic chamber with an EMC measurement setup and antenna',
      galleryAlt: ['EMC measurement setup in an anechoic chamber with antenna and absorber panels'],
    },
  },
}

export default emcTestAutomation
