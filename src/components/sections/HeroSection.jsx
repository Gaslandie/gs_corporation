import Link from "next/link";

// Section d'en-tête (hero) corporate de type bannière :
// grande image de fond + overlay sombre + titre centré + bouton + bloc rouge.
// Tous les styles réutilisables sont centralisés dans globals.css (.gs-hero*).
//
// Props :
//   image           : chemin de l'image de fond (optionnel ; fallback dégradé).
//   title, subtitle, text : contenus textuels.
//   primaryAction / secondaryAction : { label, href }.
//   infoBlocks      : [{ icon, title, text }] → bloc rouge en bas à droite.
export default function HeroSection({
  image,
  title,
  subtitle,
  text,
  primaryAction,
  secondaryAction,
  infoBlocks = [],
}) {
  const style = image ? { "--gs-hero-image": `url(${image})` } : undefined;

  return (
    <section className="gs-hero text-white" style={style}>
      <div className="container text-center gs-hero__content">
        <h1 className="gs-hero__title fw-bold">{title}</h1>

        {subtitle && (
          <p className="gs-hero__subtitle fw-semibold mx-auto mt-3">{subtitle}</p>
        )}

        {text && <p className="lead text-white-50 mx-auto">{text}</p>}

        {(primaryAction || secondaryAction) && (
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            {primaryAction && (
              <Link className="btn btn-gs-primary" href={primaryAction.href}>
                {primaryAction.label}
              </Link>
            )}
            {secondaryAction && (
              <Link className="btn btn-outline-light" href={secondaryAction.href}>
                {secondaryAction.label}
              </Link>
            )}
          </div>
        )}
      </div>

      {infoBlocks.length > 0 && (
        <aside className="gs-hero__infobox">
          {infoBlocks.map((block) => (
            <div className="gs-hero__infoitem" key={block.title}>
              <p className="gs-hero__infotitle">
                {block.icon && <i className={`bi ${block.icon} me-2`} aria-hidden="true"></i>}
                {block.title}
              </p>
              <p className="gs-hero__infotext">{block.text}</p>
            </div>
          ))}
        </aside>
      )}
    </section>
  );
}
