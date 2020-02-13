import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import { useCartContext } from "../utils/CartState";
import API from "../utils/API";

function Cart() {

    const [cart, setCart] = useCartContext();

    useEffect(() => {
        loadCart();
    }, []);

    function loadCart() {
        API.getCart().then(results => {
            setCart({ type: "all", cart: results.data });
        });
    }

    function handleRemove(id) {
        API.removeProduct(id)
        .then(response => loadCart())
        .catch(err => console.log(err));
    }

    return (
        <div className="container my-5">
            <div className="row">

                <div className="col-xs-12 col-lg-9">
                    <table className="table w-100 table-striped">
                        <thead className="thead-dark w-100">
                            <tr>
                                <th colSpan="2" scope="col">Item</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            { cart.length ? cart.map(item => <CartItem key={item._id} item={item} handleRemove={handleRemove} />) : <tr><td><a href="/">No items! Shop now.</a></td></tr> }
                        </tbody>
                    </table>
                </div>
                <div className="col-xs-12 col-lg-3">
                    <div className="bg-dark text-white p-3 text-right">
                        <h5>Cart Total</h5> 
                        <h3>$
                            {                             
                                cart.length ? ( cart.reduce((total, curItem) => {
                                    return { price: parseFloat(total.price) + parseFloat(curItem.price) };
                                 } ) ).price : ""
                            }    
                        </h3>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Cart;