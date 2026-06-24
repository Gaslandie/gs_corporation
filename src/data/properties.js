// Biens immobiliers proposés par GS Immobilier.
// Données fictives mais réalistes (maquette). Prix volontairement « sur demande ».

const WHATSAPP_NUMBER = "224623867875";

// Construit un lien WhatsApp pré-rempli pour un bien donné.
const waLink = (title) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Bonjour, je suis intéressé(e) par le bien : ${title}`
  )}`;

const properties = [
  {
    id: 1,
    title: "Villa résidentielle à vendre",
    slug: "villa-residentielle-ratoma",
    type: "Villa",
    operation: "Vente",
    location: "Ratoma, Conakry",
    price: "Prix sur demande",
    area: "350 m²",
    description:
      "Spacieuse villa résidentielle dans un quartier calme et recherché de Ratoma.",
    features: ["4 chambres", "Jardin", "Garage"],
    icon: "bi-house",
    status: "Disponible",
    href: "#",
    whatsapp: waLink("Villa résidentielle à vendre"),
  },
  {
    id: 2,
    title: "Terrain à développer",
    slug: "terrain-a-developper-coyah",
    type: "Terrain",
    operation: "Vente",
    location: "Coyah",
    price: "Prix sur demande",
    area: "600 m²",
    description:
      "Terrain constructible idéal pour un projet résidentiel ou d’investissement.",
    features: ["Constructible", "Accès route", "Zone calme"],
    icon: "bi-map",
    status: "Disponible",
    href: "#",
    whatsapp: waLink("Terrain à développer"),
  },
  {
    id: 3,
    title: "Bâtiment commercial à louer",
    slug: "batiment-commercial-kaloum",
    type: "Bâtiment commercial",
    operation: "Location",
    location: "Kaloum, Conakry",
    price: "Prix sur demande",
    area: "420 m²",
    description:
      "Bâtiment commercial bien situé au cœur de Kaloum, adapté aux activités professionnelles.",
    features: ["Grand espace", "Parking", "Centre-ville"],
    icon: "bi-shop",
    status: "En étude",
    href: "#",
    whatsapp: waLink("Bâtiment commercial à louer"),
  },
  {
    id: 4,
    title: "Appartement moderne à louer",
    slug: "appartement-moderne-kipe",
    type: "Appartement",
    operation: "Location",
    location: "Kipé, Conakry",
    price: "Prix sur demande",
    area: "110 m²",
    description:
      "Appartement moderne et lumineux, proche des commodités de Kipé.",
    features: ["2 chambres", "Balcon", "Sécurisé"],
    icon: "bi-buildings",
    status: "Loué",
    href: "#",
    whatsapp: waLink("Appartement moderne à louer"),
  },
  {
    id: 5,
    title: "Domaine pour projet immobilier",
    slug: "domaine-projet-immobilier-dubreka",
    type: "Domaine",
    operation: "Vente",
    location: "Dubréka",
    price: "Prix sur demande",
    area: "2 ha",
    description:
      "Vaste domaine adapté à un projet immobilier ou à un lotissement.",
    features: ["Grande superficie", "Terrain plat", "Proche route"],
    icon: "bi-pin-map",
    status: "Disponible",
    href: "#",
    whatsapp: waLink("Domaine pour projet immobilier"),
  },
  {
    id: 6,
    title: "Maison familiale à vendre",
    slug: "maison-familiale-lambanyi",
    type: "Maison",
    operation: "Vente",
    location: "Lambanyi, Conakry",
    price: "Prix sur demande",
    area: "200 m²",
    description:
      "Maison familiale confortable dans un quartier résidentiel de Lambanyi.",
    features: ["3 chambres", "Cour", "Quartier résidentiel"],
    icon: "bi-house-door",
    status: "Vendu",
    href: "#",
    whatsapp: waLink("Maison familiale à vendre"),
  },
];

export default properties;
