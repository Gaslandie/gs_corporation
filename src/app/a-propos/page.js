import PageHeader from "@/components/sections/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import ServiceCard from "@/components/cards/ServiceCard";
import DepartmentCard from "@/components/cards/DepartmentCard";
import ContactCTA from "@/components/sections/ContactCTA";
import departments from "@/data/departments";
import siteInfo from "@/data/siteInfo";
import about from "@/data/about";

export const metadata = {
  title: "À propos — GS Corporation",
  description:
    "À propos de GS Corporation : présentation, vision, engagements, domaines d’intervention et valeur ajoutée.",
};

export default function AProposPage() {
  return (
    <main>
      {/* En-tête de page */}
      <PageHeader
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
              <p className="fs-5 text-secondary mb-0">{about.presentation.text}</p>
            </div>
            <div className="col-12 col-lg-5">
              <div className="gs-monogram">
                <span>GS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre vision */}
      <section className="section-padding section-muted">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-9">
              <span
                className="text-uppercase fw-semibold small d-block mb-2"
                style={{ color: "var(--gs-primary)", letterSpacing: "0.08em" }}
              >
                {about.vision.eyebrow}
              </span>
              <h2 className="fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
                {about.vision.title}
              </h2>
              <div
                className="gs-accent-line mx-auto mb-4"
                style={{ backgroundColor: "var(--gs-primary)" }}
              ></div>
              <p className="fs-4 fw-light text-secondary mb-0">{about.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow={about.engagements.eyebrow}
            title={about.engagements.title}
            subtitle={about.engagements.text}
          />
          <div className="row g-4">
            {about.engagements.items.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                <ServiceCard service={item} />
              </div>
            ))}
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

      {/* Slogan */}
      <section
        className="section-padding text-white text-center"
        style={{ backgroundColor: "var(--gs-bleu-marine)" }}
      >
        <div className="container">
          <i
            className="bi bi-quote display-3"
            style={{ color: "var(--gs-rouge)" }}
            aria-hidden="true"
          ></i>
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
