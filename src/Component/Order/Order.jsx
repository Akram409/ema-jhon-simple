import React, { useState } from 'react';
import './Order.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCart = useLoaderData()
    const [cart,setCart] = useState(saveCart)

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(item => item.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='All_product'>
            <div className='Order-item'>
                {
                    cart.map(product => <Review
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></Review>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Order;