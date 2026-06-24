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

  immobilier: {
    slug: "immobilier",
    name: "GS Immobilier",
    theme: "theme-immobilier", // bleu marine + marron/or + gris + blanc
    tagline: "Créez, investissez, transformez.",
    heroIntro: "Votre partenaire pour créer, investir et transformer.",
    presentation:
      "Bienvenue dans le département immobilier de GS Corporation. Notre équipe dédiée est là pour vous accompagner dans tous les aspects de la gestion de vos biens immobiliers, de la conception à la maintenance.",

    highlight: {
      icon: "bi-patch-check",
      title: "Notre engagement",
      text: "Chez GS Corporation, nous croyons en la valeur durable de l’immobilier. Notre engagement envers nos clients est de fournir des solutions immobilières complètes, répondant à leurs besoins spécifiques et contribuant à la création de communautés dynamiques.",
    },

    expertiseEyebrow: "Nos prestations",
    expertiseTitle: "Nos services principaux",
    expertise: [
      {
        icon: "bi-building",
        title: "Location et vente de bâtiments et terrains",
        description:
          "Nous vous proposons un vaste portefeuille de biens immobiliers, qu’il s’agisse de bâtiments commerciaux, de terrains à développer, de propriétés résidentielles ou d’investissements immobiliers.",
      },
      {
        icon: "bi-hammer",
        title: "Construction et rénovation",
        description:
          "De la conception à la réalisation, nous construisons des bâtiments exceptionnels et rénovons des biens pour qu’ils répondent à vos besoins et aux normes les plus élevées.",
      },
      {
        icon: "bi-clipboard-data",
        title: "Conseil et expertise immobilière",
        description:
          "Nos experts immobiliers vous guident dans la prise de décisions éclairées en matière d’investissements immobiliers.",
      },
      {
        icon: "bi-briefcase",
        title: "Gestion immobilière",
        description:
          "Simplifiez la gestion de vos biens grâce à notre service de gestion immobilière. Nous prenons en charge les aspects administratifs, de maintenance et de location.",
      },
      {
        icon: "bi-map",
        title: "Aménagement et lotissement",
        description:
          "Transformez des terrains bruts en quartiers résidentiels ou zones commerciales. Notre expertise en aménagement du territoire crée des espaces fonctionnels et attrayants.",
      },
      {
        icon: "bi-flower1",
        title: "Décoration d’intérieur et aménagement d’espaces verts",
        description:
          "Créez des intérieurs élégants et des espaces extérieurs verdoyants grâce à nos services de décoration et d’aménagement paysager.",
      },
    ],

    lists: [
      {
        eyebrow: "Notre portefeuille",
        title: "Types de biens",
        icon: "bi-house-door",
        items: [
          "Bâtiments commerciaux",
          "Terrains à développer",
          "Propriétés résidentielles",
          "Investissements immobiliers",
        ],
      },
      {
        eyebrow: "De A à Z",
        title: "Accompagnement",
        icon: "bi-arrow-right-circle",
        items: [
          "Conception",
          "Réalisation",
          "Maintenance",
          "Location",
          "Gestion administrative",
        ],
      },
    ],

    whyChoose: [
      {
        icon: "bi-houses",
        title: "Solutions immobilières complètes",
        description:
          "Des prestations couvrant l’ensemble de vos besoins immobiliers, de l’achat à la gestion.",
      },
      {
        icon: "bi-arrow-repeat",
        title: "Accompagnement de la conception à la maintenance",
        description:
          "Un suivi continu et coordonné à chaque étape de votre projet immobilier.",
      },
      {
        icon: "bi-lightbulb",
        title: "Conseil pour des décisions éclairées",
        description:
          "L’expertise nécessaire pour investir et valoriser vos biens en toute confiance.",
      },
    ],

    quote: "Créez, investissez, transformez.",
  },

  agrobusiness: {
    slug: "agrobusiness",
    name: "GS Agrobusiness",
    theme: "theme-agrobusiness", // vert + bleu marine + gris + blanc
    tagline: "Nourrir le monde, créer des opportunités.",
    heroIntro:
      "Des solutions agricoles modernes pour répondre aux besoins de l’agriculture moderne.",
    presentation:
      "Bienvenue dans le département Agrobusiness de GS Corporation. Notre engagement envers l’agriculture, la sécurité alimentaire et le développement durable nous pousse à offrir une gamme de services complets pour répondre aux besoins de l’agriculture moderne.",

    highlight: {
      icon: "bi-globe-americas",
      title: "Notre engagement",
      text: "Chez GS Corporation, nous croyons que l’agriculture est essentielle à la vie et à l’avenir de notre planète. Notre engagement est de contribuer à l’amélioration de la productivité agricole, de promouvoir la durabilité et de soutenir nos clients dans leur réussite dans le secteur agroalimentaire.",
    },

    expertiseEyebrow: "Nos prestations",
    expertiseTitle: "Nos services principaux",
    expertise: [
      {
        icon: "bi-diagram-3",
        title: "Gestion de projet agricole",
        description:
          "Nous collaborons avec des agriculteurs, des entreprises et des organisations pour gérer des projets agricoles à grande échelle, de la planification à la mise en œuvre. Notre expertise garantit des opérations agricoles efficaces et productives.",
      },
      {
        icon: "bi-basket3",
        title: "Vente de produits agricoles",
        description:
          "Nous proposons une gamme variée de produits agricoles de haute qualité, qu’il s’agisse de céréales, de fruits, de légumes, de viande ou d’autres produits. Notre objectif est de mettre des aliments de qualité sur votre table.",
      },
      {
        icon: "bi-flower2",
        title: "Vente de semences",
        description:
          "Les semences sont la base de l’agriculture. Nous fournissons des semences de qualité supérieure, adaptées aux besoins spécifiques de votre culture, pour garantir des récoltes fructueuses.",
      },
      {
        icon: "bi-chat-square-text",
        title: "Conseils agricoles",
        description:
          "Notre équipe d’experts agricoles offre des conseils personnalisés pour aider les agriculteurs et les entreprises à maximiser leur rendement, à améliorer leurs pratiques agricoles et à relever les défis actuels du secteur.",
      },
      {
        icon: "bi-bag-check",
        title: "Vente d’intrants agricoles",
        description:
          "Nous comprenons l’importance cruciale des intrants agricoles de qualité pour une agriculture prospère. C’est pourquoi nous mettons à votre disposition une gamme complète d’intrants agricoles pour soutenir les agriculteurs dans leur quête de rendements exceptionnels et durables.",
      },
    ],

    lists: [
      {
        eyebrow: "Nos secteurs",
        title: "Domaines agricoles",
        icon: "bi-tree",
        items: [
          "Agriculture moderne",
          "Sécurité alimentaire",
          "Développement durable",
          "Productivité agricole",
          "Agroalimentaire",
        ],
      },
      {
        eyebrow: "Notre offre",
        title: "Produits et solutions",
        icon: "bi-check2-circle",
        items: [
          "Produits agricoles",
          "Semences",
          "Intrants agricoles",
          "Conseils personnalisés",
          "Projets agricoles",
        ],
      },
    ],

    whyChoose: [
      {
        icon: "bi-basket",
        title: "Solutions agricoles complètes",
        description:
          "Une gamme de services couvrant toute la chaîne agricole, de la production à la vente.",
      },
      {
        icon: "bi-people",
        title: "Accompagnement des producteurs et organisations",
        description:
          "Un soutien aux agriculteurs, entreprises et organisations à chaque étape de leurs projets.",
      },
      {
        icon: "bi-recycle",
        title: "Engagement pour la productivité et la durabilité",
        description:
          "Améliorer les rendements tout en promouvant une agriculture durable et responsable.",
      },
    ],

    quote: "Nourrir le monde, créer des opportunités.",
  },
};

export default departmentDetails;
