import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPayment, setPaymentLink } from '../../redux/actions/actions.js';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

const MercadoPago = ({ productPrice, productQuantity }) => {
  const paymentLink = useSelector((state) => state.paymentLink);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentError, setPaymentError] = useState(false);

  const handlePayment = async () => {
    try {
      const result = await dispatch(createPayment(productPrice, productQuantity));
      if (result === 'success') {
        navigate('/'); 
      } else {
        navigate("/error");
      }
    } catch (error) {
      setPaymentError(true);
    }
  };
  

  return (
    <div>
      {paymentLink ? (
        <a href={paymentLink} target="_blank" rel="noopener noreferrer">
          Pagar
        </a>
      ) : (
        <div>
          <button onClick={handlePayment}>Realizar pago</button>
        </div>
      )}
      {paymentError && <Link to={"/error"}>Error</Link>}
    </div>
  );
};

export default MercadoPago;

