import React, { Component } from 'react';
import '../../css/Cart.scss';
import CartEmpty from './CartEmpty';
import CartList from './CartList';
import CartTotal from './CartTotal'
import{ProductConsumer} from '../../Contex';

export default class Cart extends Component {
    render() {
        return (
           <section className='cart-main'>
               <ProductConsumer>
                   {value => {
                       
                       const {cart} = value;
                       if(cart.length > 0) {
                           return (
                            <div>
                                <h4>Bag <span>{cart.length}</span></h4>
                                <div className="hr"></div>
                                <div className='display-cart'>
                                <CartList value={value}/>
                                <CartTotal value= {value}/>
                                </div>
                            </div>
                           )
                       }
                       else{
                           return(
                               <div  className='rigth-items'>
                                    <h4>Bag <span>{cart.length}</span></h4>
                                    <CartEmpty/>
                               </div>
                            
                           )
                       }
                   }}
               
               </ProductConsumer>
           </section>
        )
    }
}
