import { Router } from 'express';

import * as controller from './UserController';

const route = Router();

route.post('/', controller.create);
route.get('/:id', controller.findOne);
route.put('/:id', controller.update);
route.delete('/:id', controller.deleteOne);

export default route;
