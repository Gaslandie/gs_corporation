import PageHeader from "@/components/sections/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactCTA from "@/components/sections/ContactCTA";
import EquipmentCard from "@/components/cards/EquipmentCard";
import equipments from "@/data/equipments";

export const metadata = {
  title: "Engins & véhicules — GS Corporation",
  description:
    "Engins lourds, véhicules et équipements proposés par GS Logistique pour vos travaux de terrassement, levage, transport et logistique.",
};

// Filtres visuels (statiques, non fonctionnels pour le moment).
const filters = ["Tous", "Engins lourds", "Véhicules", "Camions", "Équipements", "Disponibles"];

// Blocs « Des solutions pour vos travaux et transports ».
const solutions = [
  { icon: "bi-cone-striped", label: "Terrassement" },
  { icon: "bi-arrow-up-square", label: "Levage et manutention" },
  { icon: "bi-truck", label: "Transport et livraison" },
  { icon: "bi-buildings", label: "Travaux BTP et industriels" },
];

export default function EnginsVehiculesPage() {
  return (
    <main className="theme-logistique">
      {/* En-tête de page */}
      <PageHeader
        accentEyebrow
        eyebrow="GS Logistique"
        title="Engins & véhicules"
        subtitle="Découvrez une sélection d’engins lourds, véhicules et équipements proposés par GS Logistique pour accompagner vos travaux, transports et besoins opérationnels."
      />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container">
          <p
            className="fs-5 text-secondary text-center mx-auto mb-0"
            style={{ maxWidth: "860px" }}
          >
            GS Logistique met à votre disposition des modèles variés de véhicules
            pour vos courses, transports et autres besoins, ainsi que des engins
            modernes nécessaires aux travaux de terrassement, d’assainissement, de
            levage, de manutention et autres opérations dans les secteurs du BTP,
            industriels et portuaires.
          </p>
        </div>
      </section>

      {/* Filtres visuels + grille des engins et véhicules */}
      <section className="section-padding section-muted">
        <div className="container">
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
            {filters.map((filter, index) => (
              <button
                type="button"
                key={filter}
                className={`btn ${index === 0 ? "btn-gs-accent" : "btn-gs-outline"}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {equipments.map((equipment) => (
              <div className="col-12 col-md-6 col-lg-4" key={equipment.id}>
                <EquipmentCard equipment={equipment} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Des solutions pour vos travaux et transports */}
      <section className="section-padding gs-accent-badges">
        <div className="container">
          <SectionTitle
            eyebrow="Nos solutions"
            title="Des solutions pour vos travaux et transports"
            subtitle="Nous mettons à votre disposition des engins et véhicules adaptés pour répondre aux besoins de terrassement, d’assainissement, de levage, de manutention, de transport et de logistique."
          />
          <div className="row g-4 justify-content-center">
            {solutions.map((solution) => (
              <div className="col-6 col-md-3" key={solution.label}>
                <div className="card-gs text-center h-100">
                  <span className="gs-icon-badge mb-3">
                    <i className={`bi ${solution.icon}`} aria-hidden="true"></i>
                  </span>
                  <p className="fw-semibold mb-0" style={{ color: "var(--gs-bleu-marine)" }}>
                    {solution.label}
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
