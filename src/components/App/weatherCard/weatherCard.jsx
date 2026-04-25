import "./weatherCard.css";
import sunny from "../../../images/sunny.png";
import cloudy from "../../../images/ cloudy.png";
import rainy from "../../../images/rain.png";

function WeatherCard() {
  return  (
    <section className="weather-card">
      <p className="weather-card__temp">75 &deg; F</p>
      <img src={sunny} alt="sunny" className="weather-card__image" />
      <p className="weather-card__temp">75 &deg; F</p>
      <img src={cloudy} alt="cloudy" className="weather-card__image" />
      <p className="weather-card__temp">75 &deg; F</p>
      <img src={rainy} alt="rainy" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
