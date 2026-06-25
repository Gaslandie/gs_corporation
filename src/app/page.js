import HeroCarousel from "@/components/sections/HeroCarousel";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactCTA from "@/components/sections/ContactCTA";
import DepartmentCard from "@/components/cards/DepartmentCard";
import ServiceCard from "@/components/cards/ServiceCard";
import departments from "@/data/departments";
import departmentDetails from "@/data/departmentDetails";
import siteInfo from "@/data/siteInfo";
import home from "@/data/home";

// Slides du hero : 1 slide GS Corporation + 1 slide par département (avec sa photo).
const heroSlides = [
  {
    image: home.hero.image,
    eyebrow: "Groupe multisectoriel",
    title: home.hero.title,
    text: home.hero.subtitle,
    cta: home.hero.primaryAction,
  },
  ...Object.values(departmentDetails).map((dept) => ({
    image: dept.heroImage,
    eyebrow: "Nos départements",
    title: dept.name,
    text: dept.tagline,
    cta: { label: `Découvrir ${dept.name}`, href: `/${dept.slug}` },
  })),
];

// Page d'accueil GS Corporation.
// Couleurs : rouge / bleu marine / gris / blanc du logo (le rouge est réservé
// aux zones d'action — hero, slogan, contact). Navbar et Footer sont globaux
// (voir src/app/layout.js).
export default function Home() {
  return (
    <main>
      {/* Hero : carrousel de départements */}
      <HeroCarousel slides={heroSlides} infoBlocks={home.hero.infoBlocks} />

      {/* Présentation */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-7">
              <SectionTitle
                eyebrow={home.presentation.eyebrow}
                title={home.presentation.title}
                center={false}
              />
              <p className="fs-5 text-secondary mb-0">{home.presentation.text}</p>
            </div>
            <div className="col-12 col-lg-5">
              <div className="gs-monogram">
                <span>GS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos départements */}
      <section className="section-padding section-muted gs-navy-accent">
        <div className="container">
          <SectionTitle
            eyebrow="Nos départements"
            title="Un groupe, plusieurs expertises"
            subtitle="GS Corporation rassemble plusieurs sociétés complémentaires au service du développement."
          />
          <div className="row g-4">
            {departments.map((department) => (
              <div className="col-12 col-md-6 col-lg-4" key={department.slug}>
                <DepartmentCard department={department} themed={false} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="section-padding gs-navy-accent">
        <div className="container">
          <SectionTitle
            eyebrow={home.engagements.eyebrow}
            title={home.engagements.title}
            subtitle={home.engagements.text}
          />
          <div className="row g-4">
            {home.engagements.items.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                <ServiceCard service={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu : biens immobiliers, engins & véhicules, réalisations */}
      <section className="section-padding section-muted gs-navy-accent">
        <div className="container">
          <SectionTitle eyebrow={home.apercu.eyebrow} title={home.apercu.title} />
          <div className="row g-4">
            {home.apercu.items.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                <ServiceCard service={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slogan */}
      <section className="section-padding text-white text-center" style={{ backgroundColor: "var(--gs-bleu-marine)" }}>
        <div className="container">
          <i className="bi bi-quote display-3" style={{ color: "var(--gs-rouge)" }} aria-hidden="true"></i>
          <p className="fs-2 fw-light fst-italic mx-auto mb-0" style={{ maxWidth: "820px" }}>
            {siteInfo.slogan}
          </p>
        </div>
      </section>

      {/* CTA contact */}
      <ContactCTA />
    </main>
  );
}
