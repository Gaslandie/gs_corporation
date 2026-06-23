import Link from "next/link";
import navigation from "@/data/navigation";
import departments from "@/data/departments";
import siteInfo from "@/data/siteInfo";

// Pied de page : coordonnées, navigation et liste des départements.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white pt-5 pb-4 mt-auto" style={{ backgroundColor: "var(--gs-bleu-marine)" }}>
      <div className="container">
        <div className="row g-4">
          {/* Présentation */}
          <div className="col-12 col-lg-4">
            <h5 className="fw-bold">
              <i className="bi bi-buildings me-2" aria-hidden="true"></i>
              {siteInfo.name}
            </h5>
            <p className="text-white-50 mb-0">{siteInfo.slogan}</p>
          </div>

          {/* Navigation */}
          <div className="col-6 col-lg-4">
            <h6 className="fw-semibold text-uppercase mb-3">Navigation</h6>
            <ul className="list-unstyled">
              {navigation.map((item) => (
                <li className="mb-2" key={item.href}>
                  <Link className="link-light text-decoration-none" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordonnées */}
          <div className="col-6 col-lg-4">
            <h6 className="fw-semibold text-uppercase mb-3">Contact</h6>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2" aria-hidden="true"></i>
                {siteInfo.address}
              </li>
              {siteInfo.phones.map((phone) => (
                <li className="mb-2" key={phone}>
                  <i className="bi bi-telephone me-2" aria-hidden="true"></i>
                  {phone}
                </li>
              ))}
              <li className="mb-2">
                <i className="bi bi-envelope me-2" aria-hidden="true"></i>
                {siteInfo.email}
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-light opacity-25 my-4" />

        <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
          {departments.map((dept) => (
            <Link
              key={dept.slug}
              href={dept.href}
              className="badge rounded-pill text-decoration-none px-3 py-2 text-white-50 border border-light border-opacity-25"
            >
              {dept.name}
            </Link>
          ))}
        </div>

        <p className="text-center text-white-50 small mb-0">
          © {year} {siteInfo.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
