import React from 'react';

export default function ModalCadastro({
  isOpen,
  onClose
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="modal-content card"
        onClick={(e) => e.stopPropagation()}
      >

        <h2>
          Cadastro ClubeDS
        </h2>

        <p>
          Preencha seus dados para participar:
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            alert('Inscrição realizada!');

            onClose();
          }}
        >

          <input
            type="text"
            placeholder="Seu Nome Completo"
            required
          />

          <input
            type="email"
            placeholder="Seu E-mail"
            required
          />

          <button
            type="submit"
            className="btn-primary full-width"
          >
            Confirmar Cadastro
          </button>

        </form>

        <button
          className="btn-secondary full-width close-btn"
          onClick={onClose}
        >
          Fechar
        </button>

      </div>

    </div>
  );
}