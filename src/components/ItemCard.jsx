import "./ItemCard/ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card" onClick={handleClick}>
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleClick}
        className="card__image"
        src={item.link}
        alt={item.name}
      />
      <p className="card__weather">weather: {item.weather}</p>
    </li>
  );
}

export default ItemCard;
