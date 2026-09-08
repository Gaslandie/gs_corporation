import { photos } from "@/data/media";
import PageHeader from "@/components/sections/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactCTA from "@/components/sections/ContactCTA";
import ProjectCard from "@/components/cards/ProjectCard";
import projects from "@/data/projects";
import { projectTopics } from "@/data/pageVisuals";
import ImageTopics from "@/components/sections/ImageTopics";

export const metadata = {
  title: "Nos réalisations — GS Corporation",
  description:
    "Exemples de projets et d’actions menés par GS Corporation à travers ses départements : consulting, logistique, immobilier, agrobusiness et forage.",
};

export default function RealisationsPage() {
  return (
    <main id="contenu" tabIndex={-1}>
      {/* En-tête de page */}
      <PageHeader
        image={photos.drillingTruck}
        eyebrow="Portfolio"
        title="Nos réalisations"
        subtitle="Découvrez les types de projets que nos expertises peuvent accompagner, à travers des exemples illustrés."
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
            title="Exemples de projets par métier"
            subtitle="Scénarios de démonstration : les projets, lieux et dates ci-dessous sont fictifs, dans l’attente de références client validées."
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
          <ImageTopics items={projectTopics} />
        </div>
      </section>

      {/* CTA contact */}
      <ContactCTA image={photos.skyline} />
    </main>
  );
}
