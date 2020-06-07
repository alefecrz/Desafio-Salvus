import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { listenerCount } from 'cluster';
import User from '../models/User';

const userRouter = Router();

userRouter.get(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    const userRepository = getRepository(User);

    const [, registerAmount] = await userRepository.findAndCount();

    const amountByField = await userRepository
      .createQueryBuilder('users')
      .select('users.field AS field')
      .addSelect('COUNT(*) AS amount')
      .groupBy('users.field')
      .getRawMany();

    return response.json({ registerAmount, amountByField });
  },
);

export default userRouter;
