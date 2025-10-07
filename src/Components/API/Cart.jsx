import React, { useEffect } from 'react'
import { useCart } from './CartContext'
import { useNavigate } from 'react-router-dom';

function Cart() {


    // Step One
    useEffect(()=>{
        document.title = 'Cart';
    },[]); 

    const {cart, dispatch} = useCart();
    const navigate = useNavigate();


    // Step two

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const formattedTotalAmount =  totalAmount.toFixed(2);

    const handleRemoveFromCart = (id) =>{
        dispatch({type: 'REMOVE_ITEM', payload: {id} })
    };

    const formatPrice = (price) => price.toFixed(2);

  const handleCheckout = () => {
    navigate('/checkout');
  };

   return (
    <div className="container py-4">
      <h2 className="mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row g-4">
            {cart.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top p-3"
                    style={{ height: '200px', objectFit: 'contain' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      {item.quantity} × ${formatPrice(item.price)} = $
                      {formatPrice(item.price * item.quantity)} 
                    </p>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h4>Total: ${formattedTotalAmount}</h4>
            <button className="btn btn-success mt-2" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );    
}

export default Cart