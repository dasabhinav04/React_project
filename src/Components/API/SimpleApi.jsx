import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function SimpleApi() {
  const [datafetch, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  // ✅ Error and loading handling moved here
  if (error) {
    return <p className="text-danger text-center">Error: {error.message}</p>;
  }

  if (datafetch.length === 0) {
    return <p className="text-center">Loading products...</p>;
  }

  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center align-items-end">
      {datafetch.map((item) => (
        <div className="card" style={{ width: '300px', padding: '50px' }} key={item.id}>
          <img src={item.image} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description.slice(0, 80)}...</p>
            <NavLink style={{ width: '100%' }} to="#" className="btn btn-primary">
              Buy
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SimpleApi;
