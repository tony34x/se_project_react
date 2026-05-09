import "./ModalwithForm.css";

function ModalwithForm({ children, buttonText, title_text }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">title</h2>
        <button
          type="button"
          className="modal__close"
          aria-label="Close"
        ></button>
        <form className="modal-form">
        {children}
          <button type="submit" className="modal__submit" disabled>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalwithForm;
