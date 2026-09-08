import Link from "next/link";
import Visual from "@/components/Visual";

export default function ServiceCard({ service }) {
  const { icon, title, description, href, linkLabel, image } = service;
  return (
    <article className={`card-gs d-flex flex-column ${image ? "gs-service-photo" : ""}`}>
      {image && <Visual image={image} className="gs-card-visual" showSource={false} />}
      <div className={image ? "gs-card-body" : "d-flex flex-column flex-grow-1"}>
        {!image && <span className="gs-icon-badge mb-3"><i className={`bi ${icon}`} aria-hidden="true" /></span>}
        <h3 className="h5">{title}</h3>
        {description && <p className="text-secondary flex-grow-1 mb-0">{description}</p>}
        {href && <Link href={href} className="gs-text-link mt-4">{linkLabel || "En savoir plus"}<i className="bi bi-arrow-right" aria-hidden="true" /></Link>}
      </div>
    </article>
  );
}
