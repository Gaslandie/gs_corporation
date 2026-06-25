"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { asset } from "@/lib/assetPath";

// Carrousel du hero d'accueil : défile automatiquement d'un département à
// l'autre (chacun avec sa photo), avec flèches ‹ ›, points, et pause au survol.
// Le bloc rouge d'infos reste constant au-dessus des slides.
export default function HeroCarousel({ slides = [], infoBlocks = [], interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const goTo = (i) => setIndex(((i % count) + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Défilement automatique (en pause au survol).
  useEffect(() => {
    if (count <= 1 || paused) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [count, interval, paused]);

  return (
    <section
      className="gs-hero-carousel text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrousel"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={`gs-hero-slide${i === index ? " is-active" : ""}`}
          style={{ "--gs-hero-image": `url(${asset(slide.image)})` }}
          aria-hidden={i === index ? undefined : true}
        >
          <div className="container text-center gs-hero__content">
            {slide.eyebrow && (
              <span
                className="badge rounded-pill mb-3 px-3 py-2"
                style={{ backgroundColor: "var(--gs-rouge)" }}
              >
                {slide.eyebrow}
              </span>
            )}

            <h1 className="gs-hero__title fw-bold">{slide.title}</h1>

            {slide.text && (
              <p className="gs-hero__subtitle fw-semibold mx-auto mt-3 mb-0">
                {slide.text}
              </p>
            )}

            {slide.cta && (
              <div className="mt-4">
                <Link className="btn btn-gs-primary" href={slide.cta.href} tabIndex={i === index ? 0 : -1}>
                  {slide.cta.label}
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Flèches de navigation */}
      {count > 1 && (
        <>
          <button
            type="button"
            className="gs-hero-arrow gs-hero-arrow--prev"
            onClick={prev}
            aria-label="Département précédent"
          >
            <i className="bi bi-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            className="gs-hero-arrow gs-hero-arrow--next"
            onClick={next}
            aria-label="Département suivant"
          >
            <i className="bi bi-chevron-right" aria-hidden="true"></i>
          </button>
        </>
      )}

      {/* Points indicateurs */}
      {count > 1 && (
        <div className="gs-hero-dots">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              className={`gs-hero-dot${i === index ? " is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Aller au slide ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            ></button>
          ))}
        </div>
      )}

      {/* Bloc d'infos rouge (constant sur tous les slides) */}
      {infoBlocks.length > 0 && (
        <aside className="gs-hero__infobox">
          {infoBlocks.map((block) => (
            <div className="gs-hero__infoitem" key={block.title}>
              <p className="gs-hero__infotitle">
                {block.icon && <i className={`bi ${block.icon} me-2`} aria-hidden="true"></i>}
                {block.title}
              </p>
              <p className="gs-hero__infotext">{block.text}</p>
            </div>
          ))}
        </aside>
      )}
    </section>
  );
}
