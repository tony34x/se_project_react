// import "./main.css";
import WeatherCard from "../weatherCard/weatherCard";
import "./main.css";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData, clothingItems, onCardClick }) {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="card__text">
          Today is 75&deg; F / You may want to wear:
        </p>
        <ul className="card__list">
          {clothingItems
            .filter((item) => {
              return (
                item.isUserAdded ||
                item.weather.toLowerCase() === weatherData.type
              );
            })
            .map((item) => (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
