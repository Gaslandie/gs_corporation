import Link from "next/link";
import siteInfo from "@/data/siteInfo";

// Bandeau d'appel à l'action vers le contact, avec les coordonnées du groupe.
export default function ContactCTA() {
  const mainPhone = siteInfo.phones[0];

  return (
    <section className="section-padding section-muted">
      <div className="container">
        <div className="card-gs">
          <div className="row g-4 align-items-center">
            {/* Texte + coordonnées */}
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <h2 className="fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
                Un projet en tête&nbsp;?
              </h2>
              <p className="text-secondary mt-2">
                {siteInfo.slogan} Contactez {siteInfo.name} pour échanger sur vos besoins.
              </p>

              <ul className="list-unstyled mb-0 mt-3">
                <li className="mb-2">
                  <i className="bi bi-geo-alt me-2" style={{ color: "var(--gs-primary)" }} aria-hidden="true"></i>
                  {siteInfo.address}
                </li>
                <li className="mb-2">
                  <i className="bi bi-telephone me-2" style={{ color: "var(--gs-primary)" }} aria-hidden="true"></i>
                  {siteInfo.phones.join(" / ")}
                </li>
                <li className="mb-0">
                  <i className="bi bi-envelope me-2" style={{ color: "var(--gs-primary)" }} aria-hidden="true"></i>
                  <a className="link-dark text-decoration-none" href={`mailto:${siteInfo.email}`}>
                    {siteInfo.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Boutons */}
            <div className="col-12 col-lg-5 text-center text-lg-end">
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-end">
                <Link className="btn btn-gs-primary" href="/contact">
                  <i className="bi bi-chat-dots me-2" aria-hidden="true"></i>
                  Nous contacter
                </Link>
                <a className="btn btn-gs-outline" href={`tel:${mainPhone.replace(/\s/g, "")}`}>
                  <i className="bi bi-telephone me-2" aria-hidden="true"></i>
                  Appeler
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
