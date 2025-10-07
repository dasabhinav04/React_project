import React from 'react'
import { useLocation } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const { userInfo, cart, totalAmount } = location.state || {};

  if (!userInfo || !cart) {
    return (
      <div style={{ padding: '20px' }}>
        <h2 className="text-danger">Order Not Found</h2>
        <p>It looks like you came here directly. Please place an order first.</p>
        <Link to="/" className="btn btn-primary">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-success mb-4">🎉 Order Placed Successfully!</h2>
        <p className="text-center">Thank you, <strong>{userInfo.name}</strong>! Your order has been received.</p>

        <h4 className="mt-4">Shipping to:</h4>
        <div className="border p-3 mb-4" style={{ borderRadius: '8px' }}>
          <p>{userInfo.address}</p>
        </div>

        <h4>Order Summary:</h4>
        <ul className="list-group mb-4">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.title} x {item.quantity}
              <span className="badge bg-info">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <h4 className="text-right">Total Paid: <span className="fw-bold">${totalAmount}</span></h4>

        <p className="mt-4">We appreciate your purchase. Thanks for shopping with us!</p>

        <div className="text-center mt-4">
          <Link to="/" className="btn btn-primary px-4 py-2">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
