import "./ModalwithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  isSubmitDisabled,
}) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          aria-label="Close"
          onClick={onClose}
        ></button>
        <form className="modal-form" name={name} onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className="modal__submit"
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
