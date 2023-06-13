// validacion del Login


const em= /[\w_.-]+@[\w.-]+[.][a-z]+/


export const validation = (userData) => {
    const errors = {};
      //email

    if(!userData.email) errors.email = 'the field must not be empty';

    if(!userData.email && !em.test(userData.email)) errors.email = 'Enter a valid email'

    if(userData.email.length > 35) errors.email = 'The email cannot contain a maximum of 35 characters.';
    // password

    if(!userData.password) errors.password = 'the field must not be empty';

    if(userData.password.length < 6 || userData.password.length > 10 ) errors.password = 'The password must have between 6 and 10 characters.';

    if(!userData.password.match(/\d/))  errors.password = "The password must have a number"
    
    return errors;
}