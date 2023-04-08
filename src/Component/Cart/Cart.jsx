import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart,handleClearCart } = props;

  let totalPrice = 0;
  let totalShipping = 0;
  let totalTax = 0;
  let GrandTotal = 0;
  let Quantity = 0;
  for (const product of cart) {

    /// Type - 1
    // if(product.quantity === 0)
    // {
    //   product.quantity = 1;
    // }

    /// Type - 2
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    Quantity = Quantity + product.quantity
  }
  totalTax = (totalPrice * 7) / 100;
  GrandTotal = totalPrice + totalShipping + totalTax;

  return (
    <div className="Cart text-white sticky top-0">
      <div>
        <h1 className="font-bold text-3xl text-black py-10 text-center">
          Order Summary
        </h1>
        <div className="Cart-Info text-center">
          <p>Selected Items: {Quantity}</p>
          <p>Total Price: ${totalPrice}</p>
          <p>Total Shipping Charge: ${totalShipping}</p>
          <p>Tax: ${totalTax}</p>
          <h2 className="font-bold text-2xl py-7">
            Grand Total: ${GrandTotal}
          </h2>
          <button onClick={handleClearCart} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg Cart-btn flex justify-center items-center mx-auto my-4 bg-red-500 w-10/12"><span className="text-white">Clear Cart</span> 
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-8 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg></button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
