import React from 'react';
import {Link} from 'react-router-dom'

export default function CartTotal({value,isCheckout = false}) {
    const {
        cartSubTotal,
        cartTax,
        cartTotal,
        cart,
        clearAll
      } = value;
    return (
        <section>
                <div className="cart-items">
                    <h2>Total</h2>
                    <h2>UGX {cartTotal}</h2>
                </div>
                <div className="cart-items">
                    <h2>Tax</h2>
                    <h2>UGX {cartTax}</h2>
                </div>
                <div className="cart-items">
                    <h2>Sub Total</h2>
                    <h2>UGX {cartSubTotal}</h2>
                </div>
                <div className="hr"></div>
               <div className="flex-down">
               {!isCheckout &&<Link to='/'>
              <button  className='button-bag' onClick={() => clearAll()}>Clear Bag</button>
              </Link>}
              {!isCheckout &&<Link to='/checkout'>
               <button  className='button-bag' onClick={() => console.log('checked out')}>Check Out</button>
               </Link>}
               </div>
                
            </section>
        )
}

