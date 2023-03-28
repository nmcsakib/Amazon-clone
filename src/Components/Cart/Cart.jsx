import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const singleCart of cart) {
        singleCart.quantity = singleCart.quantity || 1;
        total += singleCart.price * singleCart.quantity;
        totalShipping += singleCart.shipping;
        quantity = quantity + singleCart.quantity;
    } 
    
    console.log(cart);
    let tax = total * 7 / 100;
   let grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Shipping Cost: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;