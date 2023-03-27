import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import './OrderProduct.css';

const OrderProduct = (props) => {

    let carts = props.cart;
    const { cart } = props;
    let productPrice;
    let totalPrice = 0;
    carts.map(cart => {
        productPrice = cart.price;
        totalPrice += productPrice;
    })
    const charge = totalPrice * .0044;
    const tax = totalPrice * .10;
    const totall = totalPrice + charge + tax;
    const HandelClearCart = (allCart) => {
        // console.log(allCart.length);

    }
    //review order
    const HandelReviewOrder = (product) => {
        {
            <ReviewOrder product={product}></ReviewOrder>
        }
    }

    return (
        <div className='order-product'>
            <h5 className='product-items'>Selected Items: {cart.length}</h5>
            <p>Total Price:$ {totalPrice}</p>
            <p>Total Shipping Charge:$ {charge.toFixed(2)}</p>
            <p>Tax:$ {tax.toFixed(2)}</p>
            <hr />
            <h5 className='grand-totall'>Grand Total: $ {totall.toFixed(2)}</h5>
            <hr />
            <button onClick={() => HandelClearCart(carts)} className='clear-btn'>Clear Cart <FontAwesomeIcon icon={faTrashAlt} /></button>
            <button onClick={() => HandelReviewOrder(carts)} className='review-order-btn'>Review Order <FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    );
};

export default OrderProduct;