// import { Container } from "@chakra-ui/react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { validation } from "../../Validation/validation";
// import { getUsers } from "../../../redux/actions/actionsUsers";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (

      <Link onClick={ loginWithRedirect}>Log In</Link>
 
  );

//Este era el login antes de reemplazarlo con Auth0//
  /*const clientID = "1003099240176-2sgu85en1tl9g6i4eeputhpr2reeb24j.apps.googleusercontent.com"

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()
    const navigate = useNavigate();
  
    const onSucces = (response) => {
      console.log(response)
      navigate("/")
    }
    const onFailure = () => {
        console.log("Something went wrong")
      }
      
    const handleChange = (event) => {
        event.preventDefault()
        setUserData({ 
            ...userData,
            [event.target.name]: event.target.value 
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        getUsers(userData, dispatch)
        if(userData.email){
            navigate('/')
        } else{
            alert('No hay usuarios con ese mail')
        }
    }
    
 
    return (
        <Container marginTop={10}>
            <Card padding={4} background={`rgba(255, 255, 255, 0.3)`}>
            <Heading fontSize="25px" marginBottom="25px" marginTop="20px">I'M ALREADY PART</Heading>
            <form onSubmit={handleSubmit}>
            <FormControl>
            <FormLabel>Email</FormLabel>
                <Input 
                name="email"
                type="text"
                onChange={handleChange}
                value={userData.email}
                placeholder="ej: Email@gmail.com"
                />
              {errors.email && <Text>{errors.email}</Text>}
           
            <FormLabel>Password</FormLabel>
                <Input 
                name="password"
                type="password"
                onChange={handleChange}
                value={userData.password}
                placeholder="Enter your password"
                />
                 {errors.password && <Text>{errors.password}</Text>}
                <Button backgroundColor= "black" color="white"  marginTop= "15px" type="submit" disabled={errors.email || errors.password || !userData.email || !userData.password}>Log In</Button>
                </FormControl>
            </form>
            <GoogleLogin
              clientId={clientID}
             buttonText="Login"
             onSuccess={onSucces}
             onFailure={onFailure}
             cookiePolicy={'single_host_origin'}
  />
            </Card>
            </Container>
    ) 
  */
};
export default Login;
