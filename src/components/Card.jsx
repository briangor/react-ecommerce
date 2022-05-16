import { Link } from "react-router-dom";

const handleAddToCart = () => {
  console.log("Cart")
}

const Card = ({ item }) => {
  return (
    <>
      <div className="card">
        <img src={item.image} alt="product" className="card-img " />
        <div className="card-details">
            <p className="card-title">{item.title.substring(0,20)}</p>
            <span className="card-price">${item.price}</span>
        </div>
        <div className="card-btns">
          <Link to={`products/${item.id}`}>
            <button className="btn card-btn">View</button>
          </Link>
          <button className="btn card-btn" onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
