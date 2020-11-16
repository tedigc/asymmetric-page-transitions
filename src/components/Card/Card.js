import "./Card.styles.css";

const Card = ({ shoe }) => {
  return (
    <div className="card">
      <img className="card-thumbnail" src={`/assets/${shoe.src}`} alt="Shoe thumbnail" />
      <div className="card-content">
        <strong>{shoe.name}</strong>
        <span>Men's running shoe</span>
        <strong>{shoe.price}</strong>
      </div>
    </div>
  );
};

export default Card;
