import React from 'react';

export default function CardDepoimento({
  nome,
  modulo,
  texto,
  avatar
}) {
  return (
    <div className="card card-depoimento">

      <p className="depoimento-texto">
        "{texto}"
      </p>

      <div className="depoimento-autor">

        {avatar && (
          <img
            src={avatar}
            alt={nome}
            className="depoimento-avatar"
          />
        )}

        <div>
          <strong>
            {nome}
          </strong>

          <small>
            {modulo}
          </small>
        </div>

      </div>

    </div>
  );
}