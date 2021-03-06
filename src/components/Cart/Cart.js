import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props;
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart)
    {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = total * 0.1;
    
    const grandTotal = tax + total + shipping;

    return (
        <div className='cart'>
            <h1>Order Summery</h1>
            <p>Selected Item:{quantity}</p>
            <p>Toalal Price: ${total} </p>
            <p>Total Shipping: $ {shipping }</p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h2>Grand Total: ${grandTotal.toFixed(2)} </h2>
        </div>
    );
};

export default Cart;