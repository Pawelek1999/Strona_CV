import weatherMap from '../../assets/images/projects/Weather_app/Weather.jpg'
import weatherCards from '../../assets/images/projects/Weather_app/Weather_2.jpg'

const weatherApp = {
  slug: 'weather-app',
  status: null,
  image: weatherMap,
  imageFit: 'contain',
  gallery: [weatherMap, weatherCards],
  tags: ['React 19', 'Vite', 'Tailwind CSS 4', 'IMGW-PIB API', 'SPA', 'ESLint'],
  links: {
    github: 'https://github.com/Pawelek1999/WeatherApp',
  },
  content: {
    pl: {
      title: 'Pogoda - Weather App',
      shortDescription:
        'Responsywna aplikacja pogodowa SPA w React 19 i Tailwind CSS 4, pobierajaca aktualne dane z publicznego API IMGW-PIB.',
      description:
        'Pogoda - Weather App to aplikacja SPA wyswietlajaca aktualne dane pogodowe ze stacji meteorologicznych w Polsce. Dane pobierane sa z publicznego API IMGW-PIB i obejmuja m.in. temperature, wilgotnosc, cisnienie, predkosc wiatru oraz opady. Aplikacja udostepnia wyszukiwarke i filtrowanie stacji w czasie rzeczywistym, automatycznie odswieza dane co 10 minut oraz obsluguje stany ladowania i bledow z mozliwoscia ponowienia zapytania. Interfejs zostal zaprojektowany responsywnie dla mobile, tabletow i desktopow, a dynamiczne emotikony reaguja na temperature, dzieki czemu dane sa czytelne juz przy szybkim skanowaniu widoku. Kod jest podzielony na reuzywalne komponenty, takie jak Header, SearchFilter, WeatherCard, WeatherGrid, LoadingSpinner, ErrorDisplay i StatusBar, a logika pobierania oraz cyklicznego odswiezania danych znajduje sie w customowym hooku useWeather.',
      alt: 'Aplikacja pogodowa z mapa stacji meteorologicznych w Polsce',
      galleryAlt: [
        'Mapa pogodowa z markerami temperatury i szczegolami stacji meteorologicznej',
        'Lista kart pogodowych z temperatura, wilgotnoscia, cisnieniem, wiatrem i opadami',
      ],
    },
    en: {
      title: 'Weather App',
      shortDescription:
        'A responsive React 19 and Tailwind CSS 4 weather SPA that displays live data from the public IMGW-PIB API.',
      description:
        'Weather App is a single page application that displays current weather data from meteorological stations across Poland. The data comes from the public IMGW-PIB API and includes temperature, humidity, pressure, wind speed, and precipitation. The app provides real-time station search and filtering, refreshes data automatically every 10 minutes, and handles loading and error states with a retry option. The interface is fully responsive across mobile, tablet, and desktop layouts, while dynamic emojis react to temperature ranges to make the information easier to scan. The codebase is split into reusable components such as Header, SearchFilter, WeatherCard, WeatherGrid, LoadingSpinner, ErrorDisplay, and StatusBar, with fetching and refresh logic encapsulated in a custom useWeather hook.',
      alt: 'Weather application with a map of meteorological stations in Poland',
      galleryAlt: [
        'Weather map with temperature markers and details for a selected station',
        'Weather cards showing temperature, humidity, pressure, wind, and precipitation',
      ],
    },
  },
}

export default weatherApp
