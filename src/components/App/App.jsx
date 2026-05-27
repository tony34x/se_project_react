import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm";
import "./App.css";

import Main from "../main";
import Header from "./header/header";
import Footer from "../Footer";
import ItemModal from "./ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/connstants";
import { coordinates, APIkey } from "../../utils/connstants";
import { filterweatherData, getweather } from "../../utils/weatherApi";

const WEATHER_REFRESH_INTERVAL = 5 * 60 * 1000;

function App() {
  const [weatherData, setWeatherData] = useState({
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
    temp: {F: 999, C: 999},
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
    let activeCoordinates = coordinates;
    let isMounted = true;

    const updateWeather = ({ latitude, longitude }) => {
      getweather(latitude, longitude, APIkey)
        .then((data) => {
          if (isMounted) {
            setWeatherData(filterweatherData(data));
          }
        })
        .catch((error) => console.error(error));
    };

    const startWeatherUpdates = (currentCoordinates) => {
      activeCoordinates = currentCoordinates;
      updateWeather(activeCoordinates);

      return setInterval(() => {
        updateWeather(activeCoordinates);
      }, WEATHER_REFRESH_INTERVAL);
    };

    let weatherInterval;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (isMounted) {
            weatherInterval = startWeatherUpdates({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          }
        },
        () => {
          if (isMounted) {
            weatherInterval = startWeatherUpdates(coordinates);
          }
        },
      );
    } else {
      weatherInterval = startWeatherUpdates(coordinates);
    }

    return () => {
      isMounted = false;
      clearInterval(weatherInterval);
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
        <Header handleAddButtonClick={handleAddButtonClick} />
        <Main
          weatherData={weatherData}
          clothingItems={clothingItems}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
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
