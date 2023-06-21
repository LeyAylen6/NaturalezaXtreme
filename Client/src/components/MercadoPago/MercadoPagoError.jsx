import {useNavigate} from "react-router-dom";

const MercadoPagoError =  () => {
   
    const navigate = useNavigate();

    const handlesubmit = (event) =>{
       event.preventDefault(); 
       navigate("/")
    }
    const handleRetry = (event) =>{
        event.preventDefault(); 
        navigate("/mercadoPago")
     }
    return(
        <div>
            <h1>Oops! The payment could not be processed successfully.</h1>
            <button onClick={handlesubmit}>Go to the homepage</button>
            <button onClick={handleRetry}>Retry the payment</button>
           
        </div>
    )
}
export default MercadoPagoError; 