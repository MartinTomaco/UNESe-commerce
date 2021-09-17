import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (index) => () => {
    removeFromCart(index);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      <Helmet>
        <title> UNES - Lista de pedidos </title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? (
            <h3>Lista de dedidos:</h3>
          ) : (
            <h3>Sin Pedidos...</h3>
          )}
          {cart.map((item, index) => {
            return (
              <div className="Checkout-item">
                <div className="Checkout-element">
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
                </div>
                <button onClick={handleRemove(index)} type="button">
                  <i className="fas fa-backspace" />
                </button>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>Precio Total: {handleSumTotal()}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
