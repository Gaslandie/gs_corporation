import Visual from "@/components/Visual";
import BrandLogo from "@/components/BrandLogo";

export default function PageHeader({ eyebrow, title, subtitle, image, brand }) {
  return (
    <section className="section-padding gs-page-header">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className={image ? "col-12 col-lg-7" : "col-12"}>
            {brand && <BrandLogo brand={brand} className="gs-page-header-logo" />}
            {eyebrow && <span className="gs-eyebrow">{eyebrow}</span>}
            <h1>{title}</h1>
            {subtitle && <p className="lead mt-3 mb-0">{subtitle}</p>}
          </div>
          {image && <div className="col-12 col-lg-5"><Visual image={image} eager sizes="(max-width: 991px) 100vw, 42vw" /></div>}
        </div>
      </div>
    </section>
  );
}
