import PageHeader from "@/components/sections/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactCTA from "@/components/sections/ContactCTA";
import DepartmentCard from "@/components/cards/DepartmentCard";
import departments from "@/data/departments";

export const metadata = {
  title: "Nos départements — GS Corporation",
  description:
    "Découvrez les départements spécialisés de GS Corporation : consulting, logistique, immobilier, agrobusiness et forage.",
};

// Points clés du bloc « expertise multisectorielle ».
const expertisePoints = [
  { icon: "bi-sliders2", label: "Solutions sur mesure" },
  { icon: "bi-lightbulb", label: "Innovation constante" },
  { icon: "bi-stars", label: "Excellence opérationnelle" },
];

export default function DepartementsPage() {
  return (
    <main>
      {/* 1. En-tête de page */}
      <PageHeader
        eyebrow="Le groupe"
        title="Nos départements"
        subtitle="GS Corporation intervient dans plusieurs secteurs à travers des départements spécialisés, chacun dédié à des solutions adaptées aux besoins de ses clients."
      />

      {/* 2. Introduction */}
      <section className="section-padding">
        <div className="container">
          <p
            className="fs-5 text-secondary text-center mx-auto mb-0"
            style={{ maxWidth: "760px" }}
          >
            Notre entreprise est dédiée à la création de valeur à long terme pour
            nos clients grâce à une expertise approfondie et à des solutions
            innovantes.
          </p>
        </div>
      </section>

      {/* 3. Grille des départements */}
      <section className="section-padding section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="Nos métiers"
            title="Cinq départements, une même exigence"
            subtitle="Chaque département apporte une expertise dédiée à son secteur d’activité."
          />
          <div className="row g-4">
            {departments.map((department) => (
              <div className="col-12 col-md-6 col-lg-4" key={department.slug}>
                <DepartmentCard
                  department={department}
                  ctaLabel="Découvrir"
                  ctaAsButton
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bloc expertise multisectorielle */}
      <section className="section-padding gs-navy-accent">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-7">
              <SectionTitle
                eyebrow="Notre force"
                title="Une expertise au service de plusieurs secteurs"
                center={false}
              />
              <p className="fs-5 text-secondary mb-0">
                Chez GS Corporation, nous sommes déterminés à fournir des
                solutions sur mesure, à innover constamment et à maintenir des
                normes élevées de qualité et de durabilité dans tout ce que nous
                faisons.
              </p>
            </div>
            <div className="col-12 col-lg-5">
              <ul className="list-unstyled mb-0">
                {expertisePoints.map((point) => (
                  <li className="d-flex align-items-center mb-3" key={point.label}>
                    <span
                      className="gs-icon-badge me-3"
                      style={{ width: "2.75rem", height: "2.75rem", fontSize: "1.25rem" }}
                    >
                      <i className={`bi ${point.icon}`} aria-hidden="true"></i>
                    </span>
                    <span className="fw-semibold" style={{ color: "var(--gs-bleu-marine)" }}>
                      {point.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA contact */}
      <ContactCTA />
    </main>
  );
}
