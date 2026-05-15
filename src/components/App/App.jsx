import { useState } from "react";
import ModalwithForm from "./ModalwithForm/ModalwithForm";
import "./App.css";
import Main from "./main/main";
import Header from "./header/header";
import Footer from "./Footer/Footer";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemCard/ItemCard";

function App() {
  const [weatherData] = useState({ type: "hot" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedcard] = useState();


  const handleCardclick = (card) => {
    setActiveModal("preview");
    setSelectedcard(card);
  }

  const handleAddButtonClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page_content">
        <Header handleAddButtonClick={handleAddButtonClick} />
        <Main weatherData={weatherData} onAddButtonclick />
        <Footer />
      </div>
      <ModalwithForm
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        onClose={closeActiveModal}
        closeActiveModal={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name{""}
          <input
            type="text"
            className="modal__input"
            placeholder="Name"
            id="name"
          />
        </label>
        <label htmlFor="imageurl" className="modal__label">
          Image{""}
          <input
            type="url"
            className="modal__input"
            placeholder="Image URL"
            id="imageurl"
          />
        </label>
        <fieldset className="modal__radio-button">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
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
      </ModalwithForm>
      <ItemModal activeModal={activeModal} card={selectedCard} />
    </div>
  );
}

export default App;
