import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPayment } from '../../redux/actions/actions';

const MercadoPago = ({ productPrice, productQuantity }) => {
  const paymentLink = useSelector((state) => state.payment.paymentLink);
  const dispatch = useDispatch();

  const handlePayment = () => {
    // Llama a la acción para crear el pago
    dispatch(createPayment(productPrice, productQuantity));
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
