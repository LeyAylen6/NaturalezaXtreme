import { useState } from "react";
import { validationsignup } from "../../Validation/validationsignup"; 

const Signup =()=> {
    const [signuserData, setsignUserData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: ''
    })
 
   const [errors, setErrors] = useState({}) 
      
    const handleChange = (event) => {
        event.preventDefault()
        setsignUserData({ 
            ...signuserData,
            [event.target.name]: event.target.value 
        })
        setErrors(validationsignup({
            ...signuserData,
            [event.target.name]: event.target.value
        }))
    };
 
    return (
        <div>
            <h1>I want to be part</h1>
            <form>
            <label>Name</label>
                <input 
                name="name"
                type="text"
                onChange={handleChange}
                />
                  {errors.name && <p>{errors.name}</p>}
                <label>LastName</label>
                <input 
                name="lastname"
                type="text"
                onChange={handleChange}
                />
                  {errors.lastname && <p>{errors.lastname}</p>}
                <label>Email</label>
                <input 
                name="email"
                type="text"
                onChange={handleChange}
                />
                  {errors.email && <p>{errors.email}</p>}
                <label>Password</label>
                <input 
                name="password"
                type="password"
                onChange={handleChange}
                />
                  {errors.password&& <p>{errors.password}</p>}
                <button type="submit" disabled={errors.email || errors.password || errors.name || errors.lastname || !signuserData.email || !signuserData.password || !signuserData.name ||  !signuserData.lastname }>Sign Up</button>

            </form>
        
        </div>
    )
}
export default Signup; 