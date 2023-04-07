import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.cart)
  const { cart } = props;
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
        </div>
      </div>
    </div>
  );
};

export default Cart;
