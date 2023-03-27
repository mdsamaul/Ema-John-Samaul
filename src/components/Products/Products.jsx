import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("../../../public/fakeData/products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='shop-container'>
            <div className='products-container'>

                {
                    products.map(product => <Product
                        key={product.id}
                        products={product}
                    ></Product>)
                }
            </div>
            <div>
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Products;