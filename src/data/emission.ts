type EmissionTYpes = {
  id?: number;
  title: string;
  category: string;
  time: string;
  description: string;
  image: string;
  host: string;
};
export const emissions: EmissionTYpes[] = [
  {
    id: 1,
    title: "Maga Gawa",
    category: "Divertissement",
    time: "19h00 - 20h00",
    description:
      "Chaque semaine, notre émission manga explore les univers fascinants des auteurs et des anime cultes. ",
    image: "manga",
    host: "Jean Rakoto",
  },
  {
    id: 2,
    title: "Tsara Kaly",
    category: "Cuisine",
    time: "09h30 - 10h00",
    description:
      "Découvrez la richesse de la culture et des traditions culinaires malgaches.",
    image: "tsara_kaly",
    host: "Marie Razafy",
  },
  {
    id: 3,
    title: "I-Vazo",
    category: "Musique",
    time: "20h30 - 21h00",
    description: "Commencez votre journée avec énergie et bonne humeur !",
    image: "i_vazo",
    host: "Sophie & David",
  },
  {
    id: 4,
    title: "Kapotandroka",
    category: "Politique",
    time: "10h30 - 11h30",
    description:
      "Chaque semaine, notre émission politique décrypte les débats majeurs avec interviews et analyses d’experts.",
    image: "kapotandroka",
    host: "Paul Andry",
  },
  {
    id: 5,
    title: "Grain de Pollen",
    category: "Jardinage",
    time: "19h00 - 20h00",
    description:
      "Chaque semaine, notre émission de jardinage vous offre conseils et astuces pour cultiver un jardin florissant et harmonieux.",
    image: "grain_de_polen",
    host: "Hery Rasolofo",
  },
  {
    id: 6,
    title: "Journale d'une maman",
    category: "Magazine",
    time: "17h00 - 18h00",
    description:
      "Journal d’une maman raconte avec tendresse et sincérité les petits bonheurs et grands défis de la vie familiale.",
    image: "journal_dune_manman",
    host: "Nadia & Lanto",
  },
];

function getFourEmissionRandom(emission: EmissionTYpes[]): EmissionTYpes[] {
  if (emission.length <= 4) return emission;
  const result: EmissionTYpes[] = [];
  const indices = new Set<number>();

  while (result.length < 4) {
    const randomIndex = Math.floor(Math.random() * emission.length);
    if (!indices.has(randomIndex)) {
      indices.add(randomIndex);
      result.push(emission[randomIndex]);
    }
  }
  return result;
}

export const randomEmission = getFourEmissionRandom(emissions);
