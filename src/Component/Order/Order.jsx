import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const cart = useLoaderData()
    
    return (
        <div className='All_product'>
            <div className='grid grid-cols-3 gap-8 mt-4'>
                <h1>it is order page {cart.length}</h1>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;