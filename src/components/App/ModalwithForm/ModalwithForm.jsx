import "./ModalwithForm.css";

function ModalwithForm({ children, buttonText, title, activeModal }) {
  return (
    <div
      className={`modal ${
        activeModal === "add-garment" ? "modal_opened" : ""
      }`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
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
