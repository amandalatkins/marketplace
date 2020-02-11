import React, {useEffect} from "react";
import { useCartContext } from "../utils/CartState";
import { useProductsContext } from "../utils/ProductsState";
import API from "../utils/API";

function Home() {

    const [cart, setCart] = useCartContext();
    const [products, setProducts] = useProductsContext();

    useEffect(() => {

        console.log("use effect");

        API.getAllProducts().then(data => {
            console.log(data);
        });

        // console.log(productList);

    }, [])

    return (
        <div></div>
    );
}

export default Home;