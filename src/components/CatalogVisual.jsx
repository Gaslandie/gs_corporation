import Visual from "@/components/Visual";
import { mediaLabels } from "@/data/media";

// Ne pas associer une photo générique d’un autre matériel à une fiche précise.
export default function CatalogVisual({ image, icon, caption }) {
  if (image) return <Visual image={image} className="gs-card-visual" caption={caption} showSource={false} />;
  return (
    <div className="gs-photo-pending">
      <i className={`bi ${icon || "bi-image"}`} aria-hidden="true" />
      <span>{mediaLabels.pending}</span>
    </div>
  );
}
