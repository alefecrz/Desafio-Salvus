import { Router, Request, Response } from 'express';

const routes = Router();

routes.use(
  '/user',
  (request: Request, response: Response): Response => {
    return response.json({ ok: true });
  },
);

export default routes;
