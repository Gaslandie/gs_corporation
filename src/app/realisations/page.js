import PageHeader from "@/components/sections/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactCTA from "@/components/sections/ContactCTA";
import ProjectCard from "@/components/cards/ProjectCard";
import projects from "@/data/projects";

export const metadata = {
  title: "Nos réalisations — GS Corporation",
  description:
    "Exemples de projets et d’actions menés par GS Corporation à travers ses départements : consulting, logistique, immobilier, agrobusiness et forage.",
};

// Petits blocs « Des projets dans plusieurs secteurs ».
const secteurs = [
  { icon: "bi-mortarboard", label: "Consulting et formation" },
  { icon: "bi-truck", label: "Logistique et équipements" },
  { icon: "bi-buildings", label: "Immobilier et construction" },
  { icon: "bi-tree", label: "Agrobusiness et forage" },
];

export default function RealisationsPage() {
  return (
    <main>
      {/* En-tête de page */}
      <PageHeader
        eyebrow="Portfolio"
        title="Nos réalisations"
        subtitle="Découvrez quelques exemples de projets et d’actions menés à travers les différents départements de GS Corporation."
      />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container">
          <p
            className="fs-5 text-secondary text-center mx-auto mb-0"
            style={{ maxWidth: "820px" }}
          >
            À travers ses départements spécialisés, GS Corporation accompagne ses
            clients dans des projets variés, allant du consulting à la logistique,
            de l’immobilier à l’agrobusiness, jusqu’aux solutions d’accès à l’eau.
          </p>
        </div>
      </section>

      {/* Grille des réalisations */}
      <section className="section-padding section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="Projets"
            title="Quelques projets menés"
            subtitle="Un aperçu de réalisations représentatives de notre savoir-faire."
          />
          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-12 col-md-6 col-lg-4" key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Des projets dans plusieurs secteurs */}
      <section className="section-padding gs-navy-accent">
        <div className="container">
          <SectionTitle
            eyebrow="Multisectoriel"
            title="Des projets dans plusieurs secteurs"
            subtitle="La diversité de nos départements permet à GS Corporation d’intervenir sur des projets complémentaires, adaptés aux besoins des particuliers, entreprises, organisations et collectivités."
          />
          <div className="row g-4 justify-content-center">
            {secteurs.map((secteur) => (
              <div className="col-6 col-md-3" key={secteur.label}>
                <div className="card-gs text-center h-100">
                  <span className="gs-icon-badge mb-3">
                    <i className={`bi ${secteur.icon}`} aria-hidden="true"></i>
                  </span>
                  <p className="fw-semibold mb-0" style={{ color: "var(--gs-bleu-marine)" }}>
                    {secteur.label}
                  </p>
                </div>
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
