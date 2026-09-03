import { useState } from "react";

import "./App.css";

import {
  destaquesData,
  metricasData,
  trilhasData,
  encontrosData,
  faqData,
  tecnologias,
  equipeData,
} from "./data/clubeData";

import BannerStatus from "./components/BannerStatus";
import CardEncontro from "./components/CardEncontro";
import CardMembro from "./components/CardMembro";
import CardTrilha from "./components/CardTrilha";
import Footer from "./components/Footer";
import ItemFaq from "./components/ItemFaq";
import ModalInscricao from "./components/ModalInscricao";
import TechStack from "./components/TechStack";

function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [faqAberto, setFaqAberto] = useState(null);

  const scrollPara = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const abrirInscricao = () => {
    setModalAberto(true);
  };

  return (
    <>
      <div className="app-container">
        {/* =========================
            NAVBAR
        ========================= */}
        <nav className="navbar">
          <button
            type="button"
            className="navbar-brand"
            onClick={() => scrollPara("inicio")}
            aria-label="Ir para o início"
          >
            <img
              src="/logo-fabrica.png"
              alt="ClubeDS"
              className="logo-img"
            />

            <div>
              <strong>ClubeDS</strong>
              <span>Desenvolvimento, Prática e Comunidade.</span>
            </div>
          </button>

          <div className="navbar-links">
            <button type="button" onClick={() => scrollPara("sobre")}>
              Sobre
            </button>

            <button type="button" onClick={() => scrollPara("trilhas")}>
              Trilhas
            </button>

            <button type="button" onClick={() => scrollPara("eventos")}>
              Eventos
            </button>

            <button type="button" onClick={() => scrollPara("equipe")}>
              Equipe
            </button>

            <button type="button" onClick={() => scrollPara("faq")}>
              FAQ
            </button>

            <button
              type="button"
              className="navbar-cta"
              onClick={abrirInscricao}
            >
              Quero participar
            </button>
          </div>
        </nav>

        {/* =========================
            HERO
        ========================= */}
        <main id="inicio">
          <section className="hero">
            <div>
              <span className="hero-tag">CLUBE DE DESENVOLVIMENTO</span>

              <h1>
                Aprenda.
                <br />
                Construa.
                <br />
                <span>Publique.</span>
              </h1>

              <p>
                Um espaço para estudantes de Desenvolvimento de Sistemas
                aprenderem programação na prática, criarem projetos e
                construírem um portfólio de verdade.
              </p>

              <div className="hero-buttons">
                <button
                  type="button"
                  className="button-primary"
                  onClick={abrirInscricao}
                >
                  Quero participar →
                </button>

                <button
                  type="button"
                  className="button-secondary"
                  onClick={() => scrollPara("trilhas")}
                >
                  Conhecer as trilhas
                </button>
              </div>
            </div>

            <div className="hero-side">
              <div className="hero-info-card">
                <span>FOCO</span>
                <strong>Desenvolvimento na prática</strong>
              </div>

              <div className="hero-info-card">
                <span>FORMATO</span>
                <strong>Projetos, oficinas e palestras</strong>
              </div>

              <div className="hero-info-card">
                <span>RESULTADO</span>
                <strong>Portfólio + GitHub + experiência</strong>
              </div>
            </div>
          </section>

          {/* =========================
              BANNER
          ========================= */}
          <BannerStatus
            texto="O ClubeDS está preparando novas atividades e encontros."
            acaoTexto="Demonstrar interesse"
            onAcao={abrirInscricao}
          />

          {/* =========================
              SOBRE
          ========================= */}
          <section className="section" id="sobre">
            <div className="section-header">
              <span className="section-tag">POR QUE PARTICIPAR</span>

              <h2>Mais prática. Menos teoria solta.</h2>

              <p>
                O ClubeDS conecta estudo, desenvolvimento de projetos e
                colaboração para transformar conhecimento em experiência.
              </p>
            </div>

            <div className="benefits-grid">
              <article className="benefit-card">
                <span className="section-tag">01</span>
                <h3>Aprender fazendo</h3>
                <p>
                  Conteúdos organizados em trilhas e atividades práticas para
                  você aplicar os conceitos enquanto aprende.
                </p>
              </article>

              <article className="benefit-card">
                <span className="section-tag">02</span>
                <h3>Projetos reais</h3>
                <p>
                  Desenvolva páginas, aplicações e projetos colaborativos que
                  podem fazer parte do seu portfólio.
                </p>
              </article>

              <article className="benefit-card">
                <span className="section-tag">03</span>
                <h3>Comunidade</h3>
                <p>
                  Aprenda junto com outros estudantes, compartilhe ideias e
                  pratique uma rotina próxima da realidade profissional.
                </p>
              </article>
            </div>

            <div className="highlights-grid">
              {destaquesData.map((destaque) => (
                <article className="highlight-card" key={destaque.id}>
                  <strong>{destaque.tag}</strong>
                  <span>{destaque.desc}</span>
                </article>
              ))}
            </div>

            <div className="metrics-grid">
              {metricasData.map((metrica) => (
                <article className="metric-card" key={metrica.rotulo}>
                  <span>{metrica.rotulo}</span>
                  <strong>{metrica.valor}</strong>
                </article>
              ))}
            </div>
          </section>

          {/* =========================
              COMO FUNCIONA
          ========================= */}
          <section className="section" id="como-funciona">
            <div className="section-header">
              <span className="section-tag">COMO FUNCIONA</span>

              <h2>Uma jornada simples.</h2>

              <p>
                Você entra, aprende os fundamentos, constrói projetos e evolui
                junto com a comunidade.
              </p>
            </div>

            <div className="steps-grid">
              <article className="step-card">
                <span className="section-tag">01</span>
                <h3>Escolha sua trilha</h3>
                <p>
                  Comece no nível que corresponde ao seu momento e avance no
                  seu ritmo.
                </p>
              </article>

              <article className="step-card">
                <span className="section-tag">02</span>
                <h3>Pratique</h3>
                <p>
                  Participe de oficinas, desenvolva exercícios e coloque os
                  conhecimentos em prática.
                </p>
              </article>

              <article className="step-card">
                <span className="section-tag">03</span>
                <h3>Publique</h3>
                <p>
                  Organize seu código no GitHub, faça deploy e transforme seus
                  projetos em portfólio.
                </p>
              </article>
            </div>

            <div className="delivery-box">
              <div>
                <span className="section-tag">ENTREGAS</span>
                <h3>Do primeiro código ao projeto publicado.</h3>
                <p>
                  A proposta é terminar cada ciclo com algo concreto para
                  mostrar e continuar evoluindo.
                </p>
              </div>

              <div>
                <span className="section-tag">STACK</span>
                <TechStack tecnologias={tecnologias} />
              </div>
            </div>
          </section>

          {/* =========================
              TRILHAS
          ========================= */}
          <section className="section" id="trilhas">
            <div className="section-header">
              <span className="section-tag">TRILHAS</span>

              <h2>Escolha onde começar.</h2>

              <p>
                Três etapas para sair dos fundamentos e chegar ao
                desenvolvimento colaborativo.
              </p>
            </div>

            <div className="trilhas-grid">
              {trilhasData.map((trilha) => (
                <CardTrilha key={trilha.id} trilha={trilha} />
              ))}
            </div>

            <div className="disclaimer">
              Os conteúdos podem ser ajustados de acordo com as atividades,
              projetos e necessidades da turma.
            </div>
          </section>

          {/* =========================
              EVENTOS
          ========================= */}
          <section className="section" id="eventos">
            <div className="section-header">
              <span className="section-tag">EVENTOS</span>

              <h2>Próximos encontros.</h2>

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

          {/* =========================
              AMBIENTE
          ========================= */}
          <section className="section" id="ambiente">
            <div className="section-header">
              <span className="section-tag">AMBIENTE</span>

              <h2>Um clube para construir junto.</h2>

              <p>
                A experiência combina estudo individual, encontros e projetos
                colaborativos.
              </p>
            </div>

            <div className="environment-grid">
              <article className="environment-card">
                <span className="section-tag">ESTUDO</span>
                <h3>Aprendizado contínuo</h3>
                <p>
                  Materiais, trilhas e desafios para manter uma evolução
                  constante.
                </p>
              </article>

              <article className="environment-card">
                <span className="section-tag">COLABORAÇÃO</span>
                <h3>Trabalho em equipe</h3>
                <p>
                  Divisão de tarefas, GitHub, revisão de código e apresentação
                  dos resultados.
                </p>
              </article>

              <article className="environment-card">
                <span className="section-tag">MERCADO</span>
                <h3>Boas práticas</h3>
                <p>
                  Organização de projetos e ferramentas utilizadas em equipes
                  de desenvolvimento.
                </p>
              </article>

              <article className="environment-card">
                <span className="section-tag">PORTFÓLIO</span>
                <h3>Resultados visíveis</h3>
                <p>
                  Projetos publicados e documentados para você acompanhar sua
                  própria evolução.
                </p>
              </article>
            </div>
          </section>

          {/* =========================
              GALERIA
          ========================= */}
          <section className="section" id="galeria">
            <div className="section-header">
              <span className="section-tag">GALERIA</span>

              <h2>Momentos do clube.</h2>

              <p>
                Um espaço reservado para registrar oficinas, encontros e
                projetos.
              </p>
            </div>

            <div className="gallery-grid">
              <div className="gallery-placeholder">OFICINAS</div>
              <div className="gallery-placeholder">PROJETOS</div>
              <div className="gallery-placeholder">ENCONTROS</div>
            </div>
          </section>

          {/* =========================
              EQUIPE
          ========================= */}
          <section className="section" id="equipe">
            <div className="section-header">
              <span className="section-tag">EQUIPE</span>

              <h2>Quem faz o ClubeDS acontecer.</h2>

              <p>
                Professores e responsáveis pela orientação das atividades do
                clube.
              </p>
            </div>

            <div className="equipe-grid">
              {equipeData.map((membro) => (
                <CardMembro key={membro.id} membro={membro} />
              ))}

              <article className="diretoria-card">
                <div className="diretoria-titulo">DIRETORIA</div>

                <h3>Construída pelos alunos.</h3>

                <p>
                  A diretoria organiza atividades, representa os participantes
                  e ajuda a manter o clube ativo durante o ano.
                </p>

                <span>Eleições a cada 12 meses.</span>
              </article>
            </div>
          </section>

          {/* =========================
              REGRAS
          ========================= */}
          <section className="section" id="regras">
            <div className="section-header">
              <span className="section-tag">REGRAS</span>

              <h2>Combinados para funcionar bem.</h2>

              <p>
                Um ambiente de desenvolvimento depende de organização,
                respeito e participação.
              </p>
            </div>

            <div className="rules-grid">
              <article className="rule-card">
                <span className="section-tag">01</span>
                <h3>Respeito</h3>
                <p>
                  Colabore com os outros participantes e mantenha um ambiente
                  saudável para aprender.
                </p>
              </article>

              <article className="rule-card">
                <span className="section-tag">02</span>
                <h3>Participação</h3>
                <p>
                  Aproveite oficinas, encontros e projetos para construir sua
                  experiência.
                </p>
              </article>

              <article className="rule-card">
                <span className="section-tag">03</span>
                <h3>Organização</h3>
                <p>
                  Mantenha seus arquivos, repositórios e entregas organizados.
                </p>
              </article>

              <article className="rule-card">
                <span className="section-tag">04</span>
                <h3>Responsabilidade</h3>
                <p>
                  Cumpra os combinados da equipe e contribua para que os
                  projetos avancem.
                </p>
              </article>
            </div>
          </section>

          {/* =========================
              FAQ
          ========================= */}
          <section className="section" id="faq">
            <div className="section-header">
              <span className="section-tag">FAQ</span>

              <h2>Perguntas frequentes.</h2>

              <p>
                Algumas respostas rápidas para quem está pensando em entrar.
              </p>
            </div>

            <div className="faq-list">
              {faqData.map((item) => (
                <ItemFaq
                  key={item.id}
                  pergunta={item.pergunta}
                  resposta={item.resposta}
                  isOpen={faqAberto === item.id}
                  onClick={() =>
                    setFaqAberto(
                      faqAberto === item.id ? null : item.id
                    )
                  }
                />
              ))}
            </div>
          </section>

          {/* =========================
              CTA FINAL
          ========================= */}
          <section className="section final-cta" id="participar">
            <div className="section-header">
              <span className="section-tag">CLUBEDS</span>

              <h2>Pronto para começar?</h2>

              <p>
                Entre para a comunidade e transforme seus estudos em projetos.
              </p>
            </div>

            <div className="hero-buttons">
              <button
                type="button"
                className="button-primary"
                onClick={abrirInscricao}
              >
                Quero participar →
              </button>

              <button
                type="button"
                className="button-secondary"
                onClick={() => scrollPara("inicio")}
              >
                Voltar ao início
              </button>
            </div>
          </section>
        </main>
      </div>

      <Footer />

      <ModalInscricao
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
      />
    </>
  );
}

export default App;