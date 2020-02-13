import React from "react";
// import styles from "./style.css";
import { useCartContext } from "../../utils/CartState";

function Product(props) {
    return (
        <div className="col-xs-12 col-md-6 col-lg-4 mb-4">
            <div className="card product">
                <div className="image-container">
                    <div className="img" style={{backgroundImage: `url(${props.image})`}}></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h5>${props.price}</h5>
                    {/* <p className="card-text">{props.shortDesc}</p> */}
                    <a href="#" className="btn btn-primary" onClick={() => props.handleAddToCart({
                        name: props.name,
                        price: props.price,
                        rating: props.rating,
                        categories: JSON.stringify(props.categories),
                        image: props.image,
                        shortDesc: props.shortDesc,
                        longDesc: props.longDesc,
                        quantity: 1
                    })}>Add to Cart</a>
                </div>
            </div>
        </div>
    );
}

export default Product;