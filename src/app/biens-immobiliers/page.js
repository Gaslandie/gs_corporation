import PageHeader from "@/components/sections/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactCTA from "@/components/sections/ContactCTA";
import PropertyCard from "@/components/cards/PropertyCard";
import properties from "@/data/properties";

export const metadata = {
  title: "Biens immobiliers — GS Corporation",
  description:
    "Sélection de biens immobiliers proposés par GS Immobilier : villas, terrains, bâtiments commerciaux et appartements, à la vente ou à la location.",
};

// Filtres visuels (statiques, non fonctionnels pour le moment).
const filters = ["Tous", "Vente", "Location", "Terrains", "Bâtiments", "Résidentiel"];

// Blocs « Vous avez un projet immobilier ? ».
const projetBlocs = [
  { icon: "bi-key", label: "Acheter ou louer" },
  { icon: "bi-hammer", label: "Construire ou rénover" },
  { icon: "bi-graph-up-arrow", label: "Gérer ou valoriser un bien" },
];

export default function BiensImmobiliersPage() {
  return (
    <main className="theme-immobilier">
      {/* En-tête de page */}
      <PageHeader
        accentEyebrow
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

      {/* Filtres visuels + grille des biens */}
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
            {properties.map((property) => (
              <div className="col-12 col-md-6 col-lg-4" key={property.id}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
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
          <div className="row g-4 justify-content-center">
            {projetBlocs.map((bloc) => (
              <div className="col-12 col-md-4" key={bloc.label}>
                <div className="card-gs text-center h-100">
                  <span className="gs-icon-badge mb-3">
                    <i className={`bi ${bloc.icon}`} aria-hidden="true"></i>
                  </span>
                  <p className="fw-semibold mb-0" style={{ color: "var(--gs-bleu-marine)" }}>
                    {bloc.label}
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
