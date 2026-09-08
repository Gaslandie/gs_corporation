"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assetPath";
import { mediaLabels } from "@/data/media";

// Dimensions stables, chargement différé et légende accolée au visuel.
export default function Visual({ image, className = "", caption, showSource = true, eager = false, zoomable = false, sizes = "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw" }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const [expanded, setExpanded] = useState(false);
  if (!image) return null;
  const remote = /^(?:https?:)?\/\//i.test(image.src);
  const failed = failedSrc === image.src;
  const note = remote ? mediaLabels.remote : showSource ? image.source : null;
  return (
    <figure className={`gs-visual ${className}`}>
      <div className="gs-visual-frame">
        {failed ? (
          <div className="gs-visual-fallback" role="img" aria-label={image.alt}>
            <i className="bi bi-image" aria-hidden="true" />
            <span>{mediaLabels.unavailable}</span>
          </div>
        ) : (
          <Image
            src={asset(image.src)} alt={image.alt} fill sizes={sizes}
            loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined}
            unoptimized={remote || undefined}
            style={{ objectFit: image.fit || "cover", objectPosition: image.position || "center" }}
            onError={() => setFailedSrc(image.src)}
          />
        )}
        {zoomable && !failed && <button type="button" className="gs-photo-expand" aria-label={`Agrandir la photo : ${image.alt}`} aria-haspopup="dialog" onClick={() => setExpanded(true)}>
          <i className="bi bi-arrows-angle-expand" aria-hidden="true" /><span>Agrandir</span>
        </button>}
      </div>
      {(caption || note || image.credit) && <figcaption>
        {caption && <span>{caption}</span>}
        {note && <small>{note}</small>}
        {image.credit && <small className="gs-photo-credit">
          <a href={image.credit.url} target="_blank" rel="noopener noreferrer">Photo : {image.credit.author}<span className="visually-hidden"> — {image.credit.title}, nouvel onglet</span></a>
          {" · "}<a href={image.credit.licenseUrl} target="_blank" rel="noopener noreferrer">{image.credit.license}<span className="visually-hidden"> — nouvel onglet</span></a>
        </small>}
      </figcaption>}
      {zoomable && <PhotoDialog open={expanded} onClose={() => setExpanded(false)} image={image} caption={caption} showSource={showSource} />}
    </figure>
  );
}

function PhotoDialog({ open, onClose, image, caption, showSource }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog ref={dialogRef} className="gs-photo-dialog" aria-labelledby={titleId} onClose={onClose} onKeyDown={(event) => {
      if (event.key !== "Tab") return;
      const controls = event.currentTarget.querySelectorAll("button:not([disabled]), a[href]");
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }} onClick={(event) => {
      if (event.target === event.currentTarget) dialogRef.current.close();
    }}>
      <div className="gs-photo-dialog-inner">
        <div className="gs-photo-dialog-heading">
          <h2 id={titleId}>{image.alt}</h2>
          <button type="button" className="gs-dialog-close" aria-label="Fermer la photo" onClick={() => dialogRef.current.close()}><i className="bi bi-x-lg" aria-hidden="true" /></button>
        </div>
        {open && <Visual image={{ ...image, fit: "contain" }} className="gs-photo-dialog-visual" caption={caption} showSource={showSource} eager sizes="90vw" />}
      </div>
    </dialog>
  );
}
