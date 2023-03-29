import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [product,setProduct] = useState([])

    useEffect(() => {
        const loadData = async() =>{
            const res = await fetch('products.json')
            const data = await res.json()
            setProduct(data)
        }
        loadData()
    },[])
    return (
        <div className='All_product'>
            <div className='grid grid-cols-3 gap-10 mt-28 ml-5'>
                {
                    product.map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
            <div>
                <h2>Order</h2>
            </div>
        </div>
    );
};

export default Shop;