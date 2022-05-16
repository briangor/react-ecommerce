import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    //navigate("/");
    window.history.back();
  };
  return (
    <>
      <button
        className="product-close-btn btn btn-outline-danger"
        onClick={handleClose}
      >
        Close
      </button>
      <h6>Cart</h6>
    </>
  );
};

export default Cart;
