"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Visual from "@/components/Visual";
import { interactionSettings } from "@/data/interactions";

// Navigation volontaire : aucune rotation imposée pendant la lecture.
export default function HeroCarousel({ slides = [], infoBlocks = [] }) {
  const [index, setIndex] = useState(0);
  const touchStart = useRef(null);
  if (!slides.length) return null;
  const slide = slides[index];
  const goTo = (next) => setIndex((next + slides.length) % slides.length);
  return (
    <section className={`gs-home-hero ${slide.theme || "theme-corporation"}`} aria-label="Découvrir GS Corporation" aria-roledescription="carrousel" onKeyDown={(event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key) || event.altKey || event.ctrlKey || event.metaKey) return;
      event.preventDefault();
      goTo(index + (event.key === "ArrowRight" ? 1 : -1));
    }}>
      <div className="gs-home-hero-stage" onTouchStart={(event) => {
        touchStart.current = event.touches.length === 1 && !event.target.closest("a, button") ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
      }} onTouchCancel={() => { touchStart.current = null; }} onTouchEnd={(event) => {
        if (!touchStart.current) return;
        const dx = event.changedTouches[0].clientX - touchStart.current.x;
        const dy = event.changedTouches[0].clientY - touchStart.current.y;
        touchStart.current = null;
        if (Math.abs(dx) > interactionSettings.swipeDistance && Math.abs(dx) > Math.abs(dy) * 1.5) goTo(index + (dx < 0 ? 1 : -1));
      }}>
        <Visual key={slide.image.src} image={slide.image} className="gs-home-hero-photo" eager sizes="100vw" />
        <div className="container gs-home-hero-content" aria-live="polite" aria-atomic="true">
          <span key={`eyebrow-${index}`} className="gs-eyebrow text-white gs-hero-enter">{slide.eyebrow}</span>
          <h1 key={`title-${index}`} className="gs-hero-enter">{slide.title}</h1>
          <p key={`text-${index}`} className="gs-hero-enter">{slide.text}</p>
          <div className="d-flex flex-wrap gap-3">
            <Link className={`btn ${index === 0 ? "btn-gs-primary" : "btn-gs-accent"}`} href={slide.cta.href}>
              {slide.cta.label}<i className="bi bi-arrow-right ms-2" aria-hidden="true" />
            </Link>
            <Link className="gs-hero-secondary" href="/contact">Parlons de votre projet<i className="bi bi-arrow-up-right" aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="container gs-hero-controls">
          <span className="gs-hero-counter">{String(index + 1).padStart(2, "0")} <span>/ {String(slides.length).padStart(2, "0")}</span></span>
          <button type="button" onClick={() => goTo(index - 1)} aria-label="Visuel précédent"><i className="bi bi-arrow-left" aria-hidden="true" /></button>
          <button type="button" onClick={() => goTo(index + 1)} aria-label="Visuel suivant"><i className="bi bi-arrow-right" aria-hidden="true" /></button>
        </div>
      </div>
      <div className="gs-hero-selector">
        <div className="container gs-hero-selector-items" role="group" aria-label="Choisir un département">
          {slides.map((item, i) => <button type="button" key={item.label} className={i === index ? "is-active" : ""} aria-pressed={i === index} onClick={() => goTo(i)}><span>{String(i + 1).padStart(2, "0")}</span>{item.label}</button>)}
        </div>
      </div>
      <div className="container gs-home-facts">
        {infoBlocks.map((block) => <div key={block.title}><i className={`bi ${block.icon}`} aria-hidden="true" /><div><strong>{block.title}</strong><p>{block.text}</p></div></div>)}
      </div>
    </section>
  );
}
