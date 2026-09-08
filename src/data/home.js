import { photos } from "@/data/media";

// Contenu de la page d'accueil GS Corporation.
// Textes fidèles au document client D1 (reformulés légèrement pour le web,
// sans changer le sens). Centralisé ici pour rester facilement modifiable.

const home = {
  hero: {
    // Image de fond du hero (photo réelle dans public/).
    image: photos.skyline,
    title: "Des expertises qui font avancer vos projets.",
    subtitle:
      "Cinq départements complémentaires, un même engagement : accompagner vos projets et créer une valeur durable en Guinée.",
    text: "Des services de pointe dans divers secteurs, portés par une expertise approfondie et des solutions innovantes.",
    primaryAction: { label: "Découvrir nos départements", href: "/departements" },
    // Repères du groupe affichés sous la navigation des visuels.
    infoBlocks: [
      {
        icon: "bi-grid-1x2",
        title: "5 départements",
        text: "Consulting • Logistique • Immobilier • Agrobusiness • Forage",
      },
      {
        icon: "bi-geo-alt",
        title: "Conakry",
        text: "Cité Enco 5 / Comm. Ratoma",
      },
      {
        icon: "bi-check2-circle",
        title: "Solutions sur mesure",
        text: "Qualité • Innovation • Excellence",
      },
    ],
  },

  presentation: {
    eyebrow: "Qui sommes-nous",
    title: "Un groupe créateur de valeur",
    text: "Conseiller une entreprise, équiper un chantier, valoriser un bien, accompagner une production agricole ou faciliter l’accès à l’eau : GS Corporation réunit les expertises utiles à chaque étape de vos projets. Basé à Conakry, le groupe vous oriente vers le département adapté à votre besoin.",
  },

  engagements: {
    image: photos.farmingAdvice,
    imageCaption: "L’écoute et l’accompagnement, au plus près du terrain.",
    eyebrow: "Nos engagements",
    title: "Ce qui guide notre action",
    text: "Comprendre votre besoin, apporter une réponse juste et construire une relation de confiance. Cinq engagements guident notre travail au quotidien.",
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
        image: photos.plans,
        description: "Découvrez nos bâtiments en location et à la vente.",
        href: "/biens-immobiliers",
        linkLabel: "Voir les biens",
      },
      {
        icon: "bi-truck-front",
        title: "Engins & véhicules",
        image: photos.miningTruck,
        description: "Engins roulants et véhicules disponibles à la location.",
        href: "/engins-vehicules",
        linkLabel: "Voir le parc",
      },
      {
        icon: "bi-trophy",
        title: "Réalisations",
        image: photos.community,
        description: "Un aperçu de nos projets et de nos réalisations.",
        href: "/realisations",
        linkLabel: "Voir les réalisations",
      },
    ],
  },
};

export default home;
