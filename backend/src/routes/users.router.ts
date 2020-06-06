import { Router } from 'express';

import UserController from '../controllers/userController';

const userRouter = Router();

userRouter.post('/', UserController.store);

export default userRouter;
