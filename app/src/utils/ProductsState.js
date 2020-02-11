import React, { createContext, useReducer, useContext } from "react";

const ProductsContext = createContext();
const { Provider } = ProductsContext;

const reducer = (state, action) => {
    switch (action.type) {
      case "category":
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

  const ProductsProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, []);
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
  const useProductsContext = () => {
    return useContext(ProductsContext);
  };
  
  export { ProductsProvider, useProductsContext };