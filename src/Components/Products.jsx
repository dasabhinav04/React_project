import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Products() {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productID}`
        );
        setProduct(response.data);    
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProductDetails();
  }, [productID]);

  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ width: "300px", margin: "0 auto", textAlign: "center" }}>
      <img
        style={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          marginBottom: "1rem",
        }}
        src={product.image}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p style={{ fontWeight: "bold" }}>${product.price}</p>
    <p>Rating - {product.rating?.rate}</p>
    </div>
  );
}

export default Products;
