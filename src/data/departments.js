// Départements (sociétés) du groupe GS Corporation.
// Chaque département référence une classe de thème définie dans globals.css
// (theme-consulting, theme-logistique, etc.) pour centraliser les couleurs.

const departments = [
  {
    name: "GS Consulting",
    slug: "gs-consulting",
    description:
      "Conseil stratégique, accompagnement et expertise pour les entreprises et institutions.",
    theme: "theme-consulting",
    icon: "bi-graph-up-arrow",
    href: "/departements/gs-consulting",
  },
  {
    name: "GS Logistique",
    slug: "gs-logistique",
    description:
      "Transport, approvisionnement et solutions logistiques fiables sur tout le territoire.",
    theme: "theme-logistique",
    icon: "bi-truck",
    href: "/departements/gs-logistique",
  },
  {
    name: "GS Immobilier",
    slug: "gs-immobilier",
    description:
      "Construction, gestion et valorisation de biens immobiliers de qualité.",
    theme: "theme-immobilier",
    icon: "bi-buildings",
    href: "/departements/gs-immobilier",
  },
  {
    name: "GS Agrobusiness",
    slug: "gs-agrobusiness",
    description:
      "Agriculture moderne, production et valorisation des ressources agricoles.",
    theme: "theme-agrobusiness",
    icon: "bi-tree",
    href: "/departements/gs-agrobusiness",
  },
  {
    name: "Les Foreurs de Guinée",
    slug: "les-foreurs-de-guinee",
    description:
      "Forage, hydraulique et travaux spécialisés au service des communautés.",
    theme: "theme-foreurs",
    icon: "bi-cone-striped",
    href: "/departements/les-foreurs-de-guinee",
  },
];

export default departments;
