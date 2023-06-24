import { login } from "../../utils/login";

const loginController = async(email: string)=>{

    login(email, (error: any, profile: any) => {
        if (error) {
          console.error(error);
          return;
        }
      
        console.log('Inicio de sesión exitoso');
        console.log(profile);
      });
}
export default loginController;
