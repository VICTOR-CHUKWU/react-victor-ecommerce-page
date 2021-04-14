import React, { Component } from 'react';
import {ProductConsumer} from '../Contex';
import {Link} from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal,addToBag} = value;
                    const {img, name, price,id} = value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    }
                    else {
                    return (
                        <div className='main-modal'>
                    <div className="modal-inner">
                       <div className="item">
                      <button className='button-nav' onClick={() => closeModal()}> <AiOutlineClose/></button>
                       <h1>{name}</h1>
                       </div>
                    <img src={img} alt=""/>
                    <h4>UGX {price}</h4>
                    <Link to='/'>
                    <button className='button-bag' onClick={() => {
                        closeModal();
                        addToBag(id)
                    }}>
                                    Add to Bag
                                </button>
                                </Link>
                                <Link to='/cart'>
                                <button  className='button-buy' onClick={() => {closeModal(); addToBag(id)}}>Buy Now</button>
                                </Link>
                    </div>
                </div>
                    )
                    }
                }}
                </ProductConsumer>
            
        )
    }
}
