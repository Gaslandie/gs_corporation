// Réglages de comportement partagés ; les durées et distances visuelles sont en CSS.
export const interactionSettings = {
  reducedMotionQuery: "(prefers-reduced-motion: reduce)",
  revealMargin: "0px 0px -24px 0px",
  revealThreshold: 0.05,
  backToTopAfter: 700,
  swipeDistance: 55,
};

export const contactLimits = { name: 100, email: 160, phone: 40, message: 1500 };

export const normalizeSearch = (value) => String(value)
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLocaleLowerCase("fr")
  .trim();
