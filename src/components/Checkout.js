import "./Checkout.css";
import React from "react";
import Total from "./Total";

export default function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__add'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='amazon_baner'
        />

        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
        </div>
      </div>
      <div className='checkout__right'>
            <Total/>
      </div>
    </div>
  );
}
