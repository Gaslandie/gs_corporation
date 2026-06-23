export default function Home() {
  return (
    <main className="gs-section">
      <div className="container text-center">
        <span
          className="badge rounded-pill mb-3 px-3 py-2"
          style={{ backgroundColor: "var(--gs-bleu-marine)" }}
        >
          <i className="bi bi-buildings me-1" aria-hidden="true"></i>
          Groupe multisectoriel
        </span>

        <h1 className="display-4 fw-bold" style={{ color: "var(--gs-bleu-marine)" }}>
          GS Corporation
        </h1>

        <p className="lead text-secondary mx-auto" style={{ maxWidth: "640px" }}>
          Maquette en cours de construction. Le projet est initialisé avec
          Next.js et Bootstrap 5.
        </p>

        <div className="d-flex gap-3 justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-lg text-white px-4"
            style={{ backgroundColor: "var(--gs-rouge)" }}
          >
            <i className="bi bi-rocket-takeoff me-2" aria-hidden="true"></i>
            Découvrir le groupe
          </button>
          <button type="button" className="btn btn-lg btn-outline-secondary px-4">
            Nous contacter
          </button>
        </div>
      </div>
    </main>
  );
}
