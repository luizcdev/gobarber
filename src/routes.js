import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();
const routePrefix = '/users';

routes.post(`${routePrefix}`, UserController.store);

export default routes;
