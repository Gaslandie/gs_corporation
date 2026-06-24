import DepartmentPageTemplate from "@/components/sections/DepartmentPageTemplate";
import departmentDetails from "@/data/departmentDetails";

export const metadata = {
  title: "GS Immobilier — GS Corporation",
  description:
    "GS Immobilier : location et vente, construction et rénovation, conseil, gestion immobilière, aménagement et décoration.",
};

export default function ImmobilierPage() {
  return <DepartmentPageTemplate data={departmentDetails.immobilier} />;
}
