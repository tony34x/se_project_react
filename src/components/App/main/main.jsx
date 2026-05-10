// import "./main.css";
import WeatherCard from "../weatherCard/weatherCard";
import "./main.css";
import { defaultClothingItems } from "../../../utils/connstants";
import ItemCard from "../../ItemCard";


function Main({ weatherData }) {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="card__text">
          Today is 75&deg; F / You may want to wear:
        </p>
        <ul className="card__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather.toLowerCase() === weatherData.type;
            })
            .map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
