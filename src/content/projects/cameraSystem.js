import camerasPreview from '../../assets/images/projects/Cameras/Cameras.jpg'

const cameraSystem = {
  slug: 'camera-system',
  status: null,
  image: camerasPreview,
  imageFit: 'contain',
  gallery: [camerasPreview],
  tags: ['Reolink', 'PoE', 'NVR', 'HDD', 'Monitoring', 'Network'],
  content: {
    pl: {
      title: 'Camera System',
      shortDescription:
        'Domowy system monitoringu oparty o kamery Reolink, z zasilaniem PoE, rejestratorem NVR i zapisem na dysk HDD.',
      description:
        'Camera System to praktyczny projekt infrastrukturalny obejmujacy zaplanowanie, montaz i konfiguracje lokalnego systemu monitoringu. Instalacja sklada sie z czterech kamer Reolink, w tym jednej kamery obrotowej, zasilanych przez PoE, dzieki czemu transmisja danych i zasilanie ida jednym przewodem sieciowym. Obraz trafia do rejestratora NVR z dedykowanym dyskiem HDD, co pozwala na ciagly zapis nagran, szybki podglad zdarzen i prace systemu bez polegania wylacznie na chmurze. Projekt obejmowal dobranie miejsc montazu, ustawienie kadrow kamer, konfiguracje urzadzen w sieci lokalnej, podglad przez aplikacje mobilna oraz przygotowanie rozwiazania tak, aby bylo stabilne, proste w obsludze i gotowe do dalszej rozbudowy.',
      alt: 'Podglad kamer Reolink w aplikacji mobilnej',
      galleryAlt: ['Widok kamer Reolink w aplikacji mobilnej z podgladem lokalnych urzadzen'],
    },
    en: {
      title: 'Camera System',
      shortDescription:
        'A home monitoring setup based on Reolink cameras, PoE power, an NVR recorder, and HDD video storage.',
      description:
        'Camera System is a practical infrastructure project focused on planning, installing, and configuring a local monitoring setup. The installation uses four Reolink cameras, including one pan-tilt camera, powered through PoE so data and power are delivered through a single network cable. Video is recorded by an NVR with a dedicated HDD, enabling continuous recording, quick event review, and operation without relying only on cloud storage. The project included choosing camera locations, adjusting viewing angles, configuring the devices in the local network, enabling mobile app preview, and preparing a stable, easy-to-use system that can be expanded later.',
      alt: 'Reolink camera preview in a mobile app',
      galleryAlt: ['Reolink camera preview in a mobile app with local devices visible'],
    },
  },
}

export default cameraSystem
