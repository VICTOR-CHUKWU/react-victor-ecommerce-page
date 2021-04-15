import React from 'react';
import CartItem from './CartItem'

export default function Cartlist({value, isCheckout = false}) {
  const {cart} = value;
  return (
    <div>
        <div>
            {cart.map((item,index) => {
               console.log(item.id)
              return(
                <CartItem isCheckout={isCheckout} key={index} item={item} value={value} />
              )
            })}
         </div>
    </div>
  );
}

