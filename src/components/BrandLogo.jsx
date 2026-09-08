import Image from "next/image";
import { asset } from "@/lib/assetPath";
import { brands } from "@/data/media";

export default function BrandLogo({ brand = brands.corporation, compact = false, light = false, className = "" }) {
  if (brand.provisional) {
    return (
      <span className={`gs-brand-signature ${className}`} aria-label={`${brand.name} — signature provisoire`}>
        <strong>GS <span>CONSULTING</span></strong>
        <small>Formation · Conseil · Carrière</small>
      </span>
    );
  }
  return (
    <span className={`gs-logo ${compact ? "gs-logo--compact" : ""} ${light ? "gs-logo--light" : ""} ${className}`}>
      <Image src={asset(compact ? (light && brand.lightMark ? brand.lightMark : brand.mark) : brand.logo)} alt={compact ? "" : brand.name} width={180} height={150} />
      {compact && <span>{brand.name}<small>Groupe multisectoriel</small></span>}
    </span>
  );
}
