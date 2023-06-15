import { User } from "../../entities/userEntity";

const getUserController = (idRequested: number)=>{

    const requestedUser = User.findBy({id: idRequested})
    if (!requestedUser) throw new Error('There is no user with that id')
    return requestedUser;

}
export default getUserController;