import DepartmentPageTemplate from "@/components/sections/DepartmentPageTemplate";
import departmentDetails from "@/data/departmentDetails";

export const metadata = {
  title: "GS Agrobusiness — GS Corporation",
  description:
    "GS Agrobusiness : gestion de projet agricole, vente de produits, semences et intrants, conseils agricoles et solutions durables.",
};

export default function AgrobusinessPage() {
  return <DepartmentPageTemplate data={departmentDetails.agrobusiness} />;
}
