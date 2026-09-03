function CardEncontro({ encontro }) {
  return (
    <article className="trilha-card evento-card">

      <div className="evento-header">
        <div>
          <span className="trilha-nivel">{encontro.tipo}</span>
          <h3>{encontro.titulo}</h3>
        </div>

        <span className="evento-duracao">
          {encontro.duracao}
        </span>
      </div>

      <p className="trilha-descricao">
        {encontro.descricao}
      </p>

      <div className="evento-detalhes">

        <div className="evento-detalhe">
          <span>DATA</span>
          <strong>{encontro.data}</strong>
        </div>

        <div className="evento-detalhe">
          <span>FORMATO</span>
          <strong>{encontro.formato}</strong>
        </div>

      </div>

      <button
        type="button"
        className="trilha-botao"
        onClick={() =>
          alert(
            `Você demonstrou interesse no evento "${encontro.titulo}".`
          )
        }
      >
        {encontro.textoBotao}

        <span>→</span>
      </button>

    </article>
  );
}

export default CardEncontro;