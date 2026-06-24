// Préfixe un chemin d'asset statique (image, fichier de public/) avec le
// basePath du site. Indispensable pour les images de fond définies en CSS
// (url(...)) car Next.js ne préfixe automatiquement que les composants
// Link / Image / scripts, pas les url() inline.
//
// En local : basePath vide → "/gs_hero.webp".
// Sur GitHub Pages : "/gs_corporation/gs_hero.webp".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path) {
  if (!path) return path;
  return `${basePath}${path}`;
}
