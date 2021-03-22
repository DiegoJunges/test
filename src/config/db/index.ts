import { createConnections } from 'typeorm';

import { Users } from '../../apps/Users/Users.entity';
import { dbConnections, server } from '../index';

const connection = createConnections([
  {
    name: dbConnections.mongo.name,
    type: 'mongodb',
    url: dbConnections.mongo.conn,
    entities: [Users],
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: server.env === 'dev', //  If the environment is dev, typeorm takes care of generating and modifying the tables
  },
]);

export default connection;
