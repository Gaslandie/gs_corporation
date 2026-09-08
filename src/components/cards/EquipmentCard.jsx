import Link from "next/link";
import CatalogVisual from "@/components/CatalogVisual";
import { mediaLabels } from "@/data/media";

// Carte d'un engin / véhicule / équipement (style catalogue de location).
// Les visuels de brochure sont identifiés comme des illustrations.
// Les couleurs (accent orange) sont pilotées par le thème de la page.
export default function EquipmentCard({ equipment }) {
  const {
    name,
    category,
    type,
    usage,
    availability,
    location,
    price,
    features = [],
    image,
    icon,
    whatsapp,
  } = equipment;

  return (
    <article className="card-gs p-0 overflow-hidden d-flex flex-column h-100">
      <div className="gs-catalog-cover">
        <div className="gs-catalog-badges"><span>{category}</span><span>{availability}</span></div>
        <CatalogVisual image={image} icon={icon} caption={mediaLabels.equipment} />
      </div>

      {/* Contenu */}
      <div className="p-4 d-flex flex-column flex-grow-1">
        <h3 className="h5 fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
          {name}
        </h3>

        <div className="d-flex flex-wrap gap-3 text-secondary small mb-2">
          <span>
            <i className="bi bi-gear me-1" aria-hidden="true"></i>
            {type}
          </span>
          <span>
            <i className="bi bi-geo-alt me-1" aria-hidden="true"></i>
            {location}
          </span>
        </div>

        <p className="text-secondary small mb-2">
          <i className="bi bi-wrench-adjustable me-1" aria-hidden="true"></i>
          {usage}
        </p>

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
          <Link href="/contact" className="btn btn-gs-accent">
            Échanger sur ce matériel
          </Link>
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
