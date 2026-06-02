import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm";
import "./App.css";

import Main from "../main";
import Header from "./header/header";
import Footer from "../Footer";
import ItemModal from "./ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/connstants";
import { coordinates, apiKey } from "../../utils/connstants";
import { filterWeatherData, getWeather } from "../../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({
    city: "",
    type: "hot",
    temp: { F: 68 },
    condition: "clear",
    isday: true,
  });
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("preview");
  const [selectedCard, setSelectedCard] = useState(null);
  const [newGarment, setNewGarment] = useState({
    name: "",
    link: "",
    temp: { F: 999, C: 999 },
    weather: "hot",
  });

  const isAddGarmentDisabled =
    !newGarment.name.trim() || !newGarment.link.trim();

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddButtonClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
    setSelectedCard(null);
    setNewGarment({
      name: "",
      link: "",
      weather: "hot",
    });
  };

  useEffect(() => {
    let isMounted = true;

    const fetchWeather = ({ latitude, longitude }) => {
      getWeather(latitude, longitude, apiKey)
        .then((data) => {
          if (isMounted) {
            setWeatherData(filterWeatherData(data));
          }
        })
        .catch((error) => console.error(error));
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (isMounted) {
            fetchWeather({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          }
        },
        () => {
          if (isMounted) {
            fetchWeather(coordinates);
          }
        },
      );
    } else {
      fetchWeather(coordinates);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const handleGarmentInputChange = (evt) => {
    const { name, value } = evt.target;

    setNewGarment((currentGarment) => ({
      ...currentGarment,
      [name]: value,
    }));
  };

  const handleAddGarmentSubmit = (evt) => {
    evt.preventDefault();

    const item = {
      _id: Date.now(),
      name: newGarment.name.trim(),
      weather: newGarment.weather,
      link: newGarment.link.trim(),
      isUserAdded: true,
    };

    setClothingItems([item, ...clothingItems]);
    closeActiveModal();
  };

  useEffect(() => {
    if (!activeModal) {
      return undefined;
    }

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <div className="page_content">
        <Header
          handleAddButtonClick={handleAddButtonClick}
          city={weatherData.city}
        />
        <Main
          weatherData={weatherData}
          clothingItems={clothingItems}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <ModalWithForm
        name="add-garment"
        title="New garment"
        buttonText="Add garment"
        isOpen={activeModal === "add-garment"}
        onClose={closeActiveModal}
        onSubmit={handleAddGarmentSubmit}
        isSubmitDisabled={isAddGarmentDisabled}
      >
        <label htmlFor="name" className="modal__label">
          Name{""}
          <input
            type="text"
            name="name"
            className="modal__input"
            placeholder="Name"
            id="name"
            value={newGarment.name}
            onChange={handleGarmentInputChange}
          />
        </label>
        <label htmlFor="imageurl" className="modal__label">
          Image{""}
          <input
            type="url"
            name="link"
            className="modal__input"
            placeholder="Image URL"
            id="imageurl"
            value={newGarment.link}
            onChange={handleGarmentInputChange}
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
              value="hot"
              checked={newGarment.weather === "hot"}
              onChange={handleGarmentInputChange}
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
              value="warm"
              checked={newGarment.weather === "warm"}
              onChange={handleGarmentInputChange}
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
              value="cold"
              checked={newGarment.weather === "cold"}
              onChange={handleGarmentInputChange}
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
