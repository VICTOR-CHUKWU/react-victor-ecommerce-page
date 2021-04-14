import React, { Component } from 'react';
import { AiOutlineFrown, AiOutlinePlus } from 'react-icons/ai';

export default class CartEmpty extends Component {
    render() {
        return (
            <div>
                <AiOutlineFrown className='big-icon'/>
       <h5>Its empty here</h5>
       <p> start shopping</p> 
            </div>
        )
    }
}
