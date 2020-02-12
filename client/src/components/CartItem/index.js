import React from "react";
// import styles from "./style.css";
import { useCartContext } from "../../utils/CartState";

function CartItem(props) {
    const item = props.item;
    return (
        <tr className="cart-item">
            <td style={{width:"20%"}}>
                <div className="image-container">
                    <div className="img" style={{backgroundImage: `url(${item.image})`}}></div>
                </div>
            </td>
            <td>
                <h5>{item.name}</h5>
                <p dangerouslySetInnerHTML={{__html: item.longDesc }}></p>
            </td>
            <td>
                <input name="quantity" type="text"/>
                <p><a href="#">Remove</a></p>
            </td>
            <td>
                ${item.price}
            </td>
            <td>
            </td>
        </tr>
    );
}

export default CartItem;