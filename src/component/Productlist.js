import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/Home.scss';
import { AiOutlineFrown, AiOutlinePlus } from 'react-icons/ai';
import { ProductConsumer } from "../Contex";

export default class Productlist extends Component {
    render() {
        const {id,price,name,img,inCart,count} = this.props.products;
        return (
            <ProductConsumer>
                {(value) => (
                    <div className="center-item"    onClick={() => value.handleDetails(id)}>
                    <Link to='/product'>
                    <img src={img} alt={name} />
                    </Link>
                     <div className="flex-down">
                     <h5>{name}</h5>
                     <p> UGX {price}</p>
                     </div>
                     <div className='button-add'  disabled={inCart?true:false} onClick={() => {value.openModal(id)
                     }
                    }>
                         {inCart? <button style={{border:"none", color:'green', fontSize:'15px'}} disabled>In cart</button> : <div style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                             <AiOutlinePlus className='add-icon'/>
                         Add
                         </div> }
                        
                         </div>
                 </div>
                )}
            </ProductConsumer>
        )
    }
}
