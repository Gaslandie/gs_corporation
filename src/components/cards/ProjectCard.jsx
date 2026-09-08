import Link from "next/link";
import CatalogVisual from "@/components/CatalogVisual";
import { mediaLabels } from "@/data/media";

export default function ProjectCard({ project }) {
  const { title, department, category, description, location, year, image, icon } = project;

  return (
    <article className={`card-gs p-0 overflow-hidden d-flex flex-column h-100 ${department.theme}`}>
      <div className="gs-catalog-cover">
        <span className="gs-project-cat">{category}</span>
        <CatalogVisual image={image} icon={icon} caption={mediaLabels.project} />
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

        <Link href={department.href} className="btn btn-gs-primary align-self-start">
          Découvrir l’expertise
          <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
        </Link>
      </div>
    </article>
  );
}
