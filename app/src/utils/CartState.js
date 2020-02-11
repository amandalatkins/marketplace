import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [ 
          ...state,
          action.item
        ];
      case "remove":
        return state.filter(item => item.id !== action.item.id);
      case "quantity":
        action.item.quantity = action.newQuantity;
        return [
            ...state,
            action.item
        ];
      default:
        throw new Error(`Invalid action type: ${action.type}`);
    }
  };

  const CartProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, []);
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
  const useCartContext = () => {
    return useContext(CartContext);
  };
  
  export { CartProvider, useCartContext };