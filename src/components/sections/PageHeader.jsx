// En-tête de page réutilisable (pages internes).
// Fond bleu marine, sur-titre rouge optionnel, titre + sous-titre centrés.
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section
      className="section-padding text-white text-center"
      style={{ backgroundColor: "var(--gs-bleu-marine)" }}
    >
      <div className="container">
        {eyebrow && (
          <span
            className="badge rounded-pill mb-3 px-3 py-2"
            style={{ backgroundColor: "var(--gs-rouge)" }}
          >
            {eyebrow}
          </span>
        )}

        <h1 className="fw-bold mb-0">{title}</h1>

        {subtitle && (
          <p className="lead text-white-50 mx-auto mt-3 mb-0" style={{ maxWidth: "760px" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
