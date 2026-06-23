// Titre de section réutilisable (sur-titre optionnel + titre + sous-titre).
export default function SectionTitle({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-5 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className="text-uppercase fw-semibold small d-block mb-2"
          style={{ color: "var(--gs-primary)", letterSpacing: "0.08em" }}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`lead text-secondary mt-2 mb-0 ${center ? "mx-auto" : ""}`}
          style={{ maxWidth: center ? "640px" : undefined }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
