import React from 'react';
import {Link} from 'react-router-dom'

export default function CartTotal({value}) {
    const {
        cartSubTotal,
        cartTax,
        cartTotal,
        cart,
        clearAll
      } = value;
    return (
        <section>
                <div className="cart-item">
                    <h2>Total</h2>
                    <h2>UGX {cartTotal}</h2>
                </div>
                <div className="cart-item">
                    <h2>Tax</h2>
                    <h2>UGX {cartTax}</h2>
                </div>
                <div className="cart-item">
                    <h2>Sub Total</h2>
                    <h2>UGX {cartSubTotal}</h2>
                </div>
                <div className="hr"></div>
               <div className="flex-down">
              <Link to='/'>
              <button  className='button-bag' onClick={() => clearAll()}>Clear Bag</button>
              </Link>
                <button  className='button-bag' onClick={() => console.log('checked out')}>Check Out</button>
               </div>
                
            </section>
        )
}

