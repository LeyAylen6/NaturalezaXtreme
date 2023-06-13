import { useState } from "react";


const Signup =()=> {
    const [userData, setUserData] = useState({
        name: '',
        lastname: '',
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
            <h1>I want to be part</h1>
            <form>
            <label>Name</label>
                <input 
                name="email"
                type="text"
                onChange={handleChange}
                />
                <label>LastName</label>
                <input 
                name="email"
                type="text"
                onChange={handleChange}
                />
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
                <button>Sign Up</button>

            </form>
        
        </div>
    )
}
export default Signup; 