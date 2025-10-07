import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function DataAxios() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const ToProductDetails = (productId) =>{
    navigate(`/product-details/${productId}`);
  }

  const datafetch = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    datafetch();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!product.length) return <p>Loading…</p>;

  const toggleDesc = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container my-3 text-center">
      <h1>Trending Products</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {product.map((item) => (
          <div key={item.id} className="col">
            <div className="card h-100">
              <img
                alt={item.title}
                src={item.image}
                className="card-img-top h-100"
                style={{ width: "200px", margin: "auto", padding: "1rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>

                {openId === item.id && (
                  <p className="card-text">{item.description}</p>
                )}

                <button
                  className="btn btn-primary mt-2"
                  onClick={() => toggleDesc(item.id)}
                >
                  {openId === item.id ? "Hide" : "Show"} Description
                </button>

                <button onClick={()=> ToProductDetails(item.id)} className="product-btn">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataAxios;
 