import { asset } from "@/lib/assetPath";

// En-tête de page réutilisable (pages internes).
// Fond bleu marine par défaut, ou photo de fond + overlay si "image" est fourni.
// Sur-titre rouge (ou en couleur d'accent du thème si accentEyebrow=true).
export default function PageHeader({ eyebrow, title, subtitle, accentEyebrow = false, image }) {
  const eyebrowStyle = accentEyebrow
    ? { backgroundColor: "var(--gs-accent)", color: "var(--gs-bleu-marine)" }
    : { backgroundColor: "var(--gs-rouge)" };

  // Avec image : on réutilise .gs-dept-hero (photo + overlay teinté au thème).
  const sectionClass = `section-padding text-white text-center${image ? " gs-dept-hero" : ""}`;
  const sectionStyle = image
    ? { "--gs-hero-image": `url(${asset(image)})` }
    : { backgroundColor: "var(--gs-bleu-marine)" };

  return (
    <section className={sectionClass} style={sectionStyle}>
      <div className="container">
        {eyebrow && (
          <span className="badge rounded-pill mb-3 px-3 py-2" style={eyebrowStyle}>
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
