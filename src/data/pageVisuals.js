import { photos } from "@/data/media";

// Images et intitulés des accès visuels, centralisés par page.
export const propertyTopics = [
  { title: "Acheter ou louer", image: photos.building },
  { title: "Construire ou rénover", image: photos.construction },
  { title: "Gérer ou valoriser un bien", image: photos.plans },
];

export const equipmentTopics = [
  { title: "Terrassement", image: photos.earthworks },
  { title: "Levage et manutention", image: photos.loader },
  { title: "Transport et livraison", image: photos.miningTruck },
  { title: "Travaux BTP et industriels", image: photos.construction },
];

export const projectTopics = [
  { title: "Consulting et formation", image: photos.training, href: "/consulting", linkLabel: "Découvrir le consulting" },
  { title: "Logistique et équipements", image: photos.fleet, href: "/logistique", linkLabel: "Découvrir la logistique" },
  { title: "Immobilier et construction", image: photos.building, href: "/immobilier", linkLabel: "Découvrir l’immobilier" },
  { title: "Agrobusiness et forage", image: photos.greenhouse, href: "/departements", linkLabel: "Explorer nos métiers" },
];
