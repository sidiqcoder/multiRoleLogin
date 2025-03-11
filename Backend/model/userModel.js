import { Sequelize } from "sequelize";
import database from "../config/db";

const {DataTypes} = Sequelize;

const User = database.define("users", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true
});

export default User;

(async () => {
    await database.sync();
})();