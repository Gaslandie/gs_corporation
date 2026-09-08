"use client";

import { useEffect, useRef, useState } from "react";
import departments from "@/data/departments";
import siteInfo from "@/data/siteInfo";
import { contactLimits } from "@/data/interactions";

const departmentOptions = [siteInfo.name, ...departments.map((department) => department.name)];

export default function ContactForm() {
  const [draft, setDraft] = useState(null);
  const previewRef = useRef(null);

  useEffect(() => {
    if (draft) previewRef.current?.focus();
  }, [draft]);

  return (
    <>
      <p className="text-secondary mb-4">Préparez votre demande, puis choisissez un envoi par WhatsApp ou email. Les champs marqués d’un astérisque sont obligatoires.</p>
      <form onChange={() => setDraft(null)} onSubmit={(event) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.currentTarget));
        const text = [
          `Bonjour ${data.departement},`, "", data.message.trim(), "",
          `Nom : ${data.nom.trim()}`,
          ...[data.telephone.trim() && `Téléphone : ${data.telephone.trim()}`, data.email.trim() && `Email : ${data.email.trim()}`].filter(Boolean),
        ].join("\n");
        setDraft({ text, subject: `Demande — ${data.departement}` });
      }}>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label htmlFor="nom" className="form-label fw-semibold">Nom complet *</label>
            <input type="text" className="form-control" id="nom" name="nom" placeholder="Votre nom complet" autoComplete="name" required pattern=".*\S.*" maxLength={contactLimits.name} />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="telephone" className="form-label fw-semibold">Téléphone</label>
            <input type="tel" className="form-control" id="telephone" name="telephone" placeholder="+224…" autoComplete="tel" maxLength={contactLimits.phone} />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="vous@exemple.com" autoComplete="email" maxLength={contactLimits.email} />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="departement" className="form-label fw-semibold">Département concerné *</label>
            <select className="form-select" id="departement" name="departement" defaultValue="" required>
              <option value="" disabled>Choisir un département</option>
              {departmentOptions.map((name) => <option key={name} value={name}>{name}</option>)}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label fw-semibold">Votre message *</label>
            <textarea className="form-control" id="message" name="message" rows={5} placeholder="Décrivez votre projet ou votre besoin…" required minLength={10} maxLength={contactLimits.message} onInput={(event) => {
              event.currentTarget.setCustomValidity(event.currentTarget.value.trim().length >= 10 ? "" : "Décrivez votre besoin en au moins 10 caractères.");
            }} />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-gs-primary">Préparer mon message<i className="bi bi-arrow-right ms-2" aria-hidden="true" /></button>
          </div>
        </div>
      </form>
      {draft && <div ref={previewRef} className="gs-message-preview" tabIndex={-1} aria-labelledby="message-preview-title">
        <span className="gs-eyebrow">Votre demande est prête</span>
        <h3 id="message-preview-title" className="h5">Vérifiez votre message</h3>
        <p className="gs-message-body">{draft.text}</p>
        <div className="d-flex flex-wrap gap-2">
          <a className="btn btn-gs-primary" href={`${siteInfo.social.whatsapp}?text=${encodeURIComponent(draft.text)}`} target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp me-2" aria-hidden="true" />Ouvrir WhatsApp<span className="visually-hidden"> — nouvel onglet</span></a>
          <a className="btn btn-gs-outline" href={`mailto:${siteInfo.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.text)}`}><i className="bi bi-envelope me-2" aria-hidden="true" />Ouvrir mon email</a>
        </div>
        <p className="small text-secondary mt-3 mb-0">L’envoi se fait dans l’application choisie. Aucun message n’a encore été envoyé.</p>
      </div>}
    </>
  );
}
