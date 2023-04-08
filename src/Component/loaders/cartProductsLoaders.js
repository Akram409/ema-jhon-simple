import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoaders = async() =>{
    const loadedProduct = await fetch('products.json')
    const products = await loadedProduct.json()
    
    const storedCart = getShoppingCart()
    const savedCart = [];

    for(const id in storedCart)
    {
        const addProduct = products.find(products => products.id === id)
        if(addProduct)
        {
            const quantity = storedCart[id]
            addProduct.quantity = quantity
            savedCart.push(addProduct)
        }
    }
    return savedCart;
}

export default cartProductsLoaders