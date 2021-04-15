import React, { Component } from 'react';
import { ProductConsumer } from '../../Contex';
import Cartlist from '../Cart/CartList';
import CartTotal from '../Cart/CartTotal';
import '../../css/Cart.scss';
import {Link} from 'react-router-dom'

export default class Checkout extends Component {
    render() {
        return (
            <section className='checkout-grid' >
                <div className="account-check">
                    <div className='account'>
                        <h3>Account</h3>
                        <p>to place order, kindly put your 10 digit mobile number</p>
                        <div className='searching'>
                            <input type='text' placeholder='enter your mobile number' className='input-text' />
                            <button type='submit' className='button-submit'>submit</button>
                        </div>
                    </div>
                    <div className=" account address">
                        <h3> Delivery Address</h3>
                        <p>select your delivery address from existing or new one</p>
                    </div>
                    <div className=" account payment">
                        <h3>Payment</h3>
                        <p>Select your payment</p>
                    </div>
                    <div className="account">
                   <Link to='/succes'>
                   <button className='button-bag'>Place order</button>
                   </Link>
                    </div>

                </div>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        console.log(cart)

                        return <div className='cart-main'>
                            <h4>Bag <span>{cart.length}</span></h4>
                            <div className="hr"></div>
                            <div className='display-cart'>
                                <Cartlist isCheckout={true} value={value} />
                                <CartTotal isCheckout={true} value={value} history={this.props.history} />
                            </div>
                        </div>
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
