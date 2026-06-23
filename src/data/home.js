// Contenu de la page d'accueil GS Corporation.
// Textes fidèles au document client D1 (reformulés légèrement pour le web,
// sans changer le sens). Centralisé ici pour rester facilement modifiable.

const home = {
  hero: {
    eyebrow: "Entreprise multisectorielle",
    title: "GS CORPORATION",
    lead: "Entreprise multisectorielle dédiée à la création de valeur à long terme.",
    subtitle:
      "Des services de pointe dans divers secteurs, portés par une expertise approfondie et des solutions innovantes.",
    primaryAction: { label: "Découvrir nos départements", href: "/departements" },
    secondaryAction: { label: "Nous contacter", href: "/contact" },
  },

  presentation: {
    eyebrow: "Qui sommes-nous",
    title: "Un groupe créateur de valeur",
    text: "GS Corporation est une entreprise leader dans le domaine de la gestion d’actifs, offrant des services de pointe dans divers secteurs. Notre entreprise est dédiée à la création de valeur à long terme pour nos clients grâce à une expertise approfondie et à des solutions innovantes.",
  },

  engagements: {
    eyebrow: "Nos engagements",
    title: "Ce qui guide notre action",
    text: "Chez GS Corporation, nous sommes déterminés à fournir des solutions sur mesure, à innover constamment et à maintenir des normes élevées de qualité et de durabilité dans tout ce que nous faisons. Notre succès repose sur l’intégrité, l’innovation et l’excellence opérationnelle.",
    items: [
      {
        icon: "bi-sliders2",
        title: "Solutions sur mesure",
        description: "Des réponses adaptées aux besoins réels de chaque client.",
      },
      {
        icon: "bi-lightbulb",
        title: "Innovation constante",
        description: "Améliorer sans cesse nos méthodes et nos solutions.",
      },
      {
        icon: "bi-award",
        title: "Qualité et durabilité",
        description: "Des normes élevées et durables dans tout ce que nous faisons.",
      },
      {
        icon: "bi-shield-check",
        title: "Intégrité",
        description: "La confiance et la transparence au cœur de nos relations.",
      },
      {
        icon: "bi-stars",
        title: "Excellence opérationnelle",
        description: "La rigueur et la performance dans chaque réalisation.",
      },
    ],
  },

  apercu: {
    eyebrow: "Explorer",
    title: "Nos ressources en un coup d’œil",
    items: [
      {
        icon: "bi-house-door",
        title: "Biens immobiliers",
        description: "Découvrez nos bâtiments en location et à la vente.",
        href: "/biens-immobiliers",
        linkLabel: "Voir les biens",
      },
      {
        icon: "bi-truck-front",
        title: "Engins & véhicules",
        description: "Engins roulants et véhicules disponibles à la location.",
        href: "/engins-vehicules",
        linkLabel: "Voir le parc",
      },
      {
        icon: "bi-trophy",
        title: "Réalisations",
        description: "Un aperçu de nos projets et de nos réalisations.",
        href: "/realisations",
        linkLabel: "Voir les réalisations",
      },
    ],
  },
};

export default home;
