import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    console.log(props)
    const {name, img, price, stock, seller, star} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="product">
            <div className="product_img">
                <img src={img} alt="" />
            </div>
            <div className="product_item">
                <h4 className="product_name"> {name} </h4>
                <p> <small> by: {seller} </small> </p>
                <h2> Price: ${price} </h2>
                <p> only {stock} left in stock - order soon </p>

                <p> {star} </p>

                <button 
                onClick={() => props.handleAddToCart(props.product)}
                className="addtocart"
                > {element} Add To Cart </button>
            </div>
        </div>
    );
};

export default Product;