// Carte de service générique et réutilisable.
// Props : service = { icon, title, description }.
export default function ServiceCard({ service }) {
  return (
    <div className="card-gs d-flex flex-column">
      <span className="gs-icon-badge mb-3">
        <i className={`bi ${service.icon}`} aria-hidden="true"></i>
      </span>

      <h3 className="h5 fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
        {service.title}
      </h3>

      <p className="text-secondary mb-0">{service.description}</p>
    </div>
  );
}
