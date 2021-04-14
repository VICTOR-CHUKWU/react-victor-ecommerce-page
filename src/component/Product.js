import React, { Component } from 'react';
import {ProductConsumer} from '../Contex';
import {Link} from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


import Footer from './footer';
import '../css/product.scss';

export default class Product extends Component {
    render() {
        return (
            <main>
           <ProductConsumer>
               {(value) => {
                   const {id, name, img, description, price, inCart} = value.details;
                   return (
                    <section key={id} className='product-main'>
                        <img src={img} alt=""/>
                        <div>
                            <h1>{name}</h1>
                            <p>{description}</p>
                            <h4>UGX {price}</h4>
                            <span className='button-prod'>
                                <AiOutlineMinus className='click-icon'/> 1 <AiOutlinePlus className='click-icon'/></span>
                            <div className="button">
                                <Link to='/'>
                                <button className='button-bag' disabled={inCart? true : false}  onClick={() => {value.addToBag(id)
                                }}>
                                    {inCart? 'Added to Bag' : 'Add to Bag'}
                                </button>
                                </Link>
                                <Link to='/cart'>
                                <button  className='button-buy' disabled={inCart? true : false} onClick={() => {value.addToBag(id)}} >Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                   )
               }}
           </ProductConsumer>
           
           <Footer/>
           </main>
           
        )
    }
}
