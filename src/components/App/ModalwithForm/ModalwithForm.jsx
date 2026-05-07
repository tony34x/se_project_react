import "./ModalwithForm.css";

function ModalwithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New garment</h2>
        <button
          type="button"
          className="modal__close"
          aria-label="Close"
        ></button>
        <form className="modal-form">
          <label htmlFor="name" className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              placeholder="Name"
              id="name"
            />
          </label>
          <label htmlFor="imageurl" className="modal__label">
            Image
            <input
              type="url"
              className="modal__input"
              placeholder="Image URL"
              id="imageurl"
            />
          </label>
          <fieldset className="modal__radio-button">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                className="modal__radio-input"
                id="hot"
                name="weather"
                value="Hot"
                defaultChecked
              />
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                className="modal__radio-input"
                id="warm"
                name="weather"
                value="Warm"
              />
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                className="modal__radio-input"
                id="cold"
                name="weather"
                value="Cold"
              />
              Cold
            </label>
          </fieldset>
          <button type="submit" className="modal__submit" disabled>
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalwithForm;
