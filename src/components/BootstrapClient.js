"use client";

import { useEffect } from "react";

// Charge le bundle JS de Bootstrap (dropdowns, modals, collapse, etc.)
// côté client uniquement, car il manipule le DOM.
export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
