import type { Knex } from 'knex';
import 'dotenv/config';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: process.env.DB_CLIENT || 'mysql2',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_DATABASE || 'trabalho_apaw',
      port: parseInt(process.env.DB_PORT || '3306', 10),
    },
    migrations: {
      directory: './src/knex/migrations',
    },
  },
};

export default config;