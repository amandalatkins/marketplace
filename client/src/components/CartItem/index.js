import React from "react";
// import styles from "./style.css";
import { useCartContext } from "../../utils/CartState";

function CartItem(props) {
    const { item, handleRemove } = props;

    return (
        <tr className="cart-item" key={item.sku}  scope="row">
            <td>
                <div className="image-container">
                    <div className="img" style={{backgroundImage: `url(${item.image})`}}></div>
                </div>
            </td>
            <td>
                <h5>{item.name}</h5>
                <p dangerouslySetInnerHTML={{__html: item.shortDesc }}></p>
            </td>
            <td>
                <input className="form-control text-center" name="quantity" type="text" value={item.quantity}/>
                <p><button className="btn btn-sm text-danger" onClick={() => handleRemove(item._id)}>Remove</button></p>
            </td>
            <td>
                ${item.price}
            </td>
        </tr>
    );
}

export default CartItem;