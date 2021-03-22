import connection from '@config/db';
import { server } from '@config/index';

import logger from '@middlewares/logger';

connection.then(() => {
  logger.info(`Database connected`);
  // we need to import express only after connecting to the base, otherwise typeorm will complain that some repositories do not exist
  require('./app').default.app.listen(server.port, () => {
    logger.info('Server running', { port: server.port, mode: server.env });
  });
});
