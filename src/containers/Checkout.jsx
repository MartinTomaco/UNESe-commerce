import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/components/Checkout.css';

const Checkout = () => {
    return (
       <div className="Checkout">
           <div className="Checkout-content">
               <h3>Lista de pedidos:</h3>
               <div className="Checkout-item">
                   <div className="Checkout-element">
                       <h4>Item name</h4>
                       <span>$10</span>
                   </div>
                   <button type="button"> 
                   <i className="fas fa-backspace"/> 
                   </button>
               </div>
               <div className="Checkout-item">
                   <div className="Checkout-element">
                       <h4>Item name 2</h4>
                       <span>$12</span>
                   </div>
                   <button type="button"> 
                   <i className="fas fa-backspace"/> 
                   </button>
               </div>
           </div>
           <div className="Checkout-sidebar">
               <h3>Precio Total: $24</h3>
               <Link to="/checkout/information">
               <button type="button">Continuar pedido</button>
               </Link>
           </div>
       </div>
    );
}

export default Checkout;