import React, {useEffect, useRef} from "react";
import { useCartContext } from "../utils/CartState";
import { useProductsContext } from "../utils/ProductsState";
import API from "../utils/API";
import Product from "../components/Product";
import axios from "axios";

function Home() {

    const [cart, setCart] = useCartContext();
    const [products, setProducts] = useProductsContext();

    const searchInput = useRef();

    useEffect(() => {
        loadProducts();
    }, []);

    function loadProducts() {
        API.getAllProducts()
        .then(products => {
            setProducts({ type: "update", products: products.data});
        });
    }

    function handleAddToCart(item) {
        
        setCart({ type:"add", item: item });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        API.getAllProducts(searchInput.current.value)
        .then(results => {
            setProducts({ type: "update", products: results.data });
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="container my-5">

            <div className="row mb-5">
                <div class="col-12">
                    <form onSubmit={handleFormSubmit} className="form-inline">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="staticEmail2"
                                ref={searchInput}
                                placeholder="Search..."
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </form>
                </div>
            </div>

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
                    />);
                })}
            </div>
        </div>
    );
}

export default Home;