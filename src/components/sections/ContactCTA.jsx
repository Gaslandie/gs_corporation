import Link from "next/link";
import siteInfo from "@/data/siteInfo";
import Visual from "@/components/Visual";
import { photos } from "@/data/media";

// Bandeau d'appel à l'action vers le contact, avec les coordonnées du groupe.
export default function ContactCTA({ image = photos.strategy, description = "Parlez-nous de votre besoin. Nous vous orientons vers l’expertise adaptée, avec un interlocuteur à votre écoute." }) {
  const mainPhone = siteInfo.phones[0];

  return (
    <section className="gs-contact-section">
      <div className="container">
        <div className="gs-contact-feature">
          <Visual image={image} className="gs-contact-photo" showSource={false} sizes="(max-width: 991px) 100vw, 33vw" />
          <div className="gs-contact-panel">
            <div className="row g-4 align-items-center">
              <div className="col-12">
                <span className="gs-eyebrow">Construisons la suite</span>
                <h2>Faisons avancer votre projet.</h2>
                <p>{description}</p>
              </div>
              <div className="col-12">
                <div className="gs-contact-actions">
                  <Link className="btn btn-gs-light" href="/contact">Parlons de votre projet<i className="bi bi-arrow-up-right ms-3" aria-hidden="true" /></Link>
                  <a className="gs-contact-phone" href={`tel:${mainPhone.replace(/\s/g, "")}`}><i className="bi bi-telephone me-2" aria-hidden="true" />{mainPhone}</a>
                </div>
              </div>
            </div>
            <div className="gs-contact-details">
              <span><i className="bi bi-geo-alt me-2" aria-hidden="true" />{siteInfo.address}</span>
              <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}<i className="bi bi-arrow-up-right ms-2" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
