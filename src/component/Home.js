import React, { Component } from 'react';
import Footer from './footer';
import {ProductConsumer} from '../Contex';
import Productlist from './Productlist';
import Cart from './Cart/CartEmpty';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import '../css/Home.scss';
import { AiOutlineFrown, AiOutlineSmile } from 'react-icons/ai';
import {  FaChevronRight } from 'react-icons/fa';

export default class Home extends Component {
   
    render() {
    
        
            // //to set category when clicked on any category
            // const FilterItems = (categories) => {
            //     const newItem = Data.filter((item) => item.category === categories);
            //      setData(newItem);
            // }
        
            // const addBagItem = (id) =>{
            //     const itemAdded = data.map((item) => item.id === id);
            //     setBagItem(itemAdded);
            // }
        
        return (
            <main>
                <div className='search'>
<input type="text" placeholder='Search product here' className='input-text' />
<button type='submit' className='button-submit'>submit</button>
</div>
                <article className="main">

                    <div className="left-item">
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map((item) => {
                                    return <button key={item.id}  className='button-plain' type='button' onClick={()=> value.mapCategory(item.category)}>
                             {item.category} ({item.qty})
                           </button> 
                                })
                                
                            }}
                        </ProductConsumer>
                        <Link to='/categories'>
                        <button >View all categories <FaChevronRight/> </button>
                        </Link>
                    </div>
                    
               <div>
               <ProductConsumer>
                   {(value) => {
                       return value.products.map((item) =>{
                        return(
                            <Productlist key={item.id} products = {item}/>
                         )
                           
                       })
                   }}
               </ProductConsumer>
               </div>
        
            <div className="rigth-item">
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0){
                            return(
                                <div>
                                    <h4>Bag <span>{cart.length}</span></h4>
                                    <AiOutlineSmile className='big-icon'/>
                                    <h4>happy shopping</h4>
                                    </div>
                            )
                        } else {
                            return(
                                <div>
                                    <h4>Bag <span>{cart.length}</span></h4>
                                   <Cart/>
                                </div>
                               
                            )
                        }
                    }}
                </ProductConsumer>
           
            </div>
                </article>
               <Footer/>
                
            </main>
        )
    }
}
// Home.propTypes = {
//   products : PropTypes.shape({
//       id: PropTypes.number,
//       img: PropTypes.string,
//       name: PropTypes.string,
//       price: PropTypes.number,
//       qty: PropTypes.number,
//       inCart: PropTypes.bool,


//   }).isRequired
// }



