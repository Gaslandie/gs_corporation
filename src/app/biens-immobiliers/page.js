import PageHeader from "@/components/sections/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactCTA from "@/components/sections/ContactCTA";
import FilteredCatalog from "@/components/sections/FilteredCatalog";
import { photos, brands } from "@/data/media";
import properties from "@/data/properties";
import { propertyTopics } from "@/data/pageVisuals";
import ImageTopics from "@/components/sections/ImageTopics";

export const metadata = {
  title: "Biens immobiliers — GS Corporation",
  description:
    "Sélection de biens immobiliers proposés par GS Immobilier : villas, terrains, bâtiments commerciaux et appartements, à la vente ou à la location.",
};

const filters = [
  { label: "Tous" },
  { label: "Vente", field: "operation", values: ["Vente"] },
  { label: "Location", field: "operation", values: ["Location"] },
  { label: "Terrains", field: "type", values: ["Terrain", "Domaine"] },
  { label: "Bâtiments", field: "type", values: ["Bâtiment commercial"] },
  { label: "Résidentiel", field: "type", values: ["Villa", "Appartement", "Maison"] },
];

export default function BiensImmobiliersPage() {
  return (
    <main id="contenu" tabIndex={-1} className="theme-immobilier">
      {/* En-tête de page */}
      <PageHeader
        brand={brands.immobilier}
        image={photos.architecture}
        eyebrow="GS Immobilier"
        title="Biens immobiliers"
        subtitle="Découvrez une sélection de biens immobiliers proposés par GS Immobilier pour la vente, la location et les projets d’investissement."
      />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container">
          <p
            className="fs-5 text-secondary text-center mx-auto mb-0"
            style={{ maxWidth: "820px" }}
          >
            GS Immobilier accompagne ses clients dans la location et la vente de
            bâtiments et terrains, la gestion de biens, la construction, la
            rénovation et l’investissement immobilier.
          </p>
        </div>
      </section>

      {/* Filtres et grille des biens */}
      <section className="section-padding section-muted">
        <div className="container">
          <FilteredCatalog items={properties} filters={filters} kind="properties" />
        </div>
      </section>

      {/* Vous avez un projet immobilier ? */}
      <section className="section-padding gs-accent-badges">
        <div className="container">
          <SectionTitle
            eyebrow="Votre projet"
            title="Vous avez un projet immobilier ?"
            subtitle="Vous avez un projet immobilier en tête ? Parlez-nous de vos besoins, de vos rêves et de vos objectifs. Notre équipe est prête à vous guider à chaque étape de votre parcours immobilier."
          />
          <ImageTopics items={propertyTopics} />
        </div>
      </section>

      {/* CTA contact */}
      <ContactCTA image={photos.interior} />
    </main>
  );
}
