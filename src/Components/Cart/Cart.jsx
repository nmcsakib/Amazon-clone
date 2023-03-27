import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    let total = 0;
    let totalShipping = 0;
    for (const singleCart of cart) {
        total += singleCart.price;
        totalShipping += singleCart.shipping;
    }
    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:${total} </p>
            <p>Shipping Cost:${totalShipping} </p>
            <p>Tax:${(total*7 / 100).toFixed(2)} </p>
            <h6>Grand Total: </h6>
        </div>
    );
};

export default Cart;