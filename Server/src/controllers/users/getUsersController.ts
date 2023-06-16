import { AppDataSource } from "../../db";
import { User } from "../../entities/userEntity";
import { filtersUserStructure } from "../../interfaces/filtersUserStructure";

const getUsersController = async(rol: string, active: boolean) => {

    let filters: filtersUserStructure = {}

    if (rol) filters.rol = rol;
    if (typeof active === 'boolean') filters.active = active;

    const usersFound = await AppDataSource.getRepository(User).find({ where: filters });
        
    return usersFound;
    
    // Agregar a la tabla un includes con las compras que hizo ese mismo usuario con su cuenta.
    // Paginado
}

export default getUsersController;