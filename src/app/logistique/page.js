import DepartmentPageTemplate from "@/components/sections/DepartmentPageTemplate";
import departmentDetails from "@/data/departmentDetails";

export const metadata = {
  title: "GS Logistique — GS Corporation",
  description:
    "GS Logistique : gestion des stocks, location de véhicules et d’engins lourds, vente de fournitures et solutions logistiques sur mesure.",
};

export default function LogistiquePage() {
  return <DepartmentPageTemplate data={departmentDetails.logistique} />;
}
