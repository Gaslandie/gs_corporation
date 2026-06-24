/** @type {import('next').NextConfig} */

// Nom du dépôt GitHub : le site est servi sous https://<user>.github.io/<repo>/
const repo = "gs_corporation";
const isProd = process.env.NODE_ENV === "production";

// En production (build pour GitHub Pages), le site vit sous un sous-chemin.
// En développement local, basePath reste vide.
const basePath = isProd ? `/${repo}` : "";

const nextConfig = {
  // Génère un site 100 % statique dans out/ (compatible GitHub Pages).
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Exposé au client pour préfixer les chemins d'assets (images de fond CSS).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
