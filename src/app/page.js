import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SectionTitle from "@/components/sections/SectionTitle";
import ContactCTA from "@/components/sections/ContactCTA";
import DepartmentCard from "@/components/cards/DepartmentCard";
import departments from "@/data/departments";
import siteInfo from "@/data/siteInfo";

// Page d'accueil TEMPORAIRE : sert à valider les composants et le design system.
// Le vrai design de l'accueil sera réalisé dans une prochaine étape.
export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection
        eyebrow="Groupe multisectoriel"
        title={siteInfo.name}
        subtitle={siteInfo.slogan}
        primaryAction={{ label: "Découvrir le groupe", href: "/departements" }}
        secondaryAction={{ label: "Nous contacter", href: "/contact" }}
      />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Nos départements"
            title="Un groupe, plusieurs expertises"
            subtitle="GS Corporation rassemble plusieurs sociétés complémentaires au service du développement."
          />

          <div className="row g-4">
            {departments.map((department) => (
              <div className="col-12 col-md-6 col-lg-4" key={department.slug}>
                <DepartmentCard department={department} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />

      <Footer />
    </>
  );
}
