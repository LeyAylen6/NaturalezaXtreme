import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPayment, setPaymentLink } from '../../redux/actions/actions.js';


const MercadoPago = ({ productPrice, productQuantity }) => {
  const paymentLink = useSelector((state) => state.paymentLink);
  const dispatch = useDispatch();

  const handlePayment = () => {
    dispatch(createPayment(productPrice, productQuantity))
  };

  return (
    <div>
      {paymentLink ? (
        <a href={paymentLink} target="_blank" rel="noopener noreferrer">
          Pagar
        </a>
      ) : (
        <button onClick={handlePayment}>Realizar pago</button>
      )}
    </div>
  );
};

export default MercadoPago;

