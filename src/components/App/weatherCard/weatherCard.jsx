import "./weatherCard.css";
import sunny from "../../../images/sunny.png";
import cloudy from "../../../images/ cloudy.png";
import rainy from "../../../images/rain.png";
import snowy from "../../../images/Snow.png";
import stormy from "../../../images/Storm.png";
import foggy from "../../../images/Fog.png";

const weatherCards = [
  { id: "sunny", temp: "75", image: sunny, alt: "sunny" },
  { id: "cloudy", temp: "72", image: cloudy, alt: "cloudy" },
  { id: "rainy", temp: "68", image: rainy, alt: "rainy" },
  { id: "snowy", temp: "30", image: snowy, alt: "snowy" },
  { id: "stormy", temp: "64", image: stormy, alt: "stormy" },
  { id: "foggy", temp: "58", image: foggy, alt: "foggy" },
];

function WeatherCard() {
  return (
    <section className="weather-cards">
      {weatherCards.map((card) => (
        <article className="weather-card" key={card.id}>
          <p className="weather-card__temp">{card.temp} &deg; F</p>
          <img
            src={card.image}
            alt={card.alt}
            className="weather-card__image"
          />
        </article>
      ))}
    </section>
  );
}

export default WeatherCard;
