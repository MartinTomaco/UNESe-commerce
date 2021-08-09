import React from 'react'
import '../styles/components/Payment.css';

const Payment = () => {
    return (
       <div className="Payment">
           <div className="Payment-content">
               <h2>Resumen del pedido:</h2>
               <div className="Payment-button">
                   Boton de pago con Paypal
               </div>
           </div>
       </div>
    );
}

export default Payment;