"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { primaryNavigation } from "@/data/navigation";
import departments from "@/data/departments";
import siteInfo from "@/data/siteInfo";

const menuItems = primaryNavigation.map((item) => item.id === "departments" ? {
  ...item,
  children: [
    { label: "Tous les départements", href: "/departements" },
    ...departments.map((department) => ({ label: department.name, href: department.href, theme: department.theme })),
  ],
} : item);

export default function Navbar() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRefs = useRef({});
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openDropdown) return undefined;
    const onClick = (event) => {
      if (!dropdownRefs.current[openDropdown]?.contains(event.target)) setOpenDropdown(null);
    };
    document.addEventListener("pointerdown", onClick);
    return () => document.removeEventListener("pointerdown", onClick);
  }, [openDropdown]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="gs-site-header">
      <a href="#contenu" className="gs-skip-link">Aller au contenu</a>
      <div className="gs-topbar d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          <span>Un groupe, cinq expertises · Conakry, Guinée</span>
          <div className="d-flex align-items-center gap-4">
            <a href={`tel:${siteInfo.phones[0].replace(/\s/g, "")}`}><i className="bi bi-telephone me-2" aria-hidden="true" />{siteInfo.phones[0]}</a>
            <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
          </div>
        </div>
      </div>
      <nav className={`navbar navbar-expand-lg navbar-light gs-navbar ${scrolled ? "scrolled" : ""}`} aria-label="Navigation principale" onKeyDown={(event) => {
        if (event.key === "Escape" && !openDropdown && menuOpen) {
          closeMenu();
          toggleRef.current?.focus();
        }
      }}>
        <div className="container">
          <Link className="navbar-brand gs-brand" href="/" onClick={closeMenu}><BrandLogo compact /></Link>
          <button ref={toggleRef} className="navbar-toggler" type="button" aria-controls="gsNavbar" aria-expanded={menuOpen} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => {
            setMenuOpen((value) => !value);
            setOpenDropdown(null);
          }}><i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} aria-hidden="true" /></button>
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="gsNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {menuItems.map((item) => {
                const active = item.children ? item.children.some((child) => pathname === child.href) : pathname === item.href;
                if (!item.children) return (
                  <li className="nav-item" key={item.href}>
                    <Link className={`nav-link gs-nav-link ${active ? "active" : ""}`} href={item.href} aria-current={active ? "page" : undefined} onClick={closeMenu}>{item.label}</Link>
                  </li>
                );
                const isOpen = openDropdown === item.id;
                return (
                  <li className="nav-item dropdown" key={item.id} ref={(node) => { dropdownRefs.current[item.id] = node; }} onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown((current) => current === item.id ? null : current);
                  }} onKeyDown={(event) => {
                    if (event.key === "Escape" && isOpen) {
                      event.stopPropagation();
                      setOpenDropdown(null);
                      dropdownRefs.current[item.id]?.querySelector("button")?.focus();
                    }
                  }}>
                    <button type="button" className={`nav-link gs-nav-link ${active ? "active" : ""}`} aria-controls={`gs-${item.id}-menu`} aria-expanded={isOpen} onClick={() => setOpenDropdown(isOpen ? null : item.id)}>
                      {item.label}<i className={`bi bi-chevron-down ms-2 gs-caret ${isOpen ? "open" : ""}`} aria-hidden="true" />
                    </button>
                    <ul id={`gs-${item.id}-menu`} className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                      {item.children.map((child) => <li key={child.href}>
                        <Link className={`dropdown-item ${child.theme || ""} ${pathname === child.href ? "active" : ""}`} href={child.href} aria-current={pathname === child.href ? "page" : undefined} onClick={closeMenu}>
                          {child.theme && <span className="gs-dept-dot" aria-hidden="true" />}{child.label}
                        </Link>
                      </li>)}
                    </ul>
                  </li>
                );
              })}
              <li className="nav-item mt-3 mt-lg-0 ms-lg-3">
                <Link className="btn btn-gs-primary" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={closeMenu}>Nous contacter<i className="bi bi-arrow-up-right ms-2" aria-hidden="true" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
