import React, {useEffect, useState} from "react";
import { useCartContext } from "../utils/CartState";
import API from "../utils/API";

function Product(props) {

    const [cart, setCart] = useCartContext();
    const [product, setProduct] = useState({});

    useEffect(() => {
        loadCart();
        loadProduct();
    }, []);

    
    function loadProduct() {
        API.getByID(props.match.params.id)
        .then(products => {
            console.log(products.data);
            setProduct(products.data);
        });
    }

    function loadCart() {
        console.log("loading cart");
        API.getCart().then(results => {
            console.log(results);
            setCart({ type: "all", cart: results.data });
        });
    }

    function handleAddToCart(item) {
        console.log("adding item to cart");
        API.addProduct(item)
        .then(_ => {
            loadCart()
        })
        .catch(err => console.log(err)); 
    }

    return (
        <div className="container my-5">
            <div className="row mb-5">
                <div className="col-xs-12 col-lg-4">
                    <img src={product.image} className="large-product-image"/>
                </div>
                <div className="col-xs-12 col-lg-8">
                    <h1 className="display-5">{product.name}</h1>
                    <h3 className="my-3">${product.regularPrice}</h3>
                    <h5>Avg. Customer Rating: {product.customerReviewAverage}</h5>
                    <p dangerouslySetInnerHTML={{__html: product.longDescription }}></p>

                    <p>{cart.some(item => item.name === product.name) ? 
                    <a href="/cart" className="btn btn-secondary">In Cart</a>
                        :  
                    <button onClick={() => handleAddToCart({
                        name: product.name,
                        sku: product.sku,
                        price: product.regularPrice,
                        rating: product.customerReviewAverage,
                        categories: JSON.stringify(product.categories),
                        image: product.image,
                        shortDesc: product.shortDescription,
                        longDesc: product.longDescription,
                        quantity: 1
                    })} className="btn btn-success">Add To Cart</button> }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Product;