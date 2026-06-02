import WeatherCard from "./App/weatherCard/weatherCard";
import "./App/main/main.css";
import ItemCard from "./ItemCard";

function Main({ weatherData, clothingItems, onCardClick }) {
  const temperature = weatherData?.temp?.F;

  return (
    <main>
      <WeatherCard weatherData={weatherData} temperature={temperature} />
      <section className="cards">
        <p className="card__text">
          Today is {temperature}&deg; F / You may want to wear:
        </p>
        <ul className="card__list">
          {clothingItems
            .filter((item) => {
              return item.weather.toLowerCase() === weatherData.type;
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
