import React from "react";

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
                <h5><a href={"/product/"+item.sku}>{item.name}</a></h5>
                <p dangerouslySetInnerHTML={{__html: item.shortDesc }}></p>
            </td>
            <td>
                <input className="form-control text-center" name="quantity" type="number" min="1" defaultValue={item.quantity} onChange={(e) => props.handleChange(item, e.target.value)}/>
                <p><button className="btn btn-sm text-danger" onClick={() => handleRemove(item._id)}>Remove</button></p>
            </td>
            <td>
                ${item.price}
            </td>
        </tr>
    );
}

export default CartItem;