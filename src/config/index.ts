import { config } from 'dotenv';

/*
 * Here we are telling dotenv
 * where it should get the environment variables
 * NODE_ENV will be the stage of our application [dev, qa, prod, local, etc...].
 */
const envfile = `.env.${process.env.NODE_ENV}`;
const envdir = process.cwd();

config({ path: `${envdir}/${envfile}` });

export const server = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
};

// data connection to the DB
export const dbConnections = {
  mongo: {
    name: 'mongo',
    conn: String(process.env.DATABASE_MONGO_CONN),
  },
};
