import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      home: "Accueil",
      live: "En Direct",
      news: "Actualités",
      emissions: "Émissions",
      program: "Programme",
      about: "À Propos",
      watchNow: "Regarder Maintenant",
      listenNow: "Écouter Maintenant",
      welcome: "Bienvenue sur I-BC Madagascar",
      popularShows: "Émissions Populaires",
      viewers: "spectateurs",
      listeners: "auditeurs",
      onAir: "En Direct",
      currentlyOnAir: "Actuellement",
      upcoming: "Programmes à venir",
      share: "Partager",
      watch: "Regarder",
      listen: "Écouter",
    },
  },
  mg: {
    translation: {
      home: "Fandraisana",
      live: "Mivantana",
      news: "Vaovao",
      emissions: "Fandaharana",
      program: "Fandaharam-potoana",
      about: "Mombamay",
      watchNow: "Hijery Izao",
      listenNow: "Hihaino Izao",
      welcome: "Tonga soa eto amin'ny I-BC Madagascar",
      popularShows: "Fandaharana Malaza",
      viewers: "mpijery",
      listeners: "mpihaino",
      onAir: "Mivantana",
      currentlyOnAir: "Amin'izao fotoana izao",
      upcoming: "Fandaharana ho avy",
      share: "Zarao",
      watch: "Hijery",
      listen: "Hihaino",
    },
  },
  en: {
    translation: {
      home: "Home",
      live: "Live",
      news: "News",
      emissions: "Shows",
      program: "Schedule",
      about: "About",
      watchNow: "Watch Now",
      listenNow: "Listen Now",
      welcome: "Welcome to I-BC Madagascar",
      popularShows: "Popular Shows",
      viewers: "viewers",
      listeners: "listeners",
      onAir: "On Air",
      currentlyOnAir: "Currently On Air",
      upcoming: "Upcoming Programs",
      share: "Share",
      watch: "Watch",
      listen: "Listen",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
