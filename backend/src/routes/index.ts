import { Router } from 'express';

import usersRouter from './users.router';
import sessionsRouter from './sessions.router';

const routes = Router();

routes.use('/user', usersRouter);
routes.use('/session', sessionsRouter);

export default routes;
