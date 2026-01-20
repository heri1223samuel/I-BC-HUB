export const CATEGORY_GROUPS: Record<
  string,
  {
    color: string;
    categories: string[];
  }
> = {
  "Actualités générales": {
    color: "#1976D2",
    categories: [
      "Politique",
      "Économie",
      "Société",
      "International",
      "Sécurité",
      "Justice",
      "Diplomatie",
    ],
  },

  "Environnement & urgences": {
    color: "#388E3C",
    categories: [
      "Météo",
      "Catastrophes naturelles",
      "Environnement",
      "Climat",
      "Santé publique",
      "Urgent",
    ],
  },

  Sport: {
    color: "#FBC02D",
    categories: [
      "Football",
      "Basketball",
      "Autres sports",
      "Compétitions internationales",
      "Sport local",
    ],
  },

  "Culture & loisirs": {
    color: "#7B1FA2",
    categories: [
      "Culture",
      "Musique",
      "Cinéma",
      "Arts",
      "Littérature",
      "Festivals",
      "Patrimoine",
    ],
  },

  "Éducation & emploi": {
    color: "#0288D1",
    categories: ["Éducation", "Universités", "Formation", "Emploi", "Jeunesse"],
  },

  "Technologie & innovation": {
    color: "#0097A7",
    categories: [
      "Technologie",
      "Numérique",
      "Innovation",
      "Startups",
      "Télécommunications",
    ],
  },

  Santé: {
    color: "#E64A19",
    categories: ["Santé", "Médecine", "Prévention", "Bien-être"],
  },

  "Économie locale & développement": {
    color: "#8E24AA",
    categories: [
      "Agriculture",
      "Élevage",
      "Pêche",
      "Industrie",
      "Infrastructures",
      "Transport",
    ],
  },

  "Vie citoyenne": {
    color: "#455A64",
    categories: [
      "Communautés locales",
      "Vie associative",
      "ONG",
      "Droits humains",
      "Égalité",
      "Inclusion sociale",
    ],
  },

  "Insolite & divertissement": {
    color: "#F57C00",
    categories: ["Insolite", "Faits divers", "Buzz", "People"],
  },

  "Spécifique Madagascar": {
    color: "#6A1B9A",
    categories: [
      "Régions",
      "Collectivités locales",
      "Développement rural",
      "Culture traditionnelle",
    ],
  },
};
