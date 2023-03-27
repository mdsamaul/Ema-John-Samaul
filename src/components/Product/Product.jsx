import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = (props) => {

    const { id, name, img, price, quantity, ratings, seller } = props.products;
    const { handeleAddToCart } = props;
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
                <button onClick={() => handeleAddToCart(props.products)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;