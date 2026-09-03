<section className="section" id="eventos">

  <div className="section-header">

    <span className="section-tag">
      EVENTOS
    </span>

    <h2>
      Próximos encontros.
    </h2>

    <p>
      Oficinas e palestras para colocar o conhecimento em prática.
    </p>

  </div>

  <div className="trilhas-grid eventos-grid">

    {encontrosData.map((encontro) => (
      <CardEncontro
        key={encontro.id}
        encontro={encontro}
      />
    ))}

  </div>

</section>