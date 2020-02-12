import React from "react";
import CartItem from "../components/CartItem";
import { useCartContext } from "../utils/CartState";

function Cart() {

    const [cart, setCart] = useCartContext();

    return (
        <div className="container my-5">
            <table>
                <thead>
                    <td colspan="2">Item</td>
                    <td>Quantity</td>
                    <td>Price</td>
                </thead>
                <tbody>
            
            {cart.length ? cart.map(item => {
                return <CartItem item={item} />
            }) : <tr><td><a href="/">No items! Shop now.</a></td></tr> }
            </tbody>
        </table>
        </div>
    );
}

export default Cart;