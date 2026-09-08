import PageHeader from "@/components/sections/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactCTA from "@/components/sections/ContactCTA";
import FilteredCatalog from "@/components/sections/FilteredCatalog";
import { photos, brands } from "@/data/media";
import equipments from "@/data/equipments";
import { equipmentTopics } from "@/data/pageVisuals";
import ImageTopics from "@/components/sections/ImageTopics";

export const metadata = {
  title: "Engins & véhicules — GS Corporation",
  description:
    "Engins lourds, véhicules et équipements proposés par GS Logistique pour vos travaux de terrassement, levage, transport et logistique.",
};

const filters = [
  { label: "Tous" },
  { label: "Engins lourds", field: "category", values: ["Engin lourd"] },
  { label: "Véhicules", field: "category", values: ["Véhicule"] },
  { label: "Camions", field: "category", values: ["Camion"] },
  { label: "Équipements", field: "category", values: ["Équipement"] },
  { label: "Disponibles", field: "availability", values: ["Disponible"] },
];

export default function EnginsVehiculesPage() {
  return (
    <main id="contenu" tabIndex={-1} className="theme-logistique">
      {/* En-tête de page */}
      <PageHeader
        brand={brands.logistique}
        image={photos.fleet}
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

      {/* Filtres et grille des engins et véhicules */}
      <section className="section-padding section-muted">
        <div className="container">
          <FilteredCatalog items={equipments} filters={filters} kind="equipments" />
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
          <ImageTopics items={equipmentTopics} />
        </div>
      </section>

      {/* CTA contact */}
      <ContactCTA image={photos.logistics} />
    </main>
  );
}
