import { User } from '../entities/userEntity';
import { UserProfile } from '../interfaces/userProfile';
import { AppDataSource } from '../db';

export async function login(email: string, callback: Function) {
    let connection = AppDataSource;

    console.log(email)
    try{
        const userRepository = connection.getRepository(User);

        const user = await userRepository.findOneBy({email: email});
        console.log(user)


        if (!user) {
        return callback(new WrongUsernameOrPasswordError('Credenciales inválidas'));
        }

        const profile: UserProfile = {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            rol: user.rol,
            active: user.active
    };

    return callback(null, profile);
  } catch (error) {
    return callback(new Error('Error al acceder a la base de datos'));
  } finally {
    if (connection) {
      await connection.destroy();
    }
  }
}

class WrongUsernameOrPasswordError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WrongUsernameOrPasswordError';
    this.message = message;
  }
}
