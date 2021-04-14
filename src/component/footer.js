import React from 'react';
import {  FaTruckMoving, FaAward, FaHistory } from 'react-icons/fa';


function Footer() {
    return (
        <footer>
           <section className="upper-footer">
               <div className='flex-down'>
                   <FaTruckMoving className='footer-icon'/>
                   <h4>Delivery</h4>
               </div>
               <div className='flex-down'>
               <FaAward className='footer-icon'/>
                   <h4>Buyer protection</h4>
               </div>
               <div className='flex-down'>
               <FaHistory className='footer-icon'/>
                   <h4>Customer Suport</h4>
               </div>

               </section> 
               <section className='lower-footer'>
                   <p>store details</p>
                   <div className="flex-down">
            <h4>Target</h4>
            <p>No 46 Egun Road Lagos Nigeria</p>
            </div>
               </section>
        </footer>
    )
}

export default Footer
