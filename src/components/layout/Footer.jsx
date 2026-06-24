import Link from "next/link";
import navigation from "@/data/navigation";
import departments from "@/data/departments";
import siteInfo from "@/data/siteInfo";

// Pied de page : marque + réseaux, navigation, départements, coordonnées,
// et barre inférieure (copyright + retour en haut).
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gs-footer pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          {/* Marque + réseaux */}
          <div className="col-12 col-lg-4">
            <Link href="/" className="gs-brand d-inline-flex mb-3">
              <span className="gs-brand-mark">GS</span>
              <span className="gs-brand-text">GS CORPORATION</span>
            </Link>
            <p className="mb-3" style={{ maxWidth: "320px" }}>
              {siteInfo.slogan}
            </p>
            <div className="d-flex gap-2">
              <a
                className="gs-social"
                href={siteInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook" aria-hidden="true"></i>
              </a>
              <a
                className="gs-social"
                href={siteInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp" aria-hidden="true"></i>
              </a>
              <a className="gs-social" href={`mailto:${siteInfo.email}`} aria-label="Email">
                <i className="bi bi-envelope" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-6 col-lg-2">
            <h6 className="gs-footer-heading">Navigation</h6>
            <ul className="list-unstyled mb-0">
              {navigation.map((item) => (
                <li className="mb-2" key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Départements */}
          <div className="col-6 col-lg-3">
            <h6 className="gs-footer-heading">Départements</h6>
            <ul className="list-unstyled mb-0">
              {departments.map((d) => (
                <li className="mb-2" key={d.slug}>
                  <Link href={d.href}>{d.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordonnées */}
          <div className="col-12 col-lg-3">
            <h6 className="gs-footer-heading">Contact</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2 d-flex">
                <i className="bi bi-geo-alt me-2 mt-1" aria-hidden="true"></i>
                <span>{siteInfo.address}</span>
              </li>
              {siteInfo.phones.map((phone) => (
                <li className="mb-2" key={phone}>
                  <i className="bi bi-telephone me-2" aria-hidden="true"></i>
                  <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                </li>
              ))}
              <li className="mb-0">
                <i className="bi bi-envelope me-2" aria-hidden="true"></i>
                <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gs-footer-bottom mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="small mb-0">
            © {year} {siteInfo.name}. Tous droits réservés.
          </p>
          <a href="#" className="small gs-backtotop">
            Haut de page
            <i className="bi bi-arrow-up-short" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
