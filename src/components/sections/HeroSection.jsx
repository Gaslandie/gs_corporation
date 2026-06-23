import Link from "next/link";

// Section d'en-tête (hero) corporate et réutilisable.
// Props : eyebrow, title, lead, subtitle, primaryAction/secondaryAction = { label, href }.
// La classe .gs-hero ajoute les formes décoratives (cercle + courbe du logo).
export default function HeroSection({
  eyebrow,
  title,
  lead,
  subtitle,
  primaryAction,
  secondaryAction,
}) {
  return (
    <section
      className="gs-hero section-padding text-white"
      style={{
        background:
          "linear-gradient(135deg, var(--gs-bleu-marine) 0%, var(--gs-bleu-marine-clair) 100%)",
      }}
    >
      <div className="container text-center">
        {eyebrow && (
          <span className="badge rounded-pill mb-3 px-3 py-2" style={{ backgroundColor: "var(--gs-rouge)" }}>
            {eyebrow}
          </span>
        )}

        <h1 className="fw-bold" style={{ fontSize: "var(--gs-fs-display)", letterSpacing: "0.02em" }}>
          {title}
        </h1>

        {lead && (
          <p className="fs-4 fw-semibold mx-auto mt-3 mb-2" style={{ maxWidth: "760px" }}>
            {lead}
          </p>
        )}

        {subtitle && (
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: "720px" }}>
            {subtitle}
          </p>
        )}

        {(primaryAction || secondaryAction) && (
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            {primaryAction && (
              <Link className="btn btn-gs-primary" href={primaryAction.href}>
                {primaryAction.label}
              </Link>
            )}
            {secondaryAction && (
              <Link className="btn btn-light" href={secondaryAction.href}>
                {secondaryAction.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
