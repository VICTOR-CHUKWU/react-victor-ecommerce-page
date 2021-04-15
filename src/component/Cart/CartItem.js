import React from 'react';
import { AiOutlineMinus, AiOutlinePlus, } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa'

export default function Cartitem({ item, value, isCheckout = false }) {
    const { id, name, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <section>
            <div className='cart-item'>
                <img className='image-cart' src={img} alt="" />
                <div className="item-flex">
                    <h3>{name}</h3>
                    <p> UGX {price}</p>
                </div>
                <div className='button-prod'>
                    {!isCheckout && <button onClick={() => decrement(id)}><AiOutlineMinus className='click-icon' /></button>}
                    <span>{count}</span>
                    {!isCheckout && <button onClick={() => increment(id)}><AiOutlinePlus className='click-icon' /></button>}
                </div>
                {!isCheckout && <span style={{ background: 'none', cursor: 'pointer' }} onClick={() => { removeItem(id) }}><FaTrash style={{ color: 'red', fontSize: '20px' }} /></span>}
                <div>
                    <p>Item Total: UGX {total}</p>
                </div>
            </div>
            <div className="hr"></div>
        </section>
    )
}

