// Titre de section réutilisable (sur-titre optionnel + titre + sous-titre).
export default function SectionTitle({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`gs-section-title ${center ? "gs-section-title--center" : ""}`}>
      {eyebrow && (
        <span className="gs-eyebrow">
          {eyebrow}
        </span>
      )}
      <h2>{title}</h2>
      {subtitle && (
        <p>
          {subtitle}
        </p>
      )}
    </div>
  );
}
