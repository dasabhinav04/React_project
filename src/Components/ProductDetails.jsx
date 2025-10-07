import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from './API/CartContext';

function ProductDetails() {

    const { productID } = useParams(); //use parameters
    const [product, setProduct] = useState(null);

    const [isAdding, setIsAdding] = useState (false);
    const {dispatch} = useCart();

    const handleAddToCart = () => {
        if (isAdding) return;
        setIsAdding(true);
        dispatch({type: 'ADD_ITEM', payload: product});
        setTimeout(() => setIsAdding(false), 800)
    }


    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${productID}`);
                setProduct(response.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchProductDetails();

    }, [productID])

    if (!product) return <div>Loading...</div>;


    return (
        <div className='container'>
            <div className='row product-details'>
                <h1 className='pagehead'>Product Details</h1>
                <div className='col-md-6 big-img'>
                    <img style={{ width: "200px" }} src={product.image} alt={product.title} />
                </div>
                <div className='col-md-6'>
                    <h3>{product.title}</h3>
                    <p className='rating'> 
                        <span>Rating : {product.rating.rate}</span>
                        <span> Count : <a className='review' href='#'>{product.rating.count}</a></span>
                        {/* <span>Rating : {product.rating && product.rating.rate}</span>
                        <span>Count :{product.rating && product.rating.count}</span> */}                        
                    </p>
                    <p className='price'>&#8377; {product.price}</p>
                    <p><b>Product Category:</b> {product.category}</p>
                    <p>{product.description}</p>
                    <button type="button" className="btn btn-primary buybtn" onClick={handleAddToCart} disabled={isAdding}>
                        {isAdding ? 'Adding...' : 'Add to Cart'}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails