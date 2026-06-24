import Link from "next/link";

// Carte d'un département du groupe.
// La classe de thème (dept.theme) surcharge --gs-primary pour adapter les couleurs.
// Props :
//   department  : objet département (name, description, icon, theme, href).
//   themed      : applique la couleur du département (false sur l'accueil).
//   ctaLabel    : libellé de l'action ("En savoir plus" par défaut).
//   ctaAsButton : affiche l'action sous forme de bouton plutôt que de lien.
export default function DepartmentCard({
  department,
  themed = true,
  ctaLabel = "En savoir plus",
  ctaAsButton = false,
}) {
  return (
    <div className={`card-gs d-flex flex-column ${themed ? department.theme : ""}`}>
      <span className="gs-icon-badge mb-3">
        <i className={`bi ${department.icon}`} aria-hidden="true"></i>
      </span>

      <h3 className="h5 fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
        {department.name}
      </h3>

      <p className="text-secondary flex-grow-1">{department.description}</p>

      {ctaAsButton ? (
        <Link
          href={department.href}
          className="btn btn-gs-primary align-self-start mt-3"
        >
          {ctaLabel}
          <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
        </Link>
      ) : (
        <Link
          href={department.href}
          className="fw-semibold text-decoration-none mt-2"
          style={{ color: "var(--gs-primary)" }}
        >
          {ctaLabel}
          <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
        </Link>
      )}
    </div>
  );
}
