import React from 'react';
import '../../css/account.scss';

export default function Account() {
    return (
        <section className='account'>
            <div className='account-info'>
                <div>
                <button className='button-nav btn'>My orders</button>
                </div>
               <div>
               <button className='button-nav'>My address</button>
               </div>
            </div>
            <div className="account-details">
                <div className="order"></div>
                <div className="address"></div>
            </div>
            
        </section>
    )
}
