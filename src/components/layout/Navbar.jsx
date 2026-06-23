import Link from "next/link";
import navigation from "@/data/navigation";
import siteInfo from "@/data/siteInfo";

// Barre de navigation principale.
// Le menu responsive (toggler) fonctionne grâce au bundle JS de Bootstrap
// chargé globalement dans le layout (BootstrapClient).
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm" style={{ backgroundColor: "var(--gs-bleu-marine)" }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/">
          <i className="bi bi-buildings me-2" aria-hidden="true"></i>
          {siteInfo.name}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#gsNavbar"
          aria-controls="gsNavbar"
          aria-expanded="false"
          aria-label="Ouvrir le menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="gsNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navigation.map((item) => (
              <li className="nav-item" key={item.href}>
                <Link className="nav-link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
