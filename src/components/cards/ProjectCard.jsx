// Carte d'une réalisation / projet.
// La couverture est un placeholder visuel (dégradé bleu marine + icône de
// catégorie) en attendant de vraies images.
export default function ProjectCard({ project }) {
  const { title, department, category, description, location, year, icon, href } = project;

  return (
    <article className="card-gs p-0 overflow-hidden d-flex flex-column h-100">
      {/* Couverture placeholder */}
      <div className="gs-project-cover">
        <span className="gs-project-cat">{category}</span>
        <i className={`bi ${icon}`} aria-hidden="true"></i>
      </div>

      {/* Contenu */}
      <div className="p-4 d-flex flex-column flex-grow-1">
        <span
          className="text-uppercase fw-semibold small mb-2"
          style={{ color: "var(--gs-primary)", letterSpacing: "0.05em" }}
        >
          {department.name}
        </span>

        <h3 className="h5 fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
          {title}
        </h3>

        <p className="text-secondary flex-grow-1">{description}</p>

        <div className="d-flex flex-wrap gap-3 text-secondary small mb-3">
          <span>
            <i className="bi bi-geo-alt me-1" aria-hidden="true"></i>
            {location}
          </span>
          <span>
            <i className="bi bi-calendar3 me-1" aria-hidden="true"></i>
            {year}
          </span>
        </div>

        <a href={href} className="btn btn-gs-primary align-self-start">
          Voir le projet
          <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  );
}
