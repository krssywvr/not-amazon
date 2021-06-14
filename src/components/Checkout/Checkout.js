import React from 'react'
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

const Checkout = () => {
    const [{ basket, user }] = useStateValue();
    console.log(basket)
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkout ad"/>
                <div>
                    <h3>Hello, {user?.email || 'Guest'}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map((item, i) => (
                        <CheckoutProduct key={i}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating} />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal
                    itemCount={basket?.length}
                    total={getBasketTotal(basket)} />
            </div>
        </div>
    )
}

export default Checkout
