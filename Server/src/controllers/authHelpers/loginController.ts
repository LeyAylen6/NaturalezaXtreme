import { login } from "../../login";

const loginController = async(email: string, password: string)=>{

    login(email, password, (error: any, profile: any) => {
        if (error) {
          console.error(error);
          return;
        }
      
        console.log('Inicio de sesión exitoso');
        console.log(profile);
      });
}
export default loginController;
