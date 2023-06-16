import { User } from "../../entities/userEntity";

const getUserByIdController = async(idRequested: number)=>{

    const requestedUser = await User.findOneBy({
        id: idRequested
    })
    
    if (!requestedUser) throw new Error('There is no user with that id')
    
    return requestedUser;

}
export default getUserByIdController;