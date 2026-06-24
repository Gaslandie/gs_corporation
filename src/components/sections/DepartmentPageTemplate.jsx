import Link from "next/link";
import SectionTitle from "@/components/sections/SectionTitle";
import ServiceCard from "@/components/cards/ServiceCard";
import ContactCTA from "@/components/sections/ContactCTA";

// Modèle réutilisable pour les pages département.
// Toutes les sections sont rendues seulement si la donnée correspondante existe,
// afin que le même composant serve à tous les départements.
// La classe de thème (data.theme) pilote les couleurs (primary / accent).
export default function DepartmentPageTemplate({ data }) {
  const {
    name,
    theme,
    tagline,
    heroIntro,
    presentation,
    expertise = [],
    subjects = [],
    values = [],
    whyChoose = [],
    quote,
  } = data;

  return (
    <main className={theme}>
      {/* Hero / en-tête du département */}
      <section className="section-padding text-white text-center" style={{ backgroundColor: "var(--gs-primary)" }}>
        <div className="container">
          {tagline && (
            <span className="badge rounded-pill mb-3 px-3 py-2 gs-badge-accent">{tagline}</span>
          )}
          <h1 className="fw-bold mb-0">{name}</h1>
          {heroIntro && (
            <p className="lead text-white-50 mx-auto mt-3" style={{ maxWidth: "760px" }}>
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

      {/* Présentation */}
      {presentation && (
        <section className="section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9 text-center">
                <SectionTitle eyebrow="Présentation" title={`À propos de ${name}`} />
                <p className="fs-5 text-secondary mb-0">{presentation}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Domaines d'expertise */}
      {expertise.length > 0 && (
        <section className="section-padding section-muted">
          <div className="container gs-accent-badges">
            <SectionTitle eyebrow="Notre savoir-faire" title="Domaines d’expertise" />
            <div className="row g-4">
              {expertise.map((item) => (
                <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                  <ServiceCard service={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Liste de services / sujets */}
      {subjects.length > 0 && (
        <section className="section-padding">
          <div className="container text-center">
            <SectionTitle eyebrow="Programmes" title="Nos principaux sujets" />
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {subjects.map((subject) => (
                <span className="gs-chip" key={subject}>
                  <i className="bi bi-check2-circle" aria-hidden="true"></i>
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Valeurs */}
      {values.length > 0 && (
        <section className="section-padding section-muted">
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
      )}

      {/* Pourquoi choisir */}
      {whyChoose.length > 0 && (
        <section className="section-padding">
          <div className="container gs-accent-badges">
            <SectionTitle eyebrow="Pourquoi nous" title={`Pourquoi choisir ${name} ?`} />
            <div className="row g-4">
              {whyChoose.map((item) => (
                <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                  <ServiceCard service={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
