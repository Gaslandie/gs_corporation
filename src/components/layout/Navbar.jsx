"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navigation from "@/data/navigation";
import departments from "@/data/departments";
import siteInfo from "@/data/siteInfo";

// Barre de navigation principale (UX pro) :
// - barre utilitaire (téléphone, email, réseaux) ;
// - logo monogramme + état actif des liens ;
// - menu déroulant « Départements » ;
// - bouton CTA « Nous contacter » ;
// - ombre au défilement et menu mobile qui se ferme automatiquement.
export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const deptRef = useRef(null);

  // Liens principaux (Contact est rendu à part comme bouton CTA).
  const mainLinks = navigation.filter((item) => item.href !== "/contact");

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href;
  const deptActive =
    pathname === "/departements" || departments.some((d) => pathname === d.href);

  // Ombre de la navbar au défilement.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le dropdown lors d'un clic à l'extérieur.
  useEffect(() => {
    if (!deptOpen) return undefined;
    const onClick = (event) => {
      if (deptRef.current && !deptRef.current.contains(event.target)) {
        setDeptOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [deptOpen]);

  // Ferme le menu mobile et le dropdown (appelé à chaque navigation).
  const closeMenu = () => {
    setMenuOpen(false);
    setDeptOpen(false);
  };

  return (
    <header>
      {/* Barre utilitaire */}
      <div className="gs-topbar d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-4">
            <a href={`tel:${siteInfo.phones[0].replace(/\s/g, "")}`}>
              <i className="bi bi-telephone me-1" aria-hidden="true"></i>
              {siteInfo.phones[0]}
            </a>
            <a href={`mailto:${siteInfo.email}`}>
              <i className="bi bi-envelope me-1" aria-hidden="true"></i>
              {siteInfo.email}
            </a>
            <span>
              <i className="bi bi-geo-alt me-1" aria-hidden="true"></i>
              {siteInfo.address}
            </span>
          </div>
          <div className="d-flex align-items-center gap-3 gs-topbar-social">
            <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="bi bi-facebook" aria-hidden="true"></i>
            </a>
            <a href={siteInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="bi bi-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar principale */}
      <nav className={`navbar navbar-expand-lg navbar-dark gs-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link className="navbar-brand gs-brand" href="/" onClick={closeMenu}>
            <span className="gs-brand-mark">GS</span>
            <span className="gs-brand-text">GS CORPORATION</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="gsNavbar"
            aria-expanded={menuOpen}
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="gsNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {mainLinks.map((item) =>
                item.href === "/departements" ? (
                  <li className="nav-item dropdown" key={item.href} ref={deptRef}>
                    <button
                      type="button"
                      className={`nav-link gs-nav-link ${deptActive ? "active" : ""}`}
                      aria-expanded={deptOpen}
                      onClick={() => setDeptOpen((value) => !value)}
                    >
                      {item.label}
                      <i className={`bi bi-chevron-down ms-1 gs-caret ${deptOpen ? "open" : ""}`} aria-hidden="true"></i>
                    </button>
                    <ul className={`dropdown-menu ${deptOpen ? "show" : ""}`}>
                      <li>
                        <Link
                          className={`dropdown-item ${pathname === "/departements" ? "active" : ""}`}
                          href="/departements"
                          onClick={closeMenu}
                        >
                          Tous les départements
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      {departments.map((d) => (
                        <li key={d.slug}>
                          <Link
                            className={`dropdown-item ${pathname === d.href ? "active" : ""}`}
                            href={d.href}
                            onClick={closeMenu}
                          >
                            {d.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item" key={item.href}>
                    <Link
                      className={`nav-link gs-nav-link ${isActive(item.href) ? "active" : ""}`}
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}

              <li className="nav-item mt-2 mt-lg-0 ms-lg-3">
                <Link className="btn btn-gs-primary" href="/contact" onClick={closeMenu}>
                  <i className="bi bi-chat-dots me-2" aria-hidden="true"></i>
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
