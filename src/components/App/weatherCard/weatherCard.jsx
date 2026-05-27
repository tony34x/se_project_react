import "./weatherCard.css";
import { weatheroptions } from "../../../utils/connstants.js";

function WeatherCard({ weatherData }) {
  const currentWeather = weatherData || {
    temp: { F: 68 },
    condition: "clear",
    isday: true,
  };

  const weatheroption =
    weatheroptions.find((option) => {
      return (
        option.day === currentWeather.isday &&
        option.condition === currentWeather.condition
      );
    }) || weatheroptions[0];

  return (
    <section className="weather-cards">
      <article className="weather-card">
        <p className="weather-card__temp">{currentWeather.temp.F}&deg;F</p>
        <img
          src={weatheroption.url}
          alt={currentWeather.condition}
          className="weather-card__image"
        />
      </article>
    </section>
  );
}

export default WeatherCard;
