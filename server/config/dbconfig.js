require("dotenv").config();
var sql = require("mssql");

let config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  server: process.env.SERVER,

  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
};

const pool = new sql.ConnectionPool(config)
pool.connect().then(() => {
  console.log("Connected to SQL Server")
}).catch((err) => {
  console.log("Error connecting to SQL Server: ", err)
})


const conn = new sql.ConnectionPool(config).connect().then((pool) => {
  return pool;
});

module.exports = {
  conn,
  sql,
};
