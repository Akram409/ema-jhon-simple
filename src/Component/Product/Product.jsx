import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, quantity, seller, ratings } = props.product;
  const len = {
    height: "700px",
  };
  return (
    <div className="relative">
      <div style={len} className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body pb-0">
          <h1 className="card-title text-xl">{name}</h1>
          <h2>Price: ${price}</h2>
          <div className="card mt-10">
            <h4>Manufacturer: {seller}</h4>
            <h4>Rating: {ratings} star</h4>
          </div>
        </div>
      </div>
      <button className="btn w-full bg-amber-200 text-black  hover:text-white absolute bottom-0">
              Add to Cart
              <span className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>
            </button>
    </div>
  );
};

export default Product;
