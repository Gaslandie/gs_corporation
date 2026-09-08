import { editorialPhotos } from "@/data/editorialMedia";

// Photothèque locale : conserver la provenance et décrire ce qui est visible.
// Les visuels des brochures illustrent des métiers, pas des références de projets.
const photo = (folder, file, alt, document, extra = {}) => ({
  src: `/images/${folder}/${file}`,
  alt,
  source: `Brochure ${document}`,
  ...extra,
});

export const photos = {
  ...editorialPhotos,
  consulting: editorialPhotos.collaboration,
  partnership: photo("immobilier", "poignee-de-main.webp", "Deux professionnels du bâtiment se serrent la main", "GS Immobilier"),
  city: photo("immobilier", "vue-aerienne-ville.webp", "Vue aérienne d’une ville et de ses immeubles", "GS Immobilier"),
  warehouse: photo("logistique", "entrepot-stock.webp", "Organisation des stocks dans un entrepôt", "GS Logistique"),
  fleet: photo("logistique", "parc-engins.webp", "Engins de chantier alignés sur un parc", "GS Logistique"),
  loader: photo("logistique", "chargeuse-nuit.webp", "Chargeuse sur un chantier de nuit", "GS Logistique"),
  miningTruck: photo("logistique", "camion-minier.webp", "Camion de transport minier", "GS Logistique"),
  pickup: photo("logistique", "pickup.png", "Pick-up blanc présenté dans la brochure", "GS Logistique", { fit: "contain" }),
  tools: photo("logistique", "outillage.png", "Outillage et équipements de protection", "GS Logistique", { fit: "contain" }),
  logistics: photo("logistique", "logistique-connectee.webp", "Illustration de la coordination des transports et des stocks", "GS Logistique"),
  building: photo("immobilier", "immeuble-blanc.webp", "Façade d’un immeuble résidentiel blanc", "GS Immobilier"),
  architecture: photo("immobilier", "architecte-plans.webp", "Professionnel du bâtiment consultant des plans", "GS Immobilier"),
  construction: photo("immobilier", "chantier-beton.webp", "Structure en béton d’un bâtiment en construction", "GS Immobilier"),
  skyline: photo("immobilier", "chantier-coucher-soleil.webp", "Équipe et grues sur un chantier au coucher du soleil", "GS Immobilier"),
  house: photo("immobilier", "maison-3d.webp", "Illustration 3D d’une maison", "GS Immobilier", { fit: "contain" }),
  plans: photo("immobilier", "maquette-maison-plans.webp", "Maquette de maison posée sur des plans", "GS Immobilier"),
  neighborhood: photo("immobilier", "vue-aerienne-quartier.webp", "Vue aérienne d’un quartier résidentiel", "GS Immobilier"),
  earthworks: photo("immobilier", "terrassement.webp", "Travaux de terrassement d’un terrain", "GS Immobilier"),
  greenhouse: photo("agrobusiness", "serre-equipe.webp", "Équipe au milieu des cultures sous serre", "GS Agrobusiness"),
  tomatoes: photo("agrobusiness", "serre-tomates.webp", "Culture de tomates sous serre", "GS Agrobusiness"),
  vegetables: photo("agrobusiness", "legumes.webp", "Assortiment de légumes frais", "GS Agrobusiness"),
  seeds: photo("agrobusiness", "semences.webp", "Variétés de graines et de semences", "GS Agrobusiness"),
  farmingAdvice: photo("agrobusiness", "conseil-champ.webp", "Échange entre deux professionnels dans un champ", "GS Agrobusiness"),
  inputs: photo("agrobusiness", "intrants-boutique.webp", "Intrants et fournitures agricoles en boutique", "GS Agrobusiness"),
  harvest: photo("agrobusiness", "pommes-de-terre.webp", "Pommes de terre récoltées au pied des cultures", "GS Agrobusiness"),
  waterDrop: photo("forage", "goutte-eau.webp", "Goutte d’eau et ondulations à la surface de l’eau", "Les Foreurs de Guinée"),
  water: photo("forage", "jaillissement-eau.webp", "Jaillissement d’eau pendant une opération de forage", "Les Foreurs de Guinée"),
  drillingTeam: photo("forage", "equipe-foreuse.webp", "Équipe de terrain autour d’une foreuse", "Les Foreurs de Guinée"),
  community: photo("forage", "communaute-pompe.webp", "Habitants réunis autour d’une pompe à eau", "Les Foreurs de Guinée"),
  technician: photo("forage", "technicien-chantier.webp", "Technicien sur un chantier de forage", "Les Foreurs de Guinée"),
  drillingTruck: photo("forage", "camion-forage-route.webp", "Camion de forage sur une piste", "Les Foreurs de Guinée"),
};

const brand = (name, file, mark = file, format = "png") => ({
  name,
  logo: `/images/logos/${file}.${format}`,
  mark: `/images/logos/${mark}.${format}`,
});

// Logos Logistique et Agrobusiness : tracés vectoriels isolés de D3 p. 2 et D2 p. 2, sans le fond des brochures.
export const brands = {
  corporation: {
    ...brand("GS Corporation", "gs-corporation", "gs-corporation-marque"),
    lightMark: "/images/logos/gs-corporation-marque-blanc.png",
  },
  // Signature typographique provisoire validée ; aucun logo client n’est inventé.
  consulting: { name: "GS Consulting", provisional: true },
  logistique: brand("GS Logistique", "gs-logistique", "gs-logistique-marque", "svg"),
  immobilier: brand("GS Immobilier", "gs-immobilier", "gs-immobilier-marque"),
  agrobusiness: brand("GS Agrobusiness", "gs-agrobusiness", "gs-agrobusiness-marque", "svg"),
  "foreurs-guinee": brand("Les Foreurs de Guinée", "foreurs-guinee"),
};

export const departmentVisuals = {
  consulting: {
    brand: brands.consulting, cover: photos.consulting, portrait: photos.strategy,
    commitmentImage: photos.training, contactImage: photos.strategy,
    headline: "Faire grandir les compétences. Ouvrir de nouvelles perspectives.",
    intro: "Formation, conseil et coaching : un accompagnement adapté à vos objectifs professionnels et aux besoins de votre organisation.",
    action: { label: "Parlons de vos besoins", href: "/contact" },
    gallery: [],
  },
  logistique: {
    brand: brands.logistique, cover: photos.fleet, portrait: photos.warehouse,
    commitmentImage: photos.logistics, contactImage: photos.miningTruck,
    headline: "Les moyens d’avancer, à chaque étape de votre projet.",
    intro: "Stocks, véhicules, engins et fournitures : des solutions coordonnées pour vos chantiers et vos opérations.",
    brochure: "/D3.pdf", action: { label: "Explorer les engins et véhicules", href: "/engins-vehicules" },
    gallery: [
      { image: photos.loader, title: "Accompagner vos chantiers", text: "Des engins pour les travaux de terrassement et de manutention." },
      { image: photos.pickup, title: "Faciliter vos déplacements", text: "Des véhicules pour les transports légers et les déplacements terrain." },
      { image: photos.tools, title: "Équiper vos équipes", text: "Du matériel et des fournitures pour les besoins du quotidien." },
    ],
  },
  immobilier: {
    brand: brands.immobilier, cover: photos.building, portrait: photos.architecture,
    commitmentImage: photos.partnership, contactImage: photos.skyline,
    headline: "Concevoir aujourd’hui les lieux de demain.",
    intro: "Acheter, louer, construire ou valoriser un bien : un accompagnement de la conception à la gestion immobilière.",
    brochure: "/D4.pdf", action: { label: "Explorer les biens immobiliers", href: "/biens-immobiliers" },
    gallery: [
      { image: photos.plans, title: "Penser votre projet", text: "Conseil et expertise pour éclairer vos décisions immobilières." },
      { image: photos.construction, title: "Construire et rénover", text: "Donner forme à vos espaces, de la conception à la réalisation." },
      { image: photos.neighborhood, title: "Aménager et valoriser", text: "Des solutions de lotissement et de gestion pour faire vivre vos biens." },
    ],
  },
  agrobusiness: {
    brand: brands.agrobusiness, cover: photos.greenhouse, portrait: photos.farmingAdvice,
    commitmentImage: photos.harvest, contactImage: photos.tomatoes,
    headline: "Cultiver les ressources. Faire grandir les opportunités.",
    intro: "Des semences aux produits agricoles, nous accompagnons les acteurs du secteur dans leurs projets et leurs pratiques de production.",
    brochure: "/D2.pdf", action: { label: "Échanger sur votre projet agricole", href: "/contact" },
    gallery: [
      { image: photos.tomatoes, title: "Accompagner la production", text: "Gestion de projets agricoles et conseils au plus près des cultures." },
      { image: photos.seeds, title: "Préparer les récoltes", text: "Des semences et des intrants adaptés aux besoins des agriculteurs." },
      { image: photos.vegetables, title: "Valoriser les produits", text: "Une offre de produits agricoles pour les besoins alimentaires." },
    ],
  },
  "foreurs-guinee": {
    brand: brands["foreurs-guinee"], cover: photos.water, portrait: photos.drillingTeam,
    commitmentImage: photos.community, contactImage: photos.drillingTruck,
    headline: "L’accès à l’eau, une ressource pour l’avenir.",
    intro: "Étude du terrain, forage et maintenance : des solutions pour les communautés, les entreprises et les projets agricoles.",
    brochure: "/forage depliant.pdf", action: { label: "Parlons de votre besoin en eau", href: "/contact" },
    gallery: [
      { image: photos.drillingTruck, title: "Rejoindre le terrain", text: "Des moyens techniques mobilisés pour les opérations de forage." },
      { image: photos.technician, title: "Intervenir avec rigueur", text: "Un accompagnement technique et la maintenance des installations." },
      { image: photos.community, title: "Servir les communautés", text: "L’accès durable à l’eau au cœur de la mission du département." },
    ],
  },
};

export const mediaLabels = {
  remote: "Image temporaire en ligne — le chargement peut être lent selon votre connexion.",
  unavailable: "Visuel momentanément indisponible",
  pending: "Photo à venir",
  property: "Illustration de la brochure — ne représente pas le bien proposé.",
  equipment: "Visuel d’illustration — modèle exact à confirmer.",
  project: "Visuel d’illustration — exemple de projet de la maquette.",
};
