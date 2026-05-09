import { useState } from "react";
import ModalwithForm from "./ModalwithForm/ModalwithForm";
import "./App.css";
import Main from "./main/main";
import Header from "./header/header";

function App() {
  const [weatherData, setWeather] = useState({ type: "hot" });
  return (
    <div className="page">
      <div className="page_content">
        <Header />
        <Main weatherData={weatherData}/>
        <footer></footer>
      </div>
      <ModalwithForm>
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
      </ModalwithForm>
    </div>
  );
}

export default App;
