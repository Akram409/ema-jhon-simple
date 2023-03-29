import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let totalPrice = 0;
  let totalShipping = 0;
  let totalTax = 0;
  let GrandTotal = 0;
  for (const product of cart)
  {
    totalPrice = totalPrice + product.price
    totalShipping = totalShipping + product.shipping
  }
  totalTax = totalPrice * 7 / 100;
  GrandTotal = totalPrice + totalShipping + totalTax;

  return (
    <div className="Cart text-white sticky top-0">
      <div>
        <h1 className="font-bold text-3xl text-black py-10 text-center">
          Order Summary
        </h1>
        <div className="Cart-Info text-center">
          <p>Selected Items: {cart.length}</p>
          <p>Total Price: ${totalPrice}</p>
          <p>Total Shipping Charge: ${totalShipping}</p>
          <p>Tax: ${totalTax}</p>
          <h2 className="font-bold text-2xl py-7">Grand Total: ${GrandTotal}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
