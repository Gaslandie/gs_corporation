// Carte d'un bien immobilier (style catalogue).
// La couverture est un placeholder visuel (dégradé + icône du type de bien).
// Les couleurs (accent marron/or) sont pilotées par le thème de la page.
export default function PropertyCard({ property }) {
  const {
    title,
    type,
    operation,
    location,
    price,
    area,
    features = [],
    icon,
    status,
    href,
    whatsapp,
  } = property;

  return (
    <article className="card-gs p-0 overflow-hidden d-flex flex-column h-100">
      {/* Couverture placeholder */}
      <div className="gs-project-cover">
        <span
          className="position-absolute top-0 start-0 m-2 badge rounded-pill"
          style={{ backgroundColor: "var(--gs-accent)", color: "var(--gs-bleu-marine)" }}
        >
          {operation}
        </span>
        <span
          className="position-absolute top-0 end-0 m-2 badge rounded-pill"
          style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "var(--gs-bleu-marine)" }}
        >
          {status}
        </span>
        <i className={`bi ${icon}`} aria-hidden="true"></i>
      </div>

      {/* Contenu */}
      <div className="p-4 d-flex flex-column flex-grow-1">
        <h3 className="h5 fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
          {title}
        </h3>

        <div className="d-flex flex-wrap gap-3 text-secondary small mb-2">
          <span>
            <i className="bi bi-tag me-1" aria-hidden="true"></i>
            {type}
          </span>
          <span>
            <i className="bi bi-geo-alt me-1" aria-hidden="true"></i>
            {location}
          </span>
          <span>
            <i className="bi bi-arrows-angle-expand me-1" aria-hidden="true"></i>
            {area}
          </span>
        </div>

        <p className="fw-bold mb-3" style={{ color: "var(--gs-bleu-marine)" }}>
          <i className="bi bi-tag-fill me-2" style={{ color: "var(--gs-accent)" }} aria-hidden="true"></i>
          {price}
        </p>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {features.map((feature) => (
            <span className="gs-chip" key={feature}>
              <i className="bi bi-check2" aria-hidden="true"></i>
              {feature}
            </span>
          ))}
        </div>

        <div className="d-flex flex-wrap gap-2 mt-auto">
          <a href={href} className="btn btn-gs-accent">
            Voir le bien
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            <i className="bi bi-whatsapp me-2" aria-hidden="true"></i>
            Demander infos
          </a>
        </div>
      </div>
    </article>
  );
}
