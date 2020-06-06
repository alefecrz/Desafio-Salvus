import { Router } from 'express';

import userController from '../controllers/userController';

const userRouter = Router();

userRouter.post('/', userController.store);

export default userRouter;
