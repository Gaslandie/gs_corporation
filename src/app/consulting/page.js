import DepartmentPageTemplate from "@/components/sections/DepartmentPageTemplate";
import departmentDetails from "@/data/departmentDetails";

export const metadata = {
  title: "GS Consulting — GS Corporation",
  description:
    "GS Consulting : formation, conseil en stratégie marketing et communication, et développement de carrière professionnelle.",
};

export default function ConsultingPage() {
  return <DepartmentPageTemplate data={departmentDetails.consulting} />;
}
