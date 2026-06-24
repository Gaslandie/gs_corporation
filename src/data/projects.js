// Réalisations (projets) de GS Corporation.
// Données fictives mais réalistes, liées aux départements existants.
// Le département est référencé depuis src/data/departments.js (source unique).

import departments from "@/data/departments";

const bySlug = Object.fromEntries(departments.map((d) => [d.slug, d]));

const projects = [
  {
    id: 1,
    title: "Formation professionnelle organisée par GS Consulting",
    slug: "formation-professionnelle-gs-consulting",
    department: bySlug["gs-consulting"],
    category: "Formation",
    description:
      "Programme de formation destiné à renforcer les compétences professionnelles d’une équipe d’entreprise.",
    location: "Conakry",
    year: "2024",
    icon: "bi-mortarboard",
    href: "#",
  },
  {
    id: 2,
    title: "Accompagnement en stratégie marketing et communication",
    slug: "strategie-marketing-communication",
    department: bySlug["gs-consulting"],
    category: "Consulting",
    description:
      "Élaboration d’une stratégie marketing et d’un plan de communication pour une PME locale.",
    location: "Conakry",
    year: "2024",
    icon: "bi-megaphone",
    href: "#",
  },
  {
    id: 3,
    title: "Projet de construction et rénovation immobilière",
    slug: "construction-renovation-immobiliere",
    department: bySlug["gs-immobilier"],
    category: "Immobilier",
    description:
      "Construction et rénovation d’un bâtiment résidentiel répondant à des normes de qualité élevées.",
    location: "Ratoma, Conakry",
    year: "2023",
    icon: "bi-building",
    href: "#",
  },
  {
    id: 4,
    title: "Mise à disposition d’engins pour travaux de terrassement",
    slug: "engins-travaux-terrassement",
    department: bySlug["gs-logistique"],
    category: "Logistique",
    description:
      "Mise à disposition d’engins lourds pour des travaux de terrassement sur un chantier BTP.",
    location: "Boké",
    year: "2023",
    icon: "bi-truck",
    href: "#",
  },
  {
    id: 5,
    title: "Projet agricole avec accompagnement technique",
    slug: "projet-agricole-accompagnement-technique",
    department: bySlug["gs-agrobusiness"],
    category: "Agrobusiness",
    description:
      "Accompagnement technique d’un projet agricole, de la planification à la mise en œuvre.",
    location: "Kindia",
    year: "2024",
    icon: "bi-tree",
    href: "#",
  },
  {
    id: 6,
    title: "Forage de puits d’eau communautaire",
    slug: "forage-puits-eau-communautaire",
    department: bySlug["les-foreurs-de-guinee"],
    category: "Forage",
    description:
      "Réalisation d’un forage de puits d’eau pour améliorer l’accès à l’eau potable d’une communauté.",
    location: "Kankan",
    year: "2023",
    icon: "bi-droplet",
    href: "#",
  },
];

export default projects;
