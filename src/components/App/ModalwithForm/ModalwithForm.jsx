import "./ModalwithForm.css";

function ModalwithForm({
  children,
  buttonText,
  title,
  activeModal,
  onClose,
  handleAddButtonClick,
  closeActiveModal,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleAddButtonClick}
          type="button"
          className="modal__close"
          aria-label="Close"
          onClick={onClose}
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
