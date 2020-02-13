import React, {useEffect, useRef, useState} from "react";
import { useCartContext } from "../utils/CartState";
import { useProductsContext } from "../utils/ProductsState";
import isLoggedIn from "../utils/isLoggedIn";
import API from "../utils/API";
import Product from "../components/Product";
import axios from "axios";

function Home(props) {

    if (!isLoggedIn.isLoggedIn) {
        props.history.push('/login');
    }

    const [cart, setCart] = useCartContext();
    const [products, setProducts] = useProductsContext();

    const [categories, setCategories] = useState([]);

    const searchInput = useRef();
    const categoryInput = useRef();

    useEffect(() => {
        loadProducts();
        loadCategories();
    }, []);

    function loadProducts() {
        API.getAllProducts()
        .then(products => {
            setProducts({ type: "update", products: products.data});
        });
    }

    function loadCategories() {
        axios.get('https://api.bestbuy.com/v1/categories?format=json&show=id,name&apiKey=24bjBKaA8GyUoZ3nyBNxE4IN')
        .then(categories => {
            setCategories(categories.data.categories);
        })
        .catch(err => console.log(err));
    }

    function handleAddToCart(item) {
        API.addProduct(item)
        .then(result => setCart({ type:"add", item: item }))
        .catch(err => console.log(err));
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        API.getAllProducts(searchInput.current.value)
        .then(results => {
            setProducts({ type: "update", products: results.data });
        })
        .catch(err => console.log(err));
    }

    function handleCategoryChange(e) {
        console.log("handling change");
        API.getByCategory(categoryInput.current.value)
        .then(results => 
            setProducts({ type: "update", products: results.data })
        )
        .catch(err => console.log(err));
    }

    return (
        <div className="container my-5">

            <div className="row mb-5">
                <div className="col-12">
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
                        <div className="form-group float-right">
                            <select ref={categoryInput} onChange={handleCategoryChange} placeholder="Select category...">
                                <option value="" disabled selected>Select Category...</option>

                                {categories.map(cat => {
                                    if (cat.id !== "1579550216270") {
                                        return <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    }
                                })}
                            </select>
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