import React, { useState } from 'react'
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

  useEffect(() => {
    document.title = 'Checkout';
  }, []);


  const { cart, dispatch } = useCart();
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    paymentDetails: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
  });

  const [errors, setErrors] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const navigate = useNavigate();
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const formattedTotalAmount = totalAmount.toFixed(2);

  // Handle user input changes and set errors
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('paymentDetails')) {
      const field = name.split('.')[1];
      setUserInfo((prevState) => ({
        ...prevState,
        paymentDetails: {
          ...prevState.paymentDetails,
          [field]: value,
        },
      }));
    } else {
      setUserInfo((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Validate inputs before submitting the form
  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Card number validation (must be at least 12 digits)
    const cardNumber = userInfo.paymentDetails.cardNumber.replace(/\s+/g, ''); // Remove spaces
    if (cardNumber.length < 12) {
      errors.cardNumber = 'Card number must be at least 12 digits.';
      formIsValid = false;
    }

    // Expiry date validation (MM/YY format)
    const expiryDate = userInfo.paymentDetails.expiryDate;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDatePattern.test(expiryDate)) {
      errors.expiryDate = 'Expiry date must be in MM/YY format.';
      formIsValid = false;
    }

    // CVV validation (must be exactly 3 digits)
    const cvv = userInfo.paymentDetails.cvv;
    if (!/^\d{3}$/.test(cvv)) {
      errors.cvv = 'CVV must be exactly 3 digits.';
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) {
      return;
    }

    dispatch({ type: 'CLEAR_CART' });
    // navigate to success page with order data
    navigate('/order-success', {
      state: {
        userInfo,
        cart,
        totalAmount: formattedTotalAmount,
      },
    });
  };

  return (
    <div className={`container py-5 ${themeClass}`}>
      <h2 className="text-center mb-4">Checkout</h2>

      {cart.length === 0 ? (
        <div className="alert alert-warning text-center">
          Your cart is empty. Please add some items before checking out.
        </div>
      ) : (
        <>
          <h4 className="mb-3">Review Your Order</h4>
          <div className="row g-4 mb-5">
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
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <p className="card-text fw-bold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="mb-3">Total Amount: ${formattedTotalAmount}</h4>

          <h4 className="mb-3 mt-5">Billing Information</h4>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  rows="3"
                  value={userInfo.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <h4 className="mb-3 mt-5">Payment Details</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  name="paymentDetails.cardNumber"
                  className="form-control"
                  value={userInfo.paymentDetails.cardNumber}
                  onChange={handleInputChange}
                  required
                  maxLength={12}
                />
                {errors.cardNumber && (
                  <small className="text-warning">{errors.cardNumber}</small>
                )}
              </div>
              <div className="col-md-3">
                <label className="form-label">Expiry Date</label>
                <input
                  type="text"
                  name="paymentDetails.expiryDate"
                  className="form-control"
                  value={userInfo.paymentDetails.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  required
                />
                {errors.expiryDate && (
                  <small className="text-warning">{errors.expiryDate}</small>
                )}
              </div>
              <div className="col-md-3">
                <label className="form-label">CVV</label>
                <input
                  type="text"
                  name="paymentDetails.cvv"
                  className="form-control"
                  value={userInfo.paymentDetails.cvv}
                  onChange={handleInputChange}
                  required
                />
                {errors.cvv && <small className="text-warning">{errors.cvv}</small>}
              </div>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-success px-5">
                Submit Order
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
