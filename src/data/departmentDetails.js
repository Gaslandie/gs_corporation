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

    subjects: [
      "Logiciel comptable",
      "Gestion administrative",
      "Marketing",
      "Communication",
      "Anglais",
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
};

export default departmentDetails;
