import Link from "next/link";

// Section d'en-tête (hero) simple et réutilisable.
// Props : eyebrow, title, subtitle, primaryAction/secondaryAction = { label, href }.
export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}) {
  return (
    <section
      className="section-padding text-white"
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

        <h1 className="fw-bold" style={{ fontSize: "var(--gs-fs-display)" }}>
          {title}
        </h1>

        {subtitle && (
          <p className="lead text-white-50 mx-auto mt-3" style={{ maxWidth: "720px" }}>
            {subtitle}
          </p>
        )}

        {(primaryAction || secondaryAction) && (
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            {primaryAction && (
              <Link className="btn btn-gs-primary btn-lg" href={primaryAction.href}>
                {primaryAction.label}
              </Link>
            )}
            {secondaryAction && (
              <Link className="btn btn-light btn-lg" href={secondaryAction.href}>
                {secondaryAction.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
