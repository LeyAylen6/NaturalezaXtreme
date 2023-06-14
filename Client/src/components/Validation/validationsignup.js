
const em= /[\w_.-]+@[\w.-]+[.][a-z]+/

export const validationsignup = (signuserData) => {
    const errors = {};
      // name

    if(!signuserData.name) errors.name = 'the field must not be empty';

    // Last Name
    if(!signuserData.lastname) errors.lastname = 'the field must not be empty';
    
    // Email 
    
    if(!signuserData.email) errors.email = 'the field must not be empty';

    if(!signuserData.email && !em.test(signuserData.email)) errors.email = 'Enter a valid email'

    if(signuserData.email.length > 35) errors.email = 'The email cannot contain a maximum of 35 characters.';
    
    // Password

    if(!signuserData.password) errors.password = 'the field must not be empty';

    if(signuserData.password.length < 6 || signuserData.password.length > 10 ) errors.password = 'The password must have between 6 and 10 characters.';

    if(!signuserData.password.match(/\d/))  errors.password = "The password must have a number"
    
    return errors;
}