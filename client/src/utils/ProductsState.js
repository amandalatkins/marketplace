import React, { createContext, useReducer, useContext } from "react";

const ProductsContext = createContext();
const { Provider } = ProductsContext;

const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return {
          ...state,
          products: action.products
        };
      default:
        throw new Error(`Invalid action type: ${action.type}`);
    }
  };

  const ProductsProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, { products: value });
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
  const useProductsContext = () => {
    return useContext(ProductsContext);
  };
  
  export { ProductsProvider, useProductsContext };