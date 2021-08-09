import React from 'react';
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
                   <button type="button"> Eliminar </button>
               </div>
               <div className="Checkout-item">
                   <div className="Checkout-element">
                       <h4>Item name 2</h4>
                       <span>$12</span>
                   </div>
                   <button type="button"> Eliminar </button>
               </div>
           </div>
           <div className="Checkout-sidebar">
               <h3>Precio Total: $24</h3>
               <button type="button">Continuar pedido</button>
           </div>
       </div>
    );
}

export default Checkout;