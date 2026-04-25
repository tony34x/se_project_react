// import "./main.css";
import WeatherCard from "../weatherCard/weatherCard";

function Main() {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="card__text">today is 75 &deg; F /you may want to wear</p>
        {/* --- TODO  add the cards--- */}
      </section>
      ;
    </main>
  );
}

export default Main;
