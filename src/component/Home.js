import React, { Component } from 'react';
import Footer from './footer';
import { ProductConsumer } from '../Contex';
import Productlist from './Productlist';
import Cart from './Cart/CartEmpty';
import { Link } from 'react-router-dom';
import '../css/Home.scss';
import { AiOutlineSmile } from 'react-icons/ai';
import { FaChevronRight } from 'react-icons/fa';

export default class Home extends Component {

    render() {

        return (
            <main>
                <ProductConsumer>
                    {value => {
                        
                        return (
                            <div className='search'>
                                <input type="text" placeholder='Search product here' className='input-text' onChange={(e)=>
                                     value.searchItem(e.target.value)} />
                                <button type='submit' className='button-submit'>submit</button>
                            </div>
                        )
                    }}
                </ProductConsumer>
                <article className="main">

                    <div className="left-item">
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map((item) => {
                                    return <button key={item.id} className='button-plain' type='button' onClick={() => value.mapCategory(item.category)}>
                                        {item.category} ({item.qty})
                           </button>
                                })

                            }}
                        </ProductConsumer>
                        <Link to='/categories'>
                            <button >View all categories <FaChevronRight /> </button>
                        </Link>
                    </div>

                    <div>
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map((item) => {
                                    return (
                                        <Productlist key={item.id} products={item} />
                                    )

                                })
                            }}
                        </ProductConsumer>
                    </div>

                    <div className="rigth-item">
                        <ProductConsumer>
                            {value => {
                                const { cart } = value;
                                if (cart.length > 0) {
                                    return (
                                        <div>
                                            <h4>Bag <span>{cart.length}</span></h4>
                                            <AiOutlineSmile className='big-icon' />
                                            <h4>happy shopping</h4>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>
                                            <h4>Bag <span>{cart.length}</span></h4>
                                            <Cart />
                                        </div>

                                    )
                                }
                            }}
                        </ProductConsumer>

                    </div>
                </article>
                <Footer />

            </main>
        )
    }
}




