import DepartmentPageTemplate from "@/components/sections/DepartmentPageTemplate";
import departmentDetails from "@/data/departmentDetails";

export const metadata = {
  title: "Les Foreurs de Guinée — GS Corporation",
  description:
    "Les Foreurs de Guinée : forage de puits d’eau, analyse du sol, maintenance, châteaux d’eau et solutions d’accès à l’eau durables.",
};

export default function ForeursGuineePage() {
  return <DepartmentPageTemplate data={departmentDetails.foreurs} />;
}
