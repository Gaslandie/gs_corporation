import Link from "next/link";

// Carte générique et réutilisable (service, ressource, aperçu...).
// Props : service = { icon, title, description, href?, linkLabel? }.
// Si "href" est fourni, un lien d'action est affiché en bas de la carte.
export default function ServiceCard({ service }) {
  const { icon, title, description, href, linkLabel } = service;

  return (
    <div className="card-gs d-flex flex-column">
      <span className="gs-icon-badge mb-3">
        <i className={`bi ${icon}`} aria-hidden="true"></i>
      </span>

      <h3 className="h5 fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
        {title}
      </h3>

      <p className="text-secondary flex-grow-1 mb-0">{description}</p>

      {href && (
        <Link
          href={href}
          className="fw-semibold text-decoration-none mt-3"
          style={{ color: "var(--gs-primary)" }}
        >
          {linkLabel || "En savoir plus"}
          <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
        </Link>
      )}
    </div>
  );
}
