import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    const addToCart = props.addToCart;
    return (
        <div className='product'>
            <img src={img ? img : "vite.svg"} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p className='price'>Price: ${price}</p>
            <div className='details'><p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p></div>
            <button onClick={() => addToCart(props.product)} className='btn-cart'>
                Add to Cart
                </button>
        </div>
    );
};

export default Product;