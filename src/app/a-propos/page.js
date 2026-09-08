import { asset } from "@/lib/assetPath";
import Visual from "@/components/Visual";
import GroupVisual from "@/components/sections/GroupVisual";
import PageHeader from "@/components/sections/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import ServiceCard from "@/components/cards/ServiceCard";
import DepartmentCard from "@/components/cards/DepartmentCard";
import PrinciplesList from "@/components/sections/PrinciplesList";
import ContactCTA from "@/components/sections/ContactCTA";
import departments from "@/data/departments";
import about from "@/data/about";

export const metadata = {
  title: "À propos — GS Corporation",
  description:
    "À propos de GS Corporation : présentation, vision, engagements, domaines d’intervention et valeur ajoutée.",
};

export default function AProposPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      {/* En-tête de page */}
      <PageHeader
        image={about.header.image}
        eyebrow={about.header.eyebrow}
        title={about.header.title}
        subtitle={about.header.subtitle}
      />

      {/* Présentation */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-7">
              <SectionTitle
                eyebrow={about.presentation.eyebrow}
                title={about.presentation.title}
                center={false}
              />
              <p className="fs-5 text-secondary mb-4">{about.presentation.text}</p>
              <a href={asset("/D1.pdf")} className="gs-text-link" target="_blank" rel="noopener noreferrer"><i className="bi bi-file-earmark-pdf" aria-hidden="true" />Présentation du groupe (PDF)<span className="visually-hidden"> — nouvel onglet</span></a>
            </div>
            <div className="col-12 col-lg-5">
              <GroupVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Notre vision */}
      <section className="section-padding section-muted">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-7">
              <Visual image={about.vision.image} caption={about.vision.imageCaption} zoomable className="gs-story-photo gs-about-photo" sizes="(max-width: 991px) 100vw, 58vw" />
            </div>
            <div className="col-12 col-lg-5">
              <SectionTitle eyebrow={about.vision.eyebrow} title={about.vision.title} center={false} />
              <p className="lead text-secondary mb-0">{about.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-5">
              <SectionTitle
                eyebrow={about.engagements.eyebrow}
                title={about.engagements.title}
                subtitle={about.engagements.text}
                center={false}
              />
              <Visual image={about.engagements.image} caption={about.engagements.imageCaption} zoomable className="gs-story-photo gs-about-photo" sizes="(max-width: 991px) 100vw, 42vw" />
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <PrinciplesList items={about.engagements.items} />
            </div>
          </div>
        </div>
      </section>

      {/* Nos domaines d'intervention */}
      <section className="section-padding section-muted gs-navy-accent">
        <div className="container">
          <SectionTitle
            eyebrow="Nos départements"
            title="Nos domaines d’intervention"
            subtitle={about.domainesIntro}
            center={false}
          />
          <div className="gs-about-departments">
            {departments.map((department) => <DepartmentCard key={department.slug} department={department} ctaLabel="Explorer ce métier" />)}
          </div>
        </div>
      </section>

      {/* Valeur ajoutée */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow={about.valeurAjoutee.eyebrow}
            title={about.valeurAjoutee.title}
          />
          <div className="row g-4 justify-content-center">
            {about.valeurAjoutee.items.map((item) => (
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
