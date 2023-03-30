import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
        console.log(storedCart)
    },[])
    const handleAddToCart = (item) =>{
        const newCart = [...cart,item]
        setCart(newCart)
        addToDb(item.id)
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
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;