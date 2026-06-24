import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import SectionTitle from "@/components/sections/SectionTitle";
import departments from "@/data/departments";
import siteInfo from "@/data/siteInfo";
import contact from "@/data/contact";

export const metadata = {
  title: "Contact — GS Corporation",
  description:
    "Contactez GS Corporation : adresse, téléphones, email, WhatsApp et formulaire pour être orienté vers le bon département.",
};

// Options du champ « Département concerné » (GS Corporation + les 5 départements).
const departmentOptions = ["GS Corporation", ...departments.map((d) => d.name)];

export default function ContactPage() {
  return (
    <main>
      {/* En-tête de page */}
      <PageHeader
        eyebrow={contact.header.eyebrow}
        title={contact.header.title}
        subtitle={contact.header.subtitle}
      />

      {/* Blocs de contact */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="card-gs text-center h-100">
                <span className="gs-icon-badge mb-3 mx-auto">
                  <i className="bi bi-geo-alt" aria-hidden="true"></i>
                </span>
                <h2 className="h5 fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
                  Adresse
                </h2>
                <p className="text-secondary mb-0">{siteInfo.address}</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card-gs text-center h-100">
                <span className="gs-icon-badge mb-3 mx-auto">
                  <i className="bi bi-telephone" aria-hidden="true"></i>
                </span>
                <h2 className="h5 fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
                  Téléphones
                </h2>
                {siteInfo.phones.map((phone) => (
                  <p className="text-secondary mb-1" key={phone}>
                    <a className="link-dark text-decoration-none" href={`tel:${phone.replace(/\s/g, "")}`}>
                      {phone}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card-gs text-center h-100">
                <span className="gs-icon-badge mb-3 mx-auto">
                  <i className="bi bi-envelope" aria-hidden="true"></i>
                </span>
                <h2 className="h5 fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
                  Email
                </h2>
                <p className="text-secondary mb-0">
                  <a className="link-dark text-decoration-none" href={`mailto:${siteInfo.email}`}>
                    {siteInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire + localisation */}
      <section className="section-padding section-muted">
        <div className="container">
          <div className="row g-5">
            {/* Formulaire visuel (non fonctionnel pour le moment) */}
            <div className="col-12 col-lg-7">
              <div className="card-gs">
                <SectionTitle
                  eyebrow="Écrivez-nous"
                  title="Envoyer un message"
                  center={false}
                />
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label htmlFor="nom" className="form-label fw-semibold">
                        Nom complet
                      </label>
                      <input type="text" className="form-control" id="nom" placeholder="Votre nom complet" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="telephone" className="form-label fw-semibold">
                        Téléphone
                      </label>
                      <input type="tel" className="form-control" id="telephone" placeholder="+224 ..." />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email
                      </label>
                      <input type="email" className="form-control" id="email" placeholder="vous@exemple.com" />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="departement" className="form-label fw-semibold">
                        Département concerné
                      </label>
                      <select className="form-select" id="departement" defaultValue="">
                        <option value="" disabled>
                          Choisir un département
                        </option>
                        {departmentOptions.map((name) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-semibold">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows={5}
                        placeholder="Décrivez votre projet ou votre besoin..."
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="button" className="btn btn-gs-primary">
                        <i className="bi bi-send me-2" aria-hidden="true"></i>
                        Envoyer le message
                      </button>
                      <p className="text-secondary small mt-2 mb-0">
                        Formulaire de démonstration — l’envoi sera activé prochainement.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Localisation + WhatsApp + réseaux */}
            <div className="col-12 col-lg-5">
              <SectionTitle eyebrow="Où nous trouver" title="Notre localisation" center={false} />
              <div className="gs-map-placeholder mb-4">
                <i className="bi bi-geo-alt-fill mb-2" aria-hidden="true"></i>
                <p className="fw-semibold mb-0" style={{ color: "var(--gs-bleu-marine)" }}>
                  {siteInfo.address}
                </p>
                <p className="small mb-0">Carte à intégrer prochainement</p>
              </div>

              <a
                className="btn btn-success w-100 mb-3"
                href={contact.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp me-2" aria-hidden="true"></i>
                {contact.whatsapp.label}
              </a>

              <a
                className="btn btn-gs-outline w-100"
                href={contact.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook me-2" aria-hidden="true"></i>
                {contact.facebook.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Orientation par besoin */}
      <section className="section-padding gs-navy-accent">
        <div className="container">
          <SectionTitle
            eyebrow="Vous hésitez ?"
            title="Trouvez le bon département"
            subtitle="Identifiez votre besoin pour être orienté vers l’équipe la plus adaptée."
          />
          <div className="row g-4">
            {contact.orientation.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.departement}>
                <Link href={item.href} className="card-gs d-flex flex-column text-decoration-none h-100">
                  <span className="gs-icon-badge mb-3">
                    <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                  </span>
                  <p className="text-secondary flex-grow-1 mb-2">{item.besoin}</p>
                  <span className="fw-semibold" style={{ color: "var(--gs-primary)" }}>
                    {item.departement}
                    <i className="bi bi-arrow-right ms-1" aria-hidden="true"></i>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
