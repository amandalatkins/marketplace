import React from 'react';
import { CartProvider } from "./utils/CartState";
import { ProductsProvider } from "./utils/ProductsState";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
          <PageContainer />
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
