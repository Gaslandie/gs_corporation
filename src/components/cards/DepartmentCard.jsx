import Link from "next/link";

// Carte d'un département du groupe.
// La classe de thème (dept.theme) surcharge --gs-primary pour adapter les couleurs.
export default function DepartmentCard({ department }) {
  return (
    <div className={`card-gs d-flex flex-column ${department.theme}`}>
      <span className="gs-icon-badge mb-3">
        <i className={`bi ${department.icon}`} aria-hidden="true"></i>
      </span>

      <h3 className="h5 fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
        {department.name}
      </h3>

      <p className="text-secondary flex-grow-1">{department.description}</p>

      <Link
        href={department.href}
        className="fw-semibold text-decoration-none mt-2"
        style={{ color: "var(--gs-primary)" }}
      >
        En savoir plus
        <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
      </Link>
    </div>
  );
}
