// Préfixe un chemin d'asset statique (image, fichier de public/) avec le
// basePath du site. Les src d’Image et les url() CSS doivent être préfixés.
//
// En local : basePath vide → "/gs_hero.webp".
// Sur GitHub Pages : "/gs_corporation/gs_hero.webp".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path) {
  if (!path) return path;
  if (/^(?:https?:\/\/|\/\/|data:|blob:)/i.test(path)) return path;
  return `${basePath}${path}`;
}
