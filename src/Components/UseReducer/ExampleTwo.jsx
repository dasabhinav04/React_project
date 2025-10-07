import React, { useReducer } from 'react'

const initialState = []; 
const cartReducer = (state, action)=>{
    switch (action.type){
        case 'ADD_ITEM':{
            const existing = state.find(item => item.id === action.payload.id);
            if(existing){
                return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity +1}:item);
            } else{
                return [...state, {...action.payload, quantity: 1}];
            }
        }

        default:
            return state;
    }
}

function ExampleTwo() {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    // Products

    const products = [
        {id: 1, name:'React T-Shirt', price:20},
        {id: 2, name:'React Car', price:50},
        {id: 3, name:'React Book', price:5}

    ]
  return (
    <div>
        <h1>Cart</h1>
        {

        products.map(product =>(
        
            <div key ={product.id}>
                <strong>{product.name}</strong> -${product.price}
                <button onClick={()=> dispatch ({type: 'ADD_ITEM', payload: product})}>add</button>
            </div>
        ))
    }

    <div>
        <h4>Cart Items</h4>
        {cart.length ===0 ?
        (<p>Cart Is Empty</p>) :
        (
            <ul>
                {
                    cart.map(item =>(
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(3)}
                        </li>
                    ))
                }
            </ul>
        )}
    </div>
    </div>

  );
};

export default ExampleTwo