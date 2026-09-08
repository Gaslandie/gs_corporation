import Link from "next/link";
import Visual from "@/components/Visual";
import GroupVisual from "@/components/sections/GroupVisual";
import HeroCarousel from "@/components/sections/HeroCarousel";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactCTA from "@/components/sections/ContactCTA";
import DepartmentDirectory from "@/components/sections/DepartmentDirectory";
import PrinciplesList from "@/components/sections/PrinciplesList";
import ServiceCard from "@/components/cards/ServiceCard";
import departments from "@/data/departments";
import departmentDetails from "@/data/departmentDetails";
import home from "@/data/home";

// Slides du hero : 1 slide GS Corporation + 1 slide par département (avec sa photo).
const heroSlides = [
  {
    image: home.hero.image,
    eyebrow: "GS Corporation · Conakry, Guinée",
    label: "Le groupe",
    title: home.hero.title,
    text: home.hero.subtitle,
    cta: home.hero.primaryAction,
  },
  ...Object.values(departmentDetails).map((dept) => ({
    image: dept.cover,
    theme: dept.theme,
    label: dept.name.replace("GS ", "").replace("Les Foreurs de Guinée", "Forage"),
    eyebrow: dept.name,
    title: dept.headline,
    text: dept.intro,
    cta: { label: `Découvrir ${dept.name}`, href: `/${dept.slug}` },
  })),
];

// Page d'accueil GS Corporation.
// Couleurs : rouge / bleu marine / gris / blanc du logo (le rouge est réservé
// aux zones d'action — hero, slogan, contact). Navbar et Footer sont globaux
// (voir src/app/layout.js).
export default function Home() {
  return (
    <main id="contenu" tabIndex={-1}>
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
              <p className="fs-5 text-secondary mb-4">{home.presentation.text}</p>
              <Link className="gs-text-link" href="/a-propos">Découvrir le groupe<i className="bi bi-arrow-right" aria-hidden="true" /></Link>
            </div>
            <div className="col-12 col-lg-5">
              <GroupVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Nos départements */}
      <section className="section-padding section-muted gs-navy-accent">
        <div className="container">
          <SectionTitle
            eyebrow="Nos départements"
            title="Cinq expertises. Une même ambition."
            center={false}
            subtitle="GS Corporation rassemble plusieurs sociétés complémentaires au service du développement."
          />
          <DepartmentDirectory departments={departments} />
        </div>
      </section>

      {/* Nos engagements */}
      <section className="section-padding gs-navy-accent">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-5">
              <SectionTitle
                eyebrow={home.engagements.eyebrow}
                title={home.engagements.title}
                subtitle={home.engagements.text}
                center={false}
              />
              <Visual image={home.engagements.image} caption={home.engagements.imageCaption} zoomable className="gs-editorial-photo" sizes="(max-width: 991px) 100vw, 42vw" />
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <PrinciplesList items={home.engagements.items} />
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu : biens immobiliers, engins & véhicules, réalisations */}
      <section className="section-padding section-muted gs-navy-accent">
        <div className="container">
          <SectionTitle eyebrow={home.apercu.eyebrow} title={home.apercu.title} center={false} />
          <div className="row g-4">
            {home.apercu.items.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                <ServiceCard service={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <ContactCTA />
    </main>
  );
}
