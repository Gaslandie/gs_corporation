// Applique le mode maintenance à l'export statique (dossier out/).
//
// Lancé automatiquement après `next build` (voir package.json).
// Quand `maintenance.enabled` est actif (src/data/maintenance.js), tout le
// contenu exporté est remplacé par une seule page de maintenance autonome :
// aucune page, image, brochure ou texte du site n'est déployé.
// Quand il est inactif, ce script ne fait rien et le site est déployé normalement.

import { readdir, rm, writeFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import maintenance from "../src/data/maintenance.mjs";

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");
const dossierExport = join(racine, "out");

// Échappe le texte injecté dans le HTML (les contenus viennent d'un fichier de données).
const echapper = (texte) =>
  String(texte).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

const titre = echapper(maintenance.title);
const libelleContact = echapper(maintenance.contactLabel);
const email = echapper(maintenance.contactEmail);

// Page autonome : styles en ligne, aucune dépendance (police, CSS ou image).
const page = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<link rel="icon" href="data:,">
<title>${titre}</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
    background: #f6f6f4;
    color: #1c2733;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    text-align: center;
  }
  main { max-width: 32rem; }
  h1 {
    margin: 0 0 0.75rem;
    font-size: clamp(1.6rem, 5vw, 2.25rem);
    font-weight: 600;
    line-height: 1.2;
    color: #0d2240;
  }
  p { margin: 0; font-size: 1rem; line-height: 1.6; color: #626c77; }
  a { color: #0d2240; font-weight: 600; text-decoration: none; }
  a:hover, a:focus { text-decoration: underline; }
</style>
</head>
<body>
  <main>
    <h1>${titre}</h1>
    <p>${libelleContact} : <a href="mailto:${email}">${email}</a></p>
  </main>
</body>
</html>
`;

if (!maintenance.enabled) {
  console.log("Mode maintenance inactif : export statique conservé tel quel.");
  process.exit(0);
}

// Vérification de sécurité : on ne vide que le dossier d'export attendu.
try {
  await access(join(dossierExport, "index.html"));
} catch {
  console.error("Export introuvable : lancer `next build` avant ce script.");
  process.exit(1);
}

for (const entree of await readdir(dossierExport)) {
  await rm(join(dossierExport, entree), { recursive: true, force: true });
}

// index.html couvre la racine ; 404.html est servi par GitHub Pages pour
// toutes les autres URL, y compris les anciennes pages du site.
await writeFile(join(dossierExport, "index.html"), page);
await writeFile(join(dossierExport, "404.html"), page);
await writeFile(join(dossierExport, ".nojekyll"), "");

console.log("Mode maintenance appliqué : seule la page de maintenance est déployée.");
