function CardMembro({ membro }) {
  return (
    <article className="card-membro">
      <div className="membro-nome">
        {membro.nome}
      </div>

      <div className="membro-img-container">
        <img
          src={membro.imagem}
          alt={membro.nome}
          className="membro-foto"
        />
      </div>

      <h3>{membro.cargo}</h3>

      <a
        href={membro.linkLattes}
        target="_blank"
        rel="noreferrer"
      >
        currículo lattes
      </a>
    </article>
  );
}

export default CardMembro;