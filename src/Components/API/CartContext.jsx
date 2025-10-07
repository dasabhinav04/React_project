import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();

export function useCart(){
    return useContext(CartContext);
}

export function CartProvider({children}){
    const [cart, dispatch] = useReducer(cartReducer,[]);

    return (
        <CartContext.Provider value = {{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext; 