import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import UserController from '../controllers/userController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userRouter = Router();
const upload = multer(uploadConfig);

userRouter.post('/', UserController.store);

userRouter.use(ensureAuthenticated);

userRouter.patch('/avatar', upload.single('avatar'), UserController.avatar);

userRouter.put('/', UserController.update);

export default userRouter;
