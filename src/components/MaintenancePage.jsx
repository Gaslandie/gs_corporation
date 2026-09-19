import BrandLogo from "@/components/BrandLogo";
import maintenance from "@/data/maintenance";
import siteInfo from "@/data/siteInfo";

// Page de maintenance plein écran affichée sur toutes les routes lorsque
// `maintenance.enabled` est actif (src/data/maintenance.js).
export default function MaintenancePage() {
  return (
    <main className="gs-maintenance theme-corporation" role="main">
      <div className="gs-maintenance-card">
        <BrandLogo className="gs-maintenance-logo" />
        <p className="gs-eyebrow">{maintenance.eyebrow}</p>
        <h1>{maintenance.title}</h1>
        <p className="gs-maintenance-message">{maintenance.message}</p>

        <p className="gs-maintenance-contact-label">{maintenance.contactLabel}</p>
        <ul className="gs-maintenance-contacts list-unstyled">
          {siteInfo.phones.map((phone) => (
            <li key={phone}>
              <i className="bi bi-telephone" aria-hidden="true" />
              <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
            </li>
          ))}
          <li>
            <i className="bi bi-envelope" aria-hidden="true" />
            <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
          </li>
          <li>
            <i className="bi bi-whatsapp" aria-hidden="true" />
            <a href={siteInfo.social.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </li>
        </ul>

        <p className="gs-maintenance-footer">
          {siteInfo.name} · {siteInfo.address}
        </p>
      </div>
    </main>
  );
}
