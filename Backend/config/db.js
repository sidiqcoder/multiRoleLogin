import { Sequelize } from "sequelize";

const database = new Sequelize('login', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
})

export default database;