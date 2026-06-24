// Contenu spécifique à la page Contact (les coordonnées de base — adresse,
// téléphones, email, réseaux — restent centralisées dans src/data/siteInfo.js).

import siteInfo from "@/data/siteInfo";

const contact = {
  header: {
    eyebrow: "Contact",
    title: "Contactez-nous",
    subtitle:
      "Vous avez un projet ou besoin d’un accompagnement ? L’équipe GS Corporation est prête à vous orienter vers le département adapté.",
  },

  whatsapp: {
    label: "Contacter sur WhatsApp",
    href: siteInfo.social.whatsapp,
  },

  facebook: {
    label: siteInfo.social.facebookHandle,
    href: siteInfo.social.facebook,
  },

  // Orientation du visiteur selon son besoin vers le bon département.
  orientation: [
    {
      icon: "bi-mortarboard",
      besoin: "Formation, consulting ou carrière",
      departement: "GS Consulting",
      href: "/consulting",
    },
    {
      icon: "bi-truck",
      besoin: "Logistique, engins ou véhicules",
      departement: "GS Logistique",
      href: "/logistique",
    },
    {
      icon: "bi-buildings",
      besoin: "Immobilier, construction ou gestion de biens",
      departement: "GS Immobilier",
      href: "/immobilier",
    },
    {
      icon: "bi-tree",
      besoin: "Agriculture, semences ou intrants",
      departement: "GS Agrobusiness",
      href: "/agrobusiness",
    },
    {
      icon: "bi-droplet",
      besoin: "Forage ou accès à l’eau",
      departement: "Les Foreurs de Guinée",
      href: "/foreurs-guinee",
    },
  ],
};

export default contact;
