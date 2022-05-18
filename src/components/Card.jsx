import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const handleAddToCart = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: "success",
    title: "Added to cart",
    color: "#193561",
    width: '20%'
  });
};

const Card = ({ item }) => {
  return (
    <>
      <div className="card">
        <img src={item.image} alt="product" className="card-img " />
        <div className="card-details">
          <p className="card-title">{item.title.substring(0, 20)}</p>
          <span className="card-price">${item.price}</span>
        </div>
        <div className="card-btns">
          <Link to={`products/${item.id}`}>
            <button className="btn card-btn">View</button>
          </Link>
          <button className="btn card-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
