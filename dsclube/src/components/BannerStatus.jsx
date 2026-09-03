import React from 'react';

export default function BannerStatus({
  texto,
  acaoTexto,
  onAcao
}) {
  return (
    <div className="banner-status">

      <span className="badge-live">
        AO VIVO
      </span>

      <p>
        {texto}
      </p>

      {acaoTexto && (
        <button
          className="btn-banner"
          onClick={onAcao}
        >
          {acaoTexto} →
        </button>
      )}

    </div>
  );
}