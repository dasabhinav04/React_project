import React, { useEffect, useState } from 'react'

    function FetchData() {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(null);

  const datafetch = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch data");   // <-- capital E
      }
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // ✅ useEffect should be here, not inside datafetch
  useEffect(() => {
    datafetch();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!product.length) return <p>Loading...</p>;

  return (
    <div>
      {product.map((item) => (
        <ul key={item.id}>
          <li>
            <img
              alt={item.title}
              style={{ width: "200px" }}
              src={item.image}
            />
          </li>
          <li>{item.title}</li>
        </ul>
      ))}
      <h1>Fetch Data</h1>
    </div>
  );
}

export default FetchData