import React from 'react';
import CartItem from './CartItem'

export default function Cartlist({value}) {
  const {cart} = value;
  return (
    <div>
        <div>
            {cart.map((item,index) => {
               console.log(item.id)
              return(
                <CartItem key={index} item={item} value={value} />
              )
            })}
         </div>
    </div>
  );
}

// import React, { Component } from "react";
// import CartItem from "./CartItem";
// export default class CartList extends Component {
//   render() {
//     const { value } = this.props;
//     const { cart } = this.props.value;
//     console.log(cart);
//     return (
//       <div>
//           <div>
//         {cart.map(item => (
//           <CartItem key={item.id} item={item} value={value} />
//         ))}
//            </div>
//       </div>
//     );
//   }
// }
