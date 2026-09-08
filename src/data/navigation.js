// Liens de navigation principaux du site.
// Centralisés ici pour la navbar et le footer.

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Départements", href: "/departements" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Biens immobiliers", href: "/biens-immobiliers" },
  { label: "Engins & véhicules", href: "/engins-vehicules" },
  { label: "Contact", href: "/contact" },
];

export default navigation;

// Les catalogues partagent une entrée pour garder la navigation lisible.
export const primaryNavigation = [
  navigation[0],
  { ...navigation[1], label: "Le groupe" },
  { ...navigation[2], id: "departments" },
  {
    id: "offers",
    label: "Nos offres",
    children: [navigation[4], navigation[5]],
  },
  navigation[3],
];
