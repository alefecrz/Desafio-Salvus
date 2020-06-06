import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';

class UserController {
  store = async (request: Request, response: Response): Promise<Response> => {
    const { email, name, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    delete user.password;

    return response.json(user);
  };
}

export default new UserController();