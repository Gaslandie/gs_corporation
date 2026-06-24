import Link from "next/link";
import SectionTitle from "@/components/sections/SectionTitle";
import ServiceCard from "@/components/cards/ServiceCard";
import ContactCTA from "@/components/sections/ContactCTA";

// Modèle réutilisable pour les pages département.
// Chaque section est rendue seulement si la donnée existe → le même composant
// sert à tous les départements. La classe de thème (data.theme) pilote les
// couleurs (primary / accent). Les sections de corps alternent fond blanc /
// gris clair automatiquement, quel que soit le nombre de sections présentes.
export default function DepartmentPageTemplate({ data }) {
  const {
    name,
    theme,
    tagline,
    heroImage,
    heroIntro,
    presentation,
    highlight,
    cardSections = [],
    expertise = [],
    expertiseEyebrow = "Notre savoir-faire",
    expertiseTitle = "Domaines d’expertise",
    lists = [],
    values = [],
    whyChoose = [],
    whyChooseIntro,
    quote,
  } = data;

  // Sections de corps (entre le hero et la citation) : on les empile dans
  // l'ordre puis on leur applique un fond alterné (blanc / section-muted).
  const blocks = [];

  if (presentation) {
    blocks.push((bg) => (
      <section className={`section-padding ${bg}`} key="presentation">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 text-center">
              <SectionTitle eyebrow="Présentation" title={`À propos de ${name}`} />
              <p className="fs-5 text-secondary mb-0">{presentation}</p>
            </div>
          </div>
        </div>
      </section>
    ));
  }

  if (highlight) {
    blocks.push((bg) => (
      <section className={`section-padding ${bg}`} key="highlight">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <div className="card-gs gs-highlight d-flex flex-column flex-md-row align-items-md-center gap-3">
                <i
                  className={`bi ${highlight.icon || "bi-patch-check"} gs-highlight-icon`}
                  aria-hidden="true"
                ></i>
                <div>
                  {highlight.title && (
                    <h2 className="h4 fw-bold mb-2" style={{ color: "var(--gs-bleu-marine)" }}>
                      {highlight.title}
                    </h2>
                  )}
                  <p className="mb-0 text-secondary">{highlight.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ));
  }

  cardSections.forEach((sectionData, index) => {
    blocks.push((bg) => (
      <section className={`section-padding ${bg}`} key={`cards-${index}`}>
        <div className="container gs-accent-badges">
          <SectionTitle
            eyebrow={sectionData.eyebrow}
            title={sectionData.title}
            subtitle={sectionData.subtitle}
          />
          <div className="row g-4">
            {sectionData.items.map((item) => (
              <div className="col-12 col-sm-6 col-lg-3" key={item.title}>
                <ServiceCard service={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    ));
  });

  if (expertise.length > 0) {
    blocks.push((bg) => (
      <section className={`section-padding ${bg}`} key="expertise">
        <div className="container gs-accent-badges">
          <SectionTitle eyebrow={expertiseEyebrow} title={expertiseTitle} />
          <div className="row g-4">
            {expertise.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                <ServiceCard service={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    ));
  }

  lists.forEach((list, index) => {
    blocks.push((bg) => (
      <section className={`section-padding ${bg}`} key={`list-${index}`}>
        <div className="container text-center">
          <SectionTitle eyebrow={list.eyebrow} title={list.title} subtitle={list.subtitle} />
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {list.items.map((item) => (
              <span className="gs-chip" key={item}>
                <i className={`bi ${list.icon || "bi-check2-circle"}`} aria-hidden="true"></i>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    ));
  });

  if (values.length > 0) {
    blocks.push((bg) => (
      <section className={`section-padding ${bg}`} key="values">
        <div className="container gs-accent-badges">
          <SectionTitle eyebrow="Nos valeurs" title="Ce qui nous anime" />
          <div className="row g-4 justify-content-center">
            {values.map((value) => (
              <div className="col-6 col-md-3" key={value.label}>
                <div className="card-gs text-center h-100">
                  <span className="gs-icon-badge mb-3">
                    <i className={`bi ${value.icon}`} aria-hidden="true"></i>
                  </span>
                  <p className="fw-semibold mb-0" style={{ color: "var(--gs-bleu-marine)" }}>
                    {value.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ));
  }

  if (whyChoose.length > 0) {
    blocks.push((bg) => (
      <section className={`section-padding ${bg}`} key="why">
        <div className="container gs-accent-badges">
          <SectionTitle
            eyebrow="Pourquoi nous"
            title={`Pourquoi choisir ${name} ?`}
            subtitle={whyChooseIntro}
          />
          <div className="row g-4">
            {whyChoose.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                <ServiceCard service={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    ));
  }

  // Hero : photo de fond + overlay si heroImage, sinon aplat de couleur du thème.
  const heroClass = `section-padding text-white text-center${heroImage ? " gs-dept-hero" : ""}`;
  const heroStyle = heroImage
    ? { "--gs-hero-image": `url(${heroImage})` }
    : { backgroundColor: "var(--gs-primary)" };

  return (
    <main className={theme}>
      {/* Hero / en-tête du département */}
      <section className={heroClass} style={heroStyle}>
        <div className="container">
          <h1 className="fw-bold mb-0">{name}</h1>
          <div className="gs-accent-line mx-auto"></div>
          {tagline && (
            <p className="lead fw-semibold mx-auto mt-3 mb-0" style={{ maxWidth: "720px" }}>
              {tagline}
            </p>
          )}
          {heroIntro && (
            <p className="text-white-50 mx-auto mt-2" style={{ maxWidth: "680px" }}>
              {heroIntro}
            </p>
          )}
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            <Link className="btn btn-gs-accent" href="/contact">
              Nous contacter
            </Link>
            <Link className="btn btn-outline-light" href="/departements">
              Tous les départements
            </Link>
          </div>
        </div>
      </section>

      {/* Sections de corps (fond alterné) */}
      {blocks.map((render, index) => render(index % 2 === 0 ? "" : "section-muted"))}

      {/* Citation */}
      {quote && (
        <section className="section-padding text-white text-center" style={{ backgroundColor: "var(--gs-primary)" }}>
          <div className="container">
            <i className="bi bi-quote display-3 gs-quote-icon" aria-hidden="true"></i>
            <p className="fs-3 fw-light fst-italic mx-auto mb-0" style={{ maxWidth: "820px" }}>
              {quote}
            </p>
          </div>
        </section>
      )}

      {/* CTA contact */}
      <ContactCTA />
    </main>
  );
}
