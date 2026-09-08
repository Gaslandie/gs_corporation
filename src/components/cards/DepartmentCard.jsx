import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import Visual from "@/components/Visual";

export default function DepartmentCard({ department, ctaLabel = "Découvrir le département", showImage = true }) {
  return (
    <article className={`card-gs gs-department-card ${department.theme}`}>
      {showImage && <Visual image={department.cover} className="gs-card-visual" showSource={false} />}
      <div className="gs-card-body">
        <BrandLogo brand={department.brand} className="gs-department-card-logo" />
        <h3 className="h4">{department.name}</h3>
        <p className="text-secondary flex-grow-1">{department.description}</p>
        <Link href={department.href} className="gs-text-link stretched-link" aria-label={`${ctaLabel} : ${department.name}`}>
          {ctaLabel}<i className="bi bi-arrow-up-right" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
