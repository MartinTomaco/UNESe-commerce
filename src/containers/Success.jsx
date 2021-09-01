import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useAddress from '../hooks/useAddress';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  const address = `${buyer[0].city}, ${buyer[0].state}, ${buyer[0].country}`;
  const position = useAddress(address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Felicitaciones! Gracias por tu compra</h2>
        <span> Tu pedido llegara en 3 días.</span>
        <div className="Success-map">
          { !(Object.entries(position).length === 0) ? 
          <Map position={position}/> : 
          <></> 
          }
        </div>
      </div>
    </div>
  );
};

export default Success;
