import { useState } from "react";


const Login =()=> {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

      
    const handleChange = (event) => {
        event.preventDefault()
        setUserData({ 
            [event.target.name]: event.target.value 
        })
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
                />
                <label>Password</label>
                <input 
                name="password"
                type="password"
                onChange={handleChange}
              
                />
                <button>Log In</button>

            </form>
        
        </div>
    )
}
export default Login; 