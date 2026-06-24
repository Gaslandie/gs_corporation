// Détails complets des pages département (réutilisés par DepartmentPageTemplate).
// Une entrée par département. Textes fidèles aux documents clients.
// Le thème (theme-consulting, theme-logistique...) pilote les couleurs.

const departmentDetails = {
  consulting: {
    slug: "consulting",
    name: "GS Consulting",
    theme: "theme-consulting", // bleu marine + jaune + blanc
    tagline: "Votre partenaire pour l’excellence professionnelle",
    heroIntro:
      "Bienvenue chez GS Consulting : votre partenaire pour l’excellence professionnelle.",
    presentation:
      "GS Consulting est le fer de lance de GS Corporation dans le domaine de la formation, du conseil en stratégie marketing et communication, ainsi que du développement de carrière. Nous nous engageons à apporter des solutions innovantes et personnalisées pour répondre aux défis uniques de votre parcours professionnel.",

    expertise: [
      {
        icon: "bi-mortarboard",
        title: "Formations professionnelles",
        description:
          "Acquérez des compétences de pointe grâce à nos programmes de formation conçus pour stimuler votre croissance professionnelle. Que vous soyez novice dans votre domaine ou un professionnel chevronné, notre équipe d’instructeurs expérimentés vous accompagne à chaque étape.",
      },
      {
        icon: "bi-megaphone",
        title: "Conseil en stratégie marketing et communication",
        description:
          "Développez des stratégies marketing percutantes et maîtrisez l’art de la communication efficace. Nous collaborons avec vous pour créer des plans stratégiques alignés sur vos objectifs et adaptés à l’évolution constante du paysage commercial.",
      },
      {
        icon: "bi-graph-up-arrow",
        title: "Développement de carrière professionnelle",
        description:
          "Que vous cherchiez à progresser dans votre carrière actuelle ou à explorer de nouveaux horizons, GS Consulting offre des conseils avisés et des programmes de développement de carrière pour vous aider à atteindre vos aspirations professionnelles.",
      },
    ],

    lists: [
      {
        eyebrow: "Programmes",
        title: "Nos principaux sujets",
        icon: "bi-check2-circle",
        items: [
          "Logiciel comptable",
          "Gestion administrative",
          "Marketing",
          "Communication",
          "Anglais",
        ],
      },
    ],

    values: [
      { icon: "bi-lightning-charge", label: "Audace" },
      { icon: "bi-hand-thumbs-up", label: "Engagement" },
      { icon: "bi-bullseye", label: "Focus sur l’impact" },
      { icon: "bi-people", label: "Ouverture" },
    ],

    whyChoose: [
      {
        icon: "bi-person-badge",
        title: "Des experts passionnés",
        description:
          "Une équipe d’instructeurs et de conseillers expérimentés, pleinement investis dans votre réussite.",
      },
      {
        icon: "bi-sliders2",
        title: "Personnalisation",
        description:
          "Des solutions adaptées à vos défis et à votre parcours professionnel unique.",
      },
      {
        icon: "bi-award",
        title: "Engagement envers l’excellence",
        description:
          "Des standards élevés de qualité et d’exigence dans chacun de nos accompagnements.",
      },
    ],

    quote:
      "Développe une passion pour l’apprentissage... Si tu le fais, tu ne cesseras jamais de grandir.",
  },

  logistique: {
    slug: "logistique",
    name: "GS Logistique",
    theme: "theme-logistique", // bleu marine + orange + gris + blanc
    tagline:
      "Des solutions logistiques taillées sur mesure pour répondre à vos besoins",
    heroIntro: "Votre partenaire en mouvement.",
    presentation:
      "Chez GS Logistique, nous sommes plus qu’une entreprise de logistique ; nous sommes votre partenaire en mouvement. Depuis nos débuts, nous nous sommes consacrés à la mission de simplifier le monde de la chaîne d’approvisionnement.",

    expertiseEyebrow: "Nos prestations",
    expertiseTitle: "Nos services principaux",
    expertise: [
      {
        icon: "bi-box-seam",
        title: "Gestion des stocks",
        description:
          "Faites l’inventaire et approvisionnez votre stock sans perdre de temps.",
      },
      {
        icon: "bi-truck-front",
        title: "Location de véhicules",
        description:
          "Nous mettons à votre disposition des modèles variés de véhicules pour vos courses, vos transports et autres besoins : pick-up, camionnettes et véhicules utilitaires.",
      },
      {
        icon: "bi-truck",
        title: "Location d’engins lourds",
        description:
          "Nous mettons à votre disposition des engins modernes, nécessaires aux travaux de terrassement, d’assainissement, de levage, de manutention et autres besoins dans les secteurs du BTP, industriels et portuaires.",
      },
      {
        icon: "bi-tools",
        title: "Vente de fournitures, matériels et équipements",
        description:
          "Découvrez une large gamme d’outils, d’accessoires et de fournitures pour vous accompagner dans toutes vos tâches du quotidien.",
      },
    ],

    lists: [
      {
        eyebrow: "Notre processus",
        title: "Nos missions",
        icon: "bi-arrow-right-circle",
        items: ["Réceptionner", "Stocker", "Préparer", "Expédier", "Livrer"],
      },
      {
        eyebrow: "Suivi",
        title: "Gestion de stock",
        icon: "bi-clipboard-check",
        items: [
          "Gestion optimale de votre stock",
          "Gérer vos commandes",
          "Suivi des ventes",
          "Édition des factures",
        ],
      },
      {
        eyebrow: "Parc matériel",
        title: "Engins disponibles",
        icon: "bi-gear-wide-connected",
        items: [
          "Tractopelles",
          "Niveleuses",
          "Compacteurs",
          "Dames sauteuses",
          "Manitous",
          "Camions citernes",
          "Bulldozers",
          "Foreuses",
          "Grue mobile",
          "Décapeuses",
        ],
      },
    ],

    whyChooseIntro:
      "Choisissez GS Logistique comme partenaire logistique, et découvrez un service de qualité, une fiabilité inégalée et une équipe dévouée prête à vous accompagner dans chaque étape de votre voyage logistique.",
    whyChoose: [
      {
        icon: "bi-patch-check",
        title: "Service de qualité",
        description:
          "Un niveau d’exigence constant à chaque étape de votre chaîne logistique.",
      },
      {
        icon: "bi-shield-check",
        title: "Fiabilité inégalée",
        description:
          "Des engagements tenus et une disponibilité sur laquelle vous pouvez compter.",
      },
      {
        icon: "bi-people",
        title: "Équipe dévouée",
        description:
          "Une équipe à votre écoute, prête à vous accompagner dans chaque étape de votre projet.",
      },
    ],

    quote:
      "Des solutions logistiques taillées sur mesure pour répondre à vos besoins.",
  },
};

export default departmentDetails;
