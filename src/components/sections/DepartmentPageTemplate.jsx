import Link from "next/link";
import SectionTitle from "@/components/sections/SectionTitle";
import ServiceCard from "@/components/cards/ServiceCard";
import ContactCTA from "@/components/sections/ContactCTA";
import BrandLogo from "@/components/BrandLogo";
import Visual from "@/components/Visual";
import PrinciplesList from "@/components/sections/PrinciplesList";
import { asset } from "@/lib/assetPath";

export default function DepartmentPageTemplate({ data }) {
  const {
    name, theme, headline, intro, brand, cover, portrait, brochure, action,
    presentation, highlight, gallery = [], cardSections = [], expertise = [],
    expertiseEyebrow = "Notre savoir-faire", expertiseTitle = "Domaines d’expertise",
    lists = [], values = [], whyChoose = [], whyChooseIntro, quote,
    commitmentImage, contactImage,
  } = data;

  return (
    <main id="contenu" tabIndex={-1} className={theme}>
      <section className="gs-department-hero">
        <div className="container">
          <nav className="gs-breadcrumb" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link><span aria-hidden="true">/</span>
            <Link href="/departements">Départements</Link><span aria-hidden="true">/</span><span aria-current="page">{name}</span>
          </nav>
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <BrandLogo brand={brand} className="gs-department-hero-logo" />
              <span className="gs-eyebrow">{name}</span>
              <h1>{headline}</h1>
              <p className="lead text-secondary mt-3 mb-4">{intro}</p>
              <div className="d-flex flex-wrap gap-3">
                <Link className="btn btn-gs-accent" href={action.href}>{action.label}<i className="bi bi-arrow-right ms-2" aria-hidden="true" /></Link>
                <a className="btn btn-gs-outline" href="#prestations">Nos prestations</a>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <Visual image={cover} eager zoomable className="gs-department-cover" sizes="(max-width: 991px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <nav className="gs-department-subnav" aria-label={`Explorer ${name}`}>
        <div className="container d-flex flex-wrap gap-4 align-items-center">
          <a href="#presentation">Le département</a>
          <a href="#prestations">Nos prestations</a>
          {gallery.length > 0 && <a href="#en-images">En images</a>}
          {brochure && <a href={asset(brochure)} target="_blank" rel="noopener noreferrer" className="ms-md-auto"><i className="bi bi-file-earmark-pdf me-2" aria-hidden="true" />Consulter la brochure <span className="small">(PDF)</span><span className="visually-hidden"> — nouvel onglet</span></a>}
        </div>
      </nav>

      <section id="presentation" className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            {portrait && <div className="col-12 col-lg-5">
              <Visual image={portrait} zoomable className="gs-department-portrait" />
            </div>}
            <div className={portrait ? "col-12 col-lg-7" : "col-12 col-lg-10 mx-auto"}>
              <SectionTitle eyebrow="Notre mission" title={`À vos côtés avec ${name}`} center={false} />
              <p className="lead text-secondary">{presentation}</p>
              {highlight && <div className="gs-inline-highlight"><h3 className="h6">{highlight.title}</h3><p className="mb-0 text-secondary">{highlight.text}</p></div>}
              {values.length > 0 && <div className="d-flex flex-wrap gap-2 mt-4">{values.map((value) => <span className="gs-chip" key={value.label}><i className={`bi ${value.icon}`} aria-hidden="true" />{value.label}</span>)}</div>}
            </div>
          </div>
        </div>
      </section>

      <section id="prestations" className="section-padding section-muted">
        <div className="container gs-accent-badges">
          <SectionTitle eyebrow={expertiseEyebrow} title={expertiseTitle} subtitle="Une réponse adaptée à chaque étape de votre projet." center={false} />
          <div className="row g-4 justify-content-center">
            {expertise.map((item) => <div className="col-12 col-md-6 col-lg-4" key={item.title}><ServiceCard service={item} /></div>)}
          </div>
        </div>
      </section>

      {gallery.length > 0 && <section id="en-images" className="section-padding">
        <div className="container">
          <SectionTitle eyebrow="Nos métiers en images" title="Des besoins concrets. Des expertises dédiées." center={false} />
          <div className="row g-4">
            {gallery.map((item, index) => <div className="col-12 col-md-4" key={item.title}>
              <Visual image={item.image} zoomable className="gs-story-photo" />
              <div className="gs-story-heading"><span>{String(index + 1).padStart(2, "0")}</span><h3 className="h5 mb-0">{item.title}</h3></div>
              <p className="text-secondary mt-3 mb-0">{item.text}</p>
            </div>)}
          </div>
        </div>
      </section>}

      {lists.length > 0 && <section className="section-padding section-muted">
        <div className="container">
          <div className="row g-4">
            {lists.map((list) => <div className="col-12 col-lg" key={list.title}>
              <div className={`gs-list-panel ${list.image ? "gs-list-panel--photo" : ""} ${lists.length === 1 ? "gs-list-panel--wide" : ""}`}>
                {list.image && <Visual image={list.image} entrance={lists.length === 1} className="gs-list-photo" showSource={false} sizes="(max-width: 991px) 100vw, 50vw" />}
                <div className="gs-list-content"><span className="gs-eyebrow">{list.eyebrow}</span><h2 className="h4 mb-4">{list.title}</h2>
                {list.subtitle && <p>{list.subtitle}</p>}
                <ul className="list-unstyled mb-0">{list.items.map((item) => <li key={item}><i className={`bi ${list.icon || "bi-check2-circle"}`} aria-hidden="true" />{item}</li>)}</ul>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </section>}

      {cardSections.map((section) => <section className="section-padding" key={section.title}>
        <div className="container gs-accent-badges">
          <SectionTitle eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />
          <div className="row g-4">{section.items.map((item) => <div className="col-12 col-md-6 col-lg-3" key={item.title}><ServiceCard service={item} /></div>)}</div>
        </div>
      </section>)}

      {whyChoose.length > 0 && <section className="section-padding">
        <div className="container gs-accent-badges">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-5">
              <Visual image={commitmentImage} zoomable className="gs-editorial-photo" sizes="(max-width: 991px) 100vw, 42vw" />
            </div>
            <div className="col-12 col-lg-7">
              <SectionTitle eyebrow="Nos engagements" title={`Pourquoi choisir ${name} ?`} subtitle={whyChooseIntro} center={false} />
              <PrinciplesList items={whyChoose} />
            </div>
          </div>
        </div>
      </section>}

      <ContactCTA description={quote} image={contactImage} />
    </main>
  );
}
