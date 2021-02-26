const knex = require("knex")
const connection = require("../knexfile")
const enviroment = process.env.DB_ENV || "development"

module.exports = knex(connection[enviroment])
