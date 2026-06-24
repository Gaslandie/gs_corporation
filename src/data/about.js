// Contenu de la page « À propos ». Textes fidèles au document client D1
// (légèrement reformulés pour le web). Les départements sont lus depuis
// src/data/departments.js et le slogan depuis src/data/siteInfo.js.

const about = {
  header: {
    eyebrow: "Le groupe",
    title: "À propos de GS Corporation",
    subtitle:
      "Une entreprise multisectorielle dédiée à la création de valeur à long terme.",
  },

  presentation: {
    eyebrow: "Qui sommes-nous",
    title: "Présentation",
    text: "GS Corporation est une entreprise leader dans le domaine de la gestion d’actifs, offrant des services de pointe dans divers secteurs. Notre entreprise est dédiée à la création de valeur à long terme pour nos clients grâce à une expertise approfondie et à des solutions innovantes.",
  },

  vision: {
    eyebrow: "Notre vision",
    title: "Bâtir une valeur durable",
    text: "Créer de la valeur durable pour nos clients à travers une expertise multisectorielle, des solutions innovantes et un accompagnement adapté aux besoins de chaque projet.",
  },

  engagements: {
    eyebrow: "Ce qui nous guide",
    title: "Nos engagements",
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

  domainesIntro:
    "GS Corporation intervient dans plusieurs secteurs à travers des départements spécialisés, chacun orienté vers des solutions adaptées aux besoins de ses clients.",

  valeurAjoutee: {
    eyebrow: "Pourquoi GS Corporation",
    title: "Notre valeur ajoutée",
    items: [
      {
        icon: "bi-patch-check",
        title: "Expertise approfondie",
        description: "Une connaissance pointue de chaque secteur où nous intervenons.",
      },
      {
        icon: "bi-lightbulb",
        title: "Solutions innovantes",
        description: "Des approches modernes et créatives adaptées à chaque projet.",
      },
      {
        icon: "bi-graph-up-arrow",
        title: "Création de valeur à long terme",
        description: "Un impact durable, pensé pour la réussite de nos clients.",
      },
    ],
  },
};

export default about;
