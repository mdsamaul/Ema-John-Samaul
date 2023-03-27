import React, { useEffect, useState } from 'react';
import OrderProduct from '../OrderProduct/OrderProduct';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("../../../public/fakeData/products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handeleAddToCart = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);


    }

    return (
        <div className='shop-container'>

            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        products={product}
                        handeleAddToCart={handeleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='order-container'>
                <h3>Order Summary</h3>
                <div>

                    {
                        <OrderProduct cart={cart}></OrderProduct>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;