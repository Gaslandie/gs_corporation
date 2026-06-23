import Link from "next/link";
import siteInfo from "@/data/siteInfo";

// Bandeau d'appel à l'action vers le contact.
export default function ContactCTA() {
  return (
    <section className="section-padding section-muted">
      <div className="container">
        <div className="card-gs text-center">
          <h2 className="fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
            Un projet en tête&nbsp;?
          </h2>
          <p className="lead text-secondary mx-auto mt-2" style={{ maxWidth: "640px" }}>
            {siteInfo.slogan} Contactez {siteInfo.name} pour échanger sur vos besoins.
          </p>

          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            <Link className="btn btn-gs-primary btn-lg" href="/contact">
              <i className="bi bi-chat-dots me-2" aria-hidden="true"></i>
              Nous contacter
            </Link>
            <a className="btn btn-gs-outline btn-lg" href={`tel:${siteInfo.phones[0].replace(/\s/g, "")}`}>
              <i className="bi bi-telephone me-2" aria-hidden="true"></i>
              {siteInfo.phones[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
