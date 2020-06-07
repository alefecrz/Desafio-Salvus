import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/updateUserAvatarService';

class UserController {
  store = async (request: Request, response: Response): Promise<Response> => {
    const {
      name,
      email,
      password,
      cpf,
      dateofbirth,
      address,
      cep,
      city,
      state,
      cellphone,
      homephone,
    } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
      cpf,
      dateofbirth,
      address,
      cep,
      city,
      state,
      cellphone,
      homephone,
    });

    delete user.password;

    return response.json(user);
  };

  avatar = async (request: Request, response: Response): Promise<Response> => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  };
}

export default new UserController();
