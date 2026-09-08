import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import Visual from "@/components/Visual";

export default function DepartmentDirectory({ departments }) {
  return (
    <div className="gs-department-directory">
      {departments.map((department, index) => (
        <Link className={`gs-department-row ${department.theme}`} href={department.href} key={department.slug}>
          <span className="gs-directory-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <Visual image={department.cover} className="gs-directory-photo" showSource={false} sizes="(max-width: 575px) 100vw, 240px" />
          <div className="gs-directory-copy">
            <BrandLogo brand={department.brand} className="gs-directory-logo" />
            <h3>{department.name}</h3>
            <p>{department.description}</p>
          </div>
          <span className="gs-round-arrow" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
        </Link>
      ))}
    </div>
  );
}
