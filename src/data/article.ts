// const { media } = useThemeContext();

type Article = {
  id?: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  author: string;
  urgent?: boolean;
};

const allNews: Article[] = [
  {
    id: 1,
    title: "Le Président annonce de nouvelles mesures économiques pour 2026",
    description:
      "Dans un discours officiel prononcé ce matin, le Chef de l'État a dévoilé un plan ambitieux pour relancer l'économie malgache et créer plus d'emplois pour les jeunes.",
    image: "econom",
    category: "Politique",
    date: "7 Janvier 2026",
    author: "Jean Rakoto",
    urgent: true,
  },
  {
    id: 2,
    title:
      "Alerte cyclonique : Des milliers de personnes évacuées sur la côte est",
    description:
      "Le cyclone tropical approche de Madagascar. Les autorités ont mis en place un plan d'évacuation massif pour protéger les populations côtières.",
    image: "cyc",
    category: "Météo",
    date: "7 Janvier 2026",
    author: "Marie Razafy",
    urgent: true,
  },
  {
    id: 3,
    title: "L'équipe nationale Nigerien se qualifie pour la finale de la CAN",
    description:
      "Victoire historique hier soir ! Les Aigles nigeriens ont battu leurs adversaires 2-1 et se qualifient pour la grande finale.",
    image: "nigeria",
    category: "Sport",
    date: "6 Janvier 2026",
    author: "Paul Andry",
    urgent: false,
  },
  {
    id: 4,
    title: "Nouveau partenariat pour développer le tourisme à Madagascar",
    description:
      "Un accord majeur a été signé entre le gouvernement et plusieurs investisseurs internationaux pour promouvoir le tourisme durable et créer des milliers d'emplois.",
    image: "tourisme",
    category: "Économie",
    date: "6 Janvier 2026",
    author: "Sophie David",
    urgent: false,
  },
  {
    id: 5,
    title: "Lancement d'un programme d'éducation numérique dans les écoles",
    description:
      "Le ministère de l'Éducation annonce le déploiement de tablettes et de connexions internet dans 500 écoles rurales pour réduire la fracture numérique.",
    image: "education",
    category: "Éducation",
    date: "5 Janvier 2026",
    author: "Hery Rasolofo",
    urgent: false,
  },
  {
    id: 6,
    title:
      "Festival de la culture malgache : Plus de 50 000 visiteurs attendus",
    description:
      "Le plus grand festival culturel de l'année démarre ce weekend à Antananarivo avec des concerts, expositions et spectacles traditionnels.",
    image: "culture",
    category: "Culture",
    date: "5 Janvier 2026",
    author: "Nadia Lanto",
    urgent: false,
  },
];

function getThreeArtcicleRandom(articles: Article[]): Article[] {
  if (articles.length <= 3) {
    return articles;
  }

  const result: Article[] = [];
  const indices = new Set<number>();

  while (result.length < 3) {
    const randomIndex = Math.floor(Math.random() * articles.length);
    if (!indices.has(randomIndex)) {
      indices.add(randomIndex);
      result.push(articles[randomIndex]);
    }
  }

  return result;
}

export const randomArticles = getThreeArtcicleRandom(allNews);
