import { Router } from 'express';

import usersRouter from './users.router';

const routes = Router();

routes.use('/user', usersRouter);

export default routes;
