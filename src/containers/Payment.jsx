import React, { useContext } from 'react'
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import '../styles/components/Payment.css';

const Payment = ({history}) => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;

    const paypalOptions = {
        clientId: 'AcrXG0Kq9CiZ0iMieM0OvU3_3GT9WvcUgzbPFFcAr8UODd5GAelB-nb3wB7o3r0pPMBeYGc7iZBdLAQd',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePaymentSuccess = (data) => {
        console.log(data);
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            history.push('/checkout/success')
        }
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };

    return (
       <div className="Payment">
           <div className="Payment-content">
               <h3> Resumen del pedido:</h3>
               {cart.map((item) => {return (
                   <div className="Payment-item" key={item.title}>
                     <h4> {item.title}</h4>
                     <span>
                         $
                         {' '}
                         {item.price}
                     </span>
                   </div>
               )})}
               <div className="Payment-button">
                   <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onSuccess={data => handlePaymentSuccess(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)}
                   />
               </div>
           </div>
       </div>
    );
}

export default Payment;