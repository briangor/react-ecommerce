import { useState, useEffect } from "react";
import axios from "axios";
import heroImg from "../assets/images/img1.png";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  //
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(false);
      //const response = await fetch("https://fakestoreapi.com/products");
      //const response = await axios.get("https://fakestoreapi.com/products");
      const response = await axios.get("http://localhost:8000/products");
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
  //

  const heroText = () => {
    let head1 = "Deals just got better!";
    let head2 = "head1";
    let tag1 = "Jump onto the bandwagon :)";
    let tag2 = "tag2";
    console.log(head1);
  };

  return (
    <div className="home">
      <div className="hero">
        {/* <img src={heroImg} alt="Hero" className="hero-img" /> */}
        <div className="hero-text">
          <h1 className="headline">Deals just got better!</h1>
          <h4 className="tagline">Jump onto the bandwagon :)</h4>
          <a href="#product-menu">
            <button className="btn btn-secondary">Shop Now</button>
          </a>
        </div>
      </div>
      <div>
        {/* <h5 className="products-title">Products</h5> */}
        <div className="product-menu" id="product-menu">
          <button className="btn mx-2">Clothes</button>
          <button className="btn mx-2">Jewellery</button>
          <button className="btn mx-2">Electronics</button>
          <button className="btn mx-2">Food</button>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : data.map((i) => <Card item={i} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
