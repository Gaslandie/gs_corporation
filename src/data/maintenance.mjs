// Mode maintenance du site (lu par scripts/apply-maintenance.mjs au build).
// `enabled: true` → le déploiement ne contient QUE la page de maintenance :
// aucune page, image ou brochure du site n’est publiée.
// `enabled: false` → le site complet est déployé normalement.
// Après modification : commiter et pousser sur main pour redéployer.

const maintenance = {
  enabled: false,
  title: "Site en maintenance",
  contactLabel: "Pour plus d’informations",
  contactEmail: "contact@gaslandie.com",
};

export default maintenance;
