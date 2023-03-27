import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props);
    const { id, name, img, price, quantity, ratings, seller } = props.products;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h5>Price: ${price}</h5>
                <div className='manufacture-rating'>
                    <p>ManuFacturer: {seller}</p>
                    <p>Rating: {ratings} Start</p>
                </div>
            </div>
            <div className='add-to-cart-btn'>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;