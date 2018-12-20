
  module.exports = {
  "development": {    
    "database": process.env.DB_NAME,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIAL
    },
    "production": {
    "database": process.env.DB_NAME,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIAL
  }
  };
