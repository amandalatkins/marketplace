import React from "react";

function Product(props) {
    return (
        <div className="col-xs-12 col-md-6 col-lg-4 mb-4">
            <div className="card product">
                <div className="image-container">
                    <div className="img" style={{backgroundImage: `url(${props.image})`}}></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title"><a href={"/product/"+props.sku}>{props.name}</a></h5>
                    <h5>${props.price}</h5>
                    {/* <p className="card-text">{props.shortDesc}</p> */}
                    { props.inCart ? <a href="/cart" className="btn btn-secondary">In Cart</a> :
                    <button className="btn btn-primary" onClick={() => props.handleAddToCart({
                        name: props.name,
                        sku: props.sku,
                        price: props.price,
                        rating: props.rating,
                        categories: JSON.stringify(props.categories),
                        image: props.image,
                        shortDesc: props.shortDesc,
                        longDesc: props.longDesc,
                        quantity: 1
                    })}>Add to Cart</button> }
                </div>
            </div>
        </div>
    );
}

export default Product;