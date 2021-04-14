import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Data from '../Data';
import {ProductConsumer} from '../Contex'

export default class CategoryPage extends Component {
    render() {
        return (
               <ProductConsumer>
                   {value => {
                       return value.products.map((item)=> {
                        return(
                            <div className='category-page'>
                                <img src={item.img} alt=""/>
                                <h3>{item.category}</h3>
                                <p>{item.description}</p>
                            </div>
                        )
                       })
                   }}
                   </ProductConsumer>
                   
                
        )
            }
}
