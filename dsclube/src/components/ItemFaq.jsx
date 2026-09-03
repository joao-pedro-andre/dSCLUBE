function ItemFaq({ pergunta, resposta, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? "faq-open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        onClick={onClick}
      >
        <span>{pergunta}</span>

        <span className="faq-icon">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="faq-answer">
          <p>{resposta}</p>
        </div>
      )}
    </div>
  );
}

export default ItemFaq;