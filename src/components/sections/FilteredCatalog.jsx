"use client";

import { useId, useRef, useState } from "react";
import PropertyCard from "@/components/cards/PropertyCard";
import EquipmentCard from "@/components/cards/EquipmentCard";
import { normalizeSearch } from "@/data/interactions";

export default function FilteredCatalog({ items, filters, kind }) {
  const [selected, setSelected] = useState(0);
  const [query, setQuery] = useState("");
  const searchId = useId();
  const searchRef = useRef(null);
  const filter = filters[selected];
  const words = normalizeSearch(query).split(/\s+/).filter(Boolean);
  const visible = items.filter((item) => {
    if (filter.field && !filter.values.includes(item[filter.field])) return false;
    const content = normalizeSearch([item.title, item.name, item.type, item.category, item.operation, item.location, item.description, item.usage, ...(item.features || [])].filter(Boolean).join(" "));
    return words.every((word) => content.includes(word));
  });
  const reset = () => { setSelected(0); setQuery(""); searchRef.current?.focus(); };
  const Card = kind === "properties" ? PropertyCard : EquipmentCard;
  return (
    <>
      <p className="gs-catalog-notice">Catalogue de démonstration : les caractéristiques, lieux et disponibilités sont fictifs. Les images illustrent les offres et ne constituent pas des annonces réelles.</p>
      <div className="gs-catalog-search">
        <label htmlFor={searchId}>{kind === "properties" ? "Quel bien recherchez-vous ?" : "Quel matériel recherchez-vous ?"}</label>
        <div className="gs-search-field">
          <i className="bi bi-search" aria-hidden="true" />
          <input ref={searchRef} id={searchId} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={kind === "properties" ? "Villa, terrain, quartier…" : "Camion, grue, usage…"} aria-controls="catalogue-resultats" autoComplete="off" />
          {query && <button type="button" aria-label="Effacer la recherche" onClick={() => { setQuery(""); searchRef.current?.focus(); }}><i className="bi bi-x-lg" aria-hidden="true" /></button>}
        </div>
      </div>
      <div className="d-flex flex-wrap gap-2" role="group" aria-label="Filtrer le catalogue">
        {filters.map((item, index) => <button type="button" key={item.label} aria-pressed={selected === index} aria-controls="catalogue-resultats" className={`btn ${selected === index ? "btn-gs-accent" : "btn-gs-outline"}`} onClick={() => setSelected(index)}>{item.label}</button>)}
      </div>
      <p className="gs-filter-count" role="status" aria-atomic="true">{visible.length} résultat{visible.length > 1 ? "s" : ""} · {filter.label}{query.trim() && ` · « ${query.trim()} »`}</p>
      <div id="catalogue-resultats" className="row g-4 gs-catalog-results" key={`${selected}-${normalizeSearch(query)}`}>
        {visible.map((item, index) => <div className="col-12 col-md-6 col-lg-4 gs-result-enter" style={{ "--gs-reveal-order": index % 3 }} key={item.id}><Card {...{ [kind === "properties" ? "property" : "equipment"]: item }} /></div>)}
        {!visible.length && <div className="col-12"><div className="gs-search-empty"><i className="bi bi-search" aria-hidden="true" /><h3>Aucun résultat pour cette recherche</h3><p>Essayez un autre mot ou élargissez vos filtres.</p><button type="button" className="btn btn-gs-outline" onClick={reset}>Réinitialiser la recherche</button></div></div>}
      </div>
    </>
  );
}
