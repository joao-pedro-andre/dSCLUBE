import { useState } from "react";

function CardTrilha({ trilha }) {
  const [aberta, setAberta] = useState(false);

  return (
    <article
      className={`trilha-card trilha-${trilha.id} ${
        aberta ? "trilha-aberta" : ""
      }`}
    >
      <div className="trilha-topo">
        <span className="trilha-numero">
          0{trilha.id}
        </span>

        <span className={`trilha-nivel nivel-${trilha.nivel.toLowerCase()}`}>
          {trilha.nivel}
        </span>
      </div>

      <div className="trilha-conteudo">
        <h3>{trilha.titulo}</h3>

        <p className="trilha-descricao">
          {trilha.desc}
        </p>

        <div className="trilha-progresso">
          <div className="trilha-progresso-texto">
            <span>Progresso da jornada</span>
            <strong>{trilha.progresso}%</strong>
          </div>

          <div className="trilha-progresso-barra">
            <div
              className="trilha-progresso-preenchimento"
              style={{
                width: `${trilha.progresso}%`,
              }}
            />
          </div>
        </div>

        <div className="trilha-conteudos">
          <span className="trilha-label">
            O que você vai aprender
          </span>

          <ul>
            {trilha.itens.map((item, index) => (
              <li key={index}>
                <span className="trilha-check">
                  ✓
                </span>

                {item}
              </li>
            ))}
          </ul>
        </div>

        {aberta && (
          <div className="trilha-detalhes">
            <span className="trilha-label">
              Objetivo da trilha
            </span>

            <p>
              {trilha.objetivo}
            </p>

            <span className="trilha-label">
              Entrega final
            </span>

            <p>
              {trilha.entrega}
            </p>
          </div>
        )}

        <button
          type="button"
          className="trilha-botao"
          onClick={() => setAberta(!aberta)}
        >
          {aberta ? "Fechar detalhes" : "Ver trilha"}

          <span>
            {aberta ? "↑" : "→"}
          </span>
        </button>
      </div>
    </article>
  );
}

export default CardTrilha;