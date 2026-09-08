"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { interactionSettings as settings } from "@/data/interactions";

const revealSelector = ".gs-section-title, .card-gs, .gs-department-row, .gs-principles li, .gs-group-visual, .gs-contact-feature, .gs-story-photo";

export default function SiteInteractions() {
  const pathname = usePathname();
  const progressRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return undefined;
    const preference = window.matchMedia(settings.reducedMotionQuery);
    const targets = [...main.querySelectorAll(revealSelector)]
      .filter((element) => !element.parentElement.closest(revealSelector));
    let observer;

    const reveal = (element) => {
      element.dataset.reveal = "visible";
      observer?.unobserve(element);
    };
    const configure = () => {
      observer?.disconnect();
      if (preference.matches || !("IntersectionObserver" in window)) {
        targets.forEach(reveal);
        return;
      }
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) reveal(entry.target); });
      }, { rootMargin: settings.revealMargin, threshold: settings.revealThreshold });
      targets.forEach((element, index) => {
        if (element.dataset.reveal === "visible" || element.getBoundingClientRect().top < window.innerHeight) return;
        element.dataset.reveal = "pending";
        element.style.setProperty("--gs-reveal-order", index % 3);
        observer.observe(element);
      });
    };
    const onFocus = (event) => {
      const target = event.target.closest('[data-reveal="pending"]');
      if (target) reveal(target);
    };
    configure();
    preference.addEventListener("change", configure);
    main.addEventListener("focusin", onFocus);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", configure);
      main.removeEventListener("focusin", onFocus);
      targets.forEach((element) => {
        delete element.dataset.reveal;
        element.style.removeProperty("--gs-reveal-order");
      });
    };
  }, [pathname]);

  useEffect(() => {
    let frame;
    const progress = progressRef.current;
    const main = document.querySelector("main");
    if (main) progress.style.setProperty("--gs-progress-color", getComputedStyle(main).getPropertyValue("--gs-primary"));
    const update = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;
      setShowTop(window.scrollY > settings.backToTopAfter);
      frame = undefined;
    };
    const schedule = () => { if (frame === undefined) frame = requestAnimationFrame(update); };
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return (
    <>
      <div ref={progressRef} className="gs-reading-progress" aria-hidden="true" />
      <button type="button" className={`gs-scroll-top ${showTop ? "is-visible" : ""}`} tabIndex={showTop ? 0 : -1} aria-hidden={!showTop} aria-label="Revenir en haut de la page" onClick={() => {
        document.querySelector("main")?.focus({ preventScroll: true });
        window.scrollTo({ top: 0, behavior: window.matchMedia(settings.reducedMotionQuery).matches ? "instant" : "smooth" });
      }}><i className="bi bi-arrow-up" aria-hidden="true" /></button>
    </>
  );
}
