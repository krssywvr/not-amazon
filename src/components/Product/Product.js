import React from 'react';
import './Product.css';
import { useStateValue } from '../../StateProvider'

const Product = ({ title, image, price, rating, id }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{ title }</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>🌟</p>
                    ))}
                </div>
            </div>
            <img className="product__img"
                src={ image }
                alt="amazon product" />
            <button className="product__addToCartBtn"
                onClick={addToBasket}>
                Add to cart
            </button>
        </div>
    )
}

export default Product;
