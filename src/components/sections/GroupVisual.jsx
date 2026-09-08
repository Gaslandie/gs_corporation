import BrandLogo from "@/components/BrandLogo";
import Visual from "@/components/Visual";
import { photos } from "@/data/media";

export default function GroupVisual() {
  return (
    <div className="gs-group-visual">
      <Visual image={photos.partnership} className="gs-group-photo" caption="Accompagner les projets, au plus près des besoins." />
      <div className="gs-group-logo"><BrandLogo /></div>
    </div>
  );
}
