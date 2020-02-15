# Marketplace Powered by the Best Buy API

An application built with the MERN stack that queries the Best Buy API for products based on search or selected category, and allows a user to add items to cart, remove them, or change their quantities. The server-side code was provided so this was a practice in integrating a client-side React App with a Mongo, Node, and Express backend.

## Technologies Used

* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [NodeJS](https://nodejs.org/)
* [Best Buy API](https://developer.bestbuy.com/)

## Deployed Link

View this application on Heroku at: [https://still-fjord-32596.herokuapp.com/](https://still-fjord-32596.herokuapp.com/)

## Code Snippets

The following code snippet shows the global cart state.

```jsx
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
      case "all":
        return action.cart;
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
  ```

This code snippet shows the parsing of the Products pulled from Best Buy's API.

```jsx
<div className="row">
    {products.products.map(product => {
        return (<Product
            key={product.sku}
            sku={product.sku}
            name={product.name} 
            price={product.regularPrice} 
            categories={product.categoryPath} 
            rating={product.customerReviewAverage}
            image={product.image}
            shortDesc={product.shortDescription}
            longDesc={product.longDescription}
            handleAddToCart={handleAddToCart}
            inCart={cart.some(item => item.name === product.name)}
        />);
    })}
</div>
```


## Learning Points

* React hooks and context
* Further honed of my skills of integrating my code into someone else's code