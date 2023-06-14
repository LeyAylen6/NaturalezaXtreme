import { useState } from "react";
import { validation } from "../../Validation/validation";

const Login =()=> {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
      
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
    
 
    return (
        <div>
            <h1>I'm already part</h1>
            <form >
                <label>Email</label>
                <input 
                name="email"
                type="text"
                onChange={handleChange}
                value={userData.email}
                />
              {errors.email && <p>{errors.email}</p>}
           
                <label>Password</label>
                <input 
                name="password"
                type="password"
                onChange={handleChange}
                value={userData.password}
                />
                 {errors.password && <p>{errors.password}</p>}
                <button type="submit" disabled={errors.email || errors.password || !userData.email || !userData.password}>Log In</button>

            </form>
        
        </div>
    )
}
export default Login; 