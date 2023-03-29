import React, { useEffect, useState } from 'react';
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

    const handleAddToCart = (item) =>{
        const newCart = [...cart,item]
        setCart(newCart)
    }
    return (
        <div className='All_product'>
            <div className='grid grid-cols-3 gap-3 mt-28'>
                {
                    product.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='text-center'>
                <div className=''>
                    <h2>Order</h2>
                    <h2>Selected item {cart.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;