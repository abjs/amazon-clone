import "./Total.css";
import React from "react";
import CurrencyForm from "react-currency-format";

export default function Total() {
  return (
    <div className='total'>
      <CurrencyForm
        renderTest={(value) => (
          <>
            <p>
              Subtotal ( 0 items):<strong>0</strong>
            </p>
            {/* <p>Subtotal ({basket.length} items):<strong>{`${value}`}</strong></p> */}
            {/* <small className='subtotal__gift'> */}
              {/* <input type='checkbox' /> */}
              This order is contains a gift
            {/* </small> */}
          </>
        )}
        decimals={2}
        value={0}
        displayType={"text"}
        thousandsSepar={true}
        prefix={"$"}
      />
    </div>
  );
}
