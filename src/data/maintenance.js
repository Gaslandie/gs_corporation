// Mode maintenance du site GS Corporation.
// Passer `enabled` à true rend tout le site inaccessible : le layout racine
// remplace la navbar, les pages et le footer par la page de maintenance
// (voir src/app/layout.js et src/components/MaintenancePage.jsx).
// Repasser à false pour rouvrir le site, puis redéployer.

const maintenance = {
  enabled: true,
  eyebrow: "Site en maintenance",
  title: "Nous préparons une nouvelle version du site.",
  message:
    "Le site de GS Corporation est temporairement indisponible le temps d’une mise à jour. Merci de votre patience : nous serons de retour très prochainement.",
  contactLabel: "Pour nous joindre pendant cette période",
};

export default maintenance;
