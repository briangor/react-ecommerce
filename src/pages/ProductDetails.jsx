import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import axios from "axios";
import Swal from 'sweetalert2';

const ProductDetails = () => {
  const { id } = useParams();
  //const [data ] = useFetch('https://fakestoreapi.com/products/' + id);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(false);
      //const response = await axios.get("https://fakestoreapi.com/products/" + id);
      const response = await axios.get("http://localhost:8000/products/" + id);

      if (componentMounted) {
        //setData(await response.clone().json());
        //setFilter(await response.json());
        setData(await response.data);
        setFilter(await response.data);
        setLoading(false);
        // console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

   const handleClose = () => {
      navigate('/');
  }

const handleAddToCart = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })    
  Toast.fire({
    icon: 'success',
    title: 'Added to cart',
    color: '#193561',
    width: '20%'
  })
}

  return (
    <>
    <button className="product-close-btn btn btn-outline-danger" onClick={handleClose}>Close</button>
      <div className="product-details">
        {data && (
          <div className="row" key={data.id}>
            <div className="col product-image">
              <img src={data.image} alt="product" width="400px" className="img"/>
            </div>
            <div className="col-md-7 product-info">
              <p className="product-title">{data.title}</p>
              <p className="product-category"><i className="bi bi-tag"></i>{data.category}</p>
              <div className="product-cart-div">
              <span className="product-price">${data.price}</span>
              <button className="btn product-cart" onClick={handleAddToCart}>Add to cart</button>
              <Link to='/cart'>
                <button className="btn cart">Cart</button>
              </Link>
              </div>
              {/* <p className="product-rating-rate">{data.rating.rate}</p> */}
              {/* <p className="product-rating-count">{data.rating.count}</p> */}
              <p className="product-description">{data.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
