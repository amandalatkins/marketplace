import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import { useCartContext } from "../utils/CartState";
import API from "../utils/API";

function Cart(props) {

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

    function sendToCheckout() {
        console.log("You can never checkout!");
    }

    function handleChange(item, quantity) {
        item = { ...item, quantity}
        API.updateQuantity(item)
        .then(response => loadCart())
        .catch(err => console.log(err));
    }

    function cartTot() {
        var tempNum = 0;
        for (var i = 0; i < cart.length; i++) {
            tempNum += parseFloat(cart[i].price)*cart[i].quantity;
        }
        return tempNum;
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
                            { cart.length ? cart.map(item => <CartItem key={item._id} item={item} handleRemove={handleRemove} handleChange={handleChange} />) : <tr><td><a href="/">No items! Shop now.</a></td><td colSpan="3"></td></tr> }
                        </tbody>
                    </table>
                </div>
                <div className="col-xs-12 col-lg-3">
                    <div className="border border-dark">
                        <h5 className="bg-dark text-white p-3">Cart Total</h5> 
                        <h3 className="p-3 text-center">${ cartTot()}    
                        </h3>
                        <div className="p-3 text-center border-top border-dark">
                            <button className="btn btn-success btn-lg w-100" onClick={sendToCheckout}>Check Out</button>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Cart;