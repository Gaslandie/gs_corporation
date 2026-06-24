// Départements (sociétés) du groupe GS Corporation.
// Chaque département référence une classe de thème définie dans globals.css
// (theme-consulting, theme-logistique, etc.) pour centraliser les couleurs.
// Descriptions fidèles au document client D1.

const departments = [
  {
    name: "GS Consulting",
    slug: "gs-consulting",
    description:
      "Formation, consulting, coaching et gestion de carrière professionnelle.",
    theme: "theme-consulting",
    icon: "bi-graph-up-arrow",
    href: "/consulting",
  },
  {
    name: "GS Logistique",
    slug: "gs-logistique",
    description:
      "Gestion de stock, location d’engins roulants et solutions logistiques adaptées.",
    theme: "theme-logistique",
    icon: "bi-truck",
    href: "/logistique",
  },
  {
    name: "GS Immobilier",
    slug: "gs-immobilier",
    description:
      "Location et vente de bâtiments, construction, rénovation, conseil et gestion immobilière.",
    theme: "theme-immobilier",
    icon: "bi-buildings",
    href: "/immobilier",
  },
  {
    name: "GS Agrobusiness",
    slug: "gs-agrobusiness",
    description:
      "Transformation agricole, semences, intrants agricoles, machines et techniques agricoles.",
    theme: "theme-agrobusiness",
    icon: "bi-tree",
    href: "/agrobusiness",
  },
  {
    name: "Les Foreurs de Guinée",
    slug: "les-foreurs-de-guinee",
    description:
      "Forage de puits d’eau, construction de margelles et accès fiable à l’eau.",
    theme: "theme-foreurs",
    icon: "bi-cone-striped",
    href: "/foreurs-guinee",
  },
];

export default departments;
