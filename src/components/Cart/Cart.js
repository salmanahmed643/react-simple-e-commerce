import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }
    return (
        <div>
            <h2> Order summery </h2>
            <h5> Items Orders: {props.cart.length} </h5>
            <p> Total: {total} </p>
        </div>
    );
};


export default Cart;