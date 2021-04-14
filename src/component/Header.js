import React, { Component } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Contex'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="top-header">
        <h4> store made with sako </h4>
        </div>
        <nav className='nav'>
          <div className='item'>
           <Link to='/'>
           <AiOutlineHome className='header-icon'/>
           </Link>
            <div className="flex-down">
            <h4>Target</h4>
            <p>No 46 Egun Road Lagos Nigeria</p>
            </div>
          </div>
          <div className="nav-logo">
            <ProductConsumer>
              {value => {
                const {cart} = value;
                return(
                  <Link to='/cart'>
           <button type='button' className='button-nav'>
              <AiOutlineShoppingCart  className='nav-icon'/> <span style={{marginRight:'.2rem', background:'blue',padding:'.1rem', color:'white',borderRadius:'10px'}}>{cart.length}</span>
              Bag</button>
           </Link>
                )
                
              }}
            </ProductConsumer>
            <button type='button' className='button-nav'>
              <AiOutlineUser className='nav-icon'/>
              Acoount</button>
          </div>
        </nav>
        
      </header>
    )
  }
}

