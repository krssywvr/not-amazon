import React from 'react'
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, image, title, price, rating }) => {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__img"
                src={image}
                alt="checkout product" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>🌟</p>
                    ))}
                </div>
                <button className="checkoutProduct__remove"
                    onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
