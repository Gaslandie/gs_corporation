// Photos complémentaires téléchargées depuis Pexels pour éviter une dépendance
// réseau à l’affichage. Illustrations de métiers, pas des équipes ou projets GS.
// Sources et auteurs conservés ici pour faciliter le remplacement des visuels.
const pexelsPhoto = (folder, file, alt, author, page, extra = {}) => ({
  src: `/images/${folder}/${file}.jpg`,
  alt,
  source: "Photo d’illustration",
  provenance: {
    author,
    url: `https://www.pexels.com/photo/${page}/`,
    license: "Pexels",
    licenseUrl: "https://www.pexels.com/license/",
  },
  ...extra,
});

export const editorialPhotos = {
  collaboration: pexelsPhoto("consulting", "atelier-equipe", "Professionnelles échangeant autour de leurs ordinateurs en salle de réunion", "Christina Morillo", "people-on-conference-room-1181427"),
  training: pexelsPhoto("consulting", "formation-professionnelle", "Présentation à une équipe réunie autour d’une table et d’un tableau", "Thirdman", "a-group-of-people-having-a-meeting-in-the-office-7652049"),
  strategy: pexelsPhoto("consulting", "conseil-strategie", "Professionnels étudiant des documents pendant une réunion de travail", "Sora Shimazaki", "concentrated-colleagues-having-meeting-in-office-5668498"),
  coaching: pexelsPhoto("consulting", "accompagnement-carriere", "Deux professionnelles échangent autour d’un ordinateur et de leurs notes", "Christina Morillo", "woman-wearing-black-blouse-holding-white-laptop-1181586"),
  presentation: pexelsPhoto("consulting", "presentation-formation", "Intervenant présentant des graphiques à ses collègues en salle de réunion", "Mikhail Nilov", "black-man-making-a-presentation-in-an-office-9301247", { position: "center 20%" }),
  interior: pexelsPhoto("immobilier", "interieur-vegetal", "Salon aménagé avec un canapé, des tables basses et des plantes vertes", "Max Vakhtbovych", "interior-of-room-with-plants-5997978"),
  waterTower: pexelsPhoto("forage", "chateau-eau", "Réservoir d’eau surélevé sur une structure métallique", "Sasha P", "plastic-water-tank-on-the-tower-6961082", { position: "center 35%" }),
};
