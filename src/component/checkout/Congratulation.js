import React, { Component } from 'react';
import '../../css/Cart.scss';
import {ProductConsumer} from '../../Contex';
import {Link} from 'react-router-dom'

export default class Congratulation extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {clearAll} = value;
                    return (
                        <section className='congrats'>
                        <img src="images/congrat.jpg" alt=""/>
                       <h2>Thank You!!</h2> 
                       <h3>Your order has been succesfully place</h3>
                       <p>you will recieve a confirmation message once the order is recieved</p>
                       <p>order number:</p>
                       <div>
                           <Link to='/account'>
                           <button className='button-bag'>Track order</button>
                           </Link>
                           <Link to='/'>
                           <button className='button-bag' onClick={() => clearAll()} >Continue Shopping</button>
                           </Link>
                       </div>
                    </section>
                    )
                }}
            
            </ProductConsumer>
        )
    }
}
