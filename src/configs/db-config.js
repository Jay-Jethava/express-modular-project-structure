const config = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: 3306,
    dialect: "mysql",
    logging: false,
  },

  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: 3306,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true, // Validates the SSL certificate
      },
      connectTimeout: 10000,
      // connectionTimeoutMillis: 0.001, // PostgreSQL
      // requestTimeoutMillis: 15000, // PostgreSQL
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000, // soft limit
      evict: 10000,
      // maxIdleTime: 10000, // hard limit
      handleDisconnects: true,
    },
  },
};

module.exports = config;
