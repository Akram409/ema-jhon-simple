import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [product,setProduct] = useState([])
    const [cart,setCart] = useState([])

    useEffect(() => {
        const loadData = async() =>{
            const res = await fetch('products.json')
            const data = await res.json()
            setProduct(data)
        }
        loadData()
    },[])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = [];
        for(const id in storedCart)
        {
            const addProduct = product.find(products => products.id === id)
            if(addProduct)
            {
                const quantity = storedCart[id]
                addProduct.quantity = quantity
                savedCart.push(addProduct)
            }
        }
        setCart(savedCart)

    },[product])

    const handleAddToCart = (item) =>{
        /// Type - 3
        // console.log(cart)
        let newCart = [];
        const exists = cart.find(pd => pd.id === item.id)
        if(!exists)
        {
            item.quantity = 1;
            newCart = [...cart,item]
        }
        else
        {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id != item.id)
            newCart = [...remaining,exists]
        }
        // const newCart = [...cart,item]
        setCart(newCart)
        addToDb(item.id)
    }
    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='All_product'>
            <div className='grid grid-cols-3 gap-8 mt-4'>
                {
                    product.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
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

export default Shop;