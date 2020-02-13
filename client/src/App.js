import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CartProvider } from "./utils/CartState";
import { ProductsProvider } from "./utils/ProductsState";
import { UserProvider } from "./utils/UserState";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <UserProvider>
          <PageContainer />
        </UserProvider>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
