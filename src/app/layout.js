// Styles Bootstrap (importés avant globals.css pour que nos styles personnalisés
// puissent surcharger ceux de Bootstrap si nécessaire).
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

import BootstrapClient from "@/components/BootstrapClient";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "GS Corporation",
  description:
    "GS Corporation — groupe multisectoriel : conseil, logistique, immobilier, agrobusiness et forage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="d-flex flex-column min-vh-100">
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
