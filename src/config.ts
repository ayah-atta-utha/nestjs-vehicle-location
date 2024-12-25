import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  database: {
    type: 'mysql',
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '3306', 10),
    username: process.env.DB_USER ?? 'vehicle',
    password: process.env.DB_PASSWORD ?? 'vehicle123',
    name: process.env.DB_NAME ?? 'vehicle-location',

  },
  redis: {
    host: process.env.REDIS_HOST ?? 'localhost',
    port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
  },
};
