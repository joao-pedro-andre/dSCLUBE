import { useState } from "react";

function ModalInscricao({ isOpen, onClose }) {
  const [enviado, setEnviado] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    turma: "",
    interesse: "",
  });

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEnviado(true);
  };

  const handleClose = () => {
    setEnviado(false);

    setForm({
      nome: "",
      email: "",
      turma: "",
      interesse: "",
    });

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-inscricao"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-fechar"
          onClick={handleClose}
          aria-label="Fechar"
        >
          ×
        </button>

        {!enviado ? (
          <>
            <div className="modal-header">
              <span>CLUBEDS</span>

              <h2>Quero participar</h2>

              <p>
                Preencha seus dados para demonstrar interesse em participar
                do ClubeDS.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="inscricao-form">

              <div className="form-group">
                <label htmlFor="nome">
                  Nome completo
                </label>

                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Digite seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  E-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seuemail@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="turma">
                  Turma
                </label>

                <input
                  id="turma"
                  name="turma"
                  type="text"
                  placeholder="Ex.: 2º Desenvolvimento de Sistemas"
                  value={form.turma}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="interesse">
                  O que você gostaria de fazer no clube?
                </label>

                <select
                  id="interesse"
                  name="interesse"
                  value={form.interesse}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Selecione uma opção
                  </option>

                  <option value="projetos">
                    Participar de projetos
                  </option>

                  <option value="oficinas">
                    Participar de oficinas
                  </option>

                  <option value="palestras">
                    Participar de palestras
                  </option>

                  <option value="aprender">
                    Aprender programação
                  </option>

                  <option value="todos">
                    Quero participar de tudo
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="modal-submit"
              >
                Enviar cadastro
              </button>

            </form>
          </>
        ) : (
          <div className="modal-sucesso">
            <div className="sucesso-icon">
              ✓
            </div>

            <h2>Cadastro enviado!</h2>

            <p>
              Obrigado pelo interesse no ClubeDS.
              Em breve você receberá mais informações
              sobre as próximas atividades.
            </p>

            <button
              type="button"
              className="modal-submit"
              onClick={handleClose}
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalInscricao;